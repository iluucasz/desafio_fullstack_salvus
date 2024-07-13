import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routers/routerMain";
import "react-toastify/dist/ReactToastify.css";
import "../src/style/index.scss";
import { useContext } from "react";
import { userContext } from "./providers/userContext";
import { Loading } from "./loading";

function App() {
  const { loading } = useContext(userContext);
  return (
    <>
      {
        loading ? <Loading /> :
          <RouterMain />
      }

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={true}
        toastClassName={({ type }) =>
          type === "success" ? "toast-success" : "toast-error"
        }
      />
    </>
  )
}

export default App
