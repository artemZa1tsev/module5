const apply = (rate, inFun, inAtr) => {
   if (rate === 0) return inAtr;
  return apply(rate - 1, inFun, inFun(inAtr));
};

export default apply;
