"use client";

import { useState } from "react";
import { Title } from "../ui/title/title";
import { Form } from "../ui/form/form";
import { List } from "../ui/list/list";

export default function Home() {
  const [vers, setVers] = useState([]);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Title />
      <Form vers={vers} setVers={setVers} />
      <List vers={vers} setVers={setVers} />
    </div>
  );
}
