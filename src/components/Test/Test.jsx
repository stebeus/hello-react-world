import { useState } from 'react';

export function Test() {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  function clickHandler() {
    setHeading('Radical Rhinos');
  }

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
}
