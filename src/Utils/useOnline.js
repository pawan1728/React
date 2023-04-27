import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      console.log("status is online");
      SetIsOnline(true);
    };
    const handleOffline = () => {
      console.log("status is offline");
      SetIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
