import React, { useState } from "react";
import { IconFilter } from "../../../../../assets";
import { scale } from "../../../../utils/media";
import { BottomSheet, Text } from "../../../..";
import { IconWrapper } from "../../styled";
import { FilterHeaderText, FilterOptionWrapper, FilterTypeWrapper, FilterTypesHeader, OptionsWrapper, SheetContent } from "./styled";
import { FILTER_TYPES, FILTER_VALUES } from "./helper";

export const Filters = ({ isVisible }) => {

    const [ filterType, setFilterType ] = useState('City');
    const [ filterValues, setFilterValues ] = useState({});

    const onPressFilterType = type => {
        setFilterType(type);
    };

    const onPressFilterOption = option => {
        const updatedFilters = {
            ...filterValues,
            [filterType]: option,
        };
        setFilterValues(updatedFilters);
    };

    return (
        <>
            <IconWrapper>
                <IconFilter width={scale(20)} height={scale(20)} />
            </IconWrapper>
            <BottomSheet 
                isVisible={isVisible}
                displayHandle
            >
                <SheetContent>
                    <Text variant={Text.VARIANTS.XL} weight={Text.WEIGHTS[700]}>Filters</Text>
                    <FilterTypesHeader>
                        {
                            FILTER_TYPES.map(fType => {
                                const isSelected = fType.type == filterType;
                                return (
                                    <FilterTypeWrapper
                                        key={fType.id}
                                        isSelected={isSelected}
                                        onPress={() => onPressFilterType(fType.type)}
                                    >
                                        <FilterHeaderText isSelected={isSelected}>
                                            {fType.type}
                                        </FilterHeaderText>
                                    </FilterTypeWrapper>
                                )}
                            )
                        }
                    </FilterTypesHeader>
                    <OptionsWrapper>
                    {
                        FILTER_VALUES[filterType].map(value => {
                            const isSelected = filterValues[filterType] == value.name;
                            return (
                                <FilterOptionWrapper
                                    key={value.id}
                                    onPress={() => onPressFilterOption(value.name)}
                                    isSelected={isSelected}
                                >
                                    <FilterHeaderText isSelected={isSelected}>
                                        {value.name}
                                    </FilterHeaderText>
                                </FilterOptionWrapper>
                            )}
                        )
                    }
                    </OptionsWrapper>
                    
                </SheetContent>
            </BottomSheet>
        </>
    );
};
