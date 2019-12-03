import axios from 'axios';

export const getMemes = async () => {
  const res = await axios
    .get('https://api.imgflip.com/get_memes')
    .then(({ data }) => data);

  return res;
};
