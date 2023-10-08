import { Text, VStack } from "@/styles/general";
import { ActiveColorProps } from "./types";
import { ProgressBar } from "../ProgressBar";
import { useContext } from "react";
import { DataContext } from "@/context/data/dataContext";
import { When } from "../When";
import { Button } from "../Button";

export const ActiveColor = (props: ActiveColorProps) => {
  const { data, setData } = useContext(DataContext);

  function handleStart() {
    setData({
      ...data,
      started: true,
    });
  }

  return (
    <VStack>
      <div
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
        <ProgressBar />
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
