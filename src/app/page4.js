'use client';

import { useState, useRef } from "react";

export default function Home() {

  const [vers, setVers] = useState([]);
  const inputRef = useRef(null);

  function addItem() {

      const newItem = {
        id: crypto.randomUUID(),
        value: inputRef.current.value.trim(),
      };

      setVers([...vers, newItem]);
      inputRef.current.focus();
  }
  return (
    <div className="max-w-xl mx-auto">
      <div className="space-y-6">
      <div className="mt-10">
        <h1>Список дел</h1>
      </div>
      <form action={addItem}>
        <div className="flex flex-wrap gap-4 w-full justify-center mb-6">
          <input ref={inputRef} className="input input-primary grow" type="text" required placeholder="Что нужно сделать?" />
          <button className="btn btn-primary grow" type='submit'>Добавить</button>
        </div>
      </form>
      <ul className="list bg-base-200 rounded-box flex flex-col">
        {vers.map((item) => <li className="border-b border-base-content/10 last:border-b-0 px-2 py-4 w-full" key={item.id}>{item.value}</li>)}
      </ul>
    </div>
    </div>

  );
}