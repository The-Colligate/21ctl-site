"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 7571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4185);
/* harmony import */ var _icons_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7903);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4371);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4001);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout___WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layout___WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function LightDesign() {
    const [displayPopup, setDisplayPopup] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        false,
        -1
    ]);
    const products = [
        // {
        //   icon: '/icons/home/baseline-call.svg',
        //   name: 'Communication',
        //   snippet:
        //     'We build, provide one to one, one to many, many to many, communication infrastructures and platforms, supporting millions of users transactions and variety of business processes',
        //   link: '/communication',
        // },
        {
            icon: "/icons/home/cloud-computing.svg",
            name: "Digital Infrastructure",
            snippet: " We have connectivity, data centers & edge computing centers, Towers, Network & 5G enabled platforms for SMBs, SMEs and large Enterprises.",
            link: "/digital-infrastructure"
        },
        // {
        //   icon: "/icons/home/computer.svg",
        //   name: "Digital Platform",
        //   snippet:
        //     "We company offers digital communication platforms and infrastructure to support various business processes and handle high volumes of transactions for millions of users.",
        //   link: "#",
        // },
        {
            icon: "/icons/home/globe.svg",
            name: "Digital Platform",
            snippet: "21st century technologies limited offers digital communication platforms and infrastructure to support various business processes and handle high volumes of transactions for millions of users.",
            link: "/platform"
        },
        {
            icon: "/icons/home/credit-card.svg",
            name: "Payment",
            snippet: "Our secured fintech gateway that allows transfer of monetary values including payment processing, institutional procedures, e-Commerce instruments, rules, standards and technologies.",
            link: "https://konetpay.com/"
        },
        {
            icon: "/icons/home/power-lighting.svg",
            name: "Power",
            snippet: "21ctl enhouses premier renewable energy, turbine power infrastructure, power plant and electric energy storage system integrations and balancing services.",
            link: "/power"
        },
        {
            icon: "/icons/home/group.svg",
            name: "People",
            snippet: "The Digital Academy is a training hub where creative thinkers and distruptors are exposed to highly equiped pre-programmed and mataversed laboratories while interacting with experts in domains such as Cloud computing, Artificial Intelligence, Cyber security, Data analytics and so much more.",
            link: "/people"
        },
        {
            icon: "/icons/home/security.svg",
            name: "Security as Service",
            snippet: "21ctl manages your business security, providing cloud-based security service and in-house security management. Our SECaaS business model is available for integration into a corporate infrastructure.",
            link: "/security"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden relative",
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
                className: "w-full min-h-screen overflow-y-hidden flex flex-col z-[1]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_1__/* .LightNavbar */ .w_, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex items-center justify-center w-full h-full px-20 flex-grow largeTablet:mt-10 largeTablet:flex-wrap phone:flex-grow-0 tablet:px-10 tablet:mt-10 smallTablet:px-5 pt-28",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .leftTransitionVarient */ .oC,
                                animate: "visible",
                                initial: "hidden",
                                className: "w-full h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-3xl mt-10 flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "text-5xl font-lato font-black whitespace-pre-wrap largeTablet:text-6xl tablet:text-5xl smallTablet:text-4xl",
                                            children: [
                                                "Building Africa's",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-primary-orange",
                                                    children: "Largest Digital"
                                                }),
                                                " ",
                                                "Infrastructure"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
                                            initial: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .delayVarient1 */ .lZ,
                                            className: "text-lg mt-6 largeTablet:text-xl smallTablet:text-lg",
                                            children: "21st Century Technologies, an ecosystem Technology Group of companies, building bold, ambitious and audacious digital infrastructure projects. Integrated infrastructure that is sustainable, resilient, secure, low latency, protected that will enable our customers to adopt cutting edge technology to accelerate technology modernization, exceptional corporate performance and transformation. We are well positioned and fully mobilized to provide unmatched operational excellence and unrivaled customer experience. Build many internationally recognized technology Hubs that will meet increasing demand for distributed digital infrastructure and support enterprises of all sizes by enabling the integration of all technology access business functions."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .rightTansitionVarient */ .A4,
                                animate: "visible",
                                initial: "hidden",
                                className: " h-full z-0 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-full flex justify-center mt-10 mx-auto largeTablet:mt-14 smallTablet:mt-8 phone:mt-6 mb-20",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hexagon-container",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0 ",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white dark:bg-black flex items-center justify-center flex-col ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-[9px] phone:text-[7px] ",
                                                                            children: "Software Development"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] phone:text-[7px] text-center",
                                                                            children: "We develop and deploy business solutions like HR, CRM, cTap, Call Centre Software, etc."
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/tree-structure.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-white !m-0",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white dark:bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-center text-[9px] phone:text-[7px] ",
                                                                            children: "Cloud"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] text-center phone:text-[7px]",
                                                                            children: "We have connectivity, data centers & edge computing centers, Towers, Network & 5G enabled platforms"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/cloud-computing.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-white dark:bg-black !m-0",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white flip-back dark:bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-center text-[9px] phone:text-[7px]",
                                                                            children: "Training & Consulting"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] text-center phone:text-[7px]",
                                                                            children: "We Train and Consult in areas including Networks and Transmission."
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/group-large.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center dark:bg-black justify-center bg-white !m-0",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white dark:bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-center text-[9px] phone:text-[7px]",
                                                                            children: "Telecoms Solutions"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] text-center phone:text-[7px]",
                                                                            children: "We provide Transmission, IT Infrastructure, Access Control, Voice and Data Services such as (E1, VOIP, Dark Fiber, Point 2 Point, etc.)"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/arrow-rotate.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white dark:bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-[9px] text-center phone:text-[7px]",
                                                                            children: "Communication"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] text-center phone:text-[7px]",
                                                                            children: "Specifically designed for Live and On-Demand Online Video and Audio Content Streaming."
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/baseline-call-large.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hex-wrapper relative p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "rounded-lg p-5 bg-white dark:bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "font-semibold text-[9px] text-center phone:text-[7px]",
                                                                            children: "E-Business & Security"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3 text-[9px] text-center phone:text-[7px]",
                                                                            children: "These are solutions designed for Web and Mobile Payment, Remittances & Security."
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/icons/home/credit-card-large.svg",
                                                                    className: "w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .buttonVarient */ .Ti,
                        animate: "visible",
                        initial: "hidden",
                        className: "flex items-center justify-between max-w-full gap-12 overflow-x-auto px-20 py-5 mt-16 tablet:px-10 tablet:grid-cols-4 tablet:bg-gradient-to-b tablet:from-transparent tablet:to-gray-400 tablet:dark:!bg-none smallTablet:px-10 phone:mt-auto phone:py-10",
                        children: products.map((product, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__.Popover, {
                                triggerType: "menu",
                                isShown: displayPopup[0] && displayPopup[1] === index,
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rounded-lg rainbow-bg p-px max-w-[270px] mx-auto",
                                    onMouseOver: (e)=>setDisplayPopup([
                                            true,
                                            index
                                        ]),
                                    onMouseOut: (e)=>setDisplayPopup([
                                            false,
                                            index
                                        ]),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "rounded-lg p-5 text-sm bg-white dark:bg-black",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: product.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-3 text-xs opacity-60",
                                                children: product.snippet
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "mt-3 flex items-center text-xs group hover:text-primary-orange",
                                                href: product.link,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [
                                                    "Go to site",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_index__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRight */ .o, {
                                                        className: "transition-all duration-500 ml-1 group-hover:ml-2"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `animate__animated animate__bounce animate__delay-${index}s animate__infinite	infinitew-full z-100 flex  flex-col justify-center`,
                                    role: "button",
                                    onMouseOver: (e)=>setDisplayPopup([
                                            true,
                                            index
                                        ]),
                                    onMouseOut: (e)=>setDisplayPopup([
                                            false,
                                            index
                                        ]),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full flex justify-center pt-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-24 min-w-[6rem] rounded-full shadow-lg shadow-text-primary-orange dark:shadow-lg cursor-pointer flex items-center justify-center border bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-10 tablet:h-16 tablet:min-w-[4rem]",
                                                role: "button",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: product.icon,
                                                    className: "h-12 w-auto tablet:h-8"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-4 flex justify-center items-center text-center text-sm group font-semibold text-primary-orange",
                                            children: product.name
                                        })
                                    ]
                                })
                            }, product.name);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_1__/* .SocialIcons */ .HE, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightDesign);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;