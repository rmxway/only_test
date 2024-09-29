import styled, { css } from 'styled-components';
import { media } from '@/theme';
import { Flexbox } from '@/components';

export const MainSwiperWrapper = styled.div`
	position: relative;
	top: -88px;
	min-height: 170px;
	max-width: 100%;

	& > .swiper {
		overflow: visible;
	}

	${media.lessThan('md')`
        top:0;
        height: 20vh;
        margin-top: 20px;
    `}
`;

export const ControlsBlockStyled = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 120px;
		height: 88px;
		color: ${theme.colors.title};
		margin-bottom: 56px;

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
			transition: all 0.2s;

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
            bottom: 15px;
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
                    max-width: 100%;
                }
            }
        `}
	`}
`;
