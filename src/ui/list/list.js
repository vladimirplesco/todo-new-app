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
  return (
    <ul className="list bg-base-200 rounded-box">
      {vers.map((item) => (
        <li
          className="border-b border-base-content/10 last:border-b-0 p-4 flex justify-between items-center"
          key={item.id}
        >
          {item.value}
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}
