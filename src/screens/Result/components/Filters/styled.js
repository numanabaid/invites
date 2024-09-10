import styled, { css } from 'styled-components/native';
import { color } from '../../../../theme/color';
import { scale } from '../../../../utils/media';
import { radius, spacing } from '../../../../theme/spacing';
import { Text } from '../../../..';

export const FilterTypeWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    padding: ${spacing.small}px ${spacing.default}px;
    border: ${({isSelected}) => isSelected ? color.blue_100 : color.neutrals_transparent};
    border-width: 2px;
    border-radius: ${radius.full}px;
`;

export const FilterTypesHeader = styled.View`
    flex-direction: row;
    gap: ${spacing.medium}px;
    padding-vertical: ${spacing.medium}px;
`;

export const SheetContent = styled.View`
    padding: ${spacing.medium}px;
    padding-bottom: ${spacing.medium}px;
`;

export const FilterHeaderText = styled(Text)`
    ${({isSelected}) => isSelected && css`
        color: ${color.blue_500};
        font-weight: ${Text.WEIGHTS[600]};
    `}
`;

export const OptionsWrapper = styled.View`
    gap: ${spacing.small}px;
`;

export const FilterOptionWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    padding-vertical: ${spacing.medium}px;
    background-color: ${({isSelected}) => isSelected ? color.blue_100 : color.neutrals_transparent};
    border-radius: ${radius.default}px;
    align-items: center;
`;

export const ButtonsFooter = styled.View`
    flex-direction: row;
    gap: ${spacing.small}px
`;
