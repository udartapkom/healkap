"use client";

import React from 'react';
import { Button, Input } from '../../UiKit';
import asset from '../../../utils/asset';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${asset('/images/hero-background-new.jpg')})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Современная медицина
              <br />
              для вас и вашей семьи
            </h1>
            <p className={styles.description}>
              Диагностика, лечение и профилактика с упором
              на доказательный подход, комфорт и безопасность.
            </p>
          </div>
          
          <div className={styles.searchContainer}>
            <Input
              placeholder="Поиск врача"
              leftIcon={<img src={asset('/images/search-icon.svg')} alt="Search" width={15} height={15} />}
              fullWidth
            />
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="default" size="lg">
            Записаться онлайн
          </Button>
          <Button variant="default" size="lg">
            Смотреть направления
          </Button>
        </div>
      </div>
    </section>
  );
};