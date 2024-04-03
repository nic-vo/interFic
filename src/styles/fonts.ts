import { Manrope } from 'next/font/google';

const manropeClass = Manrope({
	weight: 'variable',
	display: 'swap',
	fallback: ['sans-serif'],
	subsets: ['latin-ext'],
});

export { manropeClass };
