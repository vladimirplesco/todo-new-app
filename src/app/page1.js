
export default function Home() {
  const vers = [
    { id: "0", value: "Я на солнышке сижу" },
    { id: "1", value: "Я на солнышко гляжу" },
    { id: "2", value: "Всё сижу и сижу" },
    { id: "3", value: "И на солнышко гляжу." },
    { id: "4", value: "Носорог-рог-рог идёт," },
    { id: "5", value: "Крокодил-дил-дил плывёт," },
    { id: "6", value: "Только я все сижу" },
    { id: "7", value: "И на солнышко гляжу." }
  ];
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex flex-col w-full gap-4 items-center justify-between p-4">
        <div className="flex gap-4  w-full justify-center" >
          <input className="input input-primary flex-grow min-w-[120px] sm:min-w-[150px]" type="text" placeholder="Введите текст" />
          <button className="btn btn-primary shrink-0">Кнопка</button>
        </div>
        <ul className="list bg-base-300 rounded-box gap-4  w-full">
          {vers.map((string) => <li className="border-base-content/10 p-4 border" key={string.id}>{string.value}</li>)}
        </ul>
      </div>
    </div>
  );
}

{/* <label class="input input-primary grow pe-1"><input type="search" placeholder="Поиск" autocomplete="off" class="grow" name="search" value=""><button type="button" class="btn btn-sm btn-square btn-ghost"><svg class="size-6 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg></button></label> */ }
{/* <button type="submit" class="btn btn-primary grow sm:grow-0">Найти</button> */ }
