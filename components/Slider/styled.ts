import styled, { css } from 'styled-components';
import { media } from '@/theme';

export const WrapperMainSlider = styled.div`
	position: relative;
    display: flex;
	flex-direction: column;
	align-items: flex-start;

	.circle-section {
		position: relative;
		min-width: 1%;
		min-height: 150px;
		height: 620px;
		width: 100%;
	}

	${media.lessThan('md')`
            flex-grow: 1;
            padding-left: 0;

            .circle-section {
                height: auto;
                flex-grow: 2;
                min-height: 100px;
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
            font-size: 56px;
            gap: 20px;
        `}
	`}
`;
