"use client";

import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

const Navbar = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const brand = React.useRef<HTMLAnchorElement>(null);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                brand.current?.classList.add("opacity-0");
            } else {
                brand.current?.classList.remove("opacity-0");
            }
        });
    }, []);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-20 m-2">
                <div className="container py-2 flex justify-between items-center relative z-10">
                    <a
                        href="#"
                        className="font-medium transition-all"
                        ref={brand}
                    >
                        POW
                    </a>
                    <button
                        className="bg-white h-12 w-12 flex items-center rounded-full relative z-10 overflow-hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <div
                            className={`absolute flex gap-10 min-w-[200%] left-1/2 transition-all duration-500 ${
                                open
                                    ? "-translate-x-[4.75rem]"
                                    : "-translate-x-3"
                            }`}
                        >
                            <Icon icon="tabler:paw" className="text-2xl" />
                            <Icon icon="tabler:x" className="text-2xl" />
                        </div>
                    </button>
                    <div
                        className={`fixed inset-y-0 right-0 max-w-[400px] w-full bg-stone-100 flex flex-col px-12 gap-12 justify-between py-40 pb-12 transition-all duration-500 ${
                            open ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="space-y-10">
                            <span className="text-lg uppercase tracking-widest text-gray-500">
                                Navigation
                            </span>
                            <nav className="grid gap-4">
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    Powland
                                </a>
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    Powjects
                                </a>
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    Powfessional Journey
                                </a>
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    About Pow
                                </a>
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    Pownderful Insights
                                </a>
                                <a
                                    className="text-2xl text-stone-500 group hover:text-stone-800 relative flex items-center"
                                    href="#"
                                >
                                    <Icon
                                        icon="tabler:paw"
                                        className="absolute -translate-x-full -left-2 scale-0 group-hover:scale-100 transition-all -rotate-12"
                                    />
                                    Stay Pownected
                                </a>
                            </nav>
                        </div>
                        <svg
                            viewBox="0 0 1058 497"
                            className="stroke-stone-800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M184.069 133C184.069 133 180.069 152.19 180.069 170.5C180.069 179 136.672 192.237 128.069 218.5C124.791 228.505 121.329 242.606 123.569 253M184.069 133L190.069 141M184.069 133C184.069 133 169.148 107.091 172.569 88C175.907 69.3687 198.693 48.3949 202.523 44.9809C202.882 44.6606 203.107 44.2378 203.177 43.7615L208.839 4.99314C209.101 3.2006 211.421 2.65183 212.458 4.13703L220.569 15.75L230.759 30.34C231.244 31.0352 232.103 31.3532 232.925 31.1452C238.073 29.8426 256.737 25.5254 269.069 28C281.584 30.5114 296.973 41.903 302.218 46.0145C303.195 46.7807 304.637 46.5152 305.258 45.4394L317.262 24.6316C318.048 23.2697 320 23.2775 320.718 24.6764C327.094 37.0999 349.648 82.4539 347.069 97.5C342.095 126.513 321.187 145.17 341.069 158.5C385.069 188 507.933 175.421 604.069 218.5C671.31 248.632 736.069 312.5 765.069 309.5C782.441 307.703 802.365 305.872 818.069 314.5C870.069 343.069 868.167 385.966 914.069 394.431C984.569 407.431 1051.07 424.5 1055.07 468.5C1055.69 475.292 1054.49 482.206 1048.07 484.5C1041.07 487 1014.29 467.162 989.069 461.5C964.569 456 926.869 449.345 889.069 437.5C823.465 416.942 784.069 347.5 738.069 353.5C683.827 360.575 663.569 433.5 634.069 445.5C576.303 468.998 467.069 455 382.069 465.5C344.682 470.118 310.569 497.5 289.069 494.5C275.968 492.672 267.93 479.571 271.569 465.5C275.305 451.055 303.569 444.129 303.569 444.129M375.569 384.421C380.557 386.531 383.848 387.965 384.79 388.378C384.976 388.459 385.158 388.51 385.36 388.534C388.543 388.912 416.823 392.48 421.069 400.5C425.865 409.56 417.324 415.78 409.069 417.5C385.069 422.5 363.569 422.5 332.069 428.5C319.599 430.875 303.569 444.129 303.569 444.129M375.569 384.421C356.943 376.542 314.651 359.237 282.569 350.5C227.4 335.476 191.852 345.051 136.069 332.5C96.0689 323.5 66.0689 338 28.0688 343.5C3.82157 347.009 -1.05898 333.355 3.56885 320.5C8.06883 308 34.5894 297.146 52.0688 290.5C56.6597 288.754 61.7423 287.605 67.0688 286.869M375.569 384.421C375.569 384.421 365.956 396.929 357.569 398C334.069 401 289.069 398.5 274.569 409C265.238 415.757 267.418 428.468 274.569 437.5C281.78 446.608 303.569 444.129 303.569 444.129M123.569 253C126.523 266.707 136.069 275.95 136.069 280.5C136.069 291.993 97.569 282.656 67.0688 286.869M123.569 253C123.569 253 103.505 254.535 90.5688 263C77.6332 271.465 67.0688 286.869 67.0688 286.869"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M212.069 60C212.069 62.5998 209.946 65 207.569 65C205.192 65 203.069 62.5998 203.069 60C203.069 57.5147 205.084 55.5 207.569 55.5C210.054 55.5 212.069 57.5147 212.069 60Z"
                                fillOpacity="0.8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M211.069 58C211.069 58.8284 209.95 59.5 208.569 59.5C207.188 59.5 206.069 58.8284 206.069 58C206.069 57.1716 207.188 56.5 208.569 56.5C209.95 56.5 211.069 57.1716 211.069 58Z" />
                            <path
                                d="M261.569 71.5C261.569 72.8551 260.904 74.3753 259.821 75.5711C258.734 76.7694 257.359 77.5 256.069 77.5C254.798 77.5 253.559 76.789 252.602 75.6119C251.646 74.4356 251.069 72.904 251.069 71.5C251.069 68.7386 253.307 66.5 256.069 66.5C258.936 66.5 261.569 68.8383 261.569 71.5Z"
                                fillOpacity="0.8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <ellipse cx="256.569" cy="69" rx="2.5" ry="1.5" />
                            <path
                                d="M225.069 74.6138C225.069 73.2299 221.609 71.5 220.571 71.5C219.533 71.5 216.208 73.5759 216.073 74.6138C215.939 75.6518 218.841 78.5198 219.879 78.7656C220.917 79.0114 225.069 75.9977 225.069 74.6138Z"
                                fillOpacity="0.6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M217.107 74.6138C217.107 73.8402 220.567 72.5379 220.567 72.5379C220.567 72.5379 219.069 74.261 219.069 74.6138C219.069 75.6518 220.567 78 220.567 78C220.567 78 217.107 75.3058 217.107 74.6138Z" />
                        </svg>
                    </div>
                </div>
                <div
                    className={`bg-stone-600/60 fixed inset-0 transition-all duration-500 ${
                        open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setOpen(false)}
                ></div>
            </header>
        </>
    );
};

export default Navbar;
