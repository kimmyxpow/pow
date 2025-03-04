import { useRef, useEffect, CSSProperties } from 'react';
import { useReducedMotion } from 'motion/react';

const MagnetLines = () => {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (prefersReducedMotion) return;

        const items = container.querySelectorAll<HTMLSpanElement>('span');

        const handlePointerMove = (e: PointerEvent) => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;
                const distance = Math.hypot(deltaX, deltaY) || 1;
                const angle = ((Math.acos(deltaX / distance) * 180) / Math.PI) * (e.clientY > centerY ? 1 : -1);

                item.style.setProperty('--rotate', `${angle}deg`);
            });
        };

        window.addEventListener('pointermove', handlePointerMove);
        return () => window.removeEventListener('pointermove', handlePointerMove);
    }, [prefersReducedMotion]);

    return (
        <div ref={containerRef} className="grid grid-cols-10 grid-rows-5 place-items-center py-8">
            {Array.from({ length: 10 * 5 }, (_, i) => (
                <span
                    key={i}
                    className="bg-primary-600 dark:bg-primary-400 block h-8 w-1 origin-center rotate-[var(--rotate)] will-change-transform"
                    style={{ '--rotate': '45deg' } as CSSProperties}
                />
            ))}
        </div>
    );
};

export default MagnetLines;
