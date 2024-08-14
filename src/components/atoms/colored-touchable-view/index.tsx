import React, { memo } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "@/src/components/atoms/colored-touchable-view/colored-touchable-view.styles";

export const ColoredTouchableView = memo(
  ({ style, onPress, children }: TouchableOpacityProps) => {
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={1}
      >
        {children}
      </TouchableOpacity>
    );
  },
);
