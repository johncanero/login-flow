import './App.css';
import Form from './components/Form';



const App = () => {

  var userIsRegistered = true;

  return (
    <div className='container'>{ 
        <Form 
          isRegistered={userIsRegistered}
        />
    }</div>
  )
}


export default App;


