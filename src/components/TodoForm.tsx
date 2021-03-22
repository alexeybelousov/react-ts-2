import React, { useState } from 'react';

interface TododFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TododFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  }

  return (
    <div className="input-field mt2">
      <input 
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        type="text"
        id="title" 
        placeholder="Input todo name"
      />
      <label htmlFor="title" className="active">
        Input todo name
      </label>
    </div>
  )
}