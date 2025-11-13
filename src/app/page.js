
export default function Home() {
  const vers = [
    {id: "0", value:"Я на солнышке сижу"}, 
    {id: "1", value:"Я на солнышко гляжу"}, 
    {id: "2", value:"Всё сижу и сижу"}, 
    {id: "3", value:"И на солнышко гляжу."}, 
    {id: "4", value:"Носорог-рог-рог идёт,"}, 
    {id: "5", value:"Крокодил-дил-дил плывёт,"}, 
    {id: "6", value:"Только я все сижу"}, 
    {id: "7", value:"И на солнышко гляжу."}
  ];
  return (
    <div className="max-w-xl mx-auto p-4">
    <div className="flex flex-col w-full gap-4 items-center justify-between p-4 w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center w-full" >
        <input  className="input input-primary grow sm:shrink-0" type="text" placeholder="Введите текст"/>
        <button className="btn btn-primary shrink-0">Кнопка</button>
      </div>
      <ul className="list bg-base-300 rounded-box gap-4 w-full">
       {vers.map((string) => <li className="border-base-content/10 p-4 border w-full" key={string.id}>{string.value}</li>)}
      </ul>
    </div>
   </div>
  );
}
