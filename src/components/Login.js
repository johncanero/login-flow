import Input from "./Input";

const Login = () => {

    var isLoggedIn = false;

    const renderConditionally = () => {
        if (isLoggedIn === true) {
            return <h1>Hello</h1>
        } else {
        return ( 
            <form className="form">
                <Input 
                    type="text"
                    placeholder="Username"
                />
                 <Input 
                    type="password"
                    placeholder="Password"
                />
                <button type="submit">Login</button>
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


