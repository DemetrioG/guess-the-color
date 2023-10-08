import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "style"
  > {
  children: React.ReactNode;
  styles?: CSSProperties;
}
