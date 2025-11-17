export default function Home() {
  const vers = [
    {id: "0", value:"Я на солнышке сижу"}, 
    {id: "1", value:"Я на солнышко гляжу"}, 
    {id: "2", value:"Всё сижу и сижу"}, 
    {id: "3", value:"И на солнышко гляжу."}, 
    {id: "4", value:"Носорог-рог-рог идёт,"}, 
    {id: "5", value:"Крокодил-дил-дил плывёт,"}, 
    {id: "6", value:"Только я все сижу"}, 
    {id: "7", value:"И на солнышко гляжу."},
  ];
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-wrap gap-4 w-full justify-center mb-6">
        <input  className="input input-primary grow" type="text" placeholder="Что нужно сделать?"/>
        <button className="btn btn-primary grow">Добавить</button>
      </div>
      <ul className="list bg-base-200 rounded-box flex flex-col">
        {vers.map((item) => <li className="border-b border-base-content/10 last:border-b-0 px-2 py-4 w-full" key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  );
}