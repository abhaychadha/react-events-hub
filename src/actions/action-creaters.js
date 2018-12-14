import * as types from "./constants";
import Services from "../utils/services";
import appConfig from "../utils/config";

export const getArtist = (artist, dispatch, getState) => {
  const params = { app_id: appConfig.APP_ID };
  return (dispatch, getState) => {
    Services.FindArtist(null, artist, params, "GET", false)
      .then(result => {
          dispatch({
              type: types.SET_ARTIST_INFO,
              payload: result.data
          })
      })
      .catch(errors => {});
  };
};

export const getEvents = (artist, dispatch, getState) => {
  const params = { app_id: appConfig.APP_ID };
  return (dispatch, getState) => {
    Services.FindEvents(null, artist, params, "GET", false)
      .then(result => {
          dispatch({
              type: types.POPULATE_EVENTS,
              payload: result.data
          })
      })
      .catch(errors => {});
  };
};

export const clearAll = () =>{
   return {
        type: types.RESET_STATE
    }
}
