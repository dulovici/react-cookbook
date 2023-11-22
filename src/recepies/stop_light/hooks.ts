import { useEffect, useState } from "react";

export type TLight = "stop" | "slow" | "go";

export const useStopLight = () => {
  const [light, setLight] = useState<TLight>("stop");

  useEffect(() => {
    if (light === "stop") {
      setTimeout(() => {
        setLight("go");
      }, 2000);
    }

    if (light === "go") {
      setTimeout(() => {
        setLight("slow");
      }, 2000);
    }

    if (light === "slow") {
      setTimeout(() => {
        setLight("stop");
      }, 2000);
    }
  }, [light]);

  return { light };
};
