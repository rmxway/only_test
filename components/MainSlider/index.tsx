import { FC, useState } from 'react';
import type SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flexbox } from '@/components';
import { Navigation } from 'swiper/modules';
import { ControlsBlock, WrapperMainSlider, YearsFromTo } from './styled';
import { DataType } from '@/api';

import 'swiper/css';
import 'swiper/css/navigation';

export const MainSlider: FC<{ data: DataType }> = ({ data }) => {
	const [years, setYears] = useState({
		start: data[0].start,
		end: data[0].end,
	});

	const [currentPage, setCurrentPage] = useState(1);

	const handleCHangeSlide = (swiper: SwiperType) => {
		setYears({
			start: data[swiper.activeIndex].start,
			end: data[swiper.activeIndex].end,
		});
		setCurrentPage(swiper.activeIndex + 1);
	};

	return (
		<WrapperMainSlider>
			<YearsFromTo>
				{years.start}
				<span>{years.end}</span>
			</YearsFromTo>
			<Swiper
				modules={[Navigation]}
				navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={handleCHangeSlide}
			>
				{data?.map(({ title, dates }) => <SwiperSlide key={title}>{title}</SwiperSlide>)}
			</Swiper>

			<ControlsBlock>
				<span>
					{(currentPage + 100).toString().substring(1) + '/' + (data.length + 100).toString().substring(1)}
				</span>
				<Flexbox $nowrap $gap={20}>
					<button className="button-prev">
						<img src="img/arrow.svg" title="arrow" alt="prev" />
					</button>
					<button className="button-next">
						<img src="img/arrow.svg" title="arrow" alt="next" />
					</button>
				</Flexbox>
			</ControlsBlock>
		</WrapperMainSlider>
	);
};

export default MainSlider;
