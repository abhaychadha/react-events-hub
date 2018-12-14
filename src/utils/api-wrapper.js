
const ApiWrapper = (() => {
  
  const onSuccess = response => {    
    const resData = {
      data:response ? response : {}
    };
      return resData;        
  };

  const onError = error => {    
    if (error && error.response) {
      const errorData = {
        data: error.response
      };
      return errorData;
    }
  };

  const api = config => {
    config.customErrorHandeler = config.customErrorHandeler || onError;
    config.customSuccessHandler = config.customSuccessHandler || onSuccess;

    config.url = config.url || null;

    config.headers =
      typeof config.headers === "object"
        ? config.headers
        : { "Content-Type": "application/json" };

    return fetch(config.url)
    .then(response => response.json())
    .then(
      config.customSuccessHandler
    )
    .catch(
      config.customErrorHandeler
    );
  };

  const apiGateway = config => {
    return api(config);
  };

  return {
    apiGateway: apiGateway
  };
})();

export default ApiWrapper;
