import styled, { css } from 'styled-components';
import { media } from '@/theme';

export const WrapperMainSlider = styled.div`
	${({ theme }) => css`
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 80px;

		.circle-section {
			position: relative;
			min-width: 1%;
			min-height: 170px;
			height: 620px;
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
		}

		${media.lessThan('md')`
            padding-left: 0;

            .circle-section {
                height: 30vh;

            }

            .pagination {
                position: absolute;
                bottom: 35px;
                visibility: visible;
            }

            .main-swiper {
                top:0;
                height: 20vh;
                margin-top: 20px;
            }
        `}

		--swiper-pagination-color: ${theme.colors.title};
		--swiper-pagination-left: 5px;
		--swiper-pagination-right: 5px;
		--swiper-pagination-bullet-width: 6px;
		--swiper-pagination-bullet-height: 6px;
		--swiper-pagination-bullet-inactive-color: #000;
		--swiper-pagination-bullet-inactive-opacity: 0.3;
		--swiper-pagination-bullet-opacity: 1;
		--swiper-pagination-bullet-horizontal-gap: 0px;
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

		.other {
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
