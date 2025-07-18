import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home/index.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="">
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
