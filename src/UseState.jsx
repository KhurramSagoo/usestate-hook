import { useState } from 'react';

export default function UseState() {
  const [state, setState] = useState(0);
  return (
    <section>
      <div> here is the count {state} </div>
      <button onClick={() => setState(state + 1)}>increment + </button>
      <br/>
      <hr/>
      <button onClick={() => setState(state - 1)}>decrement -</button>
    </section>
  );
}
