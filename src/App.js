import React from 'react';
import './style.css';

export default function App() {
  const firstName = 'Tati';
  const lastName = 'Cheah';
  const candyBought = 5;
  const candy = 'KitKat';

  const age = 24;

  //age Calculation
  const ageCalculation = (
    <div>
      <p>{age > 20 ? 'Old. Both physically and in soul.' : 'You a child'}</p>
    </div>
  );

  //Mapping
  const data = [
    { id: 1, crypto: 'bitcoin' },
    { id: 2, crypto: 'ethereum' },
    { id: 3, crypto: 'doge' },
  ];

  const mapping = (
    <h1>
      <ul>
        {data.map((list) => {
          return <li key={list.id}> {list.crypto} </li>;
        })}
      </ul>
    </h1>
  );

  return (
    <div>
      <h1>Hello {firstName}!</h1>
      <p>Calculation: 1 + 3 = {1 + 3}</p>
      {ageCalculation}
      {mapping}
      <p>
        {firstName} {lastName} bought {candyBought} {candy} worth $
        {candyBought * 2}
      </p>
    </div>
  );
}
