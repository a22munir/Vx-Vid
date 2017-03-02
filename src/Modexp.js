import {Modal}  from 'react-bootstrap';
import './Modexp.css';
import React from 'react';
import Record from './Record';

export default class ModalExperiment extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  openModal() {
    this.setState({open: true});
  }

  closeModal() {
    this.setState({open: false });
  }

  render(){

    return (

      <div>
        <button type='button' onClick={this.openModal.bind(this)} className='openButton btn btn-success'>Launch modal</button>
        {this.state.open?
        <Modal
          show={this.state.open}
          onHide={this.closeModal.bind(this)}
          aria-labelledby="ModalHeader" className='modalClass'
          >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Record your video!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Recording functionality here</p> 
            <Record/>
          </Modal.Body>
          <Modal.Footer>
            <button className='closeButton btn btn-primary' onClick={this.closeModal.bind(this)}>
              Close
            </button>
          </Modal.Footer>
        </Modal> : ''}
      </div>
    )
  }
}