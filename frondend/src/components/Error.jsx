import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearError } from "../redux/slices/errorSlice";

export const Error = () => {
  const dispath = useDispatch();
  const errorMessage = useSelector((state) => state.error);

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispath(clearError());
    }
  }, [errorMessage, dispath]);

  return <ToastContainer />;
};
