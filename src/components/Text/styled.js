import styled from 'styled-components/native';
import { color as appColors } from '../../theme/color';
import { scale } from '../../utils/media';

export const VARIANTS = {
    XS: scale(10),
    SM: scale(12),
    MD: scale(14),
    DEF: scale(16),
    LG: scale(18),
    XL: scale(24),
};

export const WEIGHTS = {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
};

export const StyledText = styled.Text`
    color: ${({ color }) => color || appColors.black};
    font-size: ${({ variant }) => variant || VARIANTS.DEF}px;
    ${({ alignSelf }) => alignSelf && `align-self: ${scale(alignSelf)}px;`}
    ${({ marginTop }) => marginTop && `margin-top: ${scale(marginTop)}px;`}
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${scale(marginBottom)}px;`}
    ${({ marginLeft }) => marginLeft && `margin-left: ${scale(marginLeft)}px;`}
    ${({ marginRight }) => marginRight && `margin-right: ${scale(marginRight)}px;`}
    ${({ marginVertical }) => marginVertical && `margin-vertical: ${scale(marginVertical)}px;`}
    ${({ marginHorizontal }) => marginHorizontal && `margin-horizontal: ${scale(marginHorizontal)}px;`}
    ${({ paddingTop }) => paddingTop && `padding-top: ${scale(paddingTop)}px;`}
    ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${scale(paddingBottom)}px;`}
    ${({ paddingLeft }) => paddingLeft && `padding-left: ${scale(paddingLeft)}px;`}
    ${({ paddingRight }) => paddingRight && `padding-right: ${scale(paddingRight)}px;`}
    ${({ paddingVertical }) => paddingVertical && `padding-vertical: ${scale(paddingVertical)}px;`}
    ${({ paddingHorizontal }) => paddingHorizontal && `padding-horizontal: ${scale(paddingHorizontal)}px;`}
    ${({ lineHeight }) => lineHeight && `line-height: ${scale(lineHeight)}px;`}
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ weight }) => weight && `font-weight: ${WEIGHTS[weight]};`}

`;