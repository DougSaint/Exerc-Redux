import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

  const mapStateToProps = (state) => {
    return {...state};
  }

class FormDataDisplay extends Component {
  render() {
    const {
      professionalData,
      personalData,
    } = this.props;

    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          { personalData.name }
        </div>
        <div>
          Email:
          { personalData.email }
        </div>
        <div>
          CPF:
          { personalData.cpf }
        </div>
        <div>
          Endereço:
          { personalData.address }
        </div>
        <div>
          Cidade:
          { personalData.city }
        </div>
        <div>
          Estado:
          { personalData.uf }
        </div>
        <div>
          Currículo:
          { professionalData.curriculum }
        </div>
        <div>
          Cargo:
          { professionalData.job }
        </div>
        <div>
          Descrição do cargo:
          { professionalData.description }
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  personalData: PropTypes.instanceOf(Object),
  professionalData: PropTypes.instanceOf(Object),
}.isRequired;

export default connect(mapStateToProps)(FormDataDisplay);
