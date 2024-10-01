import { FC } from 'react';
import { ControlsBlockStyled } from './styled';

export const InnerControlsBlock: FC<{ id: string }> = ({ id }) => (
	<ControlsBlockStyled>
		<button className={`button-prev-inner button-prev-inner-${id}`}>
			<img src="img/arrow.svg" alt="prev" />
		</button>
		<button className={`button-next-inner button-next-inner-${id}`}>
			<img src="img/arrow.svg" alt="next" />
		</button>
	</ControlsBlockStyled>
);

export default InnerControlsBlock;
