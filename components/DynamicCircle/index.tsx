import { FC, memo, useLayoutEffect, useRef } from 'react';
import { HorLine, SliderCircleWrapper, VertLine } from './styled';
import { SliderCircle } from './SliderCircle';
import { gsap, MotionPathPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from '@/hooks';
import { breakpoints } from '@/theme';
import cn from 'classnames';

interface DynamicCircleProps {
	buttons: string[];
	currentPage: number;
	setCurrentPage: (idx: number) => void;
}

gsap.registerPlugin(MotionPathPlugin);

export const DynamicCircle: FC<DynamicCircleProps> = memo(({ buttons, currentPage, setCurrentPage }) => {
	const steps = buttons.length;
	const angle = 360 / steps;
	const isDesktop = useMediaQuery(breakpoints.md);

	const container = useRef(null);
	const tlPath = useRef<gsap.core.Timeline>();

	const { contextSafe } = useGSAP(
		() => {
			const pathCircle = MotionPathPlugin.convertToPath('#circle', true)[0];

			tlPath.current = gsap
				.timeline({
					paused: true,
				})
				.fromTo(
					'.slide',
					{
						opacity: 0,
					},
					{
						// @ts-ignore
						motionPath: {
							path: pathCircle,
							align: pathCircle,
							end: (idx: number) => idx / steps - 0.1665,
						},
						ease: 'power3.out',
						translate: '-50% -50%',
						duration: 1,
						opacity: 1,
					},
				);
		},
		{ scope: container },
	);

	const animateState = contextSafe((idx: number) => {
		gsap.to('.slide', {
			rotation: `${idx * angle}`,
			duration: 1,
			ease: 'power2.inOut',
		});
		gsap.to('.wrapper', {
			rotation: `-${idx * angle}`,
			duration: 1,
			ease: 'power2.inOut',
		});
	});

	useLayoutEffect(() => {
		animateState(currentPage - 1);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	useLayoutEffect(() => {
		// update circle elements when switching between mobile and desktop screens
		if (!isDesktop) {
			tlPath?.current?.play();
		}
	}, [isDesktop]);

	return (
		<>
			<SliderCircleWrapper ref={container}>
				<div className="wrapper">
					{buttons.map((button, idx) => (
						<div
							className="slide"
							key={button}
							id={`slide${idx}`}
							onClick={() => {
								setCurrentPage(idx + 1);
							}}
						>
							<button className={cn({ active: currentPage === idx + 1 })}>
								{idx + 1}
								<span>{button}</span>
							</button>
						</div>
					))}
				</div>
				<SliderCircle />
			</SliderCircleWrapper>
			<HorLine />
			<VertLine />
		</>
	);
});

export default DynamicCircle;
