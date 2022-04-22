import type { Anchor, Price, ProgressInterface } from './types'

export const artworkGallery: Anchor[] = [
	{
		caption: 'CHAMBER',
		picture: './artwork/219.webp',
		link: './artwork/219.webp'
	},
	{
		caption: 'FIELD RINGS',
		picture: './artwork/236.webp',
		link: './artwork/236.webp'
	},
	{
		caption: 'Splash screen',
		picture: './artwork/273.webp',
		link: './artwork/273.webp'
	},
	{
		caption: 'REBUILT',
		picture: './artwork/301.webp',
		link: './artwork/301.webp'
	},
	{
		caption: 'BUMPS',
		picture: './artwork/307.webp',
		link: './artwork/307.webp'
	},
	{
		caption: 'RESTRUCTURE',
		picture: './artwork/319.webp',
		link: './artwork/319.webp'
	},
	{
		caption: 'WA',
		picture: './artwork/329.webp',
		link: './artwork/329.webp'
	},
	{
		caption: '333',
		picture: './artwork/333.webp',
		link: './artwork/333.webp'
	},
	{
		caption: 'COMPONENT',
		picture: './artwork/335.webp',
		link: './artwork/335.webp'
	},
	{
		caption: 'MINDCASTER',
		picture: './artwork/338.webp',
		link: './artwork/338.webp'
	}
]

export const videoGallery: Anchor[] = [
	{
		caption: 'Demo Reel 2021',
		picture: './videothumbs/dr2021.webp',
		link: 'https://vimeo.com/659859916'
	},
	{
		caption: 'Demo Reel 2020',
		picture: './videothumbs/dr2020.webp',
		link: 'https://vimeo.com/495956496'
	},
	{
		caption: 'Monomosh',
		picture: './videothumbs/mono.webp',
		link: 'https://vimeo.com/443884104'
	},
	{
		caption: 'Demo Reel 2019',
		picture: './videothumbs/dr2019.webp',
		link: 'https://vimeo.com/381472194'
	},
	{
		caption: 'Umbral',
		picture: './videothumbs/cap.webp',
		link: 'https://vimeo.com/381550497'
	}
]

export const everydayGallery: Anchor[] = [
	{
		caption: 'Season 4',
		picture: './everydays/season4.webp',
		link: './everydays/season4.webp'
	},
	{
		caption: 'Season 3',
		picture: './everydays/season3.webp',
		link: './everydays/season3.webp'
	},
	{
		caption: 'Season 2',
		picture: './everydays/season2.webp',
		link: './everydays/season2.webp'
	},
	{
		caption: 'Season 1',
		picture: './everydays/season1.webp',
		link: './everydays/season1.webp'
	}
]

export const pictureGallery: Anchor[] = [
	{
		caption: '2019',
		picture: './photo/flower.webp',
		link: 'photo2019'
	}
]

export const array1: ProgressInterface[] = [
	{
		caption: 'Video_Editing',
		picture: '/icons/video.svg',
		percent: 95
	},
	{
		caption: 'Image_Editing',
		picture: '/icons/image.svg',
		percent: 85
	},
	{
		caption: '_3D',
		picture: '/icons/cube.svg',
		percent: 80
	},
	{
		caption: 'Animation',
		picture: '/icons/animation.svg',
		percent: 80
	},
	{
		caption: 'UI⁄UX_Design',
		picture: '/icons/uiux.svg',
		percent: 70
	},
	{
		caption: 'Typography',
		picture: '/icons/type.svg',
		percent: 60
	},
	{
		caption: 'Illustration',
		picture: '/icons/pencil.svg',
		percent: 40
	}
]
export const array2: ProgressInterface[] = [
	{
		caption: 'Vegas_Pro',
		picture: '/icons/vegas.svg',
		percent: 90
	},
	{
		caption: 'Blender',
		picture: '/icons/blender.svg',
		percent: 85
	},
	{
		caption: 'Photoshop',
		picture: '/icons/photoshop.svg',
		percent: 80
	},
	{
		caption: 'After_Effects',
		picture: '/icons/after.svg',
		percent: 80
	},
	{
		caption: 'Affinity_Photo',
		picture: '/icons/photo.svg',
		percent: 80
	},
	{
		caption: 'Premiere',
		picture: '/icons/premiere.svg',
		percent: 70
	},
	{
		caption: 'Illustrator',
		picture: '/icons/illustrator.svg',
		percent: 50
	},
	{
		caption: 'Affinity_Designer',
		picture: '/icons/designer.svg',
		percent: 50
	},
	{
		caption: 'Lightroom',
		picture: '/icons/lightroom.svg',
		percent: 40
	},
	{
		caption: 'Flash⁄Animate',
		picture: '/icons/flash.svg',
		percent: 100
	}
]

export const socialLinks: Anchor[] = [
	{
		caption: 'Twitter',
		picture: '/icons/twitter.svg',
		link: 'http://twitter.com/roaming98'
	},
	{
		caption: 'YouTube',
		picture: '/icons/youtube.svg',
		link: 'https://www.youtube.com/channel/UCzOsf8SUERLIwclvIdnTmsg'
	},
	{
		caption: 'Vimeo',
		picture: '/icons/vimeo.svg',
		link: 'http://vimeo.com/roaming97'
	}
]
export const pricesA: Price[] = [
	{
		category: 'Short',
		price: 40,
		description: 'Teasers, loops, promotional videos, etc. (30 second limit)'
	},
	{
		category: 'Music video',
		price: 75,
		description: 'Full music video. 10 minute limit*'
	},
	{
		category: 'Express',
		price: 120,
		description: 'For deadlines shorter than a week. 10 minute limit*'
	},
	{
		category: 'Artwork + Music Video',
		price: 100
	},
	{
		category: 'Artwork + Short',
		price: 65
	}
]
export const pricesB: Price[] = [
	{
		category: 'Artwork',
		price: 50
	},
	{
		category: 'Express',
		price: 70
	}
]
