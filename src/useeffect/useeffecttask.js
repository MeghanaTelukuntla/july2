import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';


const getSeason = (month) => {
  if (month >= 2 && month <= 4) {
    return 'Spring';
  } else if (month >= 5 && month <=7) {
    return 'Summer';
  } else if (month >= 8 && month <= 10) {
    return 'Autumn';
  } else {
    return 'Winter';
  }
};

const getSeasonImage = (season) => {
  switch (season) {
    case 'Spring':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj77ckPBDNe6MhAVpfCLy5WmD9HEZEF8_4Q&s';
    case 'Summer':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ua9NIhkL78oEFTzv5Ua3PnCwKC5DaVCmlw&s';
    case 'Autumn':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3ZqvWpRSpf0l7C93bsNuAHmnvpx9Qex0NA&s';
    case 'Winter':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDr6LLXRPYf4gznBO-oIXSwGiGPnWO86TdMA&s';
    default:
      return '';
  }
};

const SeasonDisplay = () => {
  const [season, setSeason] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const month = new Date().getMonth(); // getMonth returns 0-11
    const currentSeason = getSeason(month);
    const seasonImage = getSeasonImage(currentSeason);

    setSeason(currentSeason);
    setImage(seasonImage);
  }, []);

  return (
    <>
    <center>
      <h1>Current Season: {season}</h1>
      {image && <Image src={image} alt={season} fluid />}
      </center>
    </>
  );
};

export default SeasonDisplay;