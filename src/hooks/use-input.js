import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
  }

  return [value, changeValue];
}

export default useInput;