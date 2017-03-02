import React, { Component } from 'react';

class Record extends Component {
  render() {
     var RecordRTC = require('recordrtc');

     function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
            navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
        }
        var videoElement = document.getElementById('video');
        var downloadURL = document.getElementById('download-url');
        var startRecording = document.getElementById('start-recording');
        var stopRecording = document.getElementById('stop-recording');
        startRecording.onclick = function() {
            startRecording.disabled = true;
            stopRecording.disabled = false;
            captureUserMedia00(function(stream) {
                window.audioVideoRecorder = window.RecordRTC(stream, {
                    type: 'video'
                });
                window.audioVideoRecorder.startRecording();
            });
        };
        stopRecording.onclick = function() {
            stopRecording.disabled = true;
            startRecording.disabled = false;
            window.audioVideoRecorder.stopRecording(function(url) {
                downloadURL.innerHTML = '<a href="' + url + '" download="RecordRTC.webm" target="_blank">Download</a><hr>';
                videoElement.src = url;
                videoElement.muted = false;
                videoElement.play();
                videoElement.onended = function() {
                    videoElement.pause();
                    videoElement.src = URL.createObjectURL(audioVideoRecorder.getBlob());
                };
            });
        };
        function captureUserMedia00(callback) {
            captureUserMedia({
                audio: true,
                video: true
            }, function(stream) {
                videoElement.src = URL.createObjectURL(stream);
                videoElement.muted = true;
                videoElement.controls = true;
                videoElement.play();
                callback(stream);
            }, function(error) {
                alert(JSON.stringify(error));
            });
        }
    
    return (
      <div>
                    <div class="inner">
                <video id="video"></video>
                <button id="start-recording">Record Audio+Video</button>
                <button id="stop-recording" disabled>Stop</button>
                <h2 id="download-url"></h2>
            </div>
      </div>
    );
  }
}

export default Recorder;