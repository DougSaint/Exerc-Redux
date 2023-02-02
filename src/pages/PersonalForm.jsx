import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { setPersonalForm } from '../redux/actions/index';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    const { dispatch, history } = this.props;
    e.preventDefault();
    dispatch(setPersonalForm({
      ...this.state,
    }))
    history.push('/professionalform');
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.state;

    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="Estado: "
          name="uf"
          options={ UF_LIST }
        />
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
        />
      </form>
    );
  }
}

export default connect()(PersonalForm);
