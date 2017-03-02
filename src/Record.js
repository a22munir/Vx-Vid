import React, { Component } from 'react';
import './Record.css';

class Record extends Component {
  render() {
    var RecordRTC = require('recordrtc');
        function successCallback(stream){
      var vid = document.querySelector('video');
      vid.src = URL.createObjectURL(stream);
      vid.muted = true;
      var recorder = RecordRTC(stream, {
         type: 'video'
      });
      recorder.startRecording();

      setTimeout(function(){
      recorder.stopRecording(function(){
           var blob = recorder.blob;
           var url = URL.createObjectURL(blob);
           vid.src = url;
           vid.muted = false;
      });
      }, 5 * 100000);
    }

    function errorCallback(error){
      alert(error);
    }
    

    var mediaConstraints = {video: true, audio: true};

    navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
    
    return (
      <video controls autoplay id="video"></video>
    );
  }
}

export default Record;