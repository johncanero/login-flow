import Input from "./Input";

const Login = () => {

    const renderConditionally = () => {
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
    

    return (
        <div>
            {renderConditionally()}
        </div>
    )
}

export default Login


