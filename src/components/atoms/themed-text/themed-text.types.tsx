import type {TextProps} from "react-native";

export type ThemedTextProps = TextProps & {
    type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};
