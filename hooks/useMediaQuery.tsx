import { useEffect, useMemo, useState } from 'react';

/**
 * Observable screen width breakpoints and if matched return a boolean value
 * @param {string}query - string
 * @returns boolean
 * @example const match = useMediaQuery('1024px') // return true if screen width from 0 to 1024 px
 */
export const useMediaQuery = (query: string) => {
	const mediaQuery = useMemo(
		() => (typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${query})`) : undefined),
		[query],
	);
	const [match, setMatch] = useState(mediaQuery?.matches);

	useEffect(() => {
		const onChange = () => setMatch(mediaQuery?.matches);
		mediaQuery?.addEventListener('change', onChange);

		return () => mediaQuery?.removeEventListener('change', onChange);
	}, [mediaQuery]);

	return match;
};

export default useMediaQuery;
