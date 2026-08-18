export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://lukanikolicdesign.com';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Luka Nikolic Design',
	title: 'Luka Nikolic Design | Product / UX Designer Portfolio',
	description:
		'Luka Nikolic is a Product / UX Designer creating clear, conversion-focused websites, e-commerce experiences, dashboards, and design systems.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'lukanikolicdesign@gmail.com',
	locale: 'en-US',
	authorName: 'Luka Nikolic Design',
	authorRole: 'Product / UX Designer',
	keywords: [
		'product designer portfolio',
		'UX designer portfolio',
		'e-commerce web design',
		'design systems',
		'conversion-focused web design',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
		{ href: '/resume#clients', label: 'Clients' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/lukanikolicdesign/', label: 'LinkedIn' },
		{ href: 'https://dribbble.com/lukanikolic', label: 'Dribbble' },
	],
};
