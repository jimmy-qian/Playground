import * as React from 'react';

export const Card = ({}: CardProps) => {
  const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomColor = React.useMemo(() => getRandomColor(), []);

  return (
    <div
      style={{
        backgroundColor: `#${randomColor}`,
      }}
      className="ronded-lg h-full w-full"
    />
  );
};

type CardProps = {};
