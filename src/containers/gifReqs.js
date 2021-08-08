import Axios from 'axios';

const axios = Axios.create({ baseURL: 'https://api.giphy.com/v1/gifs/' });
const API_KEY = '2D5gTVuhBIQ2BLkOaKpPS9REFTTUuHMY';
const baseParams = { api_key: API_KEY, rating: 'g' };

function extractGifData(gif) {
  //extract urls
  const { url, bitly_gif_url, bitly_url, embed_url } = gif;
  //set to new object
  const urls = { url, bitlyGifUrl: bitly_gif_url, bitlyUrl: bitly_url, embedUrl: embed_url };

  //extract objects from images
  const {
    images: {
      fixed_height_small,
      fixed_height_small_still,
      fixed_width_small,
      fixed_width_small_still,
      original
    }
  } = gif;
  //set to new object with camelCase name
  const images = {
    fixWidthSmall: fixed_width_small,
    fixWidthSmallStill: fixed_width_small_still,
    original
  };

  //extract other important info
  const { title, id, username } = gif;

  return { title, id, username, urls, images };
}

export function getGifs(obj, query = null, addParams = {} ) {
  const [_key, queryType] = obj.queryKey
  return axios(queryType, { params: { q: query, ...baseParams, ...addParams } }).then(res => {
    const {meta, pagination} = res.data
    return {
      gifs: res.data.map(gif => extractGifData(gif)),
      meta,
      pagination
    }
  })
}