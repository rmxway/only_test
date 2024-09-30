import styled, { css } from 'styled-components';
import { Container } from '@/components';
import { media } from '@/theme';

export const WrapperTimelapse = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		line-height: 1.25;
		min-width: 320px;
		max-width: 100%;
		min-height: 100svh;

		${Container} {
			padding-top: 180px;
			border-left: 1px solid ${theme.colors.gray.$2};
			border-right: 1px solid ${theme.colors.gray.$2};
		}

		h1 {
			position: absolute;
			margin: 0;
			padding: 0;
			left: 0px;
			padding-left: 80px;
			font-size: 56px;
			line-height: 67px;
			z-index: 1;
			color: ${theme.colors.title};

			span {
				display: block;
			}

			&:before {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				width: 5px;
				left: 0;
				background-color: ${theme.colors.primary};
				background-image: linear-gradient(180deg, ${theme.colors.primary} -5%, ${theme.colors.secondary} 85%);
			}
		}

		${media.lessThan('lg')`
            h1 {
                font-size: 40px;
                line-height: 48px;
            }
        `}

		${media.lessThan('md')`
            ${Container} {
                padding-top: 60px;
                border: none;
            }

            h1 {
                position: relative;
                padding-left: 0;
                font-size: 20px;
                line-height: 24px;

                &:before {
                    display: none;
                }
            }
        `}
	`}
`;
