import { FC } from 'react';
import { Flexbox } from '@/components';
import { ControlsBlockStyled } from './styled';

interface MainControlsBlockProps {
	currentPage: number;
	total: number;
	id: string;
}

export const MainControlsBlock: FC<MainControlsBlockProps> = ({ currentPage, total, id }) => (
	<ControlsBlockStyled>
		<span>{(currentPage + 100).toString().substring(1) + '/' + (total + 100).toString().substring(1)}</span>
		<Flexbox $nowrap $gap={20}>
			<button className={`button-prev button-prev-${id}`} title="Предыдущий слайд">
				<img src="img/arrow.svg" alt="prev" />
			</button>
			<button className={`button-next button-next-${id}`} title="Следующий слайд">
				<img src="img/arrow.svg" alt="next" />
			</button>
		</Flexbox>
	</ControlsBlockStyled>
);

export default MainControlsBlock;
