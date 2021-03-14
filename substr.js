const substr = (str, startIndex, endLenght) => {
  const x = str[startIndex]; 
  if (startIndex >= 0 && endLenght < 0) return x; 
  if (startIndex < 0 && endLenght < 0) return str[0]; 
  if (startIndex < 0) startIndex = 0;
  if (endLenght < 0) endLenght = endLenght + endLenght + endLenght;
  const y = str.slice(startIndex, endLenght + startIndex);
   return  y;
};

export default substr;
