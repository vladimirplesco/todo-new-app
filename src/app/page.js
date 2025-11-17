'use client';

import { useState } from "react";

export default function Home() {

  const [vers, setVers] = useState([]);

  const [inputValue, setInputValue] = useState("");

  function addItem() {
      const newItem = {
        id: crypto.randomUUID(),
        value: inputValue.trim(),
      };

      if (newItem.value.length > 0) {
        setVers([...vers, newItem]);
        setInputValue("");
      }
  }

  function handleTextChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-wrap gap-4 w-full justify-center mb-6">
        <input  className="input input-primary grow" type="text" placeholder="Что нужно сделать?" value={inputValue} onChange={function(event) { setInputValue(event.target.value) }}/>
        <button className="btn btn-primary grow" onClick={addItem}>Добавить</button>
      </div>
      <ul className="list bg-base-200 rounded-box flex flex-col">
        {vers.map((item) => <li className="border-b border-base-content/10 last:border-b-0 px-2 py-4 w-full" key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  );
}