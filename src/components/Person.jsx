import { useState } from 'react';

export default function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = ({ target }) => setFirstName(target.value);
  const handleLastNameChange = ({ target }) => setLastName(target.value);

  const fullName = `${firstName} ${lastName}`;

  const [person, setPerson] = useState({
    name: fullName,
    age: 100,
  });

  const handleIncreaseAge = () => {
    const newPerson = { name: person.name, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <label>
        First name:
        <input type='text' onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input type='text' onChange={handleLastNameChange} />
      </label>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
