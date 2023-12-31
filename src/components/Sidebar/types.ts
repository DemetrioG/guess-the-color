import { CSSProperties } from "react";

export interface ItemProps {
  guessed: string;
  color: string;
  time: number;
}

export interface ColorProps {
  data: ItemProps["color"] | ItemProps["guessed"];
  styles?: CSSProperties;
}
