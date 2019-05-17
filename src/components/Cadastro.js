import React from 'react'; 

const Cadastro = (props) => {
    return (
    <div >
        <input className="form-control" type="text" placeholder="Name"></input>
        <input className="form-control" type="text" placeholder="Last Name"></input>
        <input className="form-control" type="text" placeholder="Age"></input>
        <input className="form-control" type="text" placeholder="Country"></input>
        <input className="form-control" type="password" placeholder="Password"></input>
        <input className="form-control" type="password" placeholder="Comfirm Password"></input><br/>
        <input className="form-control" type="submit" onClick={props.click} value="Comfirmar" class="btn btn-danger"></input>
    </div>);
}
export default Cadastro;
