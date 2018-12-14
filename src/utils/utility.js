// utility methods for application
export const createQueryParams = params => {
  const _params = Object.keys(params);
  return _params.length
    ? `?${_params.map(param => `${param}=${params[param]}`).join("&")}`
    : "";
};

export const getDayString = number => {
  switch(number){
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "Sun" 
  }
};

export const getDateString = date =>{
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  return `${getDayString(date.getDay())}, ${month}-${day}-${date.getFullYear()}`
}