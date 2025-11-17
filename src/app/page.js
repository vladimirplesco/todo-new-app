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
    <div className="max-w-xl mx-auto p-4">
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input  className="input input-primary grow pe-1" type="text" placeholder="Введите текст"/>
        <button className="btn btn-primary">Кнопка</button>
      </div>
      <ul className="list bg-base-200 rounded-box flex flex-col gap-4">
        {vers.map((item) => <li className="border-base-content/10 p-4 border w-full" key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  );
}