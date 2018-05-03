function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regEx1 = /[a-z](?=[A-Z])/g;
    var regEx2 = /\ |\_/g;
    if(str.match(regEx2)) {
      str = str.replace(regEx2, "-");
    }
     str = str.replace(regEx1, "$&-");
    return str.toLowerCase();
  }
  
  spinalCase("thisIsSpinalTap");
  