import { FC, memo, useLayoutEffect, useRef } from 'react';
import { HorLine, SliderCircleWrapper, VertLine } from './styled';
import { SliderCircle } from './SliderCircle';
import { gsap, MotionPathPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import cn from 'classnames';
import { defaultTheme } from '@/theme';

interface DynamicCircleProps {
	buttons: string[];
	currentPage: number;
	changeSlide: (idx: number) => void;
}

gsap.registerPlugin(MotionPathPlugin);

export const DynamicCircle: FC<DynamicCircleProps> = memo(({ buttons, currentPage, changeSlide }) => {
	const steps = buttons.length;
	const angle = 360 / steps;

	const container = useRef(null);
	const tlHover = useRef<gsap.core.Timeline>();
	const tlActive = useRef<gsap.core.Timeline>();

	const activeParams = {
		width: '56px',
		height: '56px',
		backgroundColor: defaultTheme.colors.bg,
		border: `1px solid ${defaultTheme.colors.title}50`,
		translate: '-50% -50%',
		transformOrigin: 'center',
		fontSize: '20px',
	};

	const { contextSafe } = useGSAP(
		() => {
			const pathCircle = MotionPathPlugin.convertToPath('#circle', true)[0];

			gsap.timeline().fromTo(
				'.slide',
				{
					opacity: 0,
					border: '3px solid #222',
				},
				{
					// @ts-ignore
					motionPath: {
						path: pathCircle,
						align: pathCircle,
						end: (idx: number) => idx / steps - 0.15,
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

	const mouseOverAnimation = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
		tlHover.current = gsap.timeline().fromTo(
			e.target,
			{
				border: '3px solid #222',
			},
			{
				...activeParams,

				ease: 'circ.inOut',
				duration: 0.2,
			},
		);
	});

	const mouseLeaveAnimation = contextSafe(() => {
		tlHover.current && tlHover.current.reversed(!tlHover.current.reversed());
	});

	const animateState = contextSafe((idx: number) => {
		const btns = document.querySelectorAll('.slide');
		tlActive?.current?.reversed(!tlActive?.current?.reversed());
		tlActive.current = gsap.timeline().to(btns[idx], {
			...activeParams,
		});

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

	const handleClick = (idx: number) => {
		changeSlide(idx);
	};

	useLayoutEffect(() => {
		animateState(currentPage - 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	return (
		<>
			<SliderCircleWrapper ref={container}>
				<div className="wrapper">
					{buttons.map((button, idx) => (
						<button
							className={cn('slide', { active: currentPage === idx + 1 })}
							key={button}
							data-id={idx}
							onClick={() => handleClick(idx)}
							onMouseOver={mouseOverAnimation}
							onMouseLeave={mouseLeaveAnimation}
						>
							{idx + 1}
							<span>{button}</span>
						</button>
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
