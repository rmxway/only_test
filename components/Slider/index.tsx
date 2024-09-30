import { FC, memo, useState } from 'react';
import { DynamicCircle } from '@/components';
import CountUp from 'react-countup';
import MainSwiper from './MainSwiper';
import { WrapperMainSlider, YearsFromTo } from './styled';
import type SwiperType from 'swiper';
import { DataType } from '@/api';

export const Slider: FC<{ data: DataType }> = memo(({ data }) => {
	const [years, setYears] = useState({
		start: data[0].start,
		end: data[0].end,
	});
	const [currentPage, setCurrentPage] = useState(1);
	const dataCircle = data.map(({ title }) => title);

	const onSlideChange = (swiper: SwiperType) => {
		setYears({
			start: data[swiper.activeIndex].start,
			end: data[swiper.activeIndex].end,
		});

		setCurrentPage(swiper.activeIndex + 1);
	};

	return (
		<WrapperMainSlider>
			<div className="circle-section">
				<YearsFromTo>
					<CountUp start={1980} end={years.start} duration={2} preserveValue separator="" />
					<span className="other">
						<CountUp start={1980} end={years.end} duration={2} preserveValue separator="" />
					</span>
				</YearsFromTo>
				<DynamicCircle buttons={dataCircle} {...{ currentPage, setCurrentPage }} />
			</div>
			<MainSwiper {...{ data, onSlideChange, currentPage }} />
		</WrapperMainSlider>
	);
});

export default Slider;
