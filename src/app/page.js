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
{/*Пример исправленного кода с разделением ref:
import React, { useState, useRef } from "react";

const TodoApp = () => {
  const [vers, setVers] = useState([
    { id: 1, value: "Сделать домашку", completed: false, isEditing: false },
    { id: 2, value: "Почистить комнату", completed: false, isEditing: false },
  ]);

  const inputRef = useRef(null); // Для добавления новых задач
  const inputRefs = useRef({}); // Для редактирования задач

  const toggleEdit = (itemId) => {
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, isEditing: !item.isEditing };
      }
      return item;
    });
    setVers(newVers);
  };

  const handleSave = (itemId) => {
    const newValue = inputRefs.current[itemId].value; // Сохраняем значение из поля ввода через ref
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setVers(newVers);
    toggleEdit(itemId); // Отключаем редактирование
  };

  const addItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      value: inputRef.current.value.trim(),
      completed: false,
      isEditing: false,
    };
    setVers([...vers, newItem]);
    inputRef.current.value = ""; // Очищаем поле после добавления
  };

  return (
    <div>
      <form className="flex flex-wrap gap-4 w-full mb-6" onSubmit={(e) => {e.preventDefault(); addItem();}}>
        <input
          ref={inputRef} // ref для добавления новой задачи
          className="input input-primary grow"
          type="text"
          required
          placeholder="Что нужно сделать?"
        />
        <button className="btn btn-primary grow" type="submit">
          Добавить
        </button>
      </form>

      <ul>
        {vers.map((item) => (
          <li key={item.id}>
            {item.isEditing ? (
              <input
                ref={(el) => (inputRefs.current[item.id] = el)} // ref для редактирования конкретной задачи
                type="text"
                defaultValue={item.value}
              />
            ) : (
              <span>{item.value}</span>
            )}

            <button onClick={() => toggleEdit(item.id)}>
              {item.isEditing ? "Сохранить" : "Редактировать"}
            </button>

            {item.isEditing && (
              <button onClick={() => handleSave(item.id)}>Сохранить</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
*/}

