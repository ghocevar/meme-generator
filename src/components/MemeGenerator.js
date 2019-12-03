import React, { useState, useEffect } from 'react';

import { getMemes } from '../services/memeApi';

const MemeGenerator = () => {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    getMemes().then(data => data && setAllMemeImgs(data));
  }, []);

  const randomImage = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMemeImg = allMemeImgs[randNum].url;

    setRandomImg(randMemeImg);
  };

  return (
    <div>
      <form className="meme-form" onSubmit={randomImage}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={top}
          onChange={e => setTop(e.target.value)}
        />

        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottom}
          onChange={e => setBottom(e.target.value)}
        />

        <button type="submit">Gen</button>
      </form>

      <div className="meme">
        <img src={randomImg} alt="Meme" />
        <h2 className="top">{top}</h2>
        <h2 className="bottom">{bottom}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;
