'use client';

import { useState, useRef } from "react";
import { Title } from "../ui/title/title";
import { Form } from "../ui/form/form";
import { List } from "../ui/list/list";

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
        <Title />
        <Form ref={ inputRef } addItem={ addItem }/>
        <List vers={ vers }/>
      </div>
    </div>
  );
} 
  
