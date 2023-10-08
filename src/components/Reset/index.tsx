import { Text } from "@/styles/general";
import { Button } from "../Button";
import { useReset } from "./hooks";

export const Reset = () => {
  const { handleReset } = useReset();

  return (
    <Button
      styles={{ position: "absolute", right: 20, bottom: 20 }}
      onClick={handleReset}
    >
      <Text>Reset all data</Text>
    </Button>
  );
};
