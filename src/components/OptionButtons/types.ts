import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OptionButtonsProps {
  activeColor: string;
  shuffledList: string[];
}

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "style"
  > {
  hex: string;
}
