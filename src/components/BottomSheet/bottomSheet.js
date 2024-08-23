import React, { createRef, useState } from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetContent, BottomSheetHandle, CloseButtonWrapper, StyledBottomSheet } from './styled';

export const BottomSheet = ({ children, isVisible, onClose, isFullHeight, displayHandle }) => {

    const [scrollOffset, setScrollOffset] = useState(null);
    const scrollViewRef = createRef();

    const insets = useSafeAreaInsets();

    const { height } = Dimensions.get('window');

    const handleOnScroll = event => {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    };

    const handleScrollTo = p => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    };

    let bottomSheetHeight = null;

    if (isFullHeight) {
        bottomSheetHeight = height - insets.top;
    }

    return (
        <StyledBottomSheet
            isVisible={isVisible}
            onSwipeComplete={onClose}
            swipeDirection={['down']}
            scrollTo={handleScrollTo}
            scrollOffset={scrollOffset}
            scrollOffsetMax={400}
            propagateSwipe
        >
            <BottomSheetContent
                insets={insets}
                bottomSheetHeight={bottomSheetHeight}
            >
                {
                    displayHandle ? (
                        <BottomSheetHandle />
                    ) : (
                        <CloseButtonWrapper onPress={onClose}>
                            <Text>X</Text>
                        </CloseButtonWrapper>
                    )
                }
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={handleOnScroll}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </BottomSheetContent>
        </StyledBottomSheet>
    );
};
