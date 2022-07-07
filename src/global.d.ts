/// <reference types="@sveltejs/kit" />
declare interface Anchor {
	caption?: string
	picture?: string
	link: string
	description?: string
}
declare interface ProgressInterface extends Omit<Anchor, 'link'> {
	tooltipIndex?: number
	tooltip?: string
	percent: number
}
declare interface Price {
	category: string
	price: number
	description?: string
}
declare interface Post {
	name: string
	meta: {
		title: string
		date_created: Date
		date_modified?: Date
	}
}
declare interface ViewItem {
	title: string
	collection?: string
	picture: string
	date: Date
	description?: string
}

declare interface StatType {
	num: number
	name: string
	suffix?: string
}
