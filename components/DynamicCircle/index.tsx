import { FC, memo, useLayoutEffect, useRef, useState } from 'react';
import { HorLine, SliderCircleWrapper, VertLine } from './styled';
import { SliderCircle } from './SliderCircle';
import { gsap, MotionPathPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import cn from 'classnames';
import { defaultTheme } from '@/theme';

interface DynamicCircleProps {
	buttons: string[];
	currentPage: number;
	setCurrentPage: (idx: number) => void;
}

gsap.registerPlugin(MotionPathPlugin);

export const DynamicCircle: FC<DynamicCircleProps> = memo(({ buttons, currentPage, setCurrentPage }) => {
	const steps = buttons.length;
	const angle = 360 / steps;

	const [active, setActive] = useState(false);

	const container = useRef(null);
	const tlHover = useRef<gsap.core.Timeline>();
	const tlActive = useRef<gsap.core.Timeline | null>();

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
						end: (idx: number) => idx / steps - 0.125,
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
		tlHover.current = gsap
			.timeline({
				onReverseCompleteParams: [tlHover],
				onReverseComplete: (e) => {
					e.current.kill();
				},
			})
			.to(e.target, {
				...activeParams,
				ease: 'circ.inOut',
				duration: 0.2,
			});
	});

	const mouseLeaveAnimation = contextSafe(() => {
		tlHover.current && tlHover.current.reverse();
	});

	const animateState = contextSafe((idx: number) => {
		mouseLeaveAnimation();
		const btns = document.querySelectorAll('.slide');
		tlActive.current && tlActive.current.reverse(0);
		tlActive.current = gsap
			.timeline({
				onComplete: () => {
					setActive(true);
				},
				onReverseCompleteParams: [tlActive],
				onReverseComplete: (e) => {
					setActive(true);
					e.current.kill();
				},
			})
			.to(btns[idx], {
				...activeParams,
				duration: 0.5,
				delay: 0.21,
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

	useLayoutEffect(() => {
		setActive(false);
		animateState(currentPage - 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	return (
		<>
			<SliderCircleWrapper ref={container}>
				<div className="wrapper">
					{buttons.map((button, idx) => (
						<button
							className={cn('slide', { active: active && currentPage === idx + 1 })}
							key={button}
							data-id={idx}
							onMouseUp={() => {
								setCurrentPage(idx + 1);
							}}
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
