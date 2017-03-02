import React, { Component } from 'react';
import './Form.css';
import Modal from './modal';
import ModalExample from './mod';
import ModalExperiment from './Modexp';


class Form extends Component {
  render() {
    return (
      <div className="container">
       <div className="row">
        <div className=".col-md-6 .offset-md-3" id="cont">
          <p>You should enter our contest!</p>
          <p>Just click the button below to record/upload your video!</p>

          <ModalExperiment/>
        </div>
      </div>
      </div>
    );
  }
}

export default Form;