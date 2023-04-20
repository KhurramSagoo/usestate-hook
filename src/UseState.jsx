import { useState } from 'react';

export default function UseState() {
  const [state, setState] = useState(0);
  const [product, setProduct] = useState(0);
  return (
    <section>
      <div> here is the count {state} </div>
      <button onClick={() => setState(state + 1)}>increment + </button>
      <br />
      <hr />
      <button onClick={() => setState(state - 1)}>decrement -</button>
      <div>here is the table of 5: {product}</div>
      <button onClick={() => setProduct(product +5)}>
        table count start
      </button>
    </section>
  );
}
