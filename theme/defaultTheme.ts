import { DefaultTheme } from 'styled-components';

import { Colors, Gradients } from '@/@types/styled';

const primary = '#3877EE';
const secondary = '#EC539E';
const bg = '#F4F5F9';
const title = '#42567A';

const colors: Colors = {
	primary,
	secondary,
	title,
	bg,
	gray: {
		$1: '#F3F3F3',
		$2: '#E3E3E3',
		$3: '#CDCDCD',
		$4: '#BEBEBE',
		$5: '#A5A5A5',
		$6: '#747474',
		$7: '#595959',
		$8: '#434343',
		$9: '#222222',
	},
};

export const createGradient = (deg: string, color1: string, long1: string, color2: string, long2: string) =>
	`linear-gradient(${deg}, ${color1} ${long1}, ${color2} ${long2})`;

const gradients: Gradients = {
	main: (deg = '150deg') => createGradient(deg, '#E8FFB3', '0%', secondary, '60%'),
};

export const defaultTheme: DefaultTheme = {
	name: 'default',
	colors,
	gradients,
	layout: {
		containerWidth: '1024px',
		shadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
	},
	radius: {
		borderRadius: '8px',
	},
	fonts: {
		main: `'PT Sans', sans-serif`,
		secondary: `'Bebas Neue', sans-serif`,
	},
};

export default defaultTheme;
