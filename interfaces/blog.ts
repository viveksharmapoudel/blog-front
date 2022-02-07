export interface IBlogListCard {
	title: string;
	image?: string;
	created_at: string;
	tags: string[];
	user_name: string;
	id: number;
}

export interface IBlog extends IBlogListCard {
	content: string;
}
