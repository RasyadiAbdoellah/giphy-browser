export const getStateGifs = store => store.gifs

export const getGifIds = store => ( getStateGifs(store) ? getStateGifs(store).allIds : [] )

export const getGifById = (store, id) => ( getStateGifs(store) ? getStateGifs(store).byId[id] : {} )

export const getGifsList = (store) => getGifIds(store).map(id => getGifById(store, id))