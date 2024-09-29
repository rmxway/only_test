import { FC } from 'react';
import { Container, Slider } from '@/components';
import { WrapperTimelapse } from './styled';
import { DataType } from '@/api';

export const TimeLapse: FC<{ data: DataType }> = ({ data }) => (
	<WrapperTimelapse>
		<Container>
			<h1>
				Исторические <span>даты</span>
			</h1>
			{data.length >= 2 && <Slider data={data} />}
		</Container>
	</WrapperTimelapse>
);

export default TimeLapse;
