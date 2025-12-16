import { useRef } from "react";

const Form = ({ vers, setVers }) => {
  const inputRef = useRef(null);
  function addItem() {
    e.preventDefault();
    
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newItem = {
      id: crypto.randomUUID(),
      value: text,
      editValue: text,
      completed: false,
      isEditing: false,
    };

    setVers([...vers, newItem]);
    inputRef.current.focus();

  }
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
