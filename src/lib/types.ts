export type Theme = 'dark' | 'light' | undefined;

export interface MenuButtonProps {
	name: string;
	description: string;
}

export interface BlogPost {
	title: string;
	date_created: Date;
	date_modified?: Date;
	rating?: number;
	legacy?: boolean;
}
