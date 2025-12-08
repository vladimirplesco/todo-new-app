import { useRef, useEffect } from "react";

const Form = ({ vers, setVers }) => {
  const inputRef = useRef(null);
  function addItem() {
    const newItem = {
      id: crypto.randomUUID(),
      value: inputRef.current.value.trim(),
      completed: false,
    };

    setVers([...vers, newItem]);
    inputRef.current.focus();
  }
  useEffect(() => {
      localStorage.setItem("vers", JSON.stringify(vers));
    }, [vers]);
  return (
    <form action={addItem} className="flex flex-wrap gap-4 w-full mb-6">
      <input
        ref={inputRef}
        className="input input-primary grow"
        type="text"
        required
        placeholder="Что нужно сделать?"
      />
      <button className="btn btn-primary grow" type="submit">
        Добавить
      </button>
    </form>
  );
};

export { Form };
