import { useRef } from "react";

const Form = ({ vers, setVers }) => {
  const inputRef = useRef(null);
  function addItem() {
    const newItem = {
      id: crypto.randomUUID(),
      value: inputRef.current.value.trim(),
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
        {vers.some((item) => item.isEditing) ? "Сохранить" : "Добавить"}
      </button>
    </form>
  );
};

export { Form };
