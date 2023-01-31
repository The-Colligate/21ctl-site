"use strict";
exports.id = 446;
exports.ids = [446];
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
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);




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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        isOpen: modalIsOpen,
        //   onAfterOpen={afterOpenModal}
        onRequestClose: closeModal,
        style: customStyles,
        contentLabel: "Take a tour",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_3___default()), {
            url: video_src,
            playing: true,
            controls: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ }),

/***/ 2446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4169);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_constants_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3690);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6101);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout___WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_components_layout___WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// const Video = dynamic(() => import('../../components/Video'));
const src1 = "https://res.cloudinary.com/dqsggbqmf/video/upload/v1675030374/Digital%20Expert%20Academy%20Video/Digital_Expert_Academy-1_wptior.mp4";
const Academy = ()=>{
    const courses = [
        "Electrical design and installation",
        "Power management and distribution",
        "Building management systems and energy efficiency",
        "Automation and control systems",
        "Programming and configuration of Schneider Electric products.",
        // 'Programming and configuration of Schneider Electric products, such as PLCs,  VFDs, and HMIs',
        "Cybersecurity for industrial systems",
        "Industry-specific applications, such as data centers",
        "Safety and compliance",
        "Data Center managment"
    ];
    const [video1, setVideo1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Academy - 21 CTL"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: ""
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-full min-h-screen flex flex-col overflow-x-hidden relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute w-full h-full flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full min-h-[50%] bg_gradient_l"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full min-h-[50%] bg_gradient_r"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full min-h-screen flex flex-col z-[0]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_3__/* .LightNavbar */ .w_, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: " dark:bg-[#565048] sm:px-28 px-8 my-16 sm:py-0 pt-16",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                            variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_5__/* .leftTransitionVarient */ .oC,
                                            animate: "visible",
                                            initial: "hidden",
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-6xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange leading-8",
                                                            children: "Unlock "
                                                        }),
                                                        "Your potential with our",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange leading-8",
                                                            children: "Academy."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg",
                                                    children: "Our top-rated academy offers expert-led courses to help you unlock your potential and advance your career."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>setVideo1(true),
                                                    className: "border border-primary-orange rounded text-primary-orange py-3 px-6 my-6 hover:bg-primary-orange hover:text-white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "capitalize",
                                                        children: "see our training facilities"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                            variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_5__/* .rightTansitionVarient */ .A4,
                                            animate: "visible",
                                            initial: "hidden",
                                            className: "flex-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058120/21ctl/logo/student_qg1xrf.png",
                                                width: 459,
                                                height: 450,
                                                className: "pt-20 tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "z-50",
                                children: video1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Video__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    modalIsOpen: video1,
                                    closeModal: ()=>setVideo1(false),
                                    video_src: src1
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "z-10 py-20",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex justify-center items-center mx-20 w-full tablet:mx-0 sm:px-0 px-5 tablet:flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-2/3 tablet:w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "sm:text-4xl text-xl font-bold max-w-lg sm:leading-[50px] leading-normal",
                                                    children: [
                                                        "Investment in",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Digital Infrastructure"
                                                        }),
                                                        " ",
                                                        "in five key areas over the past 25 years"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-2xl max-w-lg mt-5",
                                                    children: "Investment focused on enhancing five vital components: power, security, payment, people, and technology."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058158/21ctl/logo/21ctl-infographics_jiaas4.png",
                                                className: "w-2/3"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "relative w-full flex flex-col justify-center items-center py-28",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058180/21ctl/logo/people-info_k35pf5.svg",
                                        className: "flex justify-center items-center"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        class: "absolute text-5xl font-bold text-center w-2/5 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:w-3/5 tablet:text-xl dark:text-white",
                                        children: "we provide world-class services to the top 1000 companies in Nigeria and key residential areas."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "sm:px-36 px-8 my-20",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-lg font-semibold pb-5",
                                            children: "Our statistics reveal more about us."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "figures flex sm:flex-row flex-row sm:space-x-8 space-x-0 space-y-0 sm:space-y-0 w-full justify-around items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-[40px] font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                start: 0,
                                                                end: 450,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "",
                                                            children: "Total Courses"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-[40px] font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                start: 0,
                                                                end: 250,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "",
                                                            children: "Industry Mentors"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-[40px] font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                start: 0,
                                                                end: 250,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "k+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "",
                                                            children: "Students"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "text-3xl w-full flex flex-col justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "font-bold",
                                        children: [
                                            " ",
                                            "Skill ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-primary-orange",
                                                children: "Gap"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center tablet:flex-col ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-primary-orange w-full flex flex-col justify-between items-center tablet:my-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        start: 0,
                                                        end: 41,
                                                        duration: 2.75,
                                                        prefix: "",
                                                        suffix: "%",
                                                        className: "font-extrabold"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058149/21ctl/logo/people-33_rbql12.svg",
                                                        className: "w-2/4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "p-5 mt-2 bg-primary-orange text-white text-[18px] w-[350px] flex justify-center items-center",
                                                        children: "Labour Force in Nigeria"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-primary-orange w-full flex flex-col justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        start: 0,
                                                        end: 60,
                                                        duration: 2.75,
                                                        prefix: "",
                                                        suffix: "%",
                                                        className: "font-extrabold"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058146/21ctl/logo/people-41_s7olts.svg",
                                                        className: "w-2/4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "p-5 mt-2 bg-primary-orange text-white text-[18px] w-[350px] flex justify-center items-center",
                                                        children: "Unemployed Labour Force in Nigeria"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " w-full flex flex-col justify-center items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-center text-[18px] w-2/3 flex justify-center items-center my-10",
                                                children: [
                                                    "This means that about one in three young people in the labor force who are actively ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " seeking employment are unemployed"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "p-5 bg-primary-orange text-white text-[18px] w-[400px] flex justify-center items-center",
                                                        children: [
                                                            "Targeted Number of Trainees by 2033",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "p-5 mt-2 bg-white text-black text-[18px] w-[400px] flex justify-center items-center",
                                                        children: [
                                                            "10,000,000",
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "flex flex-col justify-center items-center w-full py-20 mt-20 pillar-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-bold sm:text-5xl text-3xl text-center tablet:text-xl",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            children: [
                                                "The ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-primary-orange",
                                                    children: "7 Pillars"
                                                }),
                                                " of Digital Training Center ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " Model"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full flex justify-center items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058164/21ctl/7-pillars_cuapya.svg",
                                            className: "w-3/5 tablet:w-4/5 "
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "flex flex-col justify-center items-center w-full py-20 pillar-bg ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-bold sm:text-5xl text-3xl text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "text-primary-orange",
                                            children: "Target of the Academy"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex justify-center items-center ml-20 tablet:flex-col ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058162/21ctl/logo/academy-importance_fxamod.svg",
                                                className: " w-2/4 tablet:w-4/5 "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058158/21ctl/logo/academy-importance1_vq55hr.svg",
                                                className: "w-2/4 tablet:pt-10 tablet:w-4/5 "
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "sm:px-28 px-8 mt-28",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-primary-orange font-bold sm:text-4xl text-2xl",
                                        children: "Explore our top rate course modules"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex sm:flex-row flex-col justify-between my-3 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xl",
                                                children: "Each module contains various topics"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-primary-orange"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid gap-10 grid-cols-3 largeTablet:grid-cols-2 tablet:grid-cols-2 mt-10 phone:grid-cols-1",
                                        children: courses.map((course)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-white sm:w-[350px] w-full px-2 py-3 rounded-xl",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mr-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058139/21ctl/logo/courses_z4srsc.svg",
                                                                // src="/logo/courses.png"
                                                                className: "w-24 h-full max-w-lg"
                                                            })
                                                        }, course),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-1 flex-col justify-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "text-base text-black font-bold w-full ",
                                                                children: course
                                                            })
                                                        })
                                                    ]
                                                }, course)
                                            }, course))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "sm:mb-0 mb-16",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-10 space-y-0 my-20 py-16 px-10 rounded-xl mx-40 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:mx-5 customize-bg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058151/21ctl/logo/smiling_snvt89.png",
                                                className: "w-2/3 h-2/5 sm:block hidden"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "sm:text-5xl text-3xl text-left sm:text-center font-semibold tracking-medium mb-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Customize"
                                                        }),
                                                        " your teaching and keep all",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Students"
                                                        }),
                                                        " ",
                                                        "interested"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "leading-8 text-xl text-left sm:text-center",
                                                    children: "Our teaching resources and strategies help you make your lessons unique and keep all students interested and engaged."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " w-full flex justify-between items-center ml-10 space-y-0 mx-10 mb-5 largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:ml-0 tablet:mx-10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full ",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "sm:text-5xl text-3xl font-semibold tracking-medium mb-8",
                                                    children: [
                                                        "Your ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Learning"
                                                        }),
                                                        " has no ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "limit"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "leading-8 text-xl",
                                                    children: "Our teaching resources and strategies help you make your lessons unique and keep all students interested and engaged."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/face-laughing_kbqju2.png",
                                                className: "sm:w-2/3 w-full"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$_, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_3__/* .SocialIcons */ .HE, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Academy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;