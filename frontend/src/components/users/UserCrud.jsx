import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState };

    clear() { //limpar form
        this.setState({ user: initialState.user }); //função que altera estado
    }

    save() { //incluir ou alterar user existente
        const user = this.state.user;
        const method = user.id ? 'put' : 'post'; 
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });
            })
            .catch(err => {
                if (!err.response) {
                    // Erro de rede ou timeout
                    console.error('Erro de rede:', err.message);
                } else {
                    // Erro do servidor
                    console.error('Erro do servidor:', err.response.data);
                }
            });
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    updateField(event) { //altera campo de nome e email
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className='form'>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type="text" className='form-control' name='name' value={this.state.user.name} 
                            onChange={e => this.updateField(e)} placeholder='Digite um Nome'/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text"  className='form-control' name="email" value={this.state.user.email} 
                            onChange={e => this.updateField(e)} placeholder='Digite o Email' />
                        </div>
                    </div>

                </div>

                <hr />
                <div className='row'>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}