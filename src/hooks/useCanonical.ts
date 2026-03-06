import { useEffect } from "react";

const BASE_URL = "https://thatworksco.com";

const useCanonical = (path: string) => {
  useEffect(() => {
    const tag = document.querySelector("link[rel='canonical']");
    if (tag) tag.setAttribute("href", `${BASE_URL}${path}`);
    return () => {
      if (tag) tag.setAttribute("href", BASE_URL);
    };
  }, [path]);
};

export default useCanonical;
