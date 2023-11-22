import { useCallback, useState } from "react";

export const usePopup = () => {
  const [active, setActive] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const popup = useCallback(() => {
    // Clear existing timeout if any
    if (timerId) {
      clearTimeout(timerId);
    }

    setActive(true);

    // Set a new timeout
    const id = setTimeout(() => {
      setActive(false);
    }, 2000);

    // Store the new timer ID
    setTimerId(id);
  }, [timerId]);

  return { isPopup: active, popup };
};
