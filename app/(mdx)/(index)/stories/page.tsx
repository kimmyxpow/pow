import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react';
import { getContentList } from '~/utils/content';
import { formatDistance, format } from 'date-fns';

const page = () => {
    const stories = getContentList('stories');

    return (
        <section className="space-y-8 py-8">
            <div className="space-y-4">
                <h1 className="text-4xl">tales from my mind</h1>
                <p>
                    a collection of stories born from my wandering imagination. some are whimsical, some are dark, and
                    some might make you question reality—but all of them are little pieces of the worlds I’ve created.
                    read at your own risk; you might get lost in them like I do :))
                </p>
            </div>
            <TabGroup as={Fragment}>
                <TabList>
                    <span>lang: </span>
                    {stories.lang.map((lang) => (
                        <Tab
                            className="data-[selected]:bg-primary-800 data-[selected]:data-[hover]:bg-primary-800 data-[hover]:bg-primary-300 px-4 py-2 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[selected]:text-white"
                            key={lang}
                        >
                            {lang}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {stories.contents.map((content) => (
                        <TabPanel key={content.lang}>
                            {content.contents.map((item) => (
                                <div className="border-primary-300 space-y-4 border-y py-8" key={item.title}>
                                    <h2 className="text-xl hover:underline">
                                        <a href={`/stories/${content.lang}/${item.slug}`}>{item.title}</a>
                                    </h2>
                                    <p>{item.metadata.excerpt}</p>
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                        <div className="flex gap-1">
                                            <span className="bg-primary-300 px-4 py-1 text-sm">
                                                {item.metadata.genre}
                                            </span>
                                        </div>
                                        <span className="text-primary-600 text-sm lowercase">
                                            {formatDistance(item.metadata.date, new Date(), { addSuffix: true })} (
                                            {format(item.metadata.date, 'yyyy-MM-dd')})
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </section>
    );
};

export default page;
