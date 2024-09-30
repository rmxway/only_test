import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
import InnerSwiper from '@/components/Slider/InnerSwiper';
import MainControlsBlock from './MainControlsBlock';
import { MainSwiperWrapper } from './styled';

import { DataType } from '@/api';

export const MainSwiper: FC<{ data: DataType; currentPage: number } & SwiperProps> = ({
	data,
	currentPage,
	onSlideChange,
	...props
}) => {
	const [mainSwiper, setMainSwiper] = useState<SwiperType>();

	const mainSwiperProps: SwiperProps = {
		modules: [Navigation, Pagination, EffectCreative],
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		pagination: {
			el: '.pagination',
			type: 'bullets',
			clickable: true,
		},
		effect: 'creative',
		creativeEffect: {
			limitProgress: 2,
			next: {
				translate: [0, 0, 0],
			},
			prev: {
				translate: [0, 1, 0],
			},
		},
		speed: 800,
		allowTouchMove: false,
		spaceBetween: 0,
		slidesPerView: 1,
		onSwiper: setMainSwiper,
		onSlideChange,
	};

	useEffect(() => {
		mainSwiper?.slideTo(currentPage - 1);
	}, [currentPage, mainSwiper]);

	return (
		<MainSwiperWrapper>
			<MainControlsBlock total={data.length} {...{ currentPage }} />
			<Swiper {...mainSwiperProps} {...props}>
				{data?.map(({ title, dates }, idx) => (
					<SwiperSlide key={title}>
						<InnerSwiper {...{ dates, title }} active={idx === mainSwiper?.activeIndex} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="pagination" />
		</MainSwiperWrapper>
	);
};

export default MainSwiper;
