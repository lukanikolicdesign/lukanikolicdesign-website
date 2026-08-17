import type { ImageMetadata } from 'astro';
import primestyleThumbnailImage from '../assets/images/primestyle-thumbnail.jpg';
import mvAugustaThumbnailImage from '../assets/images/mv-augusta-thumbnail.jpg';
import casperThumbnailImage from '../assets/images/casper-thumbnail.jpg';
import designSystemImage from '../assets/images/Design System Hero.jpg';

export type Project = {
	name: string;
	title: string;
	description: string;
	background: 'lime' | 'cyan' | 'lavender' | 'mint' | 'ebf5fa' | 'dark' | 'casper';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
	{
		name: 'Recon',
		title: 'Design system ready for AI implementation.',
		description:
			'Full design system used for "vibecoding" an application so it keeps design consistency.',
		background: 'lime',
		variant: 'desktop',
		href: '/work/recon',
		image: designSystemImage,
		alt: 'Design system preview image',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Casper',
		title: 'Redesigning the mattresses landing page and promo sales experience.',
		description:
			'A Canadian mattress brand redesign that turned the product page into a conversion-focused landing page and a promo-driven sales experience.',
		background: 'casper',
		variant: 'board',
		href: '/work/casper',
		image: casperThumbnailImage,
		alt: 'Casper mattress landing page preview showing product storytelling and promotional sales layout',
		imageClass: 'project-preview-image',
	},
	{
		name: 'PrimeStyle',
		title: 'A jewelry e-commerce store with a 46% increase in conversion rate.',
		description:
			'An outdated e-commerce store was redesigned to increase conversion rate and improve the user experience.',
		background: 'ebf5fa',
		variant: 'split',
		href: '/work/primestyle',
		image: primestyleThumbnailImage,
		alt: 'PrimeStyle e-commerce preview showing jewelry product interface',
		imageClass: 'project-preview-image',
	},
	{
		name: 'MV Augusta',
		title: 'Helping an Italian motorcycle brand reach a younger audience.',
		description:
			'Website experience focused on introducing younger audiences to MV Augusta through accessories, e-bikes, and scooters.',
		background: 'dark',
		variant: 'mobile',
		href: '/work/mv-augusta',
		image: mvAugustaThumbnailImage,
		alt: 'MV Augusta website preview showing accessories, e-bikes, and scooters',
		imageClass: 'project-preview-image',
	},
];
