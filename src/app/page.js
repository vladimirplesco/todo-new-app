
export default function Home() {
  const vers = [
    {id: 0,value:"Я на солнышке сижу"}, 
    {id: 1,value:"Я на солнышко гляжу"}, 
    {id: 2,value:"Всё сижу и сижу"}, 
    {id: 3,value:"И на солнышко гляжу."}, 
    {id: 4,value:"Носорог-рог-рог идёт,"}, 
    {id: 5,value:"Крокодил-дил-дил плывёт,"}, 
    {id: 6,value:"Только я все сижу"}, 
    {id: 7,value:"И на солнышко гляжу."}
  ];
  return (
    <div>
      <div className="flex gap-4">
        <input  className="input input-primary" type="text" />
        <button className="btn btn-primary">Кнопка</button>
      </div>
      <ul class="list bg-base-200 rounded-box gap-4">
       {vers.map((string) => <li key={string.id}>{string.value}</li>)}
      </ul>
    </div>
  );
}
