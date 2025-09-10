import React from 'react';
import clsx from 'clsx';
import styles from './FeedbackCard.module.scss';

export interface FeedbackCardProps {
  text: string;
  author: string;
  date: string;
  rating: number;
  variant?: 'default' | 'active';
  className?: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  text,
  author,
  date,
  rating,
  variant = 'default',
  className,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const currentVariant = isExpanded ? 'active' : variant;

  const renderStars = (activeStarsCount: number) => {
    return Array.from({ length: 5 }, (_, starIndex) => {
      const filled = starIndex < activeStarsCount;
      return (
        <svg
          key={starIndex}
          className={clsx(styles.star, { [styles['star--filled']]: filled })}
          width={20}
          height={20}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2l2.955 6.303L22 9.27l-5 4.868L18.18 22 12 18.56 5.82 22 7 14.138 2 9.27l7.045-0.967L12 2z"
            fill={filled ? 'currentColor' : 'transparent'}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    });
  };

  return (
    <div className={clsx(
      styles.card,
      styles[`card--${currentVariant}`],
      className
    )}>
      <div className={styles.header}>
        <span className={styles.date}>{date}</span>
        <div className={styles.rating}>
          {renderStars(rating)}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={clsx(styles.text, { [styles['text--clamped']]: !isExpanded })}>{text}</p>
          <span
            className={styles.readMore}
            role="button"
            tabIndex={0}
            onClick={() => setIsExpanded((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsExpanded((v) => !v);
              }
            }}
          >
            {isExpanded ? 'Скрыть' : 'Читать весь отзыв'}
          </span>
        </div>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
};

