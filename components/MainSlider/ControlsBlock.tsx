import { FC } from 'react';
import { Flexbox } from '@/components';
import { ControlsBlockStyled } from './styled';

interface ControlsBlockProps {
	currentPage: number;
	total: number;
}

export const ControlsBlock: FC<ControlsBlockProps> = ({ currentPage, total }) => (
	<ControlsBlockStyled>
		<span>{(currentPage + 100).toString().substring(1) + '/' + (total + 100).toString().substring(1)}</span>
		<Flexbox $nowrap $gap={20}>
			<button className="button-prev">
				<img src="img/arrow.svg" title="arrow" alt="prev" />
			</button>
			<button className="button-next">
				<img src="img/arrow.svg" title="arrow" alt="next" />
			</button>
		</Flexbox>
	</ControlsBlockStyled>
);

export default ControlsBlock;
