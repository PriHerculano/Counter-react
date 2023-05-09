import {useState} from 'react'

function App() {
  const[value, setValue] = useState(0)
  
  return(
    <>
    <div>
     <h1>Contadora usando <spam>React</spam></h1>
     <h2>{value}</h2>

     <button className='btn' onClick={() => setValue(value + 1)}> Aumentar</button>

     <button className='btn' onClick={() => setValue(value - 1)}> Diminuir</button>

     <button className='btn' onClick={() => setValue(0)}>Zerar</button>
    </div>
    </>
  )
}

export default App
