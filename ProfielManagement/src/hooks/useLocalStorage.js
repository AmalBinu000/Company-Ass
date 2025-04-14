import { useEffect } from "react";
import { useSelector } from "react-redux";

const useLocalStorage = (key) => {
  const data = useSelector((state) => state.users);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);
};

export default useLocalStorage;