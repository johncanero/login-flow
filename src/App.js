import './App.css';
import Form from './components/Form';


const App = () => {

  // Statement (true or false)
  var userIsRegistered = false;

  return (
    <div className='container'>
        <h1>Hello</h1>
        {<Form 
            isRegistered={userIsRegistered}
          />
    }</div>
  )
}


export default App;


