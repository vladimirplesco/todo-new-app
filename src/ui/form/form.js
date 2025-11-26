import React, { forwardRef } from 'react';
const Form = forwardRef((props, ref) => {
  return (
    <div>
    <form action={ props.addItem }>
        <div className="flex flex-wrap gap-4 w-full justify-center mb-6">
          <input ref={ ref } className="input input-primary grow" type="text" required placeholder="Что нужно сделать?" />
          <button className="btn btn-primary grow" type='submit'>Добавить</button>
        </div>
      </form>
    </div>
  );
});

export { Form };