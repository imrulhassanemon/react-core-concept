
import './App.css'
import Counter from './counter'
import Team from './team.jsx'
import AddReduce from './add-reduce.jsx'
import Users from './Users.jsx'
import Users02 from './Users-02.jsx'
import Friends from './Friends.jsx'


function App() {
  function handel(){
    return alert("button clicked")
  }
  const hadel2 = () => {
    alert("button 2 just clicked")
  }
  const number = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React Core Concept 02</h2>
      <Friends></Friends>
      <Users02/>
      <Users></Users>
      <AddReduce></AddReduce>
      <Counter></Counter>
      <Team></Team>
      <button onClick ={handel}>Click Me</button>
      <button onClick={hadel2}>Click Me 2</button>
      <button onClick={() => {alert("btn 3 just clicked")}}>Click Me 3</button>
      <br />
      <button onClick={() => number(51)}>Click me 4</button>

    </>
  )
}

export default App
 