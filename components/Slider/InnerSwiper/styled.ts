import { media } from '@/theme';
import styled, { css } from 'styled-components';

export const InnerSwiperSlideWrapper = styled.div<{ $active?: boolean }>`
	${({ $active }) => css`
		position: relative;
		opacity: 0;
		transition-property: opacity;

		${$active
			? css`
					transition-delay: 1s;
					transition-duration: 0.8s;
					opacity: 1;
				`
			: css`
					transition-delay: 0s;
					transition-duration: 0.2s;
				`}

		.swiper-inner {
			overflow: hidden;
		}

		.swiper-slide {
			width: 300px;
			margin-right: 40px;
		}

		${media.lessThan('md')`
            border-top: 2px solid #C7CDD9;
            padding-top: 20px;
            padding-bottom: 78px;

            @keyframes fadeInTop {
                from {
                    transform: translateY(10%);
                },
                to {
                    transform: translateY(0);
                }
            }

            ${
				$active &&
				css`
					transition-delay: 0.5s;
				`
			}

            animation-name: ${$active ? 'fadeInTop' : 'initial'};
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-delay: .5s;
            animation-timing-function: ease-out;

            .swiper-slide {
                width: 170px;
                margin-right: 25px;
            }
        `}
	`}
`;

export const ControlsBlockStyled = styled.div`
	${({ theme }) => css`
		position: absolute;
		left: -55px;
		right: -55px;
		top: 0;
		z-index: -1;
		height: 100%;
		color: ${theme.colors.title};

		button {
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			left: 0px;
			cursor: pointer;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			border-radius: 100%;
			line-height: 50px;
			box-shadow: 0px 0px 15px 0px #3877ee1a;

			&.swiper-button-disabled {
				display: none;
			}

			img {
				transform: scale(0.8);
			}

			&.button-next-inner {
				right: 0;
				left: auto;

				img {
					transform: scale(-0.8, 0.8);
				}
			}
		}

		${media.lessThan('md')`
            display: none;
        `}
	`}
`;

export const Chapter = styled.div`
	@keyframes moveTop {
		from {
			transform: translate(0, 10px);
		}
		to {
			transform: translate(0, 0);
		}
	}

	${({ theme }) => css`
		position: absolute;
		color: ${theme.colors.title};
		font-weight: 600;
		font-size: 20px;
		top: -50px;

		animation-name: moveTop;
		animation-duration: 0.5s;
		animation-delay: 0.5s;
		animation-play-state: running;
		animation-direction: alternate;
		animation-fill-mode: both;
		animation-iteration-count: 1;
		animation-timing-function: ease-out;
	`}
`;

export const Title = styled.div`
	${({ theme }) => css`
		font-size: 25px;
		line-height: 30px;
		font-family: ${theme.fonts.secondary};
		color: ${theme.colors.primary};
		margin-bottom: 15px;

		${media.lessThan('md')`
            font-size: 16px;
            line-height: 20px;
        `}
	`}
`;

export const Description = styled.div`
	${({ theme }) => css`
		font-size: 20px;
		line-height: 30px;
		color: ${theme.colors.title};
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		line-clamp: 6;
		-webkit-box-orient: vertical;

		${media.lessThan('md')`
            font-size: 14px;
            line-height: 20px;
        `}
	`}
`;
