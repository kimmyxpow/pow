import Image from 'next/image';
import { experiences } from '~/utils/constants';

const Experiences = () => {
    return (
        <>
            {Object.entries(experiences).map(([category, items]) => (
                <div key={category} className="space-y-4">
                    <h2 className="text-lg">{category}</h2>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        className="aspect-square rounded-xl object-contain"
                                        src={`/brand/${item.img}`}
                                        alt={item.company}
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>{item.company}</h3>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                                <p className="ml-[65px] text-sm sm:m-0">{item.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Experiences;
