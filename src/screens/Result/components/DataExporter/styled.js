import styled from 'styled-components/native';
import { color } from '../../../../theme/color';
import { scale } from '../../../../utils/media';
import { radius } from '../../../../theme/spacing';

export const IconWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    height: ${scale(45)}px;
    width: ${scale(45)}px;
    align-items: center;
    justify-content: center;
    background-color: ${color.neutrals_transparent};
    border-radius: ${radius.full}px;
`;
