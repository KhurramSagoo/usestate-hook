import {useState} from 'react';

export default function Pets (){
  const [cat, setCate]=useState(0);
  const [pets, setPets]=useState({cats:0, dogs:0 })
  console.log('pets:', Pets )
  return(
    <main>
      <div> cat : {cat}</div>
      <button onClick={()=>setCate(cat+1)}> +</button>
      <button onClick={()=>setCate(cat-1 )}>-</button>

      <section>
        <div > by object: </div>
      </section>
    </main>
  )
}