import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { setProfessionalForm } from '../redux/actions/index';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
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
    dispatch(setProfessionalForm({
      ...this.state,
    }))
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
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

export default connect()(ProfessionalForm);
