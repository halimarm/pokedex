
export const getIdByUrl = (url: string) => {
  const urlString = url.split('/')
  return urlString[urlString.length-2] 
}

export const replaceToString = (text: string) => {
  return text.replace('-', ' ')
}