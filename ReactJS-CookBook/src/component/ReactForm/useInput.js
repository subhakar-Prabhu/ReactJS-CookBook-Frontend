import { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        console.log('event:', event);
        setValue(event);
      }
    }
  };
};

export default useInput;