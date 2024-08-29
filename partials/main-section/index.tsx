'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

type Props = {};

const MainSection = (props: Props) => {
    return (
        <main className="bg-stone-100">
            <div className="flex size-full min-h-dvh items-center rounded-b-[6rem] bg-stone-200">
                <div className="container flex flex-col gap-10 text-center">
                    <motion.svg
                        className="mx-auto w-full max-w-96 stroke-stone-800"
                        viewBox="0 0 969 438"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.path
                            d="M376.51 193.814C376.51 193.814 358.007 195.816 345.01 190.314C310.561 175.73 293.955 152.314 273.51 120.314M376.51 193.814C376.51 193.814 479.5 175.3 544.51 184.814C585.51 190.814 637.997 207.722 697.51 199.814C742.566 193.827 764.456 175.999 808.51 164.814C824.442 160.769 849.51 155.296 849.51 155.296M376.51 193.814C376.51 193.814 371.475 183.971 357.51 166.814C346.13 152.833 326.546 133.322 317.51 115.814C297.386 76.8213 291.035 13.9314 284.51 7.81402C276.51 0.314006 260.51 -0.185988 253.51 7.81402C246.51 15.814 260.079 40.7257 264.288 61.814C268.497 82.9023 273.51 120.314 273.51 120.314M273.51 120.314C268.997 115.628 265.507 110.006 263.51 103.814C253.51 72.814 232.51 23.314 222.51 15.814C212.82 8.54653 193.51 14.7015 193.51 26.814C193.51 37.314 217.988 79.5395 222.51 115.814C225.457 139.453 222.51 152.992 222.51 176.814C222.51 234.814 257.01 295.314 241.51 324.314C235.656 335.267 164.333 350.593 123.01 324.314C93.6744 305.658 84.9121 275.211 63.5101 247.814C40.3792 218.204 12.5102 171.814 4.51008 171.814C-4.9239 171.814 13.5101 247.814 38.5101 289.814C66.9787 337.641 78.6842 380.283 131.51 397.814C183.414 415.039 261.51 363.914 268.51 368.814C283.51 379.314 338.162 421.795 391.01 432.314C440.335 442.131 470.246 428.482 520.51 426.814C571.25 425.13 607.854 427.191 658.51 423.814C733.51 418.814 786.51 402.314 829.51 384.814C853.823 374.919 878.01 388.314 902.51 376.814C918.345 369.381 938.01 353.314 945.51 336.814C955.077 315.767 966.51 272.814 966.51 272.814C966.51 272.814 960.047 276.738 955.51 278.314C950.988 279.885 943.51 280.814 943.51 280.814L929.51 252.814C929.51 252.814 935.532 241.957 936.01 234.314C936.454 227.209 932.51 216.424 932.51 216.424C922.51 225.814 917.01 230.814 905.51 236.814C905.51 236.814 879.293 223.467 864.51 225.814C844.599 228.975 820.51 252.814 820.51 252.814C820.51 252.814 816.564 241.5 811.01 236.814C803.481 230.462 786.51 230.814 786.51 230.814C786.51 230.814 817.01 199.814 859.01 191.314C872.494 188.585 907.036 168.965 902.51 147.314C900.756 138.922 899.847 134.815 891.51 132.814C879.01 129.814 876.622 147.395 864.51 151.814C858.861 153.875 849.51 155.296 849.51 155.296M715.51 196.582C715.51 196.582 736.454 180.761 760.01 168.814C775.839 160.787 793.01 155.296 804.51 147.314C817.883 138.032 833.01 112.673 840.01 110.173C847.01 107.673 862.01 112.814 862.01 122.173C862.01 134.173 849.51 155.296 849.51 155.296"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={{
                                hidden: {
                                    pathLength: 0,
                                    opacity: 0
                                },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: {
                                        pathLength: {
                                            type: 'spring',
                                            duration: 5,
                                            bounce: 0
                                        },
                                        opacity: {
                                            duration: 1
                                        }
                                    }
                                }
                            }}
                        />
                    </motion.svg>
                    <div className="flex flex-col space-y-2">
                        <motion.span
                            className="uppercase tracking-widest"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: -100
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        opacity: {
                                            delay: 0.2,
                                            duration: 1.5
                                        },
                                        y: {
                                            type: 'spring',
                                            delay: 0.2,
                                            stiffness: 100,
                                            duration: 3
                                        }
                                    }
                                }
                            }}
                        >
                            Discover the Magic of Code
                        </motion.span>
                        <motion.h1
                            className="mx-auto w-full max-w-[40rem] text-6xl font-bold sm:text-8xl"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        opacity: {
                                            duration: 1.5
                                        },
                                        y: {
                                            type: 'spring',
                                            stiffness: 100,
                                            duration: 3
                                        }
                                    }
                                }
                            }}
                        >
                            Welcome to Powland
                        </motion.h1>
                    </div>
                    <motion.a
                        href="#powjects"
                        className="group relative mx-auto"
                        whileHover={{ scale: 1.1, rotate: -8 }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 100
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    opacity: {
                                        delay: 0.2,
                                        duration: 0.75
                                    },
                                    y: {
                                        type: 'spring',
                                        delay: 0.2,
                                        stiffness: 100,
                                        duration: 1.5
                                    }
                                }
                            }
                        }}
                    >
                        <span className="relative z-10 block rounded-full bg-white px-12 py-6 text-stone-800 transition-all group-hover:bg-stone-50">
                            Explore the Powland
                        </span>
                        <Icon
                            icon="tabler:paw"
                            className="absolute -right-6 top-0 -translate-x-10 translate-y-6 rotate-12 text-xl transition-all group-hover:translate-x-0 group-hover:translate-y-0"
                        />
                        <Icon
                            icon="tabler:paw"
                            className="absolute -right-8 top-6 -translate-x-12 rotate-[24deg] text-xl transition-all group-hover:translate-x-0"
                        />
                        <Icon
                            icon="tabler:paw"
                            className="absolute -left-6 bottom-0 -translate-y-6 translate-x-10 -rotate-[45deg] text-xl transition-all group-hover:translate-x-0 group-hover:translate-y-0"
                        />
                        <Icon
                            icon="tabler:paw"
                            className="absolute -left-8 bottom-6 translate-x-12 -rotate-12 text-xl transition-all group-hover:translate-x-0"
                        />
                    </motion.a>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
