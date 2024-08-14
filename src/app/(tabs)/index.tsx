import React from "react";
import { ColoredTouchableView } from "@/src/components/atoms";
import { InfoBlock } from "@/src/components/organism";
import { useReversedColor } from "@/src/hooks";
import { generateRandomColor } from "@/src/helpers";

export default function HomeScreen() {
  const { mainColor, reversedColor, setMainColor } = useReversedColor();

  const onPress = () => {
    setMainColor(generateRandomColor());
  };

  return (
    <ColoredTouchableView
      style={{ backgroundColor: mainColor }}
      onPress={onPress}
    >
      <InfoBlock mainColor={mainColor} reversedColor={reversedColor} />
    </ColoredTouchableView>
  );
}
