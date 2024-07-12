"use client";

import { Icon } from "@iconify/react";
import { ReactLenis } from "lenis/react";

export default function Home() {
    return (
        <ReactLenis root>
            <main className="bg-stone-100">
                <div className="rounded-b-[6rem] bg-stone-200 size-full flex items-center min-h-screen">
                    <div className="container text-center flex flex-col gap-10">
                        <svg
                            className="w-96 stroke-stone-800 mx-auto"
                            viewBox="0 0 969 438"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M376.51 193.814C376.51 193.814 358.007 195.816 345.01 190.314C310.561 175.73 293.955 152.314 273.51 120.314M376.51 193.814C376.51 193.814 479.5 175.3 544.51 184.814C585.51 190.814 637.997 207.722 697.51 199.814C742.566 193.827 764.456 175.999 808.51 164.814C824.442 160.769 849.51 155.296 849.51 155.296M376.51 193.814C376.51 193.814 371.475 183.971 357.51 166.814C346.13 152.833 326.546 133.322 317.51 115.814C297.386 76.8213 291.035 13.9314 284.51 7.81402C276.51 0.314006 260.51 -0.185988 253.51 7.81402C246.51 15.814 260.079 40.7257 264.288 61.814C268.497 82.9023 273.51 120.314 273.51 120.314M273.51 120.314C268.997 115.628 265.507 110.006 263.51 103.814C253.51 72.814 232.51 23.314 222.51 15.814C212.82 8.54653 193.51 14.7015 193.51 26.814C193.51 37.314 217.988 79.5395 222.51 115.814C225.457 139.453 222.51 152.992 222.51 176.814C222.51 234.814 257.01 295.314 241.51 324.314C235.656 335.267 164.333 350.593 123.01 324.314C93.6744 305.658 84.9121 275.211 63.5101 247.814C40.3792 218.204 12.5102 171.814 4.51008 171.814C-4.9239 171.814 13.5101 247.814 38.5101 289.814C66.9787 337.641 78.6842 380.283 131.51 397.814C183.414 415.039 261.51 363.914 268.51 368.814C283.51 379.314 338.162 421.795 391.01 432.314C440.335 442.131 470.246 428.482 520.51 426.814C571.25 425.13 607.854 427.191 658.51 423.814C733.51 418.814 786.51 402.314 829.51 384.814C853.823 374.919 878.01 388.314 902.51 376.814C918.345 369.381 938.01 353.314 945.51 336.814C955.077 315.767 966.51 272.814 966.51 272.814C966.51 272.814 960.047 276.738 955.51 278.314C950.988 279.885 943.51 280.814 943.51 280.814L929.51 252.814C929.51 252.814 935.532 241.957 936.01 234.314C936.454 227.209 932.51 216.424 932.51 216.424C922.51 225.814 917.01 230.814 905.51 236.814C905.51 236.814 879.293 223.467 864.51 225.814C844.599 228.975 820.51 252.814 820.51 252.814C820.51 252.814 816.564 241.5 811.01 236.814C803.481 230.462 786.51 230.814 786.51 230.814C786.51 230.814 817.01 199.814 859.01 191.314C872.494 188.585 907.036 168.965 902.51 147.314C900.756 138.922 899.847 134.815 891.51 132.814C879.01 129.814 876.622 147.395 864.51 151.814C858.861 153.875 849.51 155.296 849.51 155.296M715.51 196.582C715.51 196.582 736.454 180.761 760.01 168.814C775.839 160.787 793.01 155.296 804.51 147.314C817.883 138.032 833.01 112.673 840.01 110.173C847.01 107.673 862.01 112.814 862.01 122.173C862.01 134.173 849.51 155.296 849.51 155.296"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="space-y-2">
                            <span className="uppercase tracking-widest text-gray-500">
                                Discover the Magic of Code
                            </span>
                            <h1 className="text-8xl font-black max-w-[40rem] w-full mx-auto">
                                Welcome to Powland
                            </h1>
                        </div>
                        <button className="mx-auto relative group">
                            <span className="bg-white group-hover:bg-stone-50 transition-all py-6 px-12 rounded-full text-stone-800 block relative z-10">
                                Explore the Powland
                            </span>
                            <Icon
                                icon="tabler:paw"
                                className="rotate-12 absolute top-0 -right-6 text-xl -translate-x-10 translate-y-6 transition-all group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                            <Icon
                                icon="tabler:paw"
                                className="rotate-[24deg] absolute top-6 -right-8 text-xl -translate-x-12 transition-all group-hover:translate-x-0"
                            />
                            <Icon
                                icon="tabler:paw"
                                className="-rotate-[45deg] absolute bottom-0 -left-6 text-xl translate-x-10 transition-all -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                            <Icon
                                icon="tabler:paw"
                                className="-rotate-12 absolute bottom-6 -left-8 text-xl translate-x-12 transition-all group-hover:translate-x-0"
                            />
                        </button>
                    </div>
                </div>
            </main>
            <section className="py-36 rounded-b-[6rem] bg-stone-100">
                <div className="container space-y-16">
                    <div className="space-y-2 text-center">
                        <span className="uppercase tracking-widest text-gray-500 text-sm">
                            Explore My Creations
                        </span>
                        <h2 className="text-3xl font-thin">Powjects</h2>
                    </div>
                    <div className="space-y-10">
                        <div className="grid grid-cols-2 gap-10 items-center">
                            <div className="aspect-video w-full rounded-3xl overflow-hidden">
                                <img
                                    src="https://placehold.co/1600x900"
                                    alt=""
                                    className="size-full"
                                />
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-5xl font-medium">
                                    Nametopia
                                </h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Aliquam ex, voluptates
                                    libero officia quibusdam exercitationem
                                    dolorem iusto pariatur tempora commodi
                                    minima ad est aut quae vel, autem illum amet
                                    aliquid!
                                </p>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Role
                                        </span>
                                        <span>Frontend, Backend UI/UX</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Stack
                                        </span>
                                        <span>React, Next.js</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 border border-stone-400 py-3 px-6 rounded-full text-stone-600 hover:bg-stone-300 transition-all"
                                    >
                                        Visit site
                                        <Icon
                                            icon="tabler:external-link"
                                            className="text-xl"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 bg-stone-800 py-3 px-6 rounded-full text-stone-200 hover:bg-stone-700 transition-all"
                                    >
                                        Source Code
                                        <Icon
                                            icon="tabler:brand-github"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 items-center">
                            <div className="aspect-video w-full rounded-3xl overflow-hidden">
                                <img
                                    src="https://placehold.co/1600x900"
                                    alt=""
                                    className="size-full"
                                />
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-5xl font-medium">
                                    Nametopia
                                </h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Aliquam ex, voluptates
                                    libero officia quibusdam exercitationem
                                    dolorem iusto pariatur tempora commodi
                                    minima ad est aut quae vel, autem illum amet
                                    aliquid!
                                </p>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Role
                                        </span>
                                        <span>Frontend, Backend UI/UX</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Stack
                                        </span>
                                        <span>React, Next.js</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 border border-stone-400 py-3 px-6 rounded-full text-stone-600 hover:bg-stone-300 transition-all"
                                    >
                                        Visit site
                                        <Icon
                                            icon="tabler:external-link"
                                            className="text-xl"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 bg-stone-800 py-3 px-6 rounded-full text-stone-200 hover:bg-stone-700 transition-all"
                                    >
                                        Source Code
                                        <Icon
                                            icon="tabler:brand-github"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 items-center">
                            <div className="aspect-video w-full rounded-3xl overflow-hidden">
                                <img
                                    src="https://placehold.co/1600x900"
                                    alt=""
                                    className="size-full"
                                />
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-5xl font-medium">
                                    Nametopia
                                </h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Aliquam ex, voluptates
                                    libero officia quibusdam exercitationem
                                    dolorem iusto pariatur tempora commodi
                                    minima ad est aut quae vel, autem illum amet
                                    aliquid!
                                </p>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Role
                                        </span>
                                        <span>Frontend, Backend UI/UX</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Stack
                                        </span>
                                        <span>React, Next.js</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 border border-stone-400 py-3 px-6 rounded-full text-stone-600 hover:bg-stone-300 transition-all"
                                    >
                                        Visit site
                                        <Icon
                                            icon="tabler:external-link"
                                            className="text-xl"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 bg-stone-800 py-3 px-6 rounded-full text-stone-200 hover:bg-stone-700 transition-all"
                                    >
                                        Source Code
                                        <Icon
                                            icon="tabler:brand-github"
                                            className="text-xl"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-36">
                <div className="container space-y-16">
                    <div className="space-y-2 text-center">
                        <span className="uppercase tracking-widest text-gray-500 text-sm">
                            My Career Path
                        </span>
                        <h2 className="text-3xl font-thin">
                            Powfessional Journey
                        </h2>
                    </div>
                    <div className="space-y-10 relative flex flex-col items-center">
                        <div className="w-2 h-full bg-stone-800 absolute z-0 rounded-full"></div>
                        <div className="flex justify-center gap-10 w-full relative">
                            <div className="max-w-lg w-full bg-stone-100 rounded-lg relative">
                                <div className="bg-stone-800 px-8 py-6 grid place-items-center rounded-t-lg">
                                    <img
                                        src="https://www.lskk.co.id/wp-content/uploads/2024/06/Artboard-5@300x-e1718107755849.png"
                                        alt=""
                                        className="h-12"
                                    />
                                </div>
                                <div className="p-8 flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">
                                            Fulltime
                                        </span>
                                        <span className="text-gray-500">
                                            Bandung, Indonesia
                                        </span>
                                    </div>
                                    <h3 className="text-2xl">
                                        Full Stack Developer
                                    </h3>
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Officiis soluta
                                        molestiae saepe quod fugit. Voluptatum
                                        inventore blanditiis ullam doloremque
                                        optio placeat. Nam, perspiciatis natus
                                        dicta ea quam quaerat atque impedit?
                                    </p>
                                </div>
                                <div className="size-6 rounded rotate-45 bg-stone-800 absolute top-5 right-1 translate-x-1/2"></div>
                            </div>
                            <div className="size-14 rounded-full grid place-items-center bg-stone-800 text-white text-2xl">
                                <Icon icon="tabler:briefcase" />
                            </div>
                            <div className="max-w-lg w-full mt-4">
                                <p>August 2022</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-10 w-full relative">
                            <div className="max-w-lg w-full mt-4 text-right">
                                <p>August 2022</p>
                            </div>
                            <div className="size-14 rounded-full grid place-items-center bg-stone-800 text-white text-2xl">
                                <Icon icon="tabler:briefcase" />
                            </div>
                            <div className="max-w-lg w-full bg-stone-100 rounded-lg relative">
                                <div className="bg-stone-800 px-8 py-6 grid place-items-center rounded-t-lg">
                                    <img
                                        src="https://www.lskk.co.id/wp-content/uploads/2024/06/Artboard-5@300x-e1718107755849.png"
                                        alt=""
                                        className="h-12"
                                    />
                                </div>
                                <div className="p-8 flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">
                                            Fulltime
                                        </span>
                                        <span className="text-gray-500">
                                            Bandung, Indonesia
                                        </span>
                                    </div>
                                    <h3 className="text-2xl">
                                        Full Stack Developer
                                    </h3>
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Officiis soluta
                                        molestiae saepe quod fugit. Voluptatum
                                        inventore blanditiis ullam doloremque
                                        optio placeat. Nam, perspiciatis natus
                                        dicta ea quam quaerat atque impedit?
                                    </p>
                                </div>
                                <div className="size-6 rounded rotate-45 bg-stone-800 absolute top-5 left-1 -translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-stone-200">
                <div className="rounded-t-[6rem] bg-stone-100 py-36">
                    <div className="container space-y-16">
                        <div className="space-y-2 text-center">
                            <span className="uppercase tracking-widest text-gray-500 text-sm">
                                Get to Know Me
                            </span>
                            <h2 className="text-3xl font-thin">About Pow</h2>
                        </div>
                        <svg
                            className="stroke-stone-800 h-40 mx-auto"
                            viewBox="0 0 828 448"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M643.099 160.041C634.599 167.041 620.667 178.829 615.099 180.541C609.531 182.253 593.501 178.763 581.099 183.541C568.174 188.521 554.099 206.541 554.099 206.541C554.099 206.541 565.733 205.65 573.099 206.541C578.65 207.213 585.099 208.041 587.099 209.541C589.431 211.291 573.599 243.041 581.099 268.541C588.599 294.041 615.432 322.541 627.099 326.041C638.766 329.541 655.821 330.911 674.599 329.541C690.336 328.394 714.599 322.041 714.599 322.041C734.099 315.041 747.099 295.541 752.599 264.541C752.599 264.541 761.851 260.319 768.099 260.541C773.594 260.737 781.599 264.541 781.599 264.541C781.599 264.541 781.434 249.082 776.599 241.041C771.444 232.47 756.599 225.041 756.599 225.041"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M713.599 322.541C723.98 327.564 729.567 338.041 741.099 338.041C785.099 338.041 825.099 273.886 825.099 216.041C825.099 192.041 798.481 123.109 753.099 88.0414C687.099 37.0414 553.326 -12.7074 421.099 6.04136C287.099 25.0414 144.099 118.041 179.099 256.041C186.454 285.041 168.599 326.541 149.099 350.041C134.595 367.521 111.099 374.541 52.5988 391.041C23.7186 399.187 -3.90118 435.041 3.09879 444.041C10.0988 453.041 83.0988 426.041 128.099 417.041C158.677 410.926 176.361 402.027 201.099 383.041C216.358 371.33 226.842 353.857 232.099 337.041C244.599 311.041 246.149 301.876 264.099 298.041C336.467 282.581 367.993 316.063 393.599 325.541C406.914 330.47 423.007 325.41 433.099 311.041C438.367 303.541 428.599 285.041 412.599 281.041C406.599 279.541 391.099 278.041 391.099 278.041C391.099 262.958 463.099 262.541 532.099 284.041C555.599 291.364 576.099 293.041 591.599 293.041"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M679.099 305.041C675.328 304.975 670.099 308.541 670.099 308.541C670.099 308.541 675.259 312.317 679.099 312.541C682.983 312.768 688.599 309.541 688.599 309.541C688.599 309.541 683.203 305.113 679.099 305.041Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M682.599 301.541C676.355 299.902 666.499 302.541 666.099 304.041C665.492 306.321 672.45 312.671 679.599 312.541C684.838 312.447 693.099 307.041 693.099 307.041C693.099 307.041 687.076 302.717 682.599 301.541Z"
                                fillOpacity="0.5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M624.099 290.041C621.841 289.413 615.599 291.041 615.599 291.041C615.599 291.041 619.253 295.093 622.099 296.041C626.599 297.541 631.599 296.041 631.599 296.041C631.599 296.041 626.552 290.724 624.099 290.041Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M617.599 286.541L611.599 286.541C611.599 286.541 615.806 296.128 623.099 297.041C627.817 297.632 634.255 296.541 634.599 294.541C634.771 293.541 633.399 289.254 629.099 287.541C624.911 285.873 620.148 286.541 617.599 286.541Z"
                                fillOpacity="0.5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M640.099 326.541C640.099 325.541 631.348 323.46 629.721 324.172C628.095 324.883 629.715 327.033 634.047 327.758C638.379 328.484 640.099 328.071 640.099 326.541Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="max-w-3xl w-full mx-auto space-y-8">
                            <div className="flex gap-8">
                                <p className="w-full">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam eligendi quidem
                                    dolorum molestias? Repellat sit, ad odio
                                    quis earum, animi dolorum reiciendis
                                    expedita voluptatum labore illum, sequi
                                    nostrum porro! Perspiciatis.
                                </p>
                                <div className="w-[1px] bg-stone-300"></div>
                                <div className="w-full space-y-2">
                                    <p>Some power that i use:</p>
                                    <ul className="list-disc list-inside">
                                        <li>HTML/CSS/Tailwind CSS</li>
                                        <li>JavaScript/React/Next.js/Svelte</li>
                                        <li>PHP/Laravel</li>
                                        <li>Git</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center space-y-4">
                                <h3 className="text-xl">Stay Pownected</h3>
                                <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap">
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        chat@pow.kim
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        X (formerly Twitter)
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        Threads
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        Discord (Me)
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-500 hover:underline hover:text-stone-800"
                                    >
                                        Discord (Community)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-stone-100">
                <div className="rounded-t-[6rem] bg-stone-200 py-36">
                    <div className="container space-y-16">
                        <div className="space-y-2 text-center">
                            <span className="uppercase tracking-widest text-gray-500 text-sm">
                                Thoughts & Tutorials
                            </span>
                            <h2 className="text-3xl font-thin">
                                Pownderful Insights
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 gap-20">
                            <div className="space-y-4 border-b border-stone-300 pb-6">
                                <div className="relative flex items-center justify-center">
                                    <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                    <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                        Thought
                                    </span>
                                </div>
                                <h3 className="text-xl">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit
                                </h3>
                                <p className="line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cumque, illo! Maiores nemo
                                    necessitatibus laudantium, consequuntur
                                    veritatis eos reprehenderit id sapiente,
                                    mollitia laborum fugiat enim molestiae
                                    error. Nisi, architecto sint! Voluptas.
                                </p>
                            </div>
                            <div className="space-y-4 border-b border-stone-300 pb-6">
                                <div className="relative flex items-center justify-center">
                                    <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                    <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                        Thought
                                    </span>
                                </div>
                                <h3 className="text-xl">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit
                                </h3>
                                <p className="line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cumque, illo! Maiores nemo
                                    necessitatibus laudantium, consequuntur
                                    veritatis eos reprehenderit id sapiente,
                                    mollitia laborum fugiat enim molestiae
                                    error. Nisi, architecto sint! Voluptas.
                                </p>
                            </div>
                            <div className="space-y-4 border-b border-stone-300 pb-6">
                                <div className="relative flex items-center justify-center">
                                    <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                    <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                        Thought
                                    </span>
                                </div>
                                <h3 className="text-xl">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit
                                </h3>
                                <p className="line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cumque, illo! Maiores nemo
                                    necessitatibus laudantium, consequuntur
                                    veritatis eos reprehenderit id sapiente,
                                    mollitia laborum fugiat enim molestiae
                                    error. Nisi, architecto sint! Voluptas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ReactLenis>
    );
}
