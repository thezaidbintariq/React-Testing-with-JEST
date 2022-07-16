import { useState } from 'react'
import Output from './Output';



const Greeting = () => {
const [textIsChanged,setTextIsChanged] = useState(false);

  return (
      <div>
      <h1>Hello World</h1>
      {!textIsChanged && <p><Output>Good to see you.</Output></p>}
      {textIsChanged && <p><Output>Text Changed.</Output></p>}
      <button onClick={() => setTextIsChanged(!textIsChanged)}>Change Text</button>
    </div>
  )
}

export default Greeting
