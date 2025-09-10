"use client";

import React from 'react';
import { FeedbackCard } from '../../UiKit';
import styles from './Reviews.module.scss';

const reviews = [
  {
    text: 'Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю. Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю.',
    author: 'Иван Иванов',
    date: '01.08.2025',
    rating: 5,
  },
  {
    text: 'Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю. Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю.',
    author: 'Иван Иванов',
    date: '01.08.2025',
    rating: 5,
  },
  {
    text: 'Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю. Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю.',
    author: 'Иван Иванов',
    date: '01.08.2025',
    rating: 5,
  },
  {
    text: 'Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю. Быстро записали, внимательный врач, всё объяснили понятным языком. Назначения помогли уже через неделю.',
    author: 'Иван Иванов',
    date: '01.08.2025',
    rating: 5,
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы о нас</h2>
        
        <div className={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <FeedbackCard
              key={index}
              text={review.text}
              author={review.author}
              date={review.date}
              rating={review.rating}
              variant="default"
            />
          ))}
        </div>
        
        <div className={styles.leaveReviewLink}>
          Оставить отзыв
        </div>
      </div>
    </section>
  );
};

