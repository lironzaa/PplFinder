import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ onChange, label, value }) => {
  const handleChange = event => {
    onChange && onChange(value, event.target.checked);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
