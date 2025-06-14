import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyToastContainer() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
}
