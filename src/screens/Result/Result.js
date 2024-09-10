import React, { useEffect, useState } from "react";
import { Container, Text } from "../..";
import { ScrollView } from "react-native";
import { spacing } from "../../theme/spacing";
import { getData } from "../../utils/storage";
import { Header, ListWrapper, Record, RecordItemText, TitleWrapper } from "./styled";
import { DataExporter } from "./components/DataExporter";

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
            <Header>
                <TitleWrapper>
                    <Text variant={Text.VARIANTS.LG} weight={Text.WEIGHTS[600]} >Attendees</Text>
                </TitleWrapper>
                <DataExporter data={list} />
            </Header>
            <ListWrapper>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: spacing.medium
                }}>
                    {
                        list?.map((item, index) => (
                            <Record key={index}>
                                <RecordItemText>{`Name: ${item.name}`}</RecordItemText>
                                <RecordItemText>{`Classification: ${item.classification}`}</RecordItemText>
                                <RecordItemText>{`Speciality: ${item.speciality}`}</RecordItemText>
                                <RecordItemText>{`Hospital: ${item.hospital}`}</RecordItemText>
                                <RecordItemText>{`City: ${item.city}`}</RecordItemText>
                                <RecordItemText>{`NS Name: ${item.nsName}`}</RecordItemText>
                                <RecordItemText>{`ANM Name: ${item.anmName}`}</RecordItemText>
                            </Record>
                        ))
                    }
                </ScrollView>
            </ListWrapper>
        </Container>
    );
};
