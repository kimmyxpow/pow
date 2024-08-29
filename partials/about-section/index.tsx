import SectionHeader from '@/components/section-header';
import { initPocketBase } from '@/utils/init-pocketbase';

type Props = {};

const AboutSection = async (props: Props) => {
    const pb = await initPocketBase();
    const result = await pb.collection('socials').getFullList();

    return (
        <section className="bg-stone-200" id="about-pow">
            <div className="rounded-t-[6rem] bg-stone-100 py-36">
                <div className="container space-y-16">
                    <SectionHeader title="About Pow" subtitle="Get to Know Me" />
                    <svg
                        className="timeline-view mx-auto h-40 animate-[down-up] stroke-stone-800"
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
                    <div className="mx-auto w-full max-w-3xl space-y-8">
                        <div className="flex flex-col gap-8 md:flex-row">
                            <p className="timeline-view w-full animate-[left-right]">
                                A software engineer skilled in both backend and frontend development. i also have a good
                                foundation in design, which helps me create functional and visually appealing
                                applications. in my free time, i enjoy playing with cats and exploring the latest
                                technologies :))
                            </p>
                            <div className="h-[1px] bg-stone-300 md:h-auto md:w-[1px]"></div>
                            <div className="timeline-view range w-full animate-[right-left] space-y-2">
                                <p>Some power that i use:</p>
                                <ul className="list-inside list-disc">
                                    <li>HTML/CSS/Tailwind CSS</li>
                                    <li>JavaScript/React.js/Next.js/Svelte</li>
                                    <li>PHP/Laravel</li>
                                    <li>Node.js/AdonisJs/NestJs/Hono/Bun</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-view range animate-[down-up] space-y-4 text-center">
                            <h3 className="text-xl">Stay Pownected</h3>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                                {result.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-stone-500 hover:text-stone-800 hover:underline"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
