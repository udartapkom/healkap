"use client";

import React from 'react';
import { Logo, Button } from '../../UiKit';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo size="md" />
        
        <nav className={styles.nav}>
          <Button variant="default" size="sm">Пациенту</Button>
          <Button variant="default" size="sm">Врачу</Button>
          <Button variant="default" size="sm">Аптека</Button>
          <Button variant="default" size="sm">Лаборатория</Button>
          <Button variant="default" size="sm">FAQ</Button>
          <Button variant="default" size="sm">Контакты</Button>
        </nav>
        
        <div className={styles.auth}>
          <Button variant="default" size="sm">Войти</Button>
        </div>
      </div>
    </header>
  );
};

