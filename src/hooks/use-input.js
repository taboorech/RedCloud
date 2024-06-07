import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const changeValue = (event) => {
    setValue(event.target.value);
  }

  return [value, changeValue];
}

export default useInput;