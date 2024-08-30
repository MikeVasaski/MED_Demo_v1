import { useState } from "react";
import TextField from '@mui/material/TextField';

function MyLabel({text}:{text: string}) {
  return (
    <p>{text}</p>
  )
}

export default function App() {
  const[input, setInput] = useState("");

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px red solid',
      minHeight: '100vh'
    }}>
      <h1>hello universe</h1>

      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      }}>
        <input type="text" id="email" name="email" required/>
        <button>click me</button>
      </form>
      
      <MyLabel text="Hello Mike"/>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    </div>
  );
}