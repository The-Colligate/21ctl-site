import React, { useRef } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex:'99'
  },
};

const Video = ({ video_src, closeModal, modalIsOpen }) => {
  //   const videoElement = useRef(null);
  //   const {
  //     playerState,
  //     togglePlay,
  //     handleOnTimeUpdate,
  //     handleVideoProgress,
  //     handleVideoSpeed,
  //     toggleMute,
  //   } = useVideoPlayer(videoElement);
  //   let subtitle;
  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Take a tour"
    >
      <ReactPlayer url={video_src} playing={true} controls={true} />

      {/* <div className="v_container">
        <div className="video-wrapper">
          <video
            src={video_src}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <i className="bx bx-play">play</i>
                ) : (
                  <i className="bx bx-pause">pause</i>
                )}
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"></i>
              ) : (
                <i className="bx bxs-volume-mute"></i>
              )}
            </button>
          </div>
        </div>
      </div> */}
    </Modal>
  );
};

export default Video;
