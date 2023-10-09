import { Text, VStack } from "@/styles/general";
import { ActiveColorProps } from "./types";
import { ProgressBar } from "../ProgressBar";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";
import { When } from "../When";
import { Button } from "../Button";
import { useStart } from "./hooks";

export const ActiveColor = (props: ActiveColorProps) => {
  const { data } = useContext(DataContext);
  const { handleStart } = useStart();

  return (
    <VStack>
      <div
        data-testid="active-color"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: props.color,
          width: "100%",
          height: "400px",
          borderRadius: 10,
          transition: "background-color 0.5s ease",
        }}
      >
        <ProgressBar data-testid="progress-bar" />
        <When is={!data.started}>
          <VStack
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Button styles={{ padding: "1rem 4rem" }} onClick={handleStart}>
              <Text style={{ fontWeight: "bold" }}>START</Text>
            </Button>
          </VStack>
        </When>
      </div>
    </VStack>
  );
};
