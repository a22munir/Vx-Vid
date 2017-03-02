import React, { Component } from 'react';
import './Form.css';
import ModalExperiment from './Modexp';
import Record from './Record';


class Form extends Component {
  render() {
    return (
      <div className="container">
       <div className="row">
        <div className=".col-md-6 .offset-md-3" id="cont">
          <h1 className="text-primary">WANT TO BE FEATURED ON OUR SITE?</h1>
          <p>Just click the button below to record/upload your video!</p>
          <ModalExperiment/>
        </div>
      </div>
      </div>
    );
  }
}

export default Form;