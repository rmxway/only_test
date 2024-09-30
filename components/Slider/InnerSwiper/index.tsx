import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import type SwiperType from 'swiper';
import { Chapter, Description, InnerSwiperSlideWrapper, Title } from './styled';
import InnerControlsBlock from './InnerControlsBlock';
import { useMediaQuery } from '@/hooks';
import { breakpoints } from '@/theme';
import { DataItem } from '@/api';

interface InnerSwiperProps extends Pick<DataItem, 'dates'> {
	active: boolean;
	title: string;
}

export const InnerSwiper: FC<InnerSwiperProps> = ({ dates, active, title }) => {
	const [innerSwiper, setInnerSwiper] = useState<SwiperType>();
	const mainSwiper = useSwiper();
	const isMobile = useMediaQuery(breakpoints.md);

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
			{isMobile && active && <Chapter>{title}</Chapter>}
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
