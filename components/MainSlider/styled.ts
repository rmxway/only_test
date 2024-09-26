import styled, { css } from 'styled-components';

export const WrapperMainSlider = styled.div`
	position: relative;
	min-height: 600px;
	display: flex;
	align-items: flex-end;
	padding-left: 200px;
`;

export const ControlsBlock = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 120px;
	height: 88px;

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
		border: 1px solid #42567a80;
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
`;

export const YearsFromTo = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: 120px;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		font-size: 200px;
		font-weight: 700;
		justify-content: center;
		align-items: center;
		line-height: 1;
		color: ${theme.colors.primary};

		span {
			color: ${theme.colors.secondary};
		}
	`}
`;
