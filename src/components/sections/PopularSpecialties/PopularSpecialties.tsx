"use client";

import React from 'react';
import styles from './PopularSpecialties.module.scss';

const specialties = [
  'Акушерство и гинекология',
  'Кардиология',
  'Общая хирургия',
  'Психиатрия',
  'Гастроэнтерология',
  'Медицинская онкология',
  'Репродуктология',
  'Дерматология и венерология',
  'Медицинская генетика',
  'Ортопедия и травматология',
  'Детская неврология',
  'Неврология',
  'Эндокринология',
  'Отоларингология',
  'Урология',
];

export const PopularSpecialties: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Популярные направления</h2>
        
        <div className={styles.specialtiesCard}>
          <div className={styles.specialtiesGrid}>
            {specialties.map((specialty, index) => (
              <div key={index} className={styles.specialtyItem}>
                {specialty}
              </div>
            ))}
          </div>
          
          <div className={styles.fullListLink}>
            Полный список направлений
          </div>
        </div>
      </div>
    </section>
  );
};

