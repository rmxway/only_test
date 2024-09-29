import { FC } from 'react';
import { ControlsBlockStyled } from './styled';

export const InnerControlsBlock: FC = () => (
	<ControlsBlockStyled>
		<button className="button-prev-inner">
			<img src="img/arrow.svg" alt="prev" />
		</button>
		<button className="button-next-inner">
			<img src="img/arrow.svg" alt="next" />
		</button>
	</ControlsBlockStyled>
);

export default InnerControlsBlock;
