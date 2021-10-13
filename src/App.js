import React from 'react';
import './style.css';

export default function App() {
  const name = 'Tati';

  const age = 24;

  //age Calculation
  const ageCalculation = (
    <div>
      <p>
        {age > 20
          ? 'Old. Both physically and in soul.'
          : 'You a child'}
      </p>
    </div>
  );

  //Mapping
  const data = ['bitcoin', 'ethereum', 'doge'];

  const mapping = (
    <h1>
      <ul>
        {data.map((crypto, idx) => {
          return <li key={idx}> {crypto} </li>;
        })}
      </ul>
    </h1>
  );

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Calculation: 1 + 3 = {1 + 3}</p>
      {ageCalculation}
      {mapping}
    </div>
  );
}
