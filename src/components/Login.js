import React from 'react';
const Login = () => {
    return ( 
        <div>
            <p>Login:</p><br/>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="fas fa-user input-group-text" id="basic-addon1"></div>
                </div>
                <input className="form-control" type="text" name="nome" placeholder="Username" aria-describedby="basic-addon1"></input><br/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <i className="fas fa-key input-group-text" id="basic-addon2"></i>
                </div> 
                <input className="form-control" type="password" name="senha" placeholder="Password" aria-describedby="basic-addon2"></input><br/>
            </div>
        </div>
    );
}
export default Login;
