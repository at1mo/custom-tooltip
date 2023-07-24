import React, { useState } from 'react';
import styles from './tooltip.module.css';

interface IPropsTooltip {
  delay?: number;
  children: React.ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  content: string | React.ReactNode;
}

const Tooltip: React.FC<IPropsTooltip> = ({
  delay,
  children,
  direction,
  content,
}) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`${styles.tooltip_tip} ${direction || 'top'}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
