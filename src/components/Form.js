import React, { Component } from 'react';
import Login from './Login';
import Cadastro from './Cadastro'
class Form extends Component {

    state = {
        estado : true
    }
    
    acaoCadastro = () =>{
        
        this.setState({
            estado : !this.state.estado
        })
        window.location.href = "localhost:3000";
    }
    acaoEntrar = () =>{
        alert('Você entrou');
        window.location.href = "localhost:3000";
    }

    acaoVoltar = () =>{
        document.getElementById('cL').style.display = "block";
    }

    acaoComfirmar = () =>{
        alert("Voce foi cadastrado")
    }

    render() {
        
        let login
        let but
        let gBut
        let formCad

        if(this.state.estado){
            login = <Login/>
            gBut = 
            <div id="cL">
                <input onClick={this.acaoEntrar} type="submit" class="btn btn-light" name="acao" value="Entrar"></input>
                <button onClick={this.acaoCadastro} type="button" class="btn btn-danger">Cadastrar</button>
            </div>
            but = null
            formCad = null 
        }else{
            login = null
            gBut = null
            but = <button onClick={this.acaoCadastro} type="button" class="btn btn-light" id="but">Voltar</button>
            formCad = <Cadastro click ={this.acaoComfirmar}/>
        }

        return (
            <div className="row justify-content-center">
                <form className="form-div">
                    <div className="campoLogin">
                    {login}
                    {gBut}
                    {but}
                    {formCad}
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
