import './App.css';
import Login from './components/Login';



const App = () => {

  var isLoggedIn = false;

  const currentTime = new Date(2022, 8, 6, 13).getHours();
  console.log(currentTime)


  return (
    <div className='container'>{ 
      /* isLoggedIn === true ? <h1>Hello</h1> : <Login />   */

      /* currentTime > 12 ? <h1>Why are you still working?</h1> : null */

      currentTime > 12 && <h1>Why are you still working?</h1>

    }</div>
  )
}


export default App;


