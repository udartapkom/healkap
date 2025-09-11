"use client";

import React from 'react';
import { useState, useCallback } from 'react';
import { Logo, Button } from '../../UiKit';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo size="lg" />
        {/* Desktop nav */}
        <nav className={styles.nav}>
          <Button variant="default" size="sm">Пациенту</Button>
          <Button variant="default" size="sm">Врачу</Button>
          <Button variant="default" size="sm">Аптека</Button>
          <Button variant="default" size="sm">Лаборатория</Button>
          <Button variant="default" size="sm">FAQ</Button>
          <Button variant="default" size="sm">Контакты</Button>
        </nav>
        {/* Auth and burger */}
        <div className={styles.auth}>
          <Button variant="default" size="sm" className={styles.loginButton}>Войти</Button>
          <button
            type="button"
            className={styles.burger}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className={styles.overlay} onClick={handleCloseMenu} />}

      {/* Right drawer */}
      <aside className={isMenuOpen ? `${styles.drawer} ${styles.drawerOpen}` : styles.drawer}>
        <div className={styles.drawerHeader}>
          <Logo size="lg" />
          <button type="button" className={styles.close} aria-label="Закрыть меню" onClick={handleCloseMenu}>
            <span />
            <span />
          </button>
        </div>
        <nav className={styles.drawerNav}>
          <Button variant="default" size="sm">Пациенту</Button>
          <Button variant="default" size="sm">Врачу</Button>
          <Button variant="default" size="sm">Аптека</Button>
          <Button variant="default" size="sm">Лаборатория</Button>
          <Button variant="default" size="sm">FAQ</Button>
          <Button variant="default" size="sm">Контакты</Button>
        </nav>
        <div className={styles.drawerAuth}>
          <Button variant="default" size="sm">Войти</Button>
        </div>
      </aside>
    </header>
  );
};

