import { VStack } from "@/styles/general";
import { ActiveColorProps } from "./types";
import { ProgressBar } from "../ProgressBar";

export const ActiveColor = (props: ActiveColorProps) => {
  return (
    <VStack>
      <div
        style={{
          overflow: "hidden",
          backgroundColor: props.color,
          width: "100%",
          height: "400px",
          borderRadius: 10,
          transition: "background-color 0.5s ease",
        }}
      >
        <ProgressBar percentual={80} />
      </div>
    </VStack>
  );
};
