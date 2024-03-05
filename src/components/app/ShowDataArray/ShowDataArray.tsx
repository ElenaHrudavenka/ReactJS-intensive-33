import React, {useId} from 'react';

export const ShowDataArray = () => {
  const id = useId();
  const myArray = [
    {id, name: 'Alena', email: 'kisseli@mail.ru'},
    {id, name: 'Aliaksandr', email: 'Aliaksandr111@mail.ru'},
    {id, name: 'Mikita', email: 'Mikita222@mail.ru'},
    {id, name: 'Ilya', email: 'Ilya333@mail.ru'},
  ]
  return (
    <>
      <div>Email list:</div>
      <ul>
        {
          myArray.map((el) => <React.Fragment key={el.id}>
            <li style={{fontWeight: "bold"}}>{el.name}</li>
            <span>{el.email}</span>
          </React.Fragment>)
        }
      </ul>
    </>
  );
};
