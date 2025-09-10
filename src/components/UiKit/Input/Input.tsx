import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'active' | 'error';
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  leftIcon,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  return (
    <div className={clsx(
      styles.inputWrapper,
      {
        [styles['inputWrapper--full-width']]: fullWidth,
      }
    )}>
      <div className={clsx(
        styles.inputContainer,
        styles[`inputContainer--${variant}`]
      )}>
        {leftIcon && (
          <div className={styles.leftIcon}>
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={clsx(
            styles.input,
            {
              [styles['input--with-left-icon']]: leftIcon,
            },
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
});

Input.displayName = 'Input';