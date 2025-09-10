import React from 'react';
import clsx from 'clsx';
import styles from './Logo.module.scss';
import asset from '../../../utils/asset';

export interface LogoProps {
  variant?: 'default' | 'active';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  className,
}) => {
  return (
    <div className={clsx(
      styles.logo,
      styles[`logo--${variant}`],
      styles[`logo--${size}`],
      className
    )}>
      <img
        className={styles.image}
        src={asset('/images/logo-icon-5e50ad.png')}
        alt="HealKap"
        draggable={false}
      />
      <span className={styles.text}>HealKap</span>
    </div>
  );
};

