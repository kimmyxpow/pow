import { useRef, useEffect, type CSSProperties } from 'react';
import { useReducedMotion } from 'motion/react';

const ROWS = 5;
const COLUMNS = 10;
const LINE_WIDTH = '.2vmin';
const LINE_HEIGHT = '4vmin';

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
        <div
            ref={containerRef}
            className="grid place-items-center py-8"
            style={{
                gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
                gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            }}
        >
            {Array.from({ length: ROWS * COLUMNS }, (_, i) => (
                <span
                    key={i}
                    className="bg-primary-600 block origin-center rotate-[var(--rotate)] will-change-transform"
                    style={
                        {
                            width: LINE_WIDTH,
                            height: LINE_HEIGHT,
                            '--rotate': '-10deg',
                        } as CSSProperties
                    }
                />
            ))}
        </div>
    );
};

export default MagnetLines;
