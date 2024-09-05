import React, { useEffect, useState } from "react";
import { Container } from "../..";
import { ScrollView } from "react-native";
import { spacing } from "../../theme/spacing";
import { getData } from "../../utils/storage";
import { Record, RecordItemText } from "./styled";

export const Result = () => {

    const [ list, setList ] = useState([]);

    const fetchDetails = async () => {
        const details = await getData();
        setList(details);
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <Container paddingHorizontal={spacing.default}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    list?.map((item, index) => (
                        <Record key={index}>
                            <RecordItemText>{`Name: ${item.name}`}</RecordItemText>
                            <RecordItemText>{`Number: ${item.number}`}</RecordItemText>
                            <RecordItemText>{`Classification: ${item.classification}`}</RecordItemText>
                            <RecordItemText>{`Speciality: ${item.speciality}`}</RecordItemText>
                            <RecordItemText>{`Area: ${item.area}`}</RecordItemText>
                            <RecordItemText>{`Hospital: ${item.hospital}`}</RecordItemText>
                        </Record>
                    ))
                }
            </ScrollView>
        </Container>
    );
};
