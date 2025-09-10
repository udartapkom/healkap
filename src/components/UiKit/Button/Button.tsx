import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'active';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles['button--full-width']]: fullWidth,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};