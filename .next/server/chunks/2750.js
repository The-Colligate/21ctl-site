"use strict";
exports.id = 2750;
exports.ids = [2750];
exports.modules = {

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);



// import ReactPlayer from 'react-player';
// const ReactPlayer = dynamic(() => import('react-player'), {
//   ssr: false,
// });
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zIndex: "99"
    }
};
const Video = ({ video_src , closeModal , modalIsOpen  })=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        isOpen: modalIsOpen,
        //   onAfterOpen={afterOpenModal}
        onRequestClose: closeModal,
        style: customStyles,
        contentLabel: "Take a tour",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "hover:text-primary-orange font-semibold cursor-pointer flex justify-end pb-1",
                onClick: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                width: "1184",
                height: "736",
                controls: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                    src: video_src,
                    type: "video/mp4"
                })
            })
        ]
    });
};
const CloseIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        height: "2em",
        width: "2em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "none",
            stroke: "#000",
            "stroke-width": "2",
            d: "M3,3 L21,21 M3,21 L21,3"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ })

};
;