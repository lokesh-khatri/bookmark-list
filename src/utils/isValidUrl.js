export const isValidUrl = url => {

  if(!url) {
    return false;
  }

  const urlExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
  const regex = new RegExp(urlExpression);

  return url.match(regex);
};