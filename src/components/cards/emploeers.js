import React from 'react';
import Link from 'next/link';
const Portfolio = ({ cards, style }) => (
  <div className={style.cards}>
    {cards.map((card, index) => (
      <Link href={`${card.slag}`} className={style.link} key={index}>
        <div
          className={style.card}
          style={{ backgroundImage: `url('${card.backgroundImage}')`, backgroundSize: 'contain' }}
        >
          <div className={style.bottomCard}>
            <div className={style.textContainer}>
              <h5 className={style.name}>{card.name}</h5>
              <p className={style.description}>{card.description}</p>
            </div>
            <svg
              className={style.icon}
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C0.447716 7 -4.82825e-08 7.44772 0 8C4.82821e-08 8.55228 0.447714 9 1 9L1 7ZM25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM1 9L25 9L25 7L1 7L1 9Z"
                fill="#00F3BC"
              />
            </svg>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Portfolio;
