import React from 'react';
import clsx from 'clsx';
import styles from './DoctorCard.module.scss';
import { Button } from '../Button';
import asset from '../../../utils/asset';

export interface DoctorCardProps {
  name: string;
  speciality: string;
  rating: number;
  photo?: string;
  variant?: 'default' | 'active';
  className?: string;
  onClick?: () => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  speciality,
  rating,
  photo,
  variant = 'default',
  className,
  onClick,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating;
      return (
        <svg
          key={index}
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
    <div
      className={clsx(
        styles.card,
        styles[`card--${variant}`],
        {
          [styles['card--clickable']]: onClick,
        },
        className
      )}
      onClick={onClick}
    >
      {variant === 'default' ? (
        <>
          <div className={styles.photo}>
            {photo ? (
              <img src={photo.startsWith('/') ? asset(photo) : photo} alt={name} />
            ) : (
              <div className={styles.photoPlaceholder} />
            )}
          </div>
          
          <div className={styles.about}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.speciality}>{speciality}</p>
          </div>
          
          <div className={styles.rating}>
            {renderStars(rating)}
          </div>
          
          <p className={styles.more}>Подробнее о враче</p>
        </>
      ) : (
        <div className={styles.activeContent}>
          <div className={styles.doctorInfo}>
            <div className={styles.about}>
              <div className={styles.photoAndRating}>
                <div className={styles.photo}>
                  {photo ? (
                    <img src={photo.startsWith('/') ? asset(photo) : photo} alt={name} />
                  ) : (
                    <div className={styles.photoPlaceholder} />
                  )}
                </div>
                <div className={styles.rating}>
                  {renderStars(rating)}
                </div>
              </div>
              <h3 className={styles.name}>{name}</h3>
            </div>
            
            <div className={styles.details}>
              <p className={styles.speciality}>{speciality}</p>
              <p className={styles.experience}>Стаж 10 лет</p>
              <p className={styles.feedbacks}>10 отзывов</p>
            </div>
          </div>
          
          <div className={styles.education}>
            <h4 className={styles.sectionTitle}>Образование</h4>
            <p className={styles.educationText}>
              ФГАОУ ВО &quot;Российский Национальный Исследовательский Медицинский Университет им. Н.И. Пирогова&quot;, 2015 г.
            </p>
          </div>
          
          <div className={styles.specialization}>
            <h4 className={styles.sectionTitle}>Специализация</h4>
            <p className={styles.specializationText}>
              Заболевания сердечно-сосудистой системы<br />
              Заболевания ЖКТ<br />
              Заболевания органов дыхания
            </p>
          </div>
          
          <Button variant="default" size="sm">Записаться</Button>
        </div>
      )}
    </div>
  );
};
