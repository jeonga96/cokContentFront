import { Routes, Route } from "react-router-dom";

/*  */
import Home from "./screens/Home";
import EventList from "./screens/EventList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventlist" element={<EventList />} />
      </Routes>
    </div>
  );
}

export default App;
