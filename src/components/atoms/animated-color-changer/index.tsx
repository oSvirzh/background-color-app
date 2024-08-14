import React, { memo, useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "@/src/components/atoms/animated-color-changer/animated-color-changer.styles";
import { initialOffset } from "@/src/components/atoms/animated-color-changer/animated-color-changer.const";
import { AnimatedColorChangerProps } from "@/src/components/atoms/animated-color-changer/animated-color-changer.types";

export const AnimatedColorChanger = memo(
  ({ color, onColorChanged }: AnimatedColorChangerProps) => {
    const offset = useSharedValue(initialOffset);
    const [boxColor, setBoxColor] = useState("#ffffff");

    const animatedStyles = useAnimatedStyle(() => ({
      top: offset.value,
    }));

    useEffect(() => {
      offset.value = initialOffset;
      onColorChanged(boxColor);
      setBoxColor(color);
      offset.value = withSpring(0, {}, (isFinished) => {
        if (isFinished) {
          onColorChanged(color);
        }
      });
    }, [color]);

    return (
      <Animated.View
        style={[styles.box, { backgroundColor: boxColor }, animatedStyles]}
      />
    );
  },
);
