import { useState } from "react";

export const usePopup = () => {
  const [active, setActive] = useState(false);

  const popup = () => {
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return { isPopup: active, popup };
};
