import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import * as C from "constant";

const Button = ({
                  label,
                  color = C.COLORS.default,
                  disabled,
                  size = C.SIZE.medium,
                  variant = C.VARIANT.contained,
                  onClick
                }) => {

  const onButtonClicked = () => onClick();

  return (
    <MuiButton
      onClick={onButtonClicked}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
