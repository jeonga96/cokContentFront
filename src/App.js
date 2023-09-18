import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Loading from "./screens/Loading";
import Home from "./screens/Home";

const B2b1 = lazy(() => import("./screens/B2b1.js"));
const B2b2 = lazy(() => import("./screens/B2b2.js"));
const B2b3 = lazy(() => import("./screens/B2b3.js"));

const B2c1 = lazy(() => import("./screens/B2c1.js"));
const B2c2 = lazy(() => import("./screens/B2c2.js"));
const B2c3 = lazy(() => import("./screens/B2c3.js"));

const EventPrice = lazy(() => import("./screens/EventPrice.js"));
const EventAdd = lazy(() => import("./screens/EventAdd.js"));
const Grandopen = lazy(() => import("./screens/Grandopen.js"));
const GongsacokHome = lazy(() => import("./screens/GongsacokHome.js"));
const Privacy = lazy(() => import("./screens/Privacy.js"));
const Terms = lazy(() => import("./screens/Terms.js"));
const Test = lazy(() => import("./screens/Test.js"));

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        theme="light"
      />
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<GongsacokHome />} />
            <Route path="/menu" element={<Home />} />

            <Route path="/eventprice" element={<EventPrice />} />
            <Route path="/eventprice/:evid" element={<EventAdd />} />
            <Route path="/eventprice/eventadd" element={<EventAdd />} />

            <Route path="/b2b1" element={<B2b1 />} />
            <Route path="/b2b2" element={<B2b2 />} />
            <Route path="/b2b3" element={<B2b3 />} />
            <Route path="/b2c1" element={<B2c1 />} />
            <Route path="/b2c2" element={<B2c2 />} />
            <Route path="/b2c3" element={<B2c3 />} />

            <Route path="/grandopen" element={<Grandopen />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="/test" element={<Test />} />

            <Route path="*" component={<Grandopen />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
