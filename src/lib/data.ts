const year = 12 * 30 * 24 * 60 * 60 * 1000

export const artworkGallery: Anchor[] = [
	{
		caption: 'Everlasting Saturation',
		picture: './artwork/everlasting.webp',
		link: '/view/384'
	},
	{
		caption: 'The boundary that goes along with it',
		picture: './artwork/boundary.webp',
		link: '/view/383'
	},
	{
		caption: 'parallélisme inhérent',
		picture: './artwork/paral.webp',
		link: '/view/382'
	},
	{
		caption: 'CHAMBER',
		picture: './artwork/219.webp',
		link: '/view/219'
	},
	{
		caption: 'ABOUT IT REMIXES',
		picture: './artwork/aboutitremixes.webp',
		link: 'https://soundcloud.com/colorcase/sets/about-it-remixes'
	},
	{
		caption: 'FIELD RINGS',
		picture: './artwork/236.webp',
		link: '/view/236'
	},
	{
		caption: 'ABOUT IT',
		picture: './artwork/aboutit.webp',
		link: 'https://soundcloud.com/colorcase/colorcase-about-it-feat-your-neighbors'
	},
	{
		caption: 'Splash screen',
		picture: './artwork/273.webp',
		link: '/view/273'
	},
	{
		caption: 'REBUILT',
		picture: './artwork/301.webp',
		link: 'view/301'
	},
	{
		caption: 'RESTRUCTURE',
		picture: './artwork/319.webp',
		link: '/view/319'
	},
	{
		caption: '333',
		picture: './artwork/333.webp',
		link: '/view/333'
	},
	{
		caption: 'COMPONENT',
		picture: './artwork/335.webp',
		link: '/view/335'
	},
	{
		caption: 'MINDCASTER',
		picture: './artwork/338.webp',
		link: '/view/338'
	},
	{
		caption: 'MSKD Sounds Banner',
		picture: './artwork/mskdbanner.webp',
		link: 'https://www.youtube.com/c/MSKDSounds/'
	}
]
export const videoGallery: Anchor[] = [
	{
		caption: 'Demo Reel 2021',
		picture: './videothumbs/dr2021.webp',
		link: 'https://vimeo.com/659859916'
	},
	{
		caption: 'GEKQO Teaser',
		picture: './videothumbs/GEKQO.webp',
		link: 'https://twitter.com/gekqomgmt/status/1442958462732824579'
	},
	{
		caption: 'Demo Reel 2020',
		picture: './videothumbs/dr2020.webp',
		link: 'https://vimeo.com/495956496'
	},
	{
		caption: 'Nebula',
		picture: './videothumbs/nebula.webp',
		link: 'https://www.youtube.com/watch?v=-oduk_c16Y4'
	},
	{
		caption: 'Edges',
		picture: './videothumbs/edges.webp',
		link: 'https://www.youtube.com/watch?v=BCPsQ1-ygcQ'
	},
	{
		caption: 'MONOMOSH',
		picture: './videothumbs/mono.webp',
		link: 'https://vimeo.com/443884104'
	},
	{
		caption: 'Eyesore',
		picture: './videothumbs/eyesore.webp',
		link: 'https://www.youtube.com/watch?v=vccbpbW1yfU'
	},
	{
		caption: 'Anarchy',
		picture: './videothumbs/anarchy.webp',
		link: 'https://www.youtube.com/watch?v=vOKBqE87cTg'
	},
	{
		caption: 'Element',
		picture: './videothumbs/element.webp',
		link: 'https://www.youtube.com/watch?v=_9TDnpsDtIo'
	},
	{
		caption: 'Lightning',
		picture: './videothumbs/lightning.webp',
		link: 'https://www.youtube.com/watch?v=Iw_7cLrpmSc'
	},
	{
		caption: 'Step By Step',
		picture: './videothumbs/stepbystep.webp',
		link: 'https://www.youtube.com/watch?v=fx5AdA1Knts'
	},
	{
		caption: 'Willpower',
		picture: './videothumbs/willpower.webp',
		link: 'https://www.youtube.com/watch?v=17_g6EUXugM'
	},
	{
		caption: 'Genesis',
		picture: './videothumbs/genesis.webp',
		link: 'https://www.youtube.com/watch?v=R8O-f3pnT3I'
	},
	{
		caption: 'Blind',
		picture: './videothumbs/blind.webp',
		link: 'https://www.youtube.com/watch?v=RORuJuvQcTM'
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
		link: '/view/289'
	},
	{
		caption: 'Season 3',
		picture: './everydays/season3.webp',
		link: '/view/193'
	},
	{
		caption: 'Season 2',
		picture: './everydays/season2.webp',
		link: '/view/97'
	},
	{
		caption: 'Season 1',
		picture: './everydays/season1.webp',
		link: '/view/1'
	}
]
export const pictureGallery: Anchor[] = [
	{
		caption: '2019',
		picture: './photo/frog.webp',
		link: '/view/367'
	}
]
export const devGallery: Anchor[] = [
	{
		caption: 'Almond',
		picture: '/icons/almond.svg',
		link: 'https://github.com/roaming97/Almond',
		description: 'Video database app made with Python using Flask.'
	},
	{
		caption: 'Vulgo',
		picture: '/icons/vulgo.svg',
		link: 'https://github.com/roaming97/Vulgo',
		description: 'Minimalistic blog template made with SvelteKit and mdsvex.'
	},
	{
		caption: 'roaming97.com',
		picture: 'logo.png',
		link: 'https://github.com/roaming97/website',
		description: 'This website! Initially designed in Vue.js but remade in SvelteKit.'
	}
]

