export function List( {vers, setVers} ) {
  return (
    <ul className="list bg-base-200 rounded-box">
      {vers.map((item) => <li className="border-b border-base-content/10 last:border-b-0 p-4 flex justify-between items-center" key={item.id}>{item.value}<input type="checkbox" className="checkbox checkbox-primary" checked={item.completed} onChange={() => {
        const newVers = vers.map(v => {
          if (v.id === item.id) {
            return { ...v, completed: !v.completed };
          }
          return v;
        });
        setVers(newVers);
      }} /></li>)}
    </ul>
  );
}