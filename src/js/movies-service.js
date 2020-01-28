import config from "./config";

const getPlayNow = async page => {
  try {
    const response = await fetch(config.playNow(page));
    return await response.json();
  } catch (err) {
    throw err;
  }
};

const getPlayNowPages = async numberOfPages => {
  let res = [];
  for (let i = 1; i <= numberOfPages; i++) {
    const { results } = await getPlayNow(i);
    res = [...res, ...results];
  }

  return res;
};

export default {
  getPlayNow,
  getPlayNowPages
};
