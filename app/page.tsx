'use client';

import * as React from 'react';

import { PanInfo, motion, useAnimation } from 'framer-motion';

import { Section } from 'common/Section';

const widthSection = 3000;
const heightSection = 2000;
const marginSection = 24;
const widthView = widthSection + 2 * marginSection;
const heightView = heightSection + 2 * marginSection;

export default function Home() {
  const [pos, setPos] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [posPan, setPosPan] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const controls = useAnimation();

  const onPan = (_: any, info: PanInfo) => {
    controls.set({
      translateX: pos.x + info.offset.x,
      translateY: pos.y + info.offset.y,
    });
    setPosPan({ x: info.offset.x, y: info.offset.y });
  };

  const onPanEnd = (_: any, info: PanInfo) => {
    const newPos = { x: pos.x + info.offset.x, y: pos.y + info.offset.y };

    setPos(newPos);
  };

  return (
    <motion.div
      style={{
        width: widthView,
        height: heightView,
      }}
      className="relative bg-inherit"
      animate={controls}
      {...{ onPan, onPanEnd }}
    >
      <Section
        parentPos={posPan}
        width={widthSection}
        height={heightSection}
        margin={marginSection}
        initialPos={{ x: 0, y: 0 }}
      />
      <Section
        parentPos={posPan}
        width={widthSection}
        height={heightSection}
        margin={marginSection}
        initialPos={{ x: widthSection + marginSection, y: 0 }}
      />
      <Section
        parentPos={posPan}
        width={widthSection}
        height={heightSection}
        margin={marginSection}
        initialPos={{ x: 0, y: heightSection + marginSection }}
      />
      <Section
        parentPos={posPan}
        width={widthSection}
        height={heightSection}
        margin={marginSection}
        initialPos={{ x: widthSection + marginSection, y: heightSection + marginSection }}
      />
    </motion.div>
  );
}
