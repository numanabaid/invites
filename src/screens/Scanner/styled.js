import styled from 'styled-components/native';
import { spacing } from '../../theme/spacing';
import { scale } from '../../utils/media';
import { color } from '../../theme/color';

export const CameraWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonsWrapper = styled.View`
    gap: ${spacing.medium}px;
    padding-vertical: ${spacing.default}px;
    margin-bottom: 16px;
`;

export const BottomSheetContent = styled.View`
    padding: ${spacing.small}px;
    gap: ${spacing.large}px;
`;

export const TextWrapper = styled.View`
    gap: ${spacing.small}px;
`;

export const WelcomeText = styled.Text`
    font-size: ${scale(16)};
    font-weight: 600;
    color: black;
`;

export const BodyText = styled.Text`
    font-size: ${scale(14)};
    font-weight: 400;
    color: black;
`;

export const LogoHolder = styled.Image`
    width:100%;
    height:200px;
    resize-mode:contain;
    margin-top: 50px;
    margin-horizontal: auto;
`;

export const Btn = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width:100%;
    height:68px;
    background-color: ${color.blue_300};
    border-radius: 50px;
    justify-content: center;
    align-items: center;

`;

export const BtnText = styled.Text`
    font-size: ${scale(18)}px;
    font-weight: 500;
    color: black;
`;

export const CaptionText = styled.Text`
    font-size: ${scale(10)}px;
    font-weight: 500;
    color: white;
    text-align: center;
`;

export const ResetButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    position: absolute;
    padding: ${spacing.small}px;
    right: 10px;
    top: 10px;
`;

