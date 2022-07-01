export interface Anchor {
	caption?: string
	picture?: string
	link: string
	description?: string
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
		date_created: Date
		date_modified?: Date
	}
}
export interface ViewItem {
	title: string
	collection?: string
	picture: string
	date: Date
	description?: string
}

export interface StatType {
	num: number
	name: string
	suffix?: string
}
