import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    // console.log(inputValue)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories( categories => [ inputValue, ...categories ])
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
