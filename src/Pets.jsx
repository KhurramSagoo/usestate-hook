import {useState} from 'react';

export default function Pets (){
  const [cat, setCate]=useState(0);
  return(
    <main>
      <div> cat : {cat}</div>
      <button onClick={()=>setCate(cat+1)}> +</button>
      <button onClick={()=>setCate(cat-1 )}>-</button>
    </main>
  )
}