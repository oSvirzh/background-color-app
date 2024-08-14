export const getReversedColor = (hex: string): string => {
  const rgb = hexToRgbArray(hex);

  return rgbArrayToHex(rgb);
};

const hexToRgbArray = (hex: string): number[] => {
  const parsedHex = hex.replace(/^#/, "");

  return [0, 2, 4].map((i) => 255 - parseInt(parsedHex.slice(i, i + 2), 16));
};

const rgbArrayToHex = (rgb: number[]): string => {
  return `#${rgb.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
};
