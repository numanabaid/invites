import Modal from 'react-native-modal';
import { radius, spacing } from '../../theme/spacing';
import { scale } from '../../utils/media';
import styled, { css } from 'styled-components/native';

export const StyledBottomSheet = styled(Modal)`
    justify-content: flex-end;
    margin: 0;
`;

export const BottomSheetContent = styled.View`
    background-color: white;
    padding-bottom: ${({ insets }) => insets.bottom}px;
    border-top-right-radius: ${radius.double * 2}px;
    border-top-left-radius: ${radius.double * 2}px;
    ${({ bottomSheetHeight }) => bottomSheetHeight && css`
        height: ${bottomSheetHeight}px;
    `};
`;

export const BottomSheetHandle = styled.View`
    height: ${scale(4)}px;
    border-radius: ${radius.double}px;
    background-color: lightgray;
    width: ${scale(40)}px;
    align-self: center;
    margin-top: ${spacing.small}px;
    margin-bottom: ${spacing.default}px;
`;

export const CloseButtonWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    margin-vertical: ${spacing.default}px;
    margin-left: ${spacing.default}px;
    width: ${scale(24)}px;
    height: ${scale(24)}px;
    align-items: center;
    justify-content: center;
`;