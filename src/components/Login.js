import Input from "./Input";

const Login = () => {

var isLoggedIn = false;

const renderConditionally = () => {
    if (isLoggedIn === true) {
        return <h1>Hello</h1>
    } else {
      return ( 
        <form>
            <h1>Welcome</h1>
            <Input />
        </form>
      )
    }
  }

  return (
    <div>
        {renderConditionally()}
    </div>
  )
}

export default Login


