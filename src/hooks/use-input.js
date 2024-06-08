import { useEffect, useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const changeValue = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue]);

  return [value, changeValue];
}

export default useInput;