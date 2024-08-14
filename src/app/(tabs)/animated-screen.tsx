import React, { useState } from "react";
import {
  AnimatedColorChanger,
  ColoredTouchableView,
} from "@/src/components/atoms";
import { InfoBlock } from "@/src/components/organism";
import { useReversedColor } from "@/src/hooks";
import { generateRandomColor } from "@/src/helpers";
import { INITIAL_COLOR } from "@/src/constants/colors";

export default function AnimatedScreen() {
  const { mainColor, reversedColor, setMainColor } = useReversedColor();
  const [color, setColor] = useState(INITIAL_COLOR);

  const onPress = () => {
    setColor(generateRandomColor());
  };

  return (
    <ColoredTouchableView
      style={{ backgroundColor: mainColor }}
      onPress={onPress}
    >
      <AnimatedColorChanger color={color} onColorChanged={setMainColor} />
      <InfoBlock mainColor={mainColor} reversedColor={reversedColor} />
    </ColoredTouchableView>
  );
}
