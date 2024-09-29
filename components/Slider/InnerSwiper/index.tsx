import { FC, useEffect, useState } from 'react';
import type SwiperType from 'swiper';
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { DataItem } from '@/api';
import { Description, InnerSwiperSlideWrapper, Title } from './styled';
import InnerControlsBlock from './InnerControlsBlock';

interface InnerSwiperProps extends Pick<DataItem, 'dates'> {
	active: boolean;
}

export const InnerSwiper: FC<InnerSwiperProps> = ({ dates, active }) => {
	const [innerSwiper, setInnerSwiper] = useState<SwiperType>();
	const mainSwiper = useSwiper();

	const innerSwiperProps: SwiperProps = {
		modules: [Navigation, FreeMode],
		navigation: {
			nextEl: '.button-next-inner',
			prevEl: '.button-prev-inner',
		},
		spaceBetween: 0,
		slidesPerView: 'auto',
		freeMode: true,
		touchRatio: 1,
		speed: 600,
		onSwiper: setInnerSwiper,
	};

	useEffect(() => {
		mainSwiper.on('slideChangeTransitionEnd', () => {
			innerSwiper?.slideTo(0, 0);
		});
	}, [innerSwiper, mainSwiper]);

	return (
		<InnerSwiperSlideWrapper $active={active}>
			<Swiper {...innerSwiperProps} className="swiper-inner">
				{dates.map(({ date, description }) => (
					<SwiperSlide key={date}>
						<Title>{date}</Title>
						<Description>{description}</Description>
					</SwiperSlide>
				))}
			</Swiper>
			<InnerControlsBlock />
		</InnerSwiperSlideWrapper>
	);
};

export default InnerSwiper;
