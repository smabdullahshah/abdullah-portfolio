(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(3538)
            }])
        },
        3538: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return L
                },
                default: function() {
                    return Z
                }
            });
            var n = a(5893),
                o = a(5152),
                s = a.n(o),
                i = a(8122),
                l = a(7294),
                r = a(9008),
                c = a.n(r),
                m = function() {
                    return (0, n.jsxs)(c(), {
                        children: [(0, n.jsx)("title", {
                            children: i.hD.title
                        }), (0, n.jsx)("meta", {
                            name: "title",
                            content: i.hD.title
                        }), (0, n.jsx)("meta", {
                            name: "author",
                            content: i.hD.author
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: i.hD.description
                        }), (0, n.jsx)("meta", {
                            name: "keywords",
                            content: i.hD.keywords.join(", ")
                        }), (0, n.jsx)("link", {
                            rel: "canonical",
                            href: i.hD.url
                        }), (0, n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: i.hD.url
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: i.hD.title
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: i.hD.description
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: i.hD.image
                        }), (0, n.jsx)("meta", {
                            property: "og:site_name",
                            content: i.hD.title
                        }), (0, n.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), (0, n.jsx)("meta", {
                            property: "twitter:url",
                            content: i.hD.url
                        }), (0, n.jsx)("meta", {
                            property: "twitter:title",
                            content: i.hD.title
                        }), (0, n.jsx)("meta", {
                            property: "twitter:description",
                            content: i.hD.description
                        }), (0, n.jsx)("meta", {
                            property: "twitter:image",
                            content: i.hD.image
                        }), (0, n.jsx)("meta", {
                            name: "robots",
                            content: "Index"
                        }), (0, n.jsx)("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: "./favicon.png"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "./favicon.png"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "./favicon.png"
                        })]
                    })
                },
                d = a(5247),
                u = a(4184),
                p = a.n(u),
                g = a(6362);
            let h = e => {
                let {
                    message: t,
                    color: a,
                    icon: o
                } = e;
                return (0, n.jsxs)(g.Z, {
                    color: a,
                    children: [(0, n.jsx)("span", {
                        className: "alert-inner--icon",
                        children: (0, n.jsx)("i", {
                            className: o
                        })
                    }), (0, n.jsx)("span", {
                        className: "alert-inner--text",
                        children: (0, n.jsx)("strong", {
                            children: t
                        })
                    })]
                })
            };
            var f = a(8595),
                j = a(267),
                w = a(1252),
                k = a(6941),
                b = a(1121),
                x = a(2669),
                N = a(9618),
                y = a(8822),
                S = a(1566),
                A = a(609),
                v = a(7975);
            let D = () => {
                    let e = (0, l.useRef)(null),
                        [t, a] = (0, l.useState)(null),
                        o = {
                            color: "success",
                            icon: "ni ni-like-2",
                            message: " Your message has been sent successfully!"
                        },
                        s = {
                            color: "danger",
                            icon: "ni ni-bell-55",
                            message: " Oops! Something went wrong. Please try again later."
                        };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("section", {
                            className: "section section-lg section-shaped",
                            children: (0, n.jsxs)("form", {
                                ref: e,
                                onSubmit: t => {
                                    t.preventDefault(), console.log("submitting"), console.log(e.current);
                                    let n = "YOUR_SERVICE_ID",
                                        i = "YOUR_TEMPLATE_ID",
                                        l = "YOUR_PUBLIC_KEY";
                                    e.current && d.ZP.sendForm(n, i, e.current, l).then((e => {
                                        console.log(e.text), a(o)
                                    }), (e => {
                                        console.log(e.text), a(s)
                                    }))
                                },
                                children: [t && (0, n.jsx)(h, {
                                    color: t.color,
                                    icon: t.icon,
                                    message: t.message
                                }), (0, n.jsx)(f.Z, {
                                    children: (0, n.jsx)(j.Z, {
                                        className: "justify-content-center",
                                        children: (0, n.jsx)(w.Z, {
                                            lg: "8",
                                            children: (0, n.jsx)(k.Z, {
                                                className: "bg-gradient-secondary shadow",
                                                children: (0, n.jsxs)(b.Z, {
                                                    className: "p-lg-5",
                                                    children: [(0, n.jsx)("h4", {
                                                        className: "mb-1",
                                                        children: "Want to work with me?"
                                                    }), (0, n.jsx)("p", {
                                                        className: "mt-0",
                                                        children: "Reach out to me using the form below."
                                                    }), (0, n.jsx)(x.Z, {
                                                        className: p()("mt-5", {}),
                                                        children: (0, n.jsxs)(N.Z, {
                                                            className: "input-group-alternative",
                                                            children: [(0, n.jsx)(y.Z, {
                                                                addonType: "prepend",
                                                                children: (0, n.jsx)(S.Z, {
                                                                    children: (0, n.jsx)("i", {
                                                                        className: "ni ni-user-run"
                                                                    })
                                                                })
                                                            }), (0, n.jsx)(A.Z, {
                                                                placeholder: "Your name",
                                                                type: "text",
                                                                name: "user_name"
                                                            })]
                                                        })
                                                    }), (0, n.jsx)(x.Z, {
                                                        className: p()({}),
                                                        children: (0, n.jsxs)(N.Z, {
                                                            className: "input-group-alternative",
                                                            children: [(0, n.jsx)(y.Z, {
                                                                addonType: "prepend",
                                                                children: (0, n.jsx)(S.Z, {
                                                                    children: (0, n.jsx)("i", {
                                                                        className: "ni ni-email-83"
                                                                    })
                                                                })
                                                            }), (0, n.jsx)(A.Z, {
                                                                placeholder: "Email address",
                                                                name: "user_email",
                                                                type: "email"
                                                            })]
                                                        })
                                                    }), (0, n.jsx)(x.Z, {
                                                        className: "mb-4",
                                                        children: (0, n.jsx)(A.Z, {
                                                            className: "form-control-alternative",
                                                            cols: "80",
                                                            name: "user_message",
                                                            placeholder: "Type a message...",
                                                            rows: "4",
                                                            type: "textarea"
                                                        })
                                                    }), (0, n.jsx)("div", {
                                                        children: (0, n.jsx)(v.Z, {
                                                            block: !0,
                                                            className: "btn-round",
                                                            color: "default",
                                                            size: "lg",
                                                            type: "submit",
                                                            children: "Send Message"
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                C = s()((() => a.e(880).then(a.bind(a, 4880))), {
                    loadableGenerated: {
                        webpack: () => [4880]
                    }
                }),
                P = s()((() => Promise.all([a.e(296), a.e(464), a.e(471)]).then(a.bind(a, 9471))), {
                    loadableGenerated: {
                        webpack: () => [9471]
                    }
                }),
                T = s()((() => Promise.all([a.e(296), a.e(464), a.e(731), a.e(7)]).then(a.bind(a, 7007))), {
                    loadableGenerated: {
                        webpack: () => [7007]
                    }
                }),
                E = s()((() => Promise.all([a.e(296), a.e(464), a.e(41)]).then(a.bind(a, 2041))), {
                    loadableGenerated: {
                        webpack: () => [2041]
                    }
                }),
                I = s()((() => a.e(318).then(a.bind(a, 4318))), {
                    loadableGenerated: {
                        webpack: () => [4318]
                    }
                }),
                _ = s()((() => a.e(694).then(a.bind(a, 2694))), {
                    loadableGenerated: {
                        webpack: () => [2694]
                    }
                }),
                z = s()((() => a.e(668).then(a.bind(a, 4668))), {
                    loadableGenerated: {
                        webpack: () => [4668]
                    }
                }),
                R = s()((() => a.e(85).then(a.bind(a, 2085))), {
                    loadableGenerated: {
                        webpack: () => [2085]
                    }
                }),
                F = s()((() => a.e(77).then(a.bind(a, 8077))), {
                    loadableGenerated: {
                        webpack: () => [8077]
                    }
                });
            var L = !0;

            function Z(e) {
                let {
                    githubProfileData: t
                } = e;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(m, {}), (0, n.jsx)(C, {}), (0, n.jsx)(P, {}), (0, n.jsx)(T, {}), (0, n.jsx)(E, {}), (0, n.jsx)(I, {}), (0, n.jsx)(_, {}), (0, n.jsx)(R, {}), (0, n.jsx)(z, {}), i.Nd ? (0, n.jsx)(D, {}) : null, (0, n.jsx)(F, {
                        ...t
                    })]
                })
            }
        },
        8122: function(e, t, a) {
            "use strict";
            a.d(t, {
                Bv: function() {
                    return r
                },
                E5: function() {
                    return c
                },
                KK: function() {
                    return u
                },
                KT: function() {
                    return i
                },
                LO: function() {
                    return l
                },
                Nd: function() {
                    return p
                },
                b8: function() {
                    return m
                },
                c0: function() {
                    return s
                },
                hD: function() {
                    return g
                },
                q: function() {
                    return d
                }
            });
            var n = a(4134),
                o = a.n(n);
            let s = {
                    name: "Hanzla Tauqeer",
                    title: "Hi all, I'm Abdullah",
                    description: "I'm passionate Frontend developer having an experience of HTML5, CSS3, SCSS, JavaScript(ES5, ES6+), jQuery, WordPress, Bootstrap, TailWindCSS  and other CSS frameworks.",
                    resumeLink: "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing"
                },
                i = {
                    url: "https://1hanzla100.github.io/",
                    linkedin: "https://www.linkedin.com/in/1hanzla100/",
                    github: "https://github.com/1hanzla100",
                    instagram: "https://www.instagram.com/__hanzla100",
                    facebook: "https://www.facebook.com/1hanzla100",
                    twitter: "https://twitter.com/1hanzla100"
                },
                l = {
                    title: "What I do",
                    subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
                    data: [{
                        title: "Frontend Development",
                        lottieAnimationFile: "/lottie/skills/fullstack.json",
                        skills: [o()("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"), o()("⚡ Building responsive static websites using Next.js"), o()("⚡ Building RESTful APIs in Django & Django REST Framework")],
                        softwareSkills: [{
                            skillName: "HTML-5",
                            fontAwesomeClassName: "vscode-icons:file-type-html"
                        }, {
                            skillName: "CSS-3",
                            fontAwesomeClassName: "vscode-icons:file-type-css"
                        }, {
                            skillName: "JavaScript",
                            fontAwesomeClassName: "logos:javascript"
                        }, {
                            skillName: "Reactjs",
                            fontAwesomeClassName: "vscode-icons:file-type-reactjs"
                        }, {
                            skillName: "Nextjs",
                            fontAwesomeClassName: "vscode-icons:file-type-light-next"
                        }, {
                            skillName: "Python",
                            fontAwesomeClassName: "logos:python"
                        }, {
                            skillName: "Django",
                            fontAwesomeClassName: "vscode-icons:file-type-django"
                        }, {
                            skillName: "Redux",
                            fontAwesomeClassName: "logos:redux"
                        }, {
                            skillName: "NPM",
                            fontAwesomeClassName: "logos:npm-icon"
                        }, {
                            skillName: "Yarn",
                            fontAwesomeClassName: "logos:yarn"
                        }]
                    }, {
                        title: "Cloud Infra-Architecture",
                        lottieAnimationFile: "/lottie/skills/cloudinfra.json",
                        skills: [o()("⚡ Experience of working on multiple cloud platforms"), o()("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"), o()("⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions")],
                        softwareSkills: [{
                            skillName: "AWS",
                            fontAwesomeClassName: "logos:aws"
                        }, {
                            skillName: "Azure",
                            fontAwesomeClassName: "logos:microsoft-azure"
                        }, {
                            skillName: "Heroku",
                            fontAwesomeClassName: "logos:heroku-icon"
                        }, {
                            skillName: "PostgreSQL",
                            fontAwesomeClassName: "logos:postgresql"
                        }, {
                            skillName: "Github",
                            fontAwesomeClassName: "akar-icons:github-fill"
                        }, {
                            skillName: "Docker",
                            fontAwesomeClassName: "logos:docker-icon"
                        }, {
                            skillName: "Github Actions",
                            fontAwesomeClassName: "logos:github-actions"
                        }, {
                            skillName: "Cloudinary",
                            fontAwesomeClassName: "logos:cloudinary"
                        }, {
                            skillName: "Nginx",
                            fontAwesomeClassName: "logos:nginx"
                        }, {
                            skillName: "Sentry",
                            fontAwesomeClassName: "logos:sentry-icon"
                        }]
                    }, {
                        title: "Blockchain",
                        lottieAnimationFile: "/lottie/skills/ethereum.json",
                        skills: [o()("⚡ Experience in developing Smart Contract using Solidity & Ethereum"), o()("⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"), o()("⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"), o()("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"), o()("⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS")],
                        softwareSkills: [{
                            skillName: "Ethereum",
                            fontAwesomeClassName: "logos:ethereum"
                        }, {
                            skillName: "Solidity",
                            fontAwesomeClassName: "logos:solidity"
                        }, {
                            skillName: "Web3js",
                            fontAwesomeClassName: "logos:web3js"
                        }, {
                            skillName: "Metamask",
                            fontAwesomeClassName: "logos:metamask-icon"
                        }, {
                            skillName: "Ganache",
                            fontAwesomeClassName: "logos:ganache-icon"
                        }]
                    }]
                },
                r = [{
                    Stack: "Frontend/Design",
                    progressPercentage: "90"
                }, {
                    Stack: "Backend",
                    progressPercentage: "70"
                }, {
                    Stack: "Programming",
                    progressPercentage: "60"
                }],
                c = [{
                    schoolName: "Harvard University",
                    subHeader: "Master of Science in Computer Science",
                    duration: "September 2017 - April 2019",
                    desc: "Participated in the research of XXX and published 3 papers.",
                    grade: "Grade A",
                    descBullets: ["Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
                }],
                m = [{
                    role: "Frontend Developer",
                    company: "Duseca Software",
                    companyLogo: "/img/icons/common/dusecaSoftware.jpg",
                    date: "Apr 2022 – Jun 2022",
                    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries."
                }, {
                    role: "API Engineer",
                    company: "Duseca Software",
                    companyLogo: "/img/icons/common/dusecaSoftware.jpg",
                    date: "Jan 2022 – Mar 2022",
                    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server."
                }, {
                    role: "Full Stack Developer",
                    company: "Bleed-AI",
                    companyLogo: "/img/icons/common/bleedAI.jpg",
                    date: "Sept 2021 - Oct 2021",
                    desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server."
                }, {
                    role: "Backend Developer",
                    company: "Wapidu",
                    companyLogo: "/img/icons/common/wapidu.jpg",
                    date: "Sept 2021",
                    desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry."
                }],
                d = [{
                    name: "developer-portfolio",
                    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
                    github: "https://github.com/1hanzla100/developer-portfolio",
                    link: "https://developer-portfolio-1hanzla100.vercel.app/"
                }, {
                    name: "AtlasMart",
                    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
                    github: "https://github.com/1hanzla100/Django-React-Marketplace"
                }, {
                    name: "Technota (Forum)",
                    desc: "Get hands-on experience in technical skills with Technota",
                    github: "https://github.com/1hanzla100/django-react-forum"
                }, {
                    name: "Shopaza (Ecommerce)",
                    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
                    github: "https://github.com/1hanzla100/Django-ecommerce"
                }],
                u = [{
                    name: "John Smith",
                    feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
                }, {
                    name: "John Smith",
                    feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
                }],
                p = !0,
                g = {
                    title: "Hanzla Tauqeer",
                    description: "A passionate Full Stack Web Developer and Blockchain Developer.",
                    author: "Hanzla Tauqeer",
                    image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
                    url: "https://developer-portfolio-1hanzla100.vercel.app",
                    keywords: ["Hanzla", "Hanzla Tauqeer", "@1hanzla100", "1hanzla100", "Portfolio", "Hanzla Portfolio ", "Hanzla Tauqeer Portfolio"]
                }
        }
    },
    function(e) {
        e.O(0, [571, 774, 888, 179], (function() {
            return e(e.s = 8312)
        })), _N_E = e.O()
    }
]);