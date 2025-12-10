export function List({ vers, setVers }) {

  function toggleCompleted(itemId) {
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setVers(newVers);
  }

  function toggleEdit(itemId) {
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, isEditing: !item.isEditing };
      }
    return { ...item, isEditing: false };
    });
    setVers(newVers);
  }

  function handleChange(itemId, newValue) {
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setVers(newVers);
  }

  return (
    <ul className="list bg-base-200 rounded-box">
      {vers.map((item) => (
        <li
          className="border-b border-base-content/10 last:border-b-0 p-4 flex justify-between  items-center"
          key={item.id}
        >
          {item.isEditing ? (
            <input
              type="text"
              className="input input-primary grow mr-4"
              value={item.value}
              onChange={(e) => handleChange(item.id, e.target.value)}
            />
          ) : (
            <span>{item.value}</span>
          )}
          <input
            type="checkbox"
            className="checkbox checkbox-primary justify-between items-right"
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
          />
          <button className="btn btn-sm btn-primary ml-4" onClick={() => {toggleEdit(item.id);
          }}>
            ✏
          </button>
        </li>
      ))}
    </ul>
  );
}
