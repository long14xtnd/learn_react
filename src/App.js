import React from "react";
import Welcome from "./components/Welcome";
import Clothes from "./components/Clothes";
export default function App(props) {
  return (
    <div>
      <Welcome />
      <Clothes name="Quần jean" type="Skinny" color="Đen" size="L">
        Clothes 1
      </Clothes>
      <Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">
        Clothes 2
      </Clothes>
    </div>
  );
}
