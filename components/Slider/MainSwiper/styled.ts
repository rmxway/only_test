import styled, { css } from 'styled-components';
import { media } from '@/theme';
import { Flexbox } from '@/components';

export const MainSwiperWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		top: -88px;
		max-width: 100%;

		& > .swiper {
			overflow: visible;
			z-index: 1;
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
            top:0;
            flex-shrink: 0;
            flex-grow: 1;
            margin-top: 60px;
            padding-bottom: 50px;

            .pagination {
                position: absolute;
                bottom: 32px;
                visibility: visible;
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
	`};
`;

export const ControlsBlockStyled = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 120px;
		height: 88px;
		color: ${theme.colors.title};
		margin-bottom: 56px;
		z-index: 2;

		span {
			font-size: 14px;
			display: block;
			margin-bottom: 20px;
		}

		button {
			cursor: pointer;
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100%;
			border: 1px solid ${theme.colors.title}80;
			line-height: 50px;
			transition-duration: 0.2s;
			transition-property: opacity, background-color;

			&:hover {
				background-color: #fff;
			}

			&.swiper-button-disabled {
				opacity: 0.5;
			}

			&.button-next {
				img {
					transform: scale(-1, 1);
				}
			}
		}

		${media.lessThan('md')`
            position: absolute;
            top: auto;
            bottom: 14px;
            margin-bottom: 0;
            height: auto;

            span {
                margin-bottom: 10px;
            }

            ${Flexbox} {
                gap: 8px;
            }

            button {
                width: 25px;
			    height: 25px;

                img {
                    height: 8px;
                }
            }
        `}
	`}
`;
