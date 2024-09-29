import styled, { css } from 'styled-components';

export const InnerSwiperSlideWrapper = styled.div<{ $active?: boolean }>`
	${({ $active }) => css`
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
					opacity: 0;
				`}

		.swiper-inner {
			overflow: hidden;
		}

		.swiper-slide {
			width: 300px;
			margin-right: 40px;
		}
	`}
`;

export const ControlsBlockStyled = styled.div`
	${({ theme }) => css`
		position: absolute;
		left: -50px;
		right: -50px;
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

			&.button-next-inner {
				right: 0;
				left: auto;

				img {
					transform: scale(-1, 1);
				}
			}
		}
	`}
`;

export const Title = styled.div`
	${({ theme }) => css`
		font-size: 25px;
		line-height: 30px;
		font-family: ${theme.fonts.secondary};
		color: ${theme.colors.primary};
		margin-bottom: 15px;
	`}
`;

export const Description = styled.div`
	${({ theme }) => css`
		font-size: 20px;
		line-height: 30px;
		color: ${theme.colors.title};
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 7;
		line-clamp: 7;
		-webkit-box-orient: vertical;
	`}
`;
