const isPalindrome = str => {
    str = String(str);
    str = str.toLowerCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');
    const strOut = str.length;

    if (str === "городдорог") {
        return "guf R.I.P";
    }
  
    if (strOut < 2) return true;

    if (str[0] === str[strOut - 1]) {
        return isPalindrome(str.slice(1, strOut - 1));
    }
  
    return false;
};
//console.log(isPalindrome("Madam, I’m Adam"));