export const statsArray: StatType[] = [
	{
		num: Math.round((Date.now().valueOf() - new Date('2016/05/23').valueOf()) / year),
		name: 'Years'
	},
	{
		num: 18,
		name: 'Clients'
	},
	{
		num: 350,
		name: 'Artworks',
		suffix: '+'
	},
	{
		num: 57,
		name: 'Videos'
	}
]
export const clientArray: Anchor[] = [
	{
		caption: '04 Collective',
		picture: '/clients/04.jpg',
		link: 'https://solo.to/04collective',
		description: 'Music record label'
	},
	{
		caption: 'MSKD Sounds',
		picture: '/clients/mskd.jpg',
		link: 'https://www.youtube.com/c/MSKDSounds',
		description: 'Music promoter'
	},
	{
		caption: 'RJ Blue',
		picture: '/clients/rj.jpg',
		link: 'https://www.youtube.com/channel/UCVYrt6K44ebE_Ru66sKFFdA',
		description: 'Electronic music artist'
	},
	{
		caption: 'colorcase',
		picture: '/clients/colorcase.jpg',
		link: 'http://colorca.se',
		description: 'Electronic music artist'
	},
	{
		caption: 'Paper Skies',
		picture: '/clients/paperskies.jpg',
		link: 'https://solo.to/paperskies',
		description: 'Electronic music artist'
	}
]
export const creativeSkills: ProgressInterface[] = [
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
		caption: 'Animation⁄Motion_Graphics',
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
export const softwareSkills: ProgressInterface[] = [
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
		caption: 'DaVinci_Resolve',
		picture: '/icons/resolve.svg',
		percent: 45
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
export const devSkills: ProgressInterface[] = [
	{
		caption: 'Python',
		picture: '/icons/python.svg',
		percent: 85
	},
	{
		caption: 'HTML',
		picture: '/icons/html.svg',
		percent: 80
	},
	{
		caption: 'CSS',
		picture: '/icons/css.svg',
		percent: 75
	},
	{
		caption: 'Git',
		picture: '/icons/git.svg',
		percent: 60
	},
	{
		caption: 'TypeScript',
		picture: '/icons/typescript.svg',
		percent: 60
	},
	{
		caption: 'JavaScript',
		picture: '/icons/javascript.svg',
		percent: 55
	},
	{
		caption: 'Svelte',
		picture: '/icons/svelte.svg',
		percent: 45
	},
	{
		caption: 'Vue',
		picture: '/icons/vue.svg',
		percent: 45
	},
	{
		caption: 'Flask',
		picture: '/icons/flask.svg',
		percent: 45
	},
	{
		caption: 'Figma',
		picture: '/icons/figma.svg',
		percent: 40
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
		price: 50,
		description: 'Cover art, promotional material, etc.'
	},
	{
		category: 'Express',
		price: 70,
		description: 'For deadlines shorter than a week.'
	}
]

export const viewData: ViewItem[] = [
	{
		title: 'JUICE',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/24'),
		picture: '/artwork/1.webp'
	},
	{
		title: 'JUST FINISH SOMETHING',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/25'),
		picture: '/artwork/2.webp'
	},
	{
		title: 'toothpaste.',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/26'),
		picture: '/artwork/3.webp'
	},
	{
		title: 'Shapes Venturing Greatly',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/27'),
		picture: '/artwork/4.webp'
	},
	{
		title: 'SPECTRITE',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/28'),
		picture: '/artwork/5.webp'
	},
	{
		title: 'MATCH-3',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/29'),
		picture: '/artwork/6.webp'
	},
	{
		title: '1 WEEK',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/30'),
		picture: '/artwork/7.webp'
	},
	{
		title: 'NO IDEAS, BE ABSTRACT',
		collection: 'EVERYDAYS',
		date: new Date('2021/03/31'),
		picture: '/artwork/8.webp'
	},
	{
		title: 'MODULAR BEND',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/01'),
		picture: '/artwork/9.webp'
	},
	{
		title: 'KINETIC',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/02'),
		picture: '/artwork/10.webp'
	},
	{
		title: 'arrow',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/03'),
		picture: '/artwork/11.webp'
	},
	{
		title: 'BEAM',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/04'),
		picture: '/artwork/12.webp'
	},
	{
		title: 'Shatter',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/05'),
		picture: '/artwork/13.webp'
	},
	{
		title: '2 WEEKS',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/06'),
		picture: '/artwork/14.webp'
	},
	{
		title: 'Y2K',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/07'),
		picture: '/artwork/15.webp'
	},
	{
		title: 'PATH',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/08'),
		picture: '/artwork/16.webp'
	},
	{
		title: 'PUZZLE',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/09'),
		picture: '/artwork/17.webp'
	},
	{
		title: 'TWIRL',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/10'),
		picture: '/artwork/18.webp'
	},
	{
		title: 'RUBY',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/11'),
		picture: '/artwork/19.webp'
	},
	{
		title: 'DOME',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/12'),
		picture: '/artwork/20.webp'
	},
	{
		title: 'Capsule',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/13'),
		picture: '/artwork/21.webp'
	},
	{
		title: 'TEN',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/14'),
		picture: '/artwork/22.webp'
	},
	{
		title: 'blob',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/15'),
		picture: '/artwork/23.webp'
	},
	{
		title: 'BOING',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/16'),
		picture: '/artwork/24.webp'
	},
	{
		title: 'APPLICATION',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/17'),
		picture: '/artwork/25.webp'
	},
	{
		title: 'Glass',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/18'),
		picture: '/artwork/26.webp'
	},
	{
		title: 'TILE',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/19'),
		picture: '/artwork/27.webp'
	},
	{
		title: 'NEON',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/20'),
		picture: '/artwork/28.webp'
	},
	{
		title: 'BUBBLES',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/21'),
		picture: '/artwork/29.webp'
	},
	{
		title: '1 MONTH',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/22'),
		picture: '/artwork/30.webp'
	},
	{
		title: 'sorry, got to study',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/23'),
		picture: '/artwork/31.webp'
	},
	{
		title: 'PUDDLE',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/24'),
		picture: '/artwork/32.webp'
	},
	{
		title: "A place I'd like going to.",
		collection: 'EVERYDAYS',
		date: new Date('2021/04/25'),
		picture: '/artwork/33.webp'
	},
	{
		title: 'noise',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/26'),
		picture: '/artwork/34.webp'
	},
	{
		title: 'Steel',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/27'),
		picture: '/artwork/35.webp'
	},
	{
		title: 'CORRIDOR',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/28'),
		picture: '/artwork/36.webp'
	},
	{
		title: 'TWIRL II',
		collection: 'EVERYDAYS',
		date: new Date('2021/04/29'),
		picture: '/artwork/37.webp'
	},
	{
		title: "Aren't hexagons pretty?",
		collection: 'EVERYDAYS',
		date: new Date('2021/04/30'),
		picture: '/artwork/38.webp'
	},
	{
		title: 'CLAY',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/01'),
		picture: '/artwork/39.webp'
	},
	{
		title: 'how would this artwork sound?',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/02'),
		picture: '/artwork/40.webp'
	},
	{
		title: 'FIVE YEARS',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/03'),
		picture: '/artwork/41.webp'
	},
	{
		title: 'FOAM',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/04'),
		picture: '/artwork/42.webp'
	},
	{
		title: 'BALCONY',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/05'),
		picture: '/artwork/43.webp'
	},
	{
		title: 'NOWHERE',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/06'),
		picture: '/artwork/44.webp'
	},
	{
		title: 'array.',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/07'),
		picture: '/artwork/45.webp'
	},
	{
		title: 'Appearance',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/08'),
		picture: '/artwork/46.webp'
	},
	{
		title: 'not at home for the time being',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/09'),
		picture: '/artwork/47.webp'
	},
	{
		title: 'above me',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/10'),
		picture: '/artwork/48.webp'
	},
	{
		title: 'It keeps going up',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/11'),
		picture: '/artwork/49.webp'
	},
	{
		title: 'THE LIGHT AT THE END',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/12'),
		picture: '/artwork/50.webp'
	},
	{
		title: 'COBWEB',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/13'),
		picture: '/artwork/51.webp'
	},
	{
		title: 'SHOWDOWN',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/14'),
		picture: '/artwork/52.webp'
	},
	{
		title: 'TENSION',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/15'),
		picture: '/artwork/53.webp'
	},
	{
		title: 'The time for physical painting is nearby',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/16'),
		picture: '/artwork/54.webp'
	},
	{
		title: 'AROUND',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/17'),
		picture: '/artwork/55.webp'
	},
	{
		title: 'COLORFULL MESS',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/18'),
		picture: '/artwork/56.webp'
	},
	{
		title: 'CHANNEL',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/19'),
		picture: '/artwork/57.webp'
	},
	{
		title: 'POOL',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/20'),
		picture: '/artwork/58.webp'
	},
	{
		title: 'TWIRL III',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/21'),
		picture: '/artwork/59.webp'
	},
	{
		title: 'THE LINES TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/22'),
		picture: '/artwork/60.webp'
	},
	{
		title: 'ENCAPSULATED',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/23'),
		picture: '/artwork/61.webp'
	},
	{
		title: 'Non-landscape',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/24'),
		picture: '/artwork/62.webp'
	},
	{
		title: 'ROAD TO IDEAS',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/25'),
		picture: '/artwork/63.webp'
	},
	{
		title: 'ORB',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/26'),
		picture: '/artwork/64.webp'
	},
	{
		title: 'extend',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/27'),
		picture: '/artwork/65.webp'
	},
	{
		title: 'gaze',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/28'),
		picture: '/artwork/66.webp'
	},
	{
		title: 'ROAD',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/29'),
		picture: '/artwork/67.webp'
	},
	{
		title: 'WORM',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/30'),
		picture: '/artwork/68.webp'
	},
	{
		title: 'INVERT',
		collection: 'EVERYDAYS',
		date: new Date('2021/05/31'),
		picture: '/artwork/69.webp'
	},
	{
		title: 'S',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/01'),
		picture: '/artwork/70.webp'
	},
	{
		title: 'THE METALHEART TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/02'),
		picture: '/artwork/71.webp'
	},
	{
		title: 'MAGIC',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/03'),
		picture: '/artwork/72.webp'
	},
	{
		title: 'OUT',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/04'),
		picture: '/artwork/73.webp'
	},
	{
		title: 'DISPERSE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/05'),
		picture: '/artwork/74.webp'
	},
	{
		title: 'nearest',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/06'),
		picture: '/artwork/75.webp'
	},
	{
		title: 'Where will this take me?',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/07'),
		picture: '/artwork/76.webp'
	},
	{
		title: 'VELVET',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/08'),
		picture: '/artwork/77.webp'
	},
	{
		title: '48724',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/09'),
		picture: '/artwork/78.webp'
	},
	{
		title: 'Magnitudine',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/10'),
		picture: '/artwork/79.webp'
	},
	{
		title: 'DISSOLVE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/11'),
		picture: '/artwork/80.webp'
	},
	{
		title: 'VOXEL',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/12'),
		picture: '/artwork/81.webp'
	},
	{
		title: 'Collection',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/13'),
		picture: '/artwork/82.webp'
	},
	{
		title: 'QUARTZ',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/14'),
		picture: '/artwork/83.webp'
	},
	{
		title: 'NOCTURNAL SUN',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/15'),
		picture: '/artwork/84.webp'
	},
	{
		title: 'THE_HIGHWAY',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/16'),
		picture: '/artwork/85.webp'
	},
	{
		title: 'Arrange',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/17'),
		picture: '/artwork/86.webp'
	},
	{
		title: 'WAVY',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/18'),
		picture: '/artwork/87.webp'
	},
	{
		title: 'ENERGIZE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/19'),
		picture: '/artwork/88.webp'
	},
	{
		title: 'NETWORK',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/20'),
		picture: '/artwork/89.webp'
	},
	{
		title: '1 QUARTER',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/21'),
		picture: '/artwork/90.webp'
	},
	{
		title: 'VARIANTS',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/22'),
		picture: '/artwork/91.webp'
	},
	{
		title: 'IMAGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/23'),
		picture: '/artwork/92.webp'
	},
	{
		title: 'SLICE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/24'),
		picture: '/artwork/93.webp'
	},
	{
		title: '12:50',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/25'),
		picture: '/artwork/94.webp'
	},
	{
		title: 'BEYOND',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/26'),
		picture: '/artwork/95.webp'
	},
	{
		title: 'view',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/27'),
		picture: '/artwork/96.webp'
	},
	{
		title: 'roaming97',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/28'),
		picture: '/artwork/97.webp'
	},
	{
		title: 'SHINE',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/29'),
		picture: '/artwork/98.webp'
	},
	{
		title: 'TRAIL',
		collection: 'EVERYDAYS',
		date: new Date('2021/06/30'),
		picture: '/artwork/99.webp'
	},
	{
		title: 'QUACK',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/01'),
		picture: '/artwork/100.webp'
	},
	{
		title: 'BRIGHT',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/02'),
		picture: '/artwork/101.webp'
	},
	{
		title: 'TWIRL IV',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/03'),
		picture: '/artwork/102.webp'
	},
	{
		title: '39118',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/04'),
		picture: '/artwork/103.webp'
	},
	{
		title: 'Shards',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/05'),
		picture: '/artwork/104.webp'
	},
	{
		title: 'SHIELD',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/06'),
		picture: '/artwork/105.webp'
	},
	{
		title: 'peaks',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/07'),
		picture: '/artwork/106.webp'
	},
	{
		title: 'TRI',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/08'),
		picture: '/artwork/107.webp'
	},
	{
		title: 'clamp',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/09'),
		picture: '/artwork/108.webp'
	},
	{
		title: 'PSEUDO-PLASMA',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/10'),
		picture: '/artwork/109.webp'
	},
	{
		title: 'fabric',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/11'),
		picture: '/artwork/110.webp'
	},
	{
		title: 'GUM PLANET',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/12'),
		picture: '/artwork/111.webp'
	},
	{
		title: 'at the dentist',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/13'),
		picture: '/artwork/112.webp'
	},
	{
		title: 'SPLAT',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/14'),
		picture: '/artwork/113.webp'
	},
	{
		title: 'Petals',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/15'),
		picture: '/artwork/114.webp'
	},
	{
		title: 'This is supposed to be a sierpinski triangle',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/16'),
		picture: '/artwork/115.webp'
	},
	{
		title: 'METAGRID',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/17'),
		picture: '/artwork/116.webp'
	},
	{
		title: 'THE TEXTURE TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/18'),
		picture: '/artwork/117.webp'
	},
	{
		title: 'HEAT MAP',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/19'),
		picture: '/artwork/118.webp'
	},
	{
		title: 'F//Cell',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/20'),
		picture: '/artwork/119.webp'
	},
	{
		title: 'No concept',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/21'),
		picture: '/artwork/120.webp'
	},
	{
		title: '15 MINUTE CHALLENGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/22'),
		picture: '/artwork/121.webp'
	},
	{
		title: 'Lighter Color',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/23'),
		picture: '/artwork/122.webp'
	},
	{
		title: 'H//Cell',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/24'),
		picture: '/artwork/123.webp'
	},
	{
		title: '20',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/25'),
		picture: '/artwork/124.webp'
	},
	{
		title: 'corrosion',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/26'),
		picture: '/artwork/125.webp'
	},
	{
		title: 'BARS',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/27'),
		picture: '/artwork/126.webp'
	},
	{
		title: 'Mercury',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/28'),
		picture: '/artwork/127.webp'
	},
	{
		title: 'CLIMB',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/29'),
		picture: '/artwork/128.webp'
	},
	{
		title: 'compact',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/30'),
		picture: '/artwork/129.webp'
	},
	{
		title: 'CONNECT',
		collection: 'EVERYDAYS',
		date: new Date('2021/07/31'),
		picture: '/artwork/130.webp'
	},
	{
		title: 'DUALITY',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/01'),
		picture: '/artwork/131.webp'
	},
	{
		title: 'Ice',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/02'),
		picture: '/artwork/132.webp'
	},
	{
		title: 'remaining of ideas i had for today.',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/03'),
		picture: '/artwork/133.webp'
	},
	{
		title: 'TRIANGLES AND SOME PAINT',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/04'),
		picture: '/artwork/134.webp'
	},
	{
		title: 'shiny shore',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/05'),
		picture: '/artwork/135.webp'
	},
	{
		title: 'Marshmallow',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/06'),
		picture: '/artwork/136.webp'
	},
	{
		title: 'FLY LIKE A CICADA',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/07'),
		picture: '/artwork/137.webp'
	},
	{
		title: 'CLOUD-GAZING',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/08'),
		picture: '/artwork/138.webp'
	},
	{
		title: 'Grain',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/09'),
		picture: '/artwork/139.webp'
	},
	{
		title: 'software problems',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/10'),
		picture: '/artwork/140.webp'
	},
	{
		title: 'SORT CUBE',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/11'),
		picture: '/artwork/141.webp'
	},
	{
		title: 'THE ISOMETRIC TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/12'),
		picture: '/artwork/142.webp'
	},
	{
		title: 'THIS LOOKS LIKE A MODEL FROM A 2004 GAME',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/13'),
		picture: '/artwork/143.webp'
	},
	{
		title: 'EMITTER',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/14'),
		picture: '/artwork/144.webp'
	},
	{
		title: 'hardware problems',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/15'),
		picture: '/artwork/145.webp'
	},
	{
		title: 'TETROOM',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/16'),
		picture: '/artwork/146.webp'
	},
	{
		title: 'THE CONTEMPLATION TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/17'),
		picture: '/artwork/147.webp'
	},
	{
		title: 'INTERSECT',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/18'),
		picture: '/artwork/148.webp'
	},
	{
		title: 'PROPAGATE',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/19'),
		picture: '/artwork/149.webp'
	},
	{
		title: 'ARMOR',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/20'),
		picture: '/artwork/150.webp'
	},
	{
		title: 'Aluminum',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/21'),
		picture: '/artwork/151.webp'
	},
	{
		title: 'SPIN BLEED',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/22'),
		picture: '/artwork/152.webp'
	},
	{
		title: 'snake',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/23'),
		picture: '/artwork/153.webp'
	},
	{
		title: 'CONICAL',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/24'),
		picture: '/artwork/154.webp'
	},
	{
		title: 'HYPER FABRIC',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/25'),
		picture: '/artwork/155.webp'
	},
	{
		title: 'WRAP AROUND',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/26'),
		picture: '/artwork/156.webp'
	},
	{
		title: 'MOSA',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/27'),
		picture: '/artwork/157.webp'
	},
	{
		title: 'These come in bundles of 6',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/28'),
		picture: '/artwork/158.webp'
	},
	{
		title: 'OPERATION: FRAGILITY',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/29'),
		picture: '/artwork/159.webp'
	},
	{
		title: 'Vertices',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/30'),
		picture: '/artwork/160.webp'
	},
	{
		title: 'BIN',
		collection: 'EVERYDAYS',
		date: new Date('2021/08/31'),
		picture: '/artwork/161.webp'
	},
	{
		title: '88291',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/01'),
		picture: '/artwork/162.webp'
	},
	{
		title: 'BUMPS',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/02'),
		picture: '/artwork/163.webp'
	},
	{
		title: 'Confrontation',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/03'),
		picture: '/artwork/164.webp'
	},
	{
		title: 'THE RUST TROPE',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/04'),
		picture: '/artwork/165.webp'
	},
	{
		title: 'FIRST STEP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/05'),
		picture: '/artwork/166.webp'
	},
	{
		title: 'SECOND STEP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/06'),
		picture: '/artwork/167.webp'
	},
	{
		title: 'THIRD STEP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/07'),
		picture: '/artwork/168.webp'
	},
	{
		title: 'FOURTH STEP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/08'),
		picture: '/artwork/169.webp'
	},
	{
		title: 'FINAL STEP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/09'),
		picture: '/artwork/170.webp'
	},
	{
		title: "IT'S ABOUT TIME",
		collection: 'EVERYDAYS',
		date: new Date('2021/09/10'),
		picture: '/artwork/171.webp'
	},
	{
		title: 'TWIRL V',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/11'),
		picture: '/artwork/172.webp'
	},
	{
		title: 'SHELF',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/12'),
		picture: '/artwork/173.webp'
	},
	{
		title: 'THE OTHER ITERATION',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/13'),
		picture: '/artwork/174.webp'
	},
	{
		title: 'Mirrored Bullet',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/14'),
		picture: '/artwork/175.webp'
	},
	{
		title: 'PAPER CUT',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/15'),
		picture: '/artwork/176.webp'
	},
	{
		title: 'BLOBS',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/16'),
		picture: '/artwork/177.webp'
	},
	{
		title: 'FOR THE SAKE OF SIMPLICITY',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/17'),
		picture: '/artwork/178.webp'
	},
	{
		title: 'CURVYRAMID',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/18'),
		picture: '/artwork/179.webp'
	},
	{
		title: 'surround',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/19'),
		picture: '/artwork/180.webp'
	},
	{
		title: 'I SHOULD LEARN HOW TO MAKE CONVINCING ENVIRONMENTS',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/20'),
		picture: '/artwork/181.webp'
	},
	{
		title: 'MEET UP',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/21'),
		picture: '/artwork/182.webp'
	},
	{
		title: 'HALF A YEAR',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/22'),
		picture: '/artwork/183.webp'
	},
	{
		title: 'CATALYST',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/23'),
		picture: '/artwork/184.webp'
	},
	{
		title: 'THE SLIGHTLY MORE NUTRITIONAL ITERATION',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/24'),
		picture: '/artwork/185.webp'
	},
	{
		title: 'FLOATING',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/25'),
		picture: '/artwork/186.webp'
	},
	{
		title: 'PACKAGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/26'),
		picture: '/artwork/187.webp'
	},
	{
		title: 'RINGS',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/27'),
		picture: '/artwork/188.webp'
	},
	{
		title: '5517',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/28'),
		picture: '/artwork/189.webp'
	},
	{
		title: 'bad weather (power outage)',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/29'),
		picture: '/artwork/190.webp'
	},
	{
		title: 'DIFFERENT WORLDS',
		collection: 'EVERYDAYS',
		date: new Date('2021/09/30'),
		picture: '/artwork/191.webp'
	},
	{
		title: 'BEYOND THE GATE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/01'),
		picture: '/artwork/192.webp'
	},
	{
		title: 'CROSSING SECTORS',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/02'),
		picture: '/artwork/193.webp'
	},
	{
		title: 'An unfortunately corrupted render',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/03'),
		picture: '/artwork/194.webp'
	},
	{
		title: '➔',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/04'),
		picture: '/artwork/195.webp'
	},
	{
		title: 'Feeling creatively empty today',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/05'),
		picture: '/artwork/196.webp'
	},
	{
		title: 'LONG FALL',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/06'),
		picture: '/artwork/197.webp'
	},
	{
		title: 'NO RUSH - PART 1',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/07'),
		picture: '/artwork/198.webp'
	},
	{
		title: 'NO RUSH - PART 2',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/08'),
		picture: '/artwork/199.webp'
	},
	{
		title: 'NO RUSH - PART 3',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/09'),
		picture: '/artwork/200.webp'
	},
	{
		title: 'NO RUSH - PART 4',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/10'),
		picture: '/artwork/201.webp'
	},
	{
		title: 'BRIDGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/11'),
		picture: '/artwork/202.webp'
	},
	{
		title: 'THE TOO REALISTIC TO BE DONE IN CGI ITERATION',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/12'),
		picture: '/artwork/203.webp'
	},
	{
		title: 'SPOTLIGHT',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/13'),
		picture: '/artwork/204.webp'
	},
	{
		title: 'feeling sick',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/14'),
		picture: '/artwork/205.webp'
	},
	{
		title: 'SUPERCHARGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/15'),
		picture: '/artwork/206.webp'
	},
	{
		title: 'Performance test',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/16'),
		picture: '/artwork/207.webp'
	},
	{
		title: 'RADIAL',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/17'),
		picture: '/artwork/208.webp'
	},
	{
		title: 'ACRYLIC WINDOW',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/18'),
		picture: '/artwork/209.webp'
	},
	{
		title: 'A fun bug',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/19'),
		picture: '/artwork/210.webp'
	},
	{
		title: 'FORMULA',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/20'),
		picture: '/artwork/211.webp'
	},
	{
		title: '▒╬╟▫▲♯♯∑∆',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/21'),
		picture: '/artwork/212.webp'
	},
	{
		title: 'DIV',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/22'),
		picture: '/artwork/213.webp'
	},
	{
		title: 'CONE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/23'),
		picture: '/artwork/214.webp'
	},
	{
		title: 'A barrier so thin it looks like stars.',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/24'),
		picture: '/artwork/215.webp'
	},
	{
		title: 'ITERATE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/25'),
		picture: '/artwork/216.webp'
	},
	{
		title: 'HOME',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/26'),
		picture: '/artwork/217.webp'
	},
	{
		title: 'entrances',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/27'),
		picture: '/artwork/218.webp'
	},
	{
		title: 'TRAVERSE',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/28'),
		picture: '/artwork/219.webp'
	},
	{
		title: 'Y',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/29'),
		picture: '/artwork/220.webp'
	},
	{
		title: 'ENERGY',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/30'),
		picture: '/artwork/221.webp'
	},
	{
		title: 'pumpkin',
		collection: 'EVERYDAYS',
		date: new Date('2021/10/31'),
		picture: '/artwork/222.webp'
	},
	{
		title: 'REFLECTION',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/01'),
		picture: '/artwork/223.webp'
	},
	{
		title: 'INSERTION',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/02'),
		picture: '/artwork/224.webp'
	},
	{
		title: 'COLOR ARITHMETIC',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/03'),
		picture: '/artwork/225.webp'
	},
	{
		title: 'SPIKES',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/04'),
		picture: '/artwork/226.webp'
	},
	{
		title: 'STRETCH',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/05'),
		picture: '/artwork/227.webp'
	},
	{
		title: 'Planetoid orbs',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/06'),
		picture: '/artwork/228.webp'
	},
	{
		title: 'Fake lighting',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/07'),
		picture: '/artwork/229.webp'
	},
	{
		title: 'SCROLL',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/08'),
		picture: '/artwork/230.webp'
	},
	{
		title: 'LRIWS',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/09'),
		picture: '/artwork/231.webp'
	},
	{
		title: 'RECALCULATE',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/10'),
		picture: '/artwork/232.webp'
	},
	{
		title: 'fill in',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/11'),
		picture: '/artwork/233.webp'
	},
	{
		title: 'PSEUDO-ICE',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/12'),
		picture: '/artwork/234.webp'
	},
	{
		title: 'RE-NEON',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/13'),
		picture: '/artwork/235.webp'
	},
	{
		title: 'FIELD RINGS',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/14'),
		picture: '/artwork/236.webp'
	},
	{
		title: 'TWISTED BIOME',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/15'),
		picture: '/artwork/237.webp'
	},
	{
		title: 'turbines',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/16'),
		picture: '/artwork/238.webp'
	},
	{
		title: 'PLANE DISTORT',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/17'),
		picture: '/artwork/239.webp'
	},
	{
		title: 'BRANCHES',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/18'),
		picture: '/artwork/240.webp'
	},
	{
		title: 'LAND',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/19'),
		picture: '/artwork/241.webp'
	},
	{
		title: 'tridepth',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/20'),
		picture: '/artwork/242.webp'
	},
	{
		title: 'TWISTED BULLET',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/21'),
		picture: '/artwork/243.webp'
	},
	{
		title: 'ERODE',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/22'),
		picture: '/artwork/244.webp'
	},
	{
		title: 'TWIRL VI',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/23'),
		picture: '/artwork/245.webp'
	},
	{
		title: 'MANIPULATION OF DATA',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/24'),
		picture: '/artwork/246.webp'
	},
	{
		title: 'FIGURE TURN',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/25'),
		picture: '/artwork/247.webp'
	},
	{
		title: 'hollow oranges',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/26'),
		picture: '/artwork/248.webp'
	},
	{
		title: 'FLUID IGNITION',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/27'),
		picture: '/artwork/249.webp'
	},
	{
		title: 'CROSSING',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/28'),
		picture: '/artwork/250.webp'
	},
	{
		title: 'reflective mapping',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/29'),
		picture: '/artwork/251.webp'
	},
	{
		title: 'SKIN CANDLE WAX',
		collection: 'EVERYDAYS',
		date: new Date('2021/11/30'),
		picture: '/artwork/252.webp'
	},
	{
		title: '44',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/01'),
		picture: '/artwork/253.webp'
	},
	{
		title: 'FOG',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/02'),
		picture: '/artwork/254.webp'
	},
	{
		title: 'Do',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/03'),
		picture: '/artwork/255.webp'
	},
	{
		title: 'OVERFLOW',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/04'),
		picture: '/artwork/256.webp'
	},
	{
		title: 'PERFECTIONISM',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/05'),
		picture: '/artwork/257.webp'
	},
	{
		title: 'Alleyway',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/06'),
		picture: '/artwork/258.webp'
	},
	{
		title: 'CCLIX',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/07'),
		picture: '/artwork/259.webp'
	},
	{
		title: 'NETWORK³',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/08'),
		picture: '/artwork/260.webp'
	},
	{
		title: 'CALCULATE LIGHT',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/09'),
		picture: '/artwork/261.webp'
	},
	{
		title: '9934',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/10'),
		picture: '/artwork/262.webp'
	},
	{
		title: 'Transmit',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/11'),
		picture: '/artwork/263.webp'
	},
	{
		title: 'TRANSMIT AGAIN',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/12'),
		picture: '/artwork/264.webp'
	},
	{
		title: 'THE OTHER EDGE',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/13'),
		picture: '/artwork/265.webp'
	},
	{
		title: 'round it',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/14'),
		picture: '/artwork/266.webp'
	},
	{
		title: 'Playing with lights',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/15'),
		picture: '/artwork/267.webp'
	},
	{
		title: 'SIGHT',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/16'),
		picture: '/artwork/268.webp'
	},
	{
		title: 'single room',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/17'),
		picture: '/artwork/269.webp'
	},
	{
		title: 'recycle',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/18'),
		picture: '/artwork/270.webp'
	},
	{
		title: 'visibly isolated',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/19'),
		picture: '/artwork/271.webp'
	},
	{
		title: 'bfdlaimawws',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/20'),
		picture: '/artwork/272.webp'
	},
	{
		title: 'Splash screen',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/21'),
		picture: '/artwork/273.webp'
	},
	{
		title: 'clueless',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/22'),
		picture: '/artwork/274.webp'
	},
	{
		title: 'identify',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/23'),
		picture: '/artwork/275.webp'
	},
	{
		title: 'xmas eve',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/24'),
		picture: '/artwork/276.webp'
	},
	{
		title: 'christmas rendering errors',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/25'),
		picture: '/artwork/277.webp'
	},
	{
		title: 'E-442 city',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/26'),
		picture: '/artwork/278.webp'
	},
	{
		title: 'SWITCH',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/27'),
		picture: '/artwork/279.webp'
	},
	{
		title: 'concentration',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/28'),
		picture: '/artwork/280.webp'
	},
	{
		title: 'ABILITY TO TELL',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/29'),
		picture: '/artwork/281.webp'
	},
	{
		title: 'VAV',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/30'),
		picture: '/artwork/282.webp'
	},
	{
		title: 'TRANSITIONING',
		collection: 'EVERYDAYS',
		date: new Date('2021/12/31'),
		picture: '/artwork/283.webp'
	},
	{
		title: 'NEW CYCLE',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/01'),
		picture: '/artwork/284.webp'
	},
	{
		title: 'ROUGH HEMISPHERES',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/02'),
		picture: '/artwork/285.webp'
	},
	{
		title: 'idealess.',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/03'),
		picture: '/artwork/286.webp'
	},
	{
		title: 'Monochromatic?',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/04'),
		picture: '/artwork/287.webp'
	},
	{
		title: 'U-Noise',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/05'),
		picture: '/artwork/288.webp'
	},
	{
		title: 'ONCE AGAIN',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/06'),
		picture: '/artwork/289.webp'
	},
	{
		title: 'WET SKY',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/07'),
		picture: '/artwork/290.webp'
	},
	{
		title: 'SELDOM',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/08'),
		picture: '/artwork/291.webp'
	},
	{
		title: 'Maybe shattered',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/09'),
		picture: '/artwork/292.webp'
	},
	{
		title: '□□□',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/10'),
		picture: '/artwork/293.webp'
	},
	{
		title: '592',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/11'),
		picture: '/artwork/294.webp'
	},
	{
		title: 'Not artificial.',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/12'),
		picture: '/artwork/295.webp'
	},
	{
		title: 'LUCIDITY',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/13'),
		picture: '/artwork/296.webp'
	},
	{
		title: 'PRIMITIVE BUILD',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/14'),
		picture: '/artwork/297.webp'
	},
	{
		title: 'CONST',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/15'),
		picture: '/artwork/298.webp'
	},
	{
		title: 'CEILING',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/16'),
		picture: '/artwork/299.webp'
	},
	{
		title: 'UNDER',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/17'),
		picture: '/artwork/300.webp'
	},
	{
		title: 'REBUILT',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/18'),
		picture: '/artwork/301.webp'
	},
	{
		title: 'TERRAFORM RECONSTRUCTION',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/19'),
		picture: '/artwork/302.webp'
	},
	{
		title: 'REGRESSION - STAGE 1',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/20'),
		picture: '/artwork/303.webp'
	},
	{
		title: 'REGRESSION - STAGE 2',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/21'),
		picture: '/artwork/304.webp'
	},
	{
		title: 'REGRESSION - STAGE 3',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/22'),
		picture: '/artwork/305.webp'
	},
	{
		title: 'MULTIPLE ROOTS',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/23'),
		picture: '/artwork/306.webp'
	},
	{
		title: 'BUMPS',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/24'),
		picture: '/artwork/307.webp'
	},
	{
		title: 'one simple gradient',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/25'),
		picture: '/artwork/308.webp'
	},
	{
		title: 'DIM STEEL',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/26'),
		picture: '/artwork/309.webp'
	},
	{
		title: 'SS',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/27'),
		picture: '/artwork/310.webp'
	},
	{
		title: 'HATCH',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/28'),
		picture: '/artwork/311.webp'
	},
	{
		title: 'NON-CHANNEL',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/29'),
		picture: '/artwork/312.webp'
	},
	{
		title: 'ALIASING',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/30'),
		picture: '/artwork/313.webp'
	},
	{
		title: 'π',
		collection: 'EVERYDAYS',
		date: new Date('2022/01/31'),
		picture: '/artwork/314.webp'
	},
	{
		title: 'COUNT',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/01'),
		picture: '/artwork/315.webp'
	},
	{
		title: '2',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/02'),
		picture: '/artwork/316.webp'
	},
	{
		title: 'RUSTED',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/03'),
		picture: '/artwork/317.webp'
	},
	{
		title: 'out of town',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/04'),
		picture: '/artwork/318.webp'
	},
	{
		title: 'RESTRUCTURE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/05'),
		picture: '/artwork/319.webp'
	},
	{
		title: 'SS3EE2',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/06'),
		picture: '/artwork/320.webp'
	},
	{
		title: 'UNSURE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/07'),
		picture: '/artwork/321.webp'
	},
	{
		title: 'I have way too much homework.',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/08'),
		picture: '/artwork/322.webp'
	},
	{
		title: 'follows',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/09'),
		picture: '/artwork/323.webp'
	},
	{
		title: 'four',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/10'),
		picture: '/artwork/324.webp'
	},
	{
		title: 'SUPER',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/11'),
		picture: '/artwork/325.webp'
	},
	{
		title: 'ONE NEW ATMOSPHERE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/12'),
		picture: '/artwork/326.webp'
	},
	{
		title: 'design',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/13'),
		picture: '/artwork/327.webp'
	},
	{
		title: 'hello',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/14'),
		picture: '/artwork/328.webp'
	},
	{
		title: 'WA',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/15'),
		picture: '/artwork/329.webp'
	},
	{
		title: 'C',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/16'),
		picture: '/artwork/330.webp'
	},
	{
		title: 'BOUND BOX',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/17'),
		picture: '/artwork/331.webp'
	},
	{
		title: 'COLON WIRE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/18'),
		picture: '/artwork/332.webp'
	},
	{
		title: '333',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/19'),
		picture: '/artwork/333.webp'
	},
	{
		title: 'CURVE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/20'),
		picture: '/artwork/334.webp'
	},
	{
		title: 'COMPONENT',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/21'),
		picture: '/artwork/335.webp'
	},
	{
		title: 'DO',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/22'),
		picture: '/artwork/336.webp',
		description:
			'This artwork is actually a 22 second video, published on: https://www.youtube.com/watch?v=wcSrJ2SqIVE'
	},
	{
		title: 'bleed',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/23'),
		picture: '/artwork/337.webp'
	},
	{
		title: 'MINDCASTER',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/24'),
		picture: '/artwork/338.webp'
	},
	{
		title: 'WHERE',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/25'),
		picture: '/artwork/339.webp'
	},
	{
		title: 'EXTRACT',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/26'),
		picture: '/artwork/340.webp'
	},
	{
		title: 'a bit of space',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/27'),
		picture: '/artwork/341.webp'
	},
	{
		title: 'FLOOD',
		collection: 'EVERYDAYS',
		date: new Date('2022/02/28'),
		picture: '/artwork/342.webp'
	},
	{
		title: 'busy',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/01'),
		picture: '/artwork/343.webp'
	},
	{
		title: 'SHIFTING FROM',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/02'),
		picture: '/artwork/344.webp'
	},
	{
		title: '<<<',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/03'),
		picture: '/artwork/345.webp'
	},
	{
		title: 'REGISTER',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/04'),
		picture: '/artwork/346.webp'
	},
	{
		title: 'Specimen',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/05'),
		picture: '/artwork/347.webp'
	},
	{
		title: 'DETECT',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/06'),
		picture: '/artwork/348.webp'
	},
	{
		title: 'Rushing towards the finish line.',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/07'),
		picture: '/artwork/349.webp'
	},
	{
		title: 'expose',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/08'),
		picture: '/artwork/350.webp'
	},
	{
		title: 'Technical difficulties',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/09'),
		picture: '/artwork/351.webp'
	},
	{
		title: 'RIPPLE EMERGE',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/10'),
		picture: '/artwork/352.webp'
	},
	{
		title: 'STRAND',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/11'),
		picture: '/artwork/353.webp'
	},
	{
		title: 'unfocused',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/12'),
		picture: '/artwork/354.webp'
	},
	{
		title: 'IRRADIATE',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/13'),
		picture: '/artwork/355.webp'
	},
	{
		title: 'C (again)',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/14'),
		picture: '/artwork/356.webp'
	},
	{
		title: 'LETTING',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/15'),
		picture: '/artwork/357.webp'
	},
	{
		title: 'hill of hills',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/16'),
		picture: '/artwork/358.webp'
	},
	{
		title: 'Stack',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/17'),
		picture: '/artwork/359.webp'
	},
	{
		title: 'FULL CIRCLE',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/18'),
		picture: '/artwork/360.webp'
	},
	{
		title: 'FUZZING',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/19'),
		picture: '/artwork/361.webp'
	},
	{
		title: 'TWIRL VII',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/20'),
		picture: '/artwork/362.webp'
	},
	{
		title: 'TOWEL',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/21'),
		picture: '/artwork/363.webp'
	},
	{
		title: 'TO JUICE IT RETURNS',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/22'),
		picture: '/artwork/364.webp'
	},
	{
		title: 'ONE YEAR',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/23'),
		picture: '/artwork/365.webp'
	},
	{
		title: 'EPILOGUE',
		collection: 'EVERYDAYS',
		date: new Date('2022/03/24'),
		picture: '/artwork/366.webp'
	},
	{
		title: 'Frog',
		collection: 'PHOTO 2019',
		date: new Date('2019/09/14'),
		picture: '/photo/frog.webp'
	},
	{
		title: 'Flower1',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0041.webp'
	},
	{
		title: 'Flower2',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0043.webp'
	},
	{
		title: 'Flower3',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0045.webp'
	},
	{
		title: 'Flower4',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0061.webp'
	},
	{
		title: 'Sunset',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0083.webp'
	},
	{
		title: 'Satellite',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0087.webp'
	},
	{
		title: 'Cloudy Trees',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0102.webp'
	},
	{
		title: 'Flower5',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0114.webp'
	},
	{
		title: 'Flower6',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0120.webp'
	},
	{
		title: 'Leaves',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0124.webp'
	},
	{
		title: 'Flower7',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0136.webp'
	},
	{
		title: 'Flower8',
		collection: 'PHOTO 2019',
		date: new Date('2019/05/13'),
		picture: '/photo/IMG_0137.webp'
	},
	{
		title: 'Leaves2',
		collection: 'PHOTO 2019',
		date: new Date('2019/09/13'),
		picture: '/photo/IMG_1050.webp'
	},
	{
		title: 'The Sky Is Pink.001',
		collection: 'PHOTO 2019',
		date: new Date('2019/12/29'),
		picture: '/photo/IMG_1119.webp'
	},
	{
		title: 'Parallélisme Inhérent',
		date: new Date('2022/05/05'),
		picture: '/artwork/paral.webp'
	},
	{
		title: 'The boundary that goes along with it.',
		date: new Date('2022/05/25'),
		picture: '/artwork/boundary.webp'
	},
	{
		title: 'Everlasting saturation',
		date: new Date('2022/06/18'),
		picture: '/artwork/everlasting.webp'
	}
]
