import { FC, SVGProps } from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.circle`
	${({ theme }) => css`
		position: absolute;
		fill: none;
		stroke: ${theme.colors.title}50;
		stroke-width: 1;
	`}
`;

export const SliderCircle: FC<SVGProps<SVGCircleElement>> = (props) => (
	<svg>
		<Circle id="circle" r={263} cx={265} cy={265} {...props} />
	</svg>
);

export default SliderCircle;
