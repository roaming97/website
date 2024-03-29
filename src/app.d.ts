/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		theme: 'light' | 'dark' | 'system'
	}
	interface PageData {
		theme: 'light' | 'dark' | 'system'
	}
}

interface Anchor {
	caption?: string
	picture?: string
	link: string
	description?: string
}

interface ProgressInterface extends Omit<Anchor, 'link'> {
	tooltipIndex?: number
	tooltip?: string
	percent?: number
}

type SVGAnchor = {
	link?: string
	color: string
	size: number
	d: string
	viewX?: number
	viewY?: number
	viewW?: number
	viewH?: number
	caption?: string
}

type Price = {
	category: string
	price: number
	description?: string
	deal_price?: number
}

type Post = {
	title: string
	date_created: Date
	date_modified?: Date
}

type ViewItem = {
	title: string
	collection?: string
	picture: string
	date: Date
	description?: string
}

type StatType = {
	num: number | string
	name: string
	suffix?: string
}
