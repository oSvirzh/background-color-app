import { memo } from "react";
import { Text } from "react-native";
import { styles } from "@/src/components/atoms/themed-text/themed-text.styles";
import { ThemedTextProps } from "@/src/components/atoms/themed-text/themed-text.types";

export const ThemedText = memo(
  ({ style, type = "default", ...rest }: ThemedTextProps) => {
    return (
      <Text
        style={[
          type === "default" ? styles.default : undefined,
          type === "title" ? styles.title : undefined,
          type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
          type === "subtitle" ? styles.subtitle : undefined,
          type === "link" ? styles.link : undefined,
          style,
        ]}
        {...rest}
      />
    );
  },
);
