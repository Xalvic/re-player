import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

//, Two => Three, One => Three
//, Three => One
// Three => Two, 
export const routeTransitionAnimations = trigger('triggerName', [
    transition('One => Two', [
		query(":enter, :leave", style({ position: "fixed", width: "100%" })),
		group([
		  query(":enter", [
			style({ transform: "translateX(150%)" }),
			animate(
			  `1s ease-in-out`,
			  style({ transform: "translateX(0)" })
			)
		  ]),
		  query(":leave", [
			style({ transform: "translateX(0%) opacity:", opacity: 1 }),
			animate(
			  `1s ease-in-out`,
			  style({ transform: "translateX(-150%)", opacity: 0 })
			)
		  ])
		])
	]),
	transition('Two => One', [
		query(":enter, :leave", style({ position: "fixed", width: "100%" })),
		group([
		  query(":enter", [
			style({ transform: "translateX(-150%)" }),
			animate(
			  `1s ease-in-out`,
			  style({ transform: "translateX(0)" })
			)
		  ]),
		  query(":leave", [
			style({ transform: "translateX(0%)", opacity: 1 }),
			animate(
			  `1s ease-in-out`,
			  style({ transform: "translateX(150%)", opacity: 0 })
			)
		  ])
		])
	]),
]);