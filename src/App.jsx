import { useEffect, useContext } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/style/index.scss";
import { Loading } from "./loading";
import { userContext } from "./providers/userContext";
import { RouterMain } from "./routers/routerMain";
import { noSleepApi } from "./utils/noSleepApi";

function App() {

  useEffect(() => {
    const apiURL = "https://desafio-fullstack-salvus-api.onrender.com/docs";
    noSleepApi(apiURL);
  }, []);

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
