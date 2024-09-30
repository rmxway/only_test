import { generateMedia } from 'styled-media-query';

interface BreakpointsType {
	xl: string;
	lg: string;
	md: string;
	sm: string;
	xs: string;
	xxs: string;
}

const breakpoints: BreakpointsType = {
	xl: '1460px',
	lg: '1300px',
	md: '1044px',
	sm: '800px',
	xs: '600px',
	xxs: '350px',
};

const media = generateMedia(breakpoints);

export { breakpoints, media };
export default media;
