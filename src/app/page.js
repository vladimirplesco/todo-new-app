
export default function Home() {
  const vers = ["Я на солнышке сижу", 
    "Я на солнышко гляжу", 
    "Всё сижу и сижу", 
    "И на солнышко гляжу.", 
    "Носорог-рог-рог идёт,", 
    "Крокодил-дил-дил плывёт,", 
    "Только я все сижу", 
    "И на солнышко гляжу."
  ];
  return (
    <div>
      <div className="flex gap-4">
        <input  className="input input-primary" type="text" />
        <button className="btn btn-primary">Кнопка</button>
      </div>
      <ul class="list bg-base-200 rounded-box gap-4">
       {vers.map((string, index) => <li key={index}>{string}</li>)}
      </ul>
    </div>
  );
}
