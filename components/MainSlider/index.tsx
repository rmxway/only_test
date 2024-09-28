import { FC, useState } from 'react';
import type SwiperType from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ControlsBlock } from './ControlsBlock';
import { WrapperMainSlider, YearsFromTo } from './styled';
import { DataType } from '@/api';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DynamicCircle from '../DynamicCircle';

export const MainSlider: FC<{ data: DataType }> = ({ data }) => {
	const [mainSwiper, setMainSwiper] = useState<SwiperType>();
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

	const changeSlide = (idx: number) => {
		mainSwiper?.slideTo(idx);
	};

	const sliderProps: SwiperProps = {
		modules: [Navigation, Pagination],
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		pagination: {
			el: '.pagination',
			type: 'bullets',
			clickable: true,
		},
		spaceBetween: 50,
		slidesPerView: 1,
		onSlideChange,
	};

	return (
		<WrapperMainSlider>
			<div className="circle-section">
				<DynamicCircle buttons={dataCircle} {...{ currentPage, changeSlide }} />
				<YearsFromTo>
					{years.start}
					<span>{years.end}</span>
				</YearsFromTo>
				<ControlsBlock currentPage={currentPage} total={data.length} />
				<div className="pagination" />
			</div>
			<Swiper onSwiper={setMainSwiper} {...sliderProps} className="main-swiper">
				{data?.map(({ title, dates }) => <SwiperSlide key={title}>{title}</SwiperSlide>)}
			</Swiper>
		</WrapperMainSlider>
	);
};

export default MainSlider;
