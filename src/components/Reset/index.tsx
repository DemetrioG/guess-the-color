import { Text } from "@/styles/general";
import { Button } from "../Button";

export const Reset = () => {
  return (
    <Button styles={{ position: "absolute", right: 20, bottom: 20 }}>
      <Text>Reset all data</Text>
    </Button>
  );
};
