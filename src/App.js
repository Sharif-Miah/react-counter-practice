import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <UsersApi />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  const IncreaseCounter = () => {
    setCount(count + 1)
  }
  const DecreaseCounter = () => {
    setCount(count - 1)
  }
  const ResetBtn = () => {
    setCount(0)
  }
  return (
    <div className='count'>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCounter}>Increment</button>
      <button onClick={DecreaseCounter}>Dicrement</button>
      <button onClick={ResetBtn}>Reset</button>
    </div>
  )
}


function UsersApi() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div>
      <h1>Users External</h1>
      {
        users.map(user => <Users name={user.name} email={user.email} />)
      }
    </div>
  )
}

function Users(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h4>Email: {props.email}</h4>
    </div>
  )
}


export default App;
