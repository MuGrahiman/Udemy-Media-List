import classNames from "classnames";
import React from "react";

function Skelton({ times,className }) {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-red-400',
    'rounded',
    'mb-2.5',
    className
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-red-400',
    'via-blue-400',
    'to-red-400'
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}

export default Skelton;
