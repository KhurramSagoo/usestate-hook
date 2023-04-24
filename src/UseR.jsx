import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, userInput: action.payload };
    case 'tgColor':
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

export default function UseR() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: '',
    color: false,
  });
  const [userInput, SetUserInput] = useState('');
  return (
    <div style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <hr />
      <p style={{ color: 'black', fontWeight: 'bold' }}>useReducer</p>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: 'newUserInput', payload: e.target.value })
        }
      />
      <br />
      <p style={{ fontWeight: 'bold', fontSize:25 }}>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'tgColor' })}>color</button>
    </div>
  );
}
