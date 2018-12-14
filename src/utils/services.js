import ApiWrapper from './api-wrapper';
import appConfig from './config';
import {createQueryParams} from './utility';

export default class Services {
    
  static FindArtist = (url,artist, params, method, preLoader) => {
    let config = {
      method: method || "GET",
      url: url || `${appConfig.DEFAULT_PROTOCOL}${appConfig.API_DOMAIN}${appConfig.FIND_ARTIST}/${artist}${createQueryParams(params)}`,
      data: null,
      preLoader: preLoader
    };
    return ApiWrapper.apiGateway(config);
  };

  static FindEvents = (url,artist, params, method, preLoader) => {
    let config = {
      method: method || "GET",
      url: url || `${appConfig.DEFAULT_PROTOCOL}${appConfig.API_DOMAIN}${appConfig.FIND_ARTIST}/${artist}${appConfig.FIND_EVENTS}${createQueryParams(params)}`,
      data: null,
      preLoader: preLoader
    };
    return ApiWrapper.apiGateway(config);
  };
} 
 

  
