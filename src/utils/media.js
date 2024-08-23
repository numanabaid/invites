/* eslint-disable import/no-mutable-exports */
/* eslint-disable default-param-last */
/**
 * Problem: React Native accepts either percentages or
 * density-independent pixels (DP) for its styles.
 * Percentages work well on the web,
 * but they don't support all the style properties in React Native.
 * Only padding, margin, width, height, minWidth, minHeight,
 * maxWidth, maxHeight, flexBasis can have percentage values
 * according to this commit.
 * https://github.com/facebook/react-native/commit/3f49e743bea730907066677c7cbfbb1260677d11
 * Density independent pixels (DP) are different than traditional pixels.
 * The bigger the device, the more DP it has. However,
 * density-independent pixels (DP) vary from device to device,
 * so it cannot be directly used for creating a responsive layout.
 *
 * In order to make the app look good on phones, tablets,
 * and a variety of other devices, we need to scale all of our styles.
 */
import {
    Dimensions,
    PixelRatio,
    Platform,
    NativeModules
} from 'react-native';

const MEDIA_VALUE = {
    STANDARD_WIDTH: 393,
    STANDARD_HEIGHT: 852,
    SCREEN_PIXEL: 3,
    LARGE_SCREEN_WIDTH: 786,
};

const { StatusBarManager } = NativeModules;

export const {
    width: screenWidth,
    height: screenHeight,
} = Dimensions.get('window');

const iphone11Wscale = screenWidth / MEDIA_VALUE.STANDARD_WIDTH;
const iphone11Hscale = screenHeight / MEDIA_VALUE.STANDARD_HEIGHT;

/**
 * Use iphone11Scale() function to scale your fonts,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 * @param {string} based
 * the value with respect to width or height
 * based = 'width' | 'height' default 'width',
 * https://github.com/NewBieBR/react-native-normalize/blob/master/src/index.ts
 * @param {function} accessibilityScaleFactor
 * Func  to get Font size by PixelRatio.
 * if accessibility is > 100% (1) than multiple font size with PixelRatio.
 * if accessibility is > 150% (1.5) than divide font size with PixelRatio + 1.8.

 */
export const iphone11Scale = (
    size = 0,
    based = 'width',
    accessibilityScaleFactor,
) => {
    let newSize =
    based === 'height'
        ? size * iphone11Hscale
        : size * iphone11Wscale
  ;
    if (screenWidth < MEDIA_VALUE.LARGE_SCREEN_WIDTH) {
        if (accessibilityScaleFactor) {
            newSize = accessibilityScaleFactor(newSize);
        }
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return size * MEDIA_VALUE.SCREEN_PIXEL;
};

export const scale = iphone11Scale;

export const isRunningOniOS = () => Platform.OS === 'ios';

export let STATUSBAR_HEIGHT = isRunningOniOS()
    ? StatusBarManager
        .getHeight(statusBarHeight => {
            STATUSBAR_HEIGHT = statusBarHeight?.height || 40;
        })
    : 0;

export const generateBoxShadowStyle = (
    xOffset = 1,
    yOffset = 4,
    shadowColorIos = '#171717',
    shadowOpacity = 0.15,
    shadowRadius = 3,
    elevation = 4,
    shadowColorAndroid = '#171717',
) => {
    if (isRunningOniOS()) {
        return {
            shadowColor: shadowColorIos,
            shadowOffset: {
                width: xOffset,
                height: yOffset
            },
            shadowOpacity,
            shadowRadius,
        };
    }
    return {
        elevation,
        shadowColor: shadowColorAndroid,
    };
};

export const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};
