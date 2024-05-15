export type Theme = 'dark' | 'light' | 'system';

export interface MenuButtonProps {
	name: string;
	description: string;
}

export interface BlogPostMetadata {
	title: string;
	date_created: Date;
	date_modified?: Date;
	tags?: string[];
	rating?: number;
}

export interface BlogPost extends BlogPostMetadata {
	id?: number;
	path: string;
}

export interface Pagination {
	total_items: number;
	total_pages: number;
	offset: number;
	page: number;
	per_page: number;
}

export interface LavenderEntry {
	path: string;
	b64: string;
	datatype: string;
	filename: string;
	date: {
		secs_since_epoch: number;
		nanos_since_epoch: number;
	};
}

export interface LatestFilesResponse {
	entries?: LavenderEntry[];
	thumbnails?: LavenderEntry[];
}
