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
		pointer-events: none;
		z-index: 1;

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
			border-radius: 30px;
			border: 1px solid ${theme.colors.title}50;
			color: ${theme.colors.title};
			background-color: #222;
			font-size: 0;

			transform: translate(-50%, -50%);
			transform-origin: center;
			transition-duration: 0.3s;

			pointer-events: all;
			z-index: 10;

			&.active {
				pointer-events: none;
				transition-duration: 0.6s;

				span {
					opacity: 1;
					font-size: 20px;
					left: calc(100% + 20px);
					transition: all 0.4s;
					transition-delay: 0.7s;
				}
			}

			&:hover {
				transition-duration: 0.3s;
				transition-delay: 0.2s;
			}

			&.active,
			&:hover {
				width: 56px;
				height: 56px;
				font-size: 20px;
				background-color: ${theme.colors.bg};
				border: 1px solid ${theme.colors.title}50;
			}

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
				top: 50%;
				left: 100%;
                width: 200px;
                transform: translate(0, -50%);
                text-align: left;
				opacity: 0;
				font-weight: 700;
				transition: left opacity 0.2s;
				transition-delay: 0s;
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
		pointer-events: none;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100vh;
		z-index: -1;
		background-color: ${theme.colors.title}30;

		${media.lessThan('md')`
            display: none;
        `}
	`}
`;

export const HorLine = styled.div`
	${({ theme }) => css`
		position: absolute;
		pointer-events: none;
		top: 50%;
		left: -80px;
		right: -80px;
		height: 1px;
		z-index: -1;
		background-color: ${theme.colors.title}30;

		${media.lessThan('md')`
            display: none;
        `}
	`}
`;
