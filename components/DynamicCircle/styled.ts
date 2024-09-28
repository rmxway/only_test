import { media } from '@/theme';
import styled, { css } from 'styled-components';

export const SliderCircleWrapper = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 50%;
		left: 50%;
		width: 530px;
		height: 530px;
		transform: translate(-50%, -50%);

		svg {
			width: 100%;
			height: 100%;
		}

		button {
			position: absolute;
			cursor: pointer;
			width: 6px;
			height: 6px;
			margin: 0;
			padding: 0;
			color: ${theme.colors.title};
			border-radius: 30px;
			font-size: 0;

			&:before {
				content: '';
				display: block;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				opacity: 0;
				width: 56px;
				height: 56px;
				background-color: red;
			}

			span {
				pointer-events: none;
				position: absolute;
				opacity: 0;
				top: 14px;
				left: 100%;
				font-weight: 700;
				transition: all 0.2s;
				transition-delay: 0.15s;
			}

			&.active {
				pointer-events: none;
				span {
					opacity: 1;
					left: calc(100% + 20px);
				}
			}
		}

		.wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transform-origin: center;
		}

		${media.lessThan('md')`
            display: none;
        `}
	`}
`;

export const VertLine = styled.div`
	${({ theme }) => css`
		position: fixed;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100vh;
		background-color: ${theme.colors.title}30;

		${media.lessThan('md')`
            display: none;
        `}
	`}
`;

export const HorLine = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 50%;
		left: -80px;
		right: -80px;
		height: 1px;
		background-color: ${theme.colors.title}30;

		${media.lessThan('xl')`
            left: -40px;
            right: -40px;
        `}

		${media.lessThan('lg')`
            left: -20px;
            right: -20px;
        `}

        ${media.lessThan('md')`
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            width: 100%;
        `}
	`}
`;
