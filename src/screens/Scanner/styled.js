import styled from 'styled-components/native';
import { spacing } from '../../theme/spacing';
import { scale } from '../../utils/media';

export const CameraWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonsWrapper = styled.View`
    gap: ${spacing.medium}px;
    padding-vertical: ${spacing.medium}px;
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
