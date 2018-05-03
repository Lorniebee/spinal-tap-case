function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regEx1 = /[a-z](?=[A-Z])/g; // find all lower case immediately followed by upper case
    var regEx2 = /\ |\_/g;// find all spaces and under scores
    // if string matches regEx2 replace space or underscore with "-"
    if(str.match(regEx2)) {
      str = str.replace(regEx2, "-");
    }
    // take modified string and replace regEx1 matches with the match itself followed by "-"
     str = str.replace(regEx1, "$&-");
    // change all capitals to lower case
    return str.toLowerCase();
  }
  
  spinalCase("thisIsSpinalTap");
  