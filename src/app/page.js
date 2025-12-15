"use client";

import { useState, useEffect } from "react";
import { Title } from "../ui/title/title";
import { Form } from "../ui/form/form";
import { List } from "../ui/list/list";
import { Delete } from "../ui/delete/delete";


export default function Home() {
  const [vers, setVers] = useState([]);

  useEffect(() => {
    const storedVers = localStorage.getItem("vers");
    if (storedVers) {
      setVers(JSON.parse(storedVers));
    }
  },[]);

  useEffect(() => {
      localStorage.setItem("vers", JSON.stringify(vers));
  }, [vers]);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Title />
      <Form vers={vers} setVers={setVers} />
      <List vers={vers} setVers={setVers} />
      <Delete vers={vers} setVers={setVers} />
    </div>
  );
}
