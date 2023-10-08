import { WhenProps } from "./types";

export const When = (props: WhenProps) => {
  return props.is ? <>{props.children}</> : <></>;
};
