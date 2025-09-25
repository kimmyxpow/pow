import { getSvgPath } from 'figma-squircle';
import type { Attachment } from 'svelte/attachments';

export function squircle(radius: number = 12): Attachment {
	return (element) => {
		const el = element as HTMLElement;

		const updateClipPath = () => {
			const width = el.offsetWidth;
			const height = el.offsetHeight;

			const path = getSvgPath({
				width,
				height,
				cornerRadius: radius,
				cornerSmoothing: 1
			});

			el.style.clipPath = `path('${path}')`;
		};

		updateClipPath();

		const observer = new ResizeObserver(() => {
			updateClipPath();
		});

		observer.observe(el);

		return () => observer.disconnect();
	};
}
