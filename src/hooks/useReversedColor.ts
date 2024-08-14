import { useEffect, useState } from "react";
import { getReversedColor } from "@/src/helpers";
import { INITIAL_COLOR, INITIAL_REVERTED_COLOR } from "@/src/constants/colors";

export const useReversedColor = () => {
  const [mainColor, setMainColor] = useState(INITIAL_COLOR);
  const [reversedColor, setReversedColor] = useState(INITIAL_REVERTED_COLOR);

  useEffect(() => {
    setReversedColor(getReversedColor(mainColor));
  }, [mainColor]);

  return { mainColor, reversedColor, setMainColor, setReversedColor };
};
