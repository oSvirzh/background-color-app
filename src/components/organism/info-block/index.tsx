import React from "react";
import { HelloWave } from "@/src/components/molecules";
import { ThemedText } from "@/src/components/atoms";
import { InfoBlockProps } from "./info-block.types";

export function InfoBlock({ mainColor, reversedColor }: InfoBlockProps) {
  return (
    <>
      <ThemedText type="title" style={{ color: reversedColor }}>
        Hello there! <HelloWave />
      </ThemedText>
      <ThemedText type="subtitle" style={{ color: reversedColor }}>
        Background: {mainColor}
      </ThemedText>
      <ThemedText type="subtitle" style={{ color: reversedColor }}>
        Text: {reversedColor}
      </ThemedText>
    </>
  );
}
