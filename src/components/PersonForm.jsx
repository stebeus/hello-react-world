import { useState } from 'react';

export function PersonForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = `${firstName} ${lastName}`;

  const [person, setPerson] = useState({ name: fullName, age: 100 });

  const handleFirstName = ({ target: { value } }) => setFirstName(value);
  const handleLastName = ({ target: { value } }) => setLastName(value);

  const handleAgeIncrease = () => {
    const newPerson = { name: person.name, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <form>
      <h2>Person form</h2>
      <div className="field">
        <label htmlFor="first-name">First name: </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          onChange={handleFirstName}
        />
      </div>
      <div className="field">
        <label htmlFor="last-name">Last name: </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          onChange={handleLastName}
        />
      </div>
      <output>
        <h2>Name: {fullName}</h2>
        <p>Age: {person.age}</p>
        <button type="button" onClick={handleAgeIncrease}>
          Increase age
        </button>
      </output>
    </form>
  );
}
