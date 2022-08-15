// React Import
import { useContext } from 'react';

// DataLayer Import
import { DataLayerContext } from './DataLayer';

// InitialState
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
      // break;

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
      // break;

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
      // break;

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      // break;

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };
      // break;

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
      // break;

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };
      // break;

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
      // break;

    default:
      return state;
  }
};

// Reducer Export
export default reducer;

// useDataLayerValue
export const useDataLayerValue = () => useContext(DataLayerContext);
