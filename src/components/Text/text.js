import React from "react";
import { StyledText, VARIANTS, WEIGHTS } from "./styled";

export const Text = props => <StyledText {...props} />;

Text.VARIANTS = VARIANTS;
Text.WEIGHTS = WEIGHTS;
