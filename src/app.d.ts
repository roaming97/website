/// <reference types="@sveltejs/kit" />

interface Anchor {
	caption?: string
	picture?: string
	link: string
	description?: string
}
interface ProgressInterface extends Omit<Anchor, 'link'> {
	tooltipIndex?: number
	tooltip?: string
	percent: number
}
type Price = {
	category: string
	price: number
	description?: string
}
type Post = {
	name: string
	meta: {
		title: string
		date_created: Date
		date_modified?: Date
	}
}
type ViewItem = {
	title: string
	collection?: string
	picture: string
	date: Date
	description?: string
}

type StatType = {
	num: number
	name: string
	suffix?: string
}
