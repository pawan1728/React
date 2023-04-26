import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);
  
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("status is online");
      SetIsOnline(true);
    });
    window.addEventListener("offline", () => {
      console.log("status is offline");
      SetIsOnline(false);
    });
  }, []);
  return isOnline;
};
export default useOnline;
