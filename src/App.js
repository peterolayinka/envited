import React, { useState } from "react";
import Home from "./component/Home";
import Create from "./component/Create";
import Events from "./component/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormContext from './context'

function App() {

  const [form, setForm] = useState(null);
  return (
    <FormContext.Provider value={{
      form,
      setForm
    }}>
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
    </FormContext.Provider>
  );
}

export default App;
