'use client';
import { useState} from "react"

export function List({ vers, setVers }) {

  const [editing, setEditing] = useState ({
    id: null,
    value: "",
  });

  function startEdit(item) {
    setEditing({
      id: item.id,
      value: item.value,
    })
  }

  function changeEdit(value) {
    setEditing((prevEditing) => ({...prevEditing, value}));
  }

  function saveEdit() {
    setVers((prevVers) => 
      prevVers.map((item) =>
        item.id === editing.id
          ? {...item, value: editing.value }
          : item
      )
    );

    setEditing({ id: null, value: ""});
  }

  function toggleCompleted(id) {
    setVers((prevVers) =>
      prevVers.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  
  return (
    <ul className="list bg-base-200 rounded-box">
      {vers.map((item) => (
        <li
          className="border-b border-base-content/10 last:border-b-0 p-4 flex justify-between  items-center"
          key={item.id}
        >
          {editing.id === item.id ? (
            <input
              autoFocus
              type="text"
              className="input input-primary grow mr-2"
              value={editing.value}
              onChange={(e) => changeEdit(e.target.value)}
            />
          ) : (
            <span className="grow">{item.value}</span>
          )}
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
          />

          {editing.id === item.id ? (
            <button type="button"  className="btn btn-sm btn-primary ml-2" onClick={saveEdit}>Сохранить</button>
          ) : (
            <button type="button" className="btn btn-sm btn-primary ml-2" onClick={() => startEdit(item)}>✏</button>
          )}

        </li>
      ))}
    </ul>
  );
}
