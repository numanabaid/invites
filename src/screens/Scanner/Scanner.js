import React, { useCallback, useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { Container } from "../..";
import { spacing } from "../../theme/spacing";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";
import { useNavigation } from "@react-navigation/native";
import { BodyText, BottomSheetContent, ButtonsWrapper, CameraWrapper, TextWrapper, WelcomeText } from "./styled";
import { setData } from "../../utils/storage";
import debounce from 'lodash/debounce';
import { BottomSheet } from "../../components/BottomSheet";

export const Scanner = () => {

	const { hasPermission, requestPermission } = useCameraPermission();
	const device = useCameraDevice('back');

	const [ isActive, setIsActive ] = useState(true);
	const [ isVisible, setIsVisible ] = useState(false);
    const [ current, setCurrent ] = useState({});

    const navigation = useNavigation();

    const storeData = codes => {
        const code = codes[0].value;
        const [name, number, classification, speciality, area, hospital] = code.split('|');
        const obj = {
            name, 
            number, 
            classification, 
            speciality, 
            area, 
            hospital
        };
        setIsVisible(true);
        setCurrent(obj);
        setData(obj);
    }

    const debouncedStoreData = debounce(storeData, 500);

	const onCodeScanned = useCallback((codes) => {
		setIsActive(false);
		debouncedStoreData(codes);
	}, []);

	const onReset = () => {
		setIsActive(true);
	};

    const onSeeDetails = () => {
        navigation.navigate('Result');
    }

	const codeScanner = useCodeScanner({
		codeTypes: ['qr'],
		onCodeScanned: onCodeScanned
	});

    const onPressOkay = () => {
        setIsActive(true);
        setIsVisible(false);
        setCurrent({});
    }

	useEffect(() => {
		if(!hasPermission) {
			requestPermission();
		}
	}, []);

	if (!hasPermission) {
		return <Text>No permission</Text>;
	}

    return (
        <Container paddingHorizontal={spacing.default}>
            <CameraWrapper>
                <Camera
                    style={{
                        height: 300,
                        width: 300,
                    }}
                    device={device}
                    isActive={isActive}
                    codeScanner={codeScanner}
                />
            </CameraWrapper>
            <ButtonsWrapper>
                <Button onPress={onReset} title="Reset" />
                <Button onPress={onSeeDetails} title="See Details" />
            </ButtonsWrapper>
            <BottomSheet displayHandle isVisible={isVisible} onClose={onPressOkay}>
                <BottomSheetContent>
                    <TextWrapper>
                        <WelcomeText>{`Hi, ${current.name}!`}</WelcomeText>
                        <BodyText>Thanks for coming.</BodyText>
                    </TextWrapper>
                    <Button title="Okay" onPress={onPressOkay} />
                </BottomSheetContent>
            </BottomSheet>
        </Container>  
    );
};
