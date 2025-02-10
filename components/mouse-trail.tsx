'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const MouseTrail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>(null);
    const [mouseMoved, setMouseMoved] = useState(false);

    const pointerRef = useRef({
        x: 0.5,
        y: 0.5,
    });

    const params = {
        pointsNumber: 40,
        widthFactor: 0.3,
        mouseThreshold: 0.6,
        spring: 0.4,
        friction: 0.5,
    };

    const trailRef = useRef(
        new Array(params.pointsNumber).fill(null).map(() => ({
            x: pointerRef.current.x,
            y: pointerRef.current.y,
            dx: 0,
            dy: 0,
        })),
    );

    const updateMousePosition = useCallback((clientX: number, clientY: number) => {
        pointerRef.current.x = clientX;
        pointerRef.current.y = clientY;
    }, []);

    const setupCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, []);

    const update = useCallback(
        (t: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            if (!mouseMoved) {
                pointerRef.current.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
                pointerRef.current.y =
                    (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            trailRef.current.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointerRef.current : trailRef.current[pIdx - 1];
                const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);

            for (let i = 1; i < trailRef.current.length - 1; i++) {
                const xc = 0.5 * (trailRef.current[i].x + trailRef.current[i + 1].x);
                const yc = 0.5 * (trailRef.current[i].y + trailRef.current[i + 1].y);
                ctx.quadraticCurveTo(trailRef.current[i].x, trailRef.current[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.strokeStyle = '#ffffff';
                ctx.stroke();
            }
            ctx.lineTo(
                trailRef.current[trailRef.current.length - 1].x,
                trailRef.current[trailRef.current.length - 1].y,
            );
            ctx.stroke();

            animationFrameRef.current = window.requestAnimationFrame(update);
        },
        [mouseMoved, params.friction, params.pointsNumber, params.spring, params.widthFactor],
    );

    useEffect(() => {
        pointerRef.current = {
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight,
        };

        const handleClick = (e: MouseEvent) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMouseMoved(true);
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            setMouseMoved(true);
            const touch = e.targetTouches[0];
            updateMousePosition(touch.clientX, touch.clientY);
        };

        setupCanvas();
        animationFrameRef.current = window.requestAnimationFrame(update);

        window.addEventListener('click', handleClick);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('resize', setupCanvas);

        return () => {
            if (animationFrameRef.current) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('click', handleClick);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('resize', setupCanvas);
        };
    }, [setupCanvas, update, updateMousePosition]);

    return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 mix-blend-difference" />;
};

export default MouseTrail;
