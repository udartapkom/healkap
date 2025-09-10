"use client";

import React from 'react';
import { Logo } from '../../UiKit';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Logo size="lg" />
          <p className={styles.copyright}>
            © 2025 HealKap. Все права защищены.
          </p>
        </div>
        
        <div className={styles.juridicalInfo}>
          <h3 className={styles.sectionTitle}>Юридическая информация</h3>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Политика конфиденциальности</a>
            <a href="#" className={styles.link}>Пользовательское соглашение</a>
          </div>
        </div>
        
        <div className={styles.navigation}>
          <h3 className={styles.sectionTitle}>Навигация</h3>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Пациенту</a>
            <a href="#" className={styles.link}>Врачу</a>
            <a href="#" className={styles.link}>Лаборатория</a>
            <a href="#" className={styles.link}>Аптека</a>
            <a href="#" className={styles.link}>Отзывы</a>
            <a href="#" className={styles.link}>FAQ</a>
          </div>
        </div>
        
        <div className={styles.contacts}>
          <h3 className={styles.sectionTitle}>Контакты</h3>
          <div className={styles.contactInfo}>
            <a href="mailto:contact@healkap.com" className={styles.link}>
              contact@healkap.com
            </a>
            <a href="tel:+3741234567" className={styles.link}>
              +374 1234567
            </a>
          </div>
          
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="VK">
              <img src="/images/vk-icon-with-bg.svg" alt="VK" width={40} height={40} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Telegram">
              <img src="/images/telegram-icon-with-bg.svg" alt="Telegram" width={40} height={40} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <img src="/images/instagram-icon-with-bg.svg" alt="Instagram" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};