import React, { useState, useEffect } from 'react';
import Card from './Card';
import jimmy from '../images/jimmy.png';
import chuck from '../images/chuck.png';
import tuco from '../images/tuco.png';
import eladio from '../images/eladio.png';
import huell from '../images/huell.png';
import bolsa from '../images/bolsa.png';
import lalo from '../images/lalo.png';
import mike from '../images/mike.png';
import gustavo from '../images/gustavo.png';
import hector from '../images/hector.png';
import nacho from '../images/nacho.png';
import howard from '../images/howard.png';

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: jimmy,
      title: 'Jimmy',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: chuck,
      title: 'Chuck',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: howard,
      title: 'Howard',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: lalo,
      title: 'Lalo',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: gustavo,
      title: 'Gustavo',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: tuco,
      title: 'Tuco',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: nacho,
      title: 'Nacho',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: mike,
      title: 'Mike',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: hector,
      title: 'Hector',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: bolsa,
      title: 'Bolsa',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: eladio,
      title: 'Eladio',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: huell,
      title: 'Huell',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}

export default CardContainer;