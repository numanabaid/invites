import React, { useEffect, useState } from "react";
import { Container } from "../..";
import { ScrollView, Text } from "react-native";
import { spacing } from "../../theme/spacing";
import { getData } from "../../utils/storage";
import { Record } from "./styled";

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
                            <Text>{`Name: ${item.name}`}</Text>
                            <Text>{`Number: ${item.number}`}</Text>
                            <Text>{`Classification: ${item.classification}`}</Text>
                            <Text>{`Speciality: ${item.speciality}`}</Text>
                            <Text>{`Area: ${item.area}`}</Text>
                            <Text>{`Hospital: ${item.hospital}`}</Text>
                        </Record>
                    ))
                }
            </ScrollView>
        </Container>
    );
};
