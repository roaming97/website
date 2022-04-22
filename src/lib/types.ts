export interface Anchor {
	caption?: string
	picture: string
	link: string
}
export interface ProgressInterface extends Omit<Anchor, 'link'> {
	tooltipIndex?: number
	tooltip?: string
	percent: number
}
export interface Price {
	category: string
	price: number
	description?: string
}
export interface Post {
	name: string
	meta: {
		title: string
		date: Date
	}
}
