"use client";

import React from 'react';
import { 
  Header, 
  Hero, 
  PopularSpecialties, 
  PopularDoctors, 
  Reviews, 
  FAQ, 
  Footer 
} from '../../sections';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <PopularDoctors />
        <PopularSpecialties />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};
