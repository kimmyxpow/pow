import { useRef, useEffect, CSSProperties } from 'react';

export default function MagnetLines() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rows = 5;
    const columns = 10;
    const lineWidth = '.2vmin';
    const lineHeight = '4vmin';
    const baseAngle = -10;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll<HTMLSpanElement>('span');

        const onPointerMove = (pointer: { x: number; y: number }) => {
            items.forEach((item: HTMLSpanElement) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;

                const b = pointer.x - centerX;
                const a = pointer.y - centerY;
                const c = Math.sqrt(a * a + b * b) || 1;
                const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

                item.style.setProperty('--rotate', `${r}deg`);
            });
        };

        window.addEventListener('pointermove', onPointerMove);

        if (items.length) {
            const middleIndex = Math.floor(items.length / 2);
            const rect = items[middleIndex].getBoundingClientRect();
            onPointerMove({ x: rect.x, y: rect.y });
        }

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
        };
    }, []);

    const total = rows * columns;
    const spans = Array.from({ length: total }, (_, i) => (
        <span
            key={i}
            className="bg-primary-600 block origin-center rotate-[var(--rotate)] will-change-transform"
            style={
                {
                    width: lineWidth,
                    height: lineHeight,
                    '--rotate': `${baseAngle}deg`,
                } as CSSProperties
            }
        />
    ));

    return (
        <div
            ref={containerRef}
            className={`grid place-items-center py-8`}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
        >
            {spans}
        </div>
    );
}
