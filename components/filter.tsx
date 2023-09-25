'use client'

import React, { useState } from "react";
import styles from '../styles/styles.module.css';

export function Filter() {
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };
    return(
        <>
         {['Home','One Piece', 'Boruto', 'Jujutsu Kaisen', 'Kagura bachi', 'Join Us'].map((filter) => (
              <div
                key={filter}
                className={filter === activeFilter ? styles.activefilter : styles.filter}
                onClick={() => handleFilterClick(filter)}>
                <h1>{filter}</h1>
              </div>
            ))}
        </>
    )
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