import './App.css';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import TodoApp from './Components/TodoApp';
import {useSelector} from 'react-redux'

const darkMode = {
  backgroundColor:"black",
  color:"aliceblue"
}

const lightMode = {
  backgroundColor:"white",
  color:"black"
}

function App() {
const changeMode = useSelector((state) => state.changeMode.toogle)

  return (
    <div className="App" style={changeMode?darkMode:lightMode}>
      <Navbar/>
      
      {/* this is the counter project using react react-redux */}
      <Counter />

      {/* this is the todo project using react react reac-redux */}
      <TodoApp />

    </div>
  );
}

export default App;
