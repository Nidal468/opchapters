'use client'

import React, { useState } from "react";
import styles from '../styles/styles.module.css';

export function Filter() {
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {[
        { name: 'Home', link: '/' },
        { name: 'One Piece', link: '/one-piece' },
        { name: 'Boruto', link: '/boruto' },
        { name: 'Jujutsu Kaisen', link: '/jujutsu-kaisen' },
        { name: 'Kagura bachi', link: '/kagura-bachi' },
        { name: 'Join Us', link: '/join-us' },
      ].map((item) => (
        <div
          key={item.name}
          className={item.name === activeFilter ? styles.activefilter : styles.filter}
          onClick={() => handleFilterClick(item.name)}
        >
          <a href={item.link}>
            <h1>{item.name}</h1>
          </a>
        </div>
      ))}
    </>
  );
}

export function NewFilter(){
  const [activeFilter, setActiveFilter] = useState('All Mangas');

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };
  return(
    <>
      {['All Mangas', 'New Chapter'].map((filter) => (
              <div
                key={filter}
                className={filter === activeFilter ? styles.clicked : styles.unclicked}
                onClick={() => handleFilterClick(filter)}>
                <h1>{filter}</h1>
              </div>
            ))}
    </>
  )
}