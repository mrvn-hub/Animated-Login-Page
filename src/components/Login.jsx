import React from "react";

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {user: "", password: ""}
    }

    getInfo =(e)=>
    {
        e.preventDefault();
        console.log("Hi there "+this.state.user);
        alert("Hi there "+this.state.user+", hope you're well");
        this.setState({user:"", password:""});
    }
    render()
    {
        return(
            <form className="my-form" onSubmit={this.getInfo}>
                <span className="input">
                    <label className="user-pass" htmlFor="username">Username:</label>
                    <input type="text" id="username" required value={this.state.user} onChange={(e)=>{this.setState({user:e.target.value})}}/>
                </span>
                <span className="input">
                    <label className="user-pass" htmlFor="password">Password:</label>
                    <input type="password" id="password" required value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                </span>
                <span className="forgot">
                    <a href="">Forgot Password?</a>
                </span>
                <button>Login</button>
                <span className="create">
                    <a href="">Don't have an account?</a>
                </span>
            </form>
        );
    }
}

export default Login;
