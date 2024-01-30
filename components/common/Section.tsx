'use client';

import Image from 'next/image';
import * as React from 'react';

import { twMerge } from 'tailwind-merge';

import { Card } from './Card';

export const Section = ({
  className,
  width,
  height,
  margin,
  parentPos,
  initialPos,
}: SectionProps) => {
  const [pos, setPos] = React.useState<{ x: number; y: number }>(initialPos);
  const refContainer = React.useRef<HTMLDivElement>(null);

  const getBreachingSide = (): BreachingSide | null => {
    if (!refContainer.current) return null;

    const rect = refContainer.current.getBoundingClientRect();

    if (rect.bottom < 0) return 'top';
    if (rect.top > window.innerHeight) return 'bottom';
    if (rect.left > window.innerWidth) return 'right';
    if (rect.right < 0) return 'left';

    return null;
  };

  React.useEffect(() => {
    const breachingSide = getBreachingSide();

    if (!breachingSide) return;

    switch (breachingSide) {
      case 'top':
        move(pos, 'DOWN');
        break;
      case 'bottom':
        move(pos, 'UP');
        break;
      case 'left':
        move(pos, 'RIGHT');
        break;
      case 'right':
        move(pos, 'LEFT');
    }
  }, [parentPos.x, parentPos.y]);

  const move = (currPos: { x: number; y: number }, direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
    const distanceX = 2 * (width + margin);
    const distanceY = 2 * (height + margin);
    let newPos = currPos;

    switch (direction) {
      case 'UP':
        newPos = { x: currPos.x, y: currPos.y - distanceY };
        break;
      case 'DOWN':
        newPos = { x: currPos.x, y: currPos.y + distanceY };
        break;
      case 'LEFT':
        newPos = { x: currPos.x - distanceX, y: currPos.y };
        break;
      case 'RIGHT':
        newPos = { x: currPos.x + distanceX, y: currPos.y };
    }

    setPos(newPos);
  };

  return (
    <section
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      className={twMerge(
        `grid-row-3 absolute left-0 top-0 grid grid-cols-6 gap-6 rounded-lg`,
        className,
      )}
      ref={refContainer}
    >
      {new Array(18).fill(0).map((_, i) => (
        <Card key={i} />
      ))}
    </section>
  );
};

type SectionProps = {
  className?: string;
  width: number;
  height: number;
  margin: number;
  initialPos: { x: number; y: number };
  parentPos: { x: number; y: number };
};

type BreachingSide = 'top' | 'bottom' | 'left' | 'right';
