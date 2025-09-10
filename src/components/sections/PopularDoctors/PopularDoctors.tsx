"use client";

import React, { useState } from 'react';
import { DoctorCard } from '../../UiKit';
import styles from './PopularDoctors.module.scss';

const doctors = [
  {
    name: 'Мария Сергеевна Орлова',
    speciality: 'Терапевт, к.м.н.',
    rating: 5,
    photo: '/images/doctor-1.jpg',
  },
  {
    name: 'Александр Петрович Смирнов',
    speciality: 'Кардиолог, д.м.н.',
    rating: 5,
    photo: '/images/doctor-2.jpg',
  },
  {
    name: 'Елена Владимировна Козлова',
    speciality: 'Невролог, к.м.н.',
    rating: 5,
    photo: '/images/doctor-3.jpg',
  },
  {
    name: 'Дмитрий Игоревич Волков',
    speciality: 'Хирург, к.м.н.',
    rating: 5,
    photo: '/images/doctor-placeholder.jpg',
  },
  {
    name: 'Анна Михайловна Лебедева',
    speciality: 'Гинеколог, к.м.н.',
    rating: 5,
    photo: '/images/doctor-placeholder.jpg',
  },
  {
    name: 'Сергей Александрович Морозов',
    speciality: 'Офтальмолог, к.м.н.',
    rating: 5,
    photo: '/images/doctor-placeholder.jpg',
  },
  {
    name: 'Ольга Сергеевна Новикова',
    speciality: 'Педиатр, к.м.н.',
    rating: 5,
    photo: '/images/doctor-placeholder.jpg',
  },
  {
    name: 'Игорь Владимирович Соколов',
    speciality: 'Уролог, к.м.н.',
    rating: 5,
    photo: '/images/doctor-placeholder.jpg',
  },
];

export const PopularDoctors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Популярные врачи</h2>
          <p className={styles.description}>
            Опытные специалисты, которым можно доверять
          </p>
        </div>
        
        <div className={styles.doctorsGrid}>
          {doctors.map((doctor, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={isActive ? styles.doctorItemActive : styles.doctorItem}
              >
                <DoctorCard
                  name={doctor.name}
                  speciality={doctor.speciality}
                  rating={doctor.rating}
                  photo={doctor.photo}
                  variant={isActive ? 'active' : 'default'}
                  onClick={() => handleToggle(index)}
                />
              </div>
            );
          })}
        </div>
        
        <div className={styles.fullListLink}>
          Полный список врачей
        </div>
      </div>
    </section>
  );
};
