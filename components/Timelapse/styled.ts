import styled, { css } from 'styled-components';
import { Container } from '@/components';

export const WrapperTimelapse = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		line-height: 1.25;
		min-width: 320px;
		max-width: 100%;
		min-height: 100vh;

		${Container} {
			padding-top: 170px;
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
	`}
`;
