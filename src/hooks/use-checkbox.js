import { useState } from "react";

function useCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return [isChecked, setIsChecked];
}