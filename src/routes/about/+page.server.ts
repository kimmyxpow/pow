import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

type GitHubCommit = {
	sha: string;
	node_id: string;
	commit: {
		author: {
			name: string;
			email: string;
			date: string;
		};
		committer: {
			name: string;
			email: string;
			date: string;
		};
		message: string;
		tree: {
			sha: string;
			url: string;
		};
		url: string;
		comment_count: number;
		verification: {
			verified: boolean;
			reason: string;
			signature: string | null;
			payload: string | null;
			verified_at: string | null;
		};
	};
	url: string;
	html_url: string;
	comments_url: string;
	author: null; // could be expanded to a user object if not null
	committer: null; // same as author
	parents: {
		sha: string;
		url: string;
		html_url: string;
	}[];
};

export const load: PageServerLoad = async ({ fetch, parent }) => {
	await parent();

	const response = await fetch(
		'https://api.github.com/repos/kimmyxpow/bynoval/commits?per_page=10',
		{
			headers: {
				Authorization: `Bearer ${env.GITHUB_TOKEN}`,
				'User-Agent': 'kimmyxpow'
			}
		}
	);

	const commits: GitHubCommit[] = response.ok ? await response.clone().json() : [];

	return {
		commits
	};
};
