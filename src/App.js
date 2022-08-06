import './App.css';
import Login from './components/Login';



const App = () => {

  var isLoggedIn = false;

  return (
    <div className='container'>
        {/* Ternary Operator */}
        {isLoggedIn === true ? <h1>Hello</h1> : <Login />
        }</div>
  )
}


export default App;


