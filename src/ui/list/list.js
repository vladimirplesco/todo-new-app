export function List(props = {}) {
  return (
    <ul className="list bg-base-200 rounded-box flex flex-col">
      {props.vers.map((item) => <li className="border-b border-base-content/10 last:border-b-0 px-2 py-4 w-full" key={item.id}>{item.value}</li>)}
    </ul>
  );
}