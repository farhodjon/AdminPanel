import React, { useState } from "react";
import Admin_panel from "./componentes/Admin_panel";
import Home from "./componentes/Home";
import { AiTwotoneEdit } from 'react-icons/ai';

function App() {
  const [Ochish, setOchish] = useState(true);

  function yopil() {
    setOchish(!Ochish);
  }

  return (
    <div className="App">
      <AiTwotoneEdit onClick={yopil} />
      <Home />
      <div
        className="fo"
        style={Ochish == false ? { display: "block" } : { display: "none" }}
      >
        <form className="formalar">
          <span onClick={yopil}>&times;</span>
          <Admin_panel
            className="form-control w-75 m-auto mt-5"
            type="text"
            placeholder="Full Name"
          />
          <Admin_panel
            className="form-control w-75 m-auto mt-3"
            type="text"
            placeholder="Description"
          />
          <Admin_panel
            className="form-control w-75 m-auto mt-3"
            type="email"
            placeholder="Email"
          />
          <Admin_panel
            className="form-control w-75 m-auto mt-3"
            type="search"
            placeholder="Telegram"
          />
          <Admin_panel
            className="form-control w-75 m-auto mt-3"
            type="number"
            placeholder="Phone"
          />
          <Admin_panel type="reset" value="Cancel" />
          <Admin_panel type="submit" value="Save" onClick={yopil} />
        </form>
      </div>
    </div>
  );
}

export default App;
