'use client'

import React, { useState } from "react";
import styles from '../styles/styles.module.css';
import Link from "next/link";
export function Filter() {
  const [activeFilter, setActiveFilter] = useState('Home');

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {[
        { name: 'Home', link: '/' },
        { name: 'One Piece', link: '/one' },
        { name: 'Boruto', link: '/boruto' },
        { name: 'Jujutsu Kaisen', link: '/jujutsu' },
        { name: 'Kagura bachi', link: '/kagura' },
        { name: 'Join Us', link: 'https://discord.com/invite/opscans' },
      ].map((item) => (
        <div
          key={item.name}
          className={item.name === activeFilter ? styles.activefilter : styles.filter}
          onClick={() => handleFilterClick(item.name)}
        >
          <Link href={item.link}>
            <h1>{item.name}</h1>
          </Link>
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