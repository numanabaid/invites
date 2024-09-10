import styled from 'styled-components/native';
import { radius, spacing } from '../../theme/spacing';
import { scale } from '../../utils/media';
import { color } from '../../theme/color';

export const Record = styled.View`
    padding: ${spacing.medium}px;
    background-color: #f7f7f7;
    border-radius: ${radius.double}px;
`;

export const RecordItemText = styled.Text`
    color: black;
`;

export const ListWrapper = styled.View`
    flex: 1;
    padding-bottom: ${spacing.medium}px;
    gap: ${spacing.medium}px;
`;

export const ExportButtonWrapper = styled.View`
    padding-bottom: ${spacing.small}px;
`;

export const Header = styled.View`
    flex-direction: row;
    padding-vertical: ${spacing.medium}px;
    gap: ${spacing.small}px;
`;

export const TitleWrapper = styled.View`
    flex: 1;
    justify-content: center;
`;

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
