<script lang="ts">
	import Icon from '@iconify/svelte';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import github from 'svelte-highlight/styles/github-dark';

	let activeTab = 'overview';

	const overviewCode = `type Nationality = string;

type Languages = Record<string, "Native" | "Fluent" | "Intermediate" | "Beginner">;

type Technology = Record<string, string[]>;

type Devices = Record<string, string[]>;
    
const nationality: Nationality = "Indonesian";

const languages: Languages = {
    Indonesian: "Native",
    English: "Intermediate",
    Korean: "Beginner",
};

const technology: Technology = {
    "HTML & CSS": ['Tailwind CSS', 'Bootstrap'],
    "JavaScript & TypeScript": ['React.js', 'Svelte', 'Next.js', 'Remix', 'SvelteKit'],
    "Node.js & Bun": ['Express', 'NestJS', 'AdonisJS', 'Hono', 'ElysiaJS'],
    PHP: ['Laravel', 'Phalcon Framework'],
    SQL: ['MySQL', 'PostgreSQL'],
    NoSQL: ['MongoDB'],
    "No-Code Solution": ['Webflow']
};

const devices: Devices = {
    Laptop: ["Macbook Pro M2"],
    Handphone: ["Xiaomi 13T", "Advan G9"],
    Monitor: ["BEEX 14 inch Portable Monitor"],
    Mouse: ["Fantech RAIGOR III WG12R"],
    Audio: ["Fantech たまご TAMAGO", "Baseus Encok WM01", "Baseus Encok C17"],
};`;

	const workCode = `type Education = string[];

type ExperienceItem = {
    type: string;
    position: string;
    duration: string;
    location: string;
};

type Experience = Record<string, ExperienceItem | ExperienceItem[]>;

type VolunteerItem = {
    position: string;
    duration: string;
};

type Volunteer = Record<string, VolunteerItem>;

const experience: Experience = {
    Groweb: [
        {
            type: 'Self Employed',
            position: 'President',
            duration: 'Jan 2024 - present',
            location: 'Bogor, West Java, Indonesia - Remote'
        },
        {
            type: 'Self Employed',
            position: 'Vice President of Production',
            duration: 'Mar 2023 - Jan 2024 (11 mos)',
            location: 'Bogor, West Java, Indonesia - Remote'
        }
    ],
    'Zi.Care': {
        type: 'Fulltime',
        position: 'Software Engineer',
        duration: 'Aug 2023 - present',
        location: 'Tangerang Selatan, Bantent, Indonesia - On Site'
    },
    "Eshal Wedding Syar'i": {
        type: 'Contract',
        position: 'IT Specialist',
        duration: 'May 2023 - Jul 2023 (3 mos)',
        location: 'Bekasi, West Java, Indonesia - Remote'
    },
    'PPTIK ITB': {
        type: 'Internship',
        position: 'Fullstack Developer',
        duration: 'Jul 2022 - Dec 2022 (6 mos)',
        location: 'Bandung, West Java, Indonesia - Hybrid'
    }
};

const volunteer: Volunteer = {
    Bellshade: {
        position: 'Maintainer',
        duration: 'Oct 2021 - present'
    },
    WPU: {
        position: 'Helper',
        duration: 'Oct 2021 - present'
    },
    Nisara: {
        position: 'Web Programmer',
        duration: 'Jul 2023 - present'
    }
};

const education: Education = ['Wikrama Bogor Vocational High School'];`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="flex max-w-max overflow-hidden rounded-t-lg">
	<button
		class="flex items-center gap-2 px-4 py-2 {activeTab === 'overview' ? 'bg-gray-800' : 'bg-gray-900 transition-all duration-200 hover:bg-gray-800'}"
		on:click={() => (activeTab = 'overview')}
	>
		<Icon icon="akar-icons:typescript-fill" /> overview.ts
	</button>
	<button
		class="flex items-center gap-2 px-4 py-2 {activeTab === 'work' ? 'bg-gray-800' : 'bg-gray-900 transition-all duration-200 hover:bg-gray-800'}"
		on:click={() => (activeTab = 'work')}
	>
		<Icon icon="akar-icons:typescript-fill" /> work.ts
	</button>
</div>
<Highlight
	language={typescript}
	code={activeTab === 'overview' ? overviewCode : workCode}
	class="not-prose max-h-[calc(100dvh-16rem)] overflow-hidden overflow-y-auto rounded-b-xl rounded-tr-xl text-sm leading-relaxed [&>code]:bg-gray-800"
	data-lenis-prevent
/>
