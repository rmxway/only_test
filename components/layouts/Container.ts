import styled, { css } from 'styled-components';

import { media } from '@/theme';

/**
 * Adaptive container block
 * @param {boolean} $pt - padding-top: 40px
 * @param {boolean} $pb - padding-top: 40px
 * @param {boolean} $flex - display: flex; flex-direction: column
 */

interface ContainerProps {
	$pt?: boolean;
	$pb?: boolean;
	$flex?: boolean;
}

export const Container = styled.div<ContainerProps>`
	position: relative;
	display: block;
	padding: 0 80px;
	width: 1440px;
	flex-grow: 1;
	max-width: 100%;
	margin: 0 auto;

	${({ $pt }) =>
		$pt &&
		css`
			padding-top: 40px;
		`}

	${({ $pb }) =>
		$pb &&
		css`
			padding-bottom: 40px;
		`}

	${({ $flex }) =>
		$flex &&
		css`
			display: flex;
			flex-direction: column;
		`}

    ${media.lessThan('xl')`
		max-width: 1280px;
	`}

    ${media.lessThan('lg')`
		max-width: 1024px;
	`}

	${media.lessThan('md')`
		max-width: 768px;
        padding: 0 20px;
	`}

    ${media.lessThan('sm')`
		max-width: 100%;
	`}
`;

export default Container;
