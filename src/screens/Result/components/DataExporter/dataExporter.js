import React from "react";
import { Buffer } from "buffer";
import Share from 'react-native-share';
import { scale } from "../../../../utils/media";
import { IconExport } from "../../../../../assets";
import { IconWrapper } from "./styled";

export const DataExporter = ({ data }) => {

    const convertToCSV = () => {
        const csvData = [
            ["HSPC Name", "Classification", "Speciality-1", "Hospital", "City", "NS Name", "ANM Name"],
        ];
        data.forEach(record => {
            csvData.push(
                [record.name, record.classification, record.speciality, 
                    record.hospital, record.city, record.nsName, record.anmName,]
            );
        })
        return csvData.map(row => row.join(",")).join("\n");
    };
    
    const onPressExport = async () => {
        try {
            const csvContent = convertToCSV();
            const base64CSV = Buffer.from(csvContent).toString('base64');
            const shareOptions = {
                url: `data:text/csv;base64,${base64CSV}`,
                type: 'text/csv',
                filename: 'data',
            };
            await Share.open(shareOptions);
        } catch (error) {}
    };

    return (
        <IconWrapper onPress={onPressExport} disabled={!data.length}>
            <IconExport width={scale(20)} height={scale(20)} />
        </IconWrapper>
    )
};