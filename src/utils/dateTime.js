export const formatDate = (d, separator) => {
  const date = new Date(d);
  return ('0' + date.getDate()).slice(-2) + separator
  + ('0' + (date.getMonth()+1)).slice(-2) + separator
  + date.getFullYear();
}

export const formatTime = (d) => {
  const date = new Date(d);
  return ('0' + date.getHours()).slice(-2) + ':'
  + ('0' + (date.getMinutes())).slice(-2);
}