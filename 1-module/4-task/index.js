function checkSpam(str) {
  
  const stoplist = [
    '1xbet', 
    'xxx',
  ];
  
  str = str.toLowerCase();
  
  for (let i = 0; i < stoplist.length; i++) {
  	if (str.includes(stoplist[i])) {
      return true;    
    }
  };
  
  return false;
}
