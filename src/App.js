import React from "react";
import "./style.css";
import Person from './components/Person';
import Counter from './components/Counter'

export default function App() {
  return (
    <div>
      <Person />
      <hr />
      <Counter />
    </div>
  );
}
