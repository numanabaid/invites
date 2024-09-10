import React, {useCallback, useEffect, useState} from 'react';
import {Button} from 'react-native';
import {Container} from '../..';
import {spacing} from '../../theme/spacing';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {
  BodyText,
  BottomSheetContent,
  ButtonsWrapper,
  CameraWrapper,
  TextWrapper,
  WelcomeText,
  LogoHolder,
  Btn,
  BtnText,
  CaptionText,
  ResetButton,
} from './styled';
import {setData} from '../../utils/storage';
import debounce from 'lodash/debounce';
import {BottomSheet} from '../../components/BottomSheet';

import {Text} from '../..';
import {scale} from '../../utils/media';
import {checkExpiryDate} from '../../utils/utils';

export const Scanner = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [hasPermissioni, setHasPermission] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const storeData = codes => {
    // console.log('codes', codes);
    // return;
    const code = codes.data;
    const [name, classification, speciality, hospital, city, nsName, anmName] =
      code.split('|');
    const obj = {
      name,
      classification,
      speciality,
      hospital,
      city,
      nsName,
      anmName,
    };
    setIsVisible(true);
    setCurrent(obj);
    setData(obj);
  };

  const debouncedStoreData = debounce(storeData, 500);

  const onCodeScanned = useCallback(codes => {
    setIsActive(false);
    debouncedStoreData(codes);
  }, []);

  const onReset = () => {
    setIsActive(true);
  };

  const onSeeDetails = () => {
    navigation.navigate('Result');
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });

  const onPressOkay = () => {
    setIsActive(true);
    setIsVisible(false);
    setCurrent({});
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, []);

  if (!hasPermission) {
    return <Text>No permission</Text>;
  }

  const isExpired = checkExpiryDate();

  return (
    <Container
      paddingHorizontal={spacing.default}
      paddingTop={20}
      paddingBottom={20}>
      {/* <View>

            <CaptionText>For healthcare professionals only</CaptionText>
            </View>
            <LogoHolder source={IMAGES.LOGO}></LogoHolder> */}
      <CameraWrapper>
        {!isExpired && (
          //   <Camera
          //     style={{
          //       height: scale(250),
          //       width: scale(250),
          //     }}
          //     exposure={0}
          //     device={device}
          //     isActive={isActive}
          //     codeScanner={codeScanner}
          //     enableDepthData={true}
          //     enableHighQualityPhotos={true}
          //     // pixelFormat='native'
          //   />
          <BarCodeScanner
            onBarCodeScanned={onCodeScanned}
            style={{
              height: scale(250),
              width: scale(250),
            }}
          />
        )}
      </CameraWrapper>
      <ButtonsWrapper>
        {!isExpired && (
          <Btn onPress={onSeeDetails}>
            <BtnText>View List</BtnText>
          </Btn>
        )}
      </ButtonsWrapper>
      <ResetButton onPress={() => setIsActive(true)}>
        <Text>Reset</Text>
      </ResetButton>
      {/* <View>

            <CaptionText>breastmilk is best</CaptionText>
            </View> */}
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
