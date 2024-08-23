import React from 'react';
import { StatusBar } from 'react-native';
import { DEFAULT_EDGES } from '../../constants';
import { propTypes } from './props';
import {
    SafeAreaViewStyled,
    BackgroundImage,
} from './styled';

export const Container = ({
    statusBarColor,
    backgroundImageStyle,
    barStyle = 'dark-content',
    backgroundImage,
    backgroundColor,
    children,
    edges,
    translucent = false,
    paddingHorizontal = 0,
    paddingVertical = 0,
    paddingTop = 0,
    paddingBottom,
    justifyContent,
    alignItems,

}) => (
    <SafeAreaViewStyled
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        backgroundColor={backgroundColor}
        edges={edges || DEFAULT_EDGES}
        justifyContent={justifyContent}
        alignItems={alignItems}
    >
        <StatusBar
            backgroundColor={statusBarColor || 'white'}
            barStyle={barStyle}
            translucent={translucent}
        />
        {backgroundImage && (
            <BackgroundImage
                source={backgroundImage}
                style={backgroundImageStyle}
            />
        )}
        {children}
    </SafeAreaViewStyled>
);

Container.propTypes = propTypes;
