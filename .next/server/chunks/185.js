"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 185:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3930);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4169);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3690);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout___WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layout___WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Security = ()=>{
    const control = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView)();
    console.log(inView);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(inView);
        if (inView) {
            console.log("visible");
            control.start("visible");
        } else {
            control.start("hidden");
            console.log("hidden");
        }
    }, [
        control,
        inView
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Security - 21 CTL"
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
                        className: "w-full min-h-screen flex flex-col z-[1]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_4__/* .LightNavbar */ .w_, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: " sm:px-36 my-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex px-22 my-0 items-center justify-between space-x-16 tablet:px-10 tablet:flex-col tablet:space-x-0 pt-28",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                            variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .leftTransitionVarient */ .oC,
                                            animate: "visible",
                                            initial: "hidden",
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-7xl font-bold tracking-normal font-lato text-black dark:text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange leading-8",
                                                            children: "Elevate"
                                                        }),
                                                        " Your Business",
                                                        "'",
                                                        "s Cybersecurity"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-2xl text-black dark:text-white opacity-60 mt-6 largeTablet:text-xl smallTablet:text-lg",
                                                    children: "Stay protected in the digital world with our cutting-edge cybersecurity solutions"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6",
                                                    children: "Reach Us"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                            variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .rightTansitionVarient */ .A4,
                                            animate: "visible",
                                            initial: "hidden",
                                            className: "w-[100%]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058154/21ctl/logo/security_uitcej.svg",
                                                width: 2000,
                                                height: 2000,
                                                className: " tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "sm:px-36 px-8 my-10",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-lg font-semibold pb-5",
                                            children: "Our statistics reveal more about us."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "figures flex sm:flex-row flex-col sm:space-x-8 space-x-0",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-4xl font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                start: 0,
                                                                end: 200,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-light",
                                                            children: "Business Supported"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-4xl font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                start: 0,
                                                                end: 25,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-light",
                                                            children: "Years Experience"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-4xl font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                start: 0,
                                                                end: 14,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "M+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-light",
                                                            children: "Satisfied Customers"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-primary-orange text-4xl font-semibold",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                start: 0,
                                                                end: 100,
                                                                duration: 2.75,
                                                                prefix: "",
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-light",
                                                            children: "Completed Projects"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "sm:mb-0 mb-16 py-20 mx-20 tablet:mx-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-10 space-y-0 tablet:flex-col-reverse",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[40%] tablet:mt-10 tablet:mx-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.img, {
                                                variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .leftTransitionVarient */ .oC,
                                                ref: ref,
                                                animate: "visible",
                                                // animate={control}
                                                initial: "hidden",
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/security_operations_r2jwsl.svg",
                                                height: 650,
                                                width: 550,
                                                className: "rounded-2xl h-96 w-[100%] tablet:h-80"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                            ref: ref,
                                            variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .rightTansitionVarient */ .A4,
                                            animate: "visible",
                                            initial: "hidden",
                                            // animate={control}
                                            className: "flex-1 mb-5 w-[60%]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "sm:text-5xl text-3xl font-semibold tracking-medium mb-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Managed "
                                                        }),
                                                        " ",
                                                        "cybersecurity services"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {
                                                    variants: _components_constants_animations__WEBPACK_IMPORTED_MODULE_6__/* .scrollVariant */ .Rk,
                                                    animate: "visible",
                                                    initial: "hidden",
                                                    className: "text-lg text-justify",
                                                    children: [
                                                        "We specialize in providing a wide range of cybersecurity services to help organizations protect their sensitive information and infrastructure from cyber threats. Our security platform offers a comprehensive set of tools and technologies to help businesses manage cyber risks and stay compliant with regulatory requirements.",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "One of the key services offered by us is threat management, which involves identifying, analyzing and mitigating potential cyber threats before they can cause damage to the organization. We also provide managed detection and response, which allows businesses to quickly detect and respond to security incidents in real-time. Additionally, we offer managed cloud security to help protect sensitive data and applications hosted in the cloud, and provide data backup solutions to ensure that critical information can be recovered in the event of a disaster. We also provide identity verification services to help organizations secure their digital identities and prevent unauthorized access to sensitive information. All these services are backed by a global network that ensures zero downtime and maximum availability."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex items-center overflow-x-hidden justify-around rounded tablet:flex-col tablet:m-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pl-10 w-[60%] mx-10 flex flex-col h-full justify-center tablet:pl-5 tablet:w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-5xl font-semibold tablet:text-2xl tracking-medium mb-8 tablet:mb-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "Managed "
                                                        }),
                                                        "Network Security Services"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "leading-8 text-xl tablet:text-lg",
                                                    children: [
                                                        "The company specializes in providing network security services to help organizations protect their networks and infrastructure from cyber threats. They offer a range of solutions that can be tailored to meet the specific needs of different types of businesses.",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "One of the key services offered by the company is Secure Access Service Edge (SASE), which combines network security functions like firewall, VPN, and zero trust network access into a single, cloud-native platform. This allows businesses to secure their networks and remote users with a unified solution. Additionally, the company offers managed firewall services, which involves managing and monitoring the organization",
                                                        "'",
                                                        "s firewall to ensure that it is configured correctly and is able to detect and prevent cyber threats. The managed firewall service can be provided for various firewall solutions such as Next-Generation Firewall (NGFW), Stateful Firewall, and Application Firewall. The company also provides regular updates and patches to ensure that the firewall is up-to-date with the latest security features and threat intelligence."
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "bg-primary-orange w-32 rounded-xl font-semibold text-white py-3 px-6 my-6",
                                                    children: "Reach Us"
                                                }),
                                                "    "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[40%]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058153/21ctl/logo/threat-protection_usjnjk.png",
                                                className: "rounded-2xl"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "px-20 mt-20 vision-mission-section tablet:px-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " mr-0 flex justify-around items-center tablet:m-10 tablet:flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center justify-start w-[50%] tablet:w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058146/21ctl/logo/ddos-protection_bsxw5k.png",
                                                    className: "",
                                                    height: 581,
                                                    width: 444
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[60%] tablet:w-full",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tablet:my-5 mb-4 ",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                            className: "text-5xl font-semibold tablet:text-2xl tracking-medium mb-8 tablet:mb-2",
                                                            children: [
                                                                "Security   ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-primary-orange",
                                                                    children: "Expert Training "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "text-[18px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px] mb-4",
                                                            children: [
                                                                "The company specializes in providing security expert training services to help organizations develop the skills and knowledge needed to protect their networks and infrastructure from cyber threats. They offer a wide range of training programs that can be tailored to meet the specific needs of different types of businesses and organizations.",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                "One of the key services offered by the company is training in threat management, which involves teaching personnel how to identify, analyze and mitigate potential cyber threats before they can cause damage to the organization. The company also provides training in cloud security, which helps individuals understand how to secure and protect sensitive data and applications hosted in the cloud. Additionally, the company offers training in security administration, which covers the basics of security operations such as how to create and implement security policies, how to use security tools and technologies, and how to identify and respond to security incidents. All training is provided by certified security experts with years of experience in the field. The company also provides certifications for the trainees that can boost their career opportunities."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6",
                                                            children: "Read more"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " mr-0 mt-20 flex justify-between items-center tablet:m-10 tablet:flex-col-reverse",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[40%] tablet:w-full",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tablet:my-5 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "text-4xl font-semibold tablet:text-2xl tracking-medium mb-8 tablet:mb-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-primary-orange",
                                                                children: "Managed Security Operations Center Services "
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[18px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px] mb-4",
                                                            children: "21CTL Managed SOC Services offers real-time threat intelligence, data processing and incident response for cost-effective enterprise security"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6",
                                                            children: "Read more"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center justify-end w-[50%] tablet:w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/security_operations_r2jwsl.svg",
                                                    className: "",
                                                    height: 581,
                                                    width: 444
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "mx-20 my-20 tablet:mx-0 tablet:my-10",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " mr-0 flex justify-between items-center tablet:m-10 tablet:flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[50%] tablet:w-full",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tablet:my-5 mb-4 w-4/5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-5xl font-semibold tablet:text-2xl tracking-medium mb-8 tablet:mb-2 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-primary-orange",
                                                            children: "SmartBackup "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-[18px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px] mb-4",
                                                        children: [
                                                            "SmartBackup is an automated configuration backup solution that schedules automatic backups, monitors them from a dashboard interface, performs automatic network configuration backup procedures, verifies that they",
                                                            "'",
                                                            "ve been completed correctly, and provides easy management of devices for compliance."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6",
                                                        children: "Read more"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center justify-end w-[50%] tablet:w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058156/21ctl/logo/security-back-up_iyukbr.svg",
                                                className: "w-full"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$_, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout___WEBPACK_IMPORTED_MODULE_4__/* .SocialIcons */ .HE, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Security);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;