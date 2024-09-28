import { media } from '@/theme';
import styled, { css } from 'styled-components';

export const WrapperMainSlider = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;

	.circle-section {
		position: relative;
		min-width: 1%;
		min-height: 620px;
		width: 100%;
	}

	.pagination {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		gap: 10px;
		width: 110px;
		visibility: hidden;

		.swiper-pagination-bullet {
			width: 6px;
			height: 6px;
			background-color: #42567a;
			margin: 0;
		}

		${media.lessThan('md')`
            visibility: visible;
        `}
	}

	${media.lessThan('md')`
        padding-left: 0;

        .circle-section {
            min-height: 250px;
        }
    `}
`;

export const ControlsBlockStyled = styled.div`
	${({ theme }) => css`
		position: absolute;
		left: 0;
		bottom: 0;
		width: 120px;
		height: 88px;
		color: ${theme.colors.title};

		span {
			font-size: 14px;
			display: block;
			margin-bottom: 20px;
		}

		button {
			cursor: pointer;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			border: 1px solid ${theme.colors.title}80;
			line-height: 50px;

			&.swiper-button-disabled {
				opacity: 0.5;
			}

			&.button-next {
				img {
					transform: scale(-1, 1);
				}
			}
		}
	`}
`;

export const YearsFromTo = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: 120px;

		pointer-events: none;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;

		font-size: 200px;
		font-weight: 700;
		justify-content: center;
		align-items: center;
		line-height: 1;
		color: ${theme.colors.primary};

		span {
			color: ${theme.colors.secondary};
		}

		${media.lessThan('xl')`
            font-size: 160px;
            gap: 100px;
        `}

		${media.lessThan('md')`
            font-size: 100px;
            gap: 80px;
        `}

        ${media.lessThan('sm')`
            font-size: 60px;
            gap: 20px;
        `}
	`}
`;
