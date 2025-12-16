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
        return { ...item, 
          isEditing: !item.isEditing,
          editValue: item.value,
        };
      }
    return { ...item, isEditing: false };
    });
    setVers(newVers);
  }

  function handleChange(itemId, newValue) {
    const newVers = vers.map((item) => {
      if (item.id === itemId) {
        return { ...item, editValue: newValue };
      }
      return item;
    });
    setVers(newVers);
  }

  function saveItem(itemId) {
    const newVers =vers.map((item) => {
      if (item.id ===itemId) {
        return {
          ...item, 
          isEditing: false,
          value: item.editValue,
        }
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
              className="input input-primary grow mr-2"
              value={item.editValue}
              onChange={(e) => handleChange(item.id, e.target.value)}
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
          <button className="btn btn-sm btn-primary ml-2" onClick={() => {toggleEdit(item.id);
          }}>
            ✏
          </button>
          {item.isEditing && (
              <button className="btn btn-sm btn-primary ml-2" onClick={() => saveItem(item.id)}>Сохранить</button>
            )}
        </li>
      ))}
    </ul>
  );
}
