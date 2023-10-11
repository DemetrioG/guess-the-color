import { ButtonProps, OptionButtonsProps } from "./types";
import { HStack, Text } from "@/styles/general";
import { Button as BaseButton } from "../Button";
import { useOptionButtons } from "./hooks";

export const OptionButtons = (props: OptionButtonsProps) => {
  const { handlePressItem } = useOptionButtons(props);

  return (
    <HStack
      style={{ justifyContent: "space-evenly", flexWrap: "wrap", gap: "1rem" }}
    >
      {props.shuffledList.map((color, i) => (
        <Button
          key={i}
          hex={color}
          onClick={() => handlePressItem(color)}
          role="option-button"
        />
      ))}
    </HStack>
  );
};

export const Button = (props: ButtonProps) => {
  const { hex, ...restProps } = props;
  return (
    <BaseButton
      data-testid="button"
      styles={{
        width: "120px",
      }}
      {...restProps}
    >
      <Text
        style={{
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      >
        {props.hex}
      </Text>
    </BaseButton>
  );
};
