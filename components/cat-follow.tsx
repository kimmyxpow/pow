import { useCallback, useEffect, useRef } from 'react';

type SpritePosition = [number, number];

type SpriteSets = {
    [key: string]: SpritePosition[];
};

const NEKO_SPEED = 10;
const INITIAL_POSITION = 32;
const SPRITE_SIZE = 32;
const MIN_BOUNDARY = 16;
const IDLE_TIME_THRESHOLD = 10;
const IDLE_ANIMATION_CHANCE = 200;
const FRAME_UPDATE_INTERVAL = 100;

const SPRITE_SETS: SpriteSets = {
    IDLE: [[-3, -3]],
    ALERT: [[-7, -3]],
    SCRATCH_SELF: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
    ],
    SCRATCH_WALL_N: [
        [0, 0],
        [0, -1],
    ],
    SCRATCH_WALL_S: [
        [-7, -1],
        [-6, -2],
    ],
    SCRATCH_WALL_E: [
        [-2, -2],
        [-2, -3],
    ],
    SCRATCH_WALL_W: [
        [-4, 0],
        [-4, -1],
    ],
    TIRED: [[-3, -2]],
    SLEEPING: [
        [-2, 0],
        [-2, -1],
    ],
    N: [
        [-1, -2],
        [-1, -3],
    ],
    NE: [
        [0, -2],
        [0, -3],
    ],
    E: [
        [-3, 0],
        [-3, -1],
    ],
    SE: [
        [-5, -1],
        [-5, -2],
    ],
    S: [
        [-6, -3],
        [-7, -2],
    ],
    SW: [
        [-5, -3],
        [-6, -1],
    ],
    W: [
        [-4, -2],
        [-4, -3],
    ],
    NW: [
        [-1, 0],
        [-1, -1],
    ],
};

interface CatState {
    nekoPosX: number;
    nekoPosY: number;
    mousePosX: number;
    mousePosY: number;
    frameCount: number;
    idleTime: number;
    idleAnimation: string | null;
    idleAnimationFrame: number;
}

const CatFollow = () => {
    const catElementRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number>(0);
    const lastFrameTimestampRef = useRef<number | null>(null);

    const stateRef = useRef<CatState>({
        nekoPosX: INITIAL_POSITION,
        nekoPosY: INITIAL_POSITION,
        mousePosX: 0,
        mousePosY: 0,
        frameCount: 0,
        idleTime: 0,
        idleAnimation: null,
        idleAnimationFrame: 0,
    });

    const setSprite = (name: string, frame: number) => {
        if (!catElementRef.current) return;
        const sprite = SPRITE_SETS[name][frame % SPRITE_SETS[name].length];
        catElementRef.current.style.backgroundPosition = `${sprite[0] * SPRITE_SIZE}px ${sprite[1] * SPRITE_SIZE}px`;
    };

    const resetIdleAnimation = () => {
        stateRef.current.idleAnimation = null;
        stateRef.current.idleAnimationFrame = 0;
    };

    const handleIdle = useCallback(() => {
        const state = stateRef.current;
        state.idleTime += 1;

        if (
            state.idleTime > IDLE_TIME_THRESHOLD &&
            Math.floor(Math.random() * IDLE_ANIMATION_CHANCE) === 0 &&
            state.idleAnimation === null
        ) {
            const availableIdleAnimations = ['SLEEPING', 'SCRATCH_SELF'];

            if (state.nekoPosX < SPRITE_SIZE) {
                availableIdleAnimations.push('SCRATCH_WALL_W');
            }
            if (state.nekoPosY < SPRITE_SIZE) {
                availableIdleAnimations.push('SCRATCH_WALL_N');
            }
            if (state.nekoPosX > window.innerWidth - SPRITE_SIZE) {
                availableIdleAnimations.push('SCRATCH_WALL_E');
            }
            if (state.nekoPosY > window.innerHeight - SPRITE_SIZE) {
                availableIdleAnimations.push('SCRATCH_WALL_S');
            }

            state.idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
        }

        switch (state.idleAnimation) {
            case 'SLEEPING':
                if (state.idleAnimationFrame < 8) {
                    setSprite('TIRED', 0);
                    break;
                }
                setSprite('SLEEPING', Math.floor(state.idleAnimationFrame / 4));
                if (state.idleAnimationFrame > 192) {
                    resetIdleAnimation();
                }
                break;
            case 'SCRATCH_WALL_N':
            case 'SCRATCH_WALL_S':
            case 'SCRATCH_WALL_E':
            case 'SCRATCH_WALL_W':
            case 'SCRATCH_SELF':
                setSprite(state.idleAnimation, state.idleAnimationFrame);
                if (state.idleAnimationFrame > 9) {
                    resetIdleAnimation();
                }
                break;
            default:
                setSprite('IDLE', 0);
                return;
        }
        state.idleAnimationFrame += 1;
    }, []);

    const updateFrame = useCallback(() => {
        const state = stateRef.current;
        state.frameCount += 1;

        const diffX = state.nekoPosX - state.mousePosX;
        const diffY = state.nekoPosY - state.mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < NEKO_SPEED || distance < 48) {
            handleIdle();
            return;
        }

        state.idleAnimation = null;
        state.idleAnimationFrame = 0;

        if (state.idleTime > 1) {
            setSprite('ALERT', 0);
            state.idleTime = Math.min(state.idleTime, 7);
            state.idleTime -= 1;
            return;
        }

        let direction = '';
        direction += diffY / distance > 0.5 ? 'N' : '';
        direction += diffY / distance < -0.5 ? 'S' : '';
        direction += diffX / distance > 0.5 ? 'W' : '';
        direction += diffX / distance < -0.5 ? 'E' : '';
        setSprite(direction, state.frameCount);

        state.nekoPosX -= (diffX / distance) * NEKO_SPEED;
        state.nekoPosY -= (diffY / distance) * NEKO_SPEED;

        state.nekoPosX = Math.min(Math.max(MIN_BOUNDARY, state.nekoPosX), window.innerWidth - MIN_BOUNDARY);
        state.nekoPosY = Math.min(Math.max(MIN_BOUNDARY, state.nekoPosY), window.innerHeight - MIN_BOUNDARY);

        if (catElementRef.current) {
            catElementRef.current.style.left = `${state.nekoPosX - MIN_BOUNDARY}px`;
            catElementRef.current.style.top = `${state.nekoPosY - MIN_BOUNDARY}px`;
        }
    }, [handleIdle]);

    const onAnimationFrame = useCallback(
        (timestamp: number) => {
            if (!catElementRef.current) return;

            if (!lastFrameTimestampRef.current) {
                lastFrameTimestampRef.current = timestamp;
            }

            if (timestamp - lastFrameTimestampRef.current > FRAME_UPDATE_INTERVAL) {
                lastFrameTimestampRef.current = timestamp;
                updateFrame();
            }

            frameRef.current = requestAnimationFrame(onAnimationFrame);
        },
        [updateFrame],
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            stateRef.current.mousePosX = event.clientX;
            stateRef.current.mousePosY = event.clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);
        frameRef.current = requestAnimationFrame(onAnimationFrame);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [onAnimationFrame]);

    return (
        <div
            className="pointer-events-none fixed z-626349 bg-[url('/neko.gif')] [image-rendering:pixelated]"
            ref={catElementRef}
            aria-hidden="true"
            style={{
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`,
                left: `${stateRef.current.nekoPosX - MIN_BOUNDARY}px`,
                top: `${stateRef.current.nekoPosY - MIN_BOUNDARY}px`,
            }}
        />
    );
};

export default CatFollow;
