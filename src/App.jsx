import React from "react";
import MainLayout from "./pages/MainLayout";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <MainLayout />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;
    </>
  );
};

export default App;
