import { Text, VStack } from "@/styles/general";
import { ActiveColorProps } from "./types";
import { ProgressBar } from "../ProgressBar";
import { useContext } from "react";
import { DataContext, Difficulty } from "@/context/data/dataContext";
import { When } from "../When";
import { Button } from "../Button";
import { useStart } from "./hooks";
import { useDisclosure } from "@/utils/general.helper";

export const ActiveColor = (props: ActiveColorProps) => {
  const { data } = useContext(DataContext);
  const { handleStart } = useStart();
  const difficulty = useDisclosure();

  return (
    <VStack>
      <div
        data-testid="active-color"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: props.color,
          width: "100%",
          height: "300px",
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
            <When is={!data.started}>
              <When is={!data.difficulty && !difficulty.isOpen}>
                <Button
                  styles={{ padding: "1rem 4rem" }}
                  onClick={difficulty.open}
                >
                  <Text style={{ fontWeight: "bold" }}>START</Text>
                </Button>
              </When>
              <When is={difficulty.isOpen}>
                <VStack style={{ gap: "1rem" }}>
                  {buttons.map((item, i) => (
                    <Button
                      key={i}
                      styles={{ padding: "1rem 4rem" }}
                      onClick={() => handleStart(item.value)}
                    >
                      <Text style={{ fontWeight: "bold" }}>{item.label}</Text>
                    </Button>
                  ))}
                </VStack>
              </When>
            </When>
          </VStack>
        </When>
      </div>
    </VStack>
  );
};

const buttons = [
  {
    label: "Easy",
    value: Difficulty.Easy,
  },
  {
    label: "Medium",
    value: Difficulty.Medium,
  },
  {
    label: "Hard",
    value: Difficulty.Hard,
  },
];
