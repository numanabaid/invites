import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { scale } from '../../utils/media';

export const SafeAreaViewStyled = styled(SafeAreaView)`
    flex-grow: 1;
    background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
    padding-vertical: ${({ paddingVertical }) => scale(paddingVertical) || 0}px;
    padding-horizontal: ${({ paddingHorizontal }) => scale(paddingHorizontal) || 0}px;
    padding-top: ${({ paddingTop }) => scale(paddingTop) || 0}px;
    padding-bottom: ${({ paddingBottom }) => scale(paddingBottom) || 0}px;
    justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};

`;

export const BackgroundImage = styled.Image`
    position: absolute;
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
