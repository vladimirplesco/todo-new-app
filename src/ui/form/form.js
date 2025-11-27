import { useRef } from "react";
  
const Form = ( {vers, setVers} ) => {
  const inputRef = useRef(null);
  function addItem() {
  
      const newItem = {
        id: crypto.randomUUID(),
        value: inputRef.current.value.trim(),
      };

      setVers([...vers, newItem]);
      inputRef.current.focus();
  }
  return (
    <div>
    <form action={ addItem }>
        <div className="flex flex-wrap gap-4 w-full justify-center mb-6">
          <input ref={ inputRef } className="input input-primary grow" type="text" required placeholder="Что нужно сделать?" />
          <button className="btn btn-primary grow" type='submit'>Добавить</button>
        </div>
      </form>
    </div>
  );
};

export { Form };