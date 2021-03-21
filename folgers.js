function folgers() {
  var words = [
    "The","best","part","of","waking","up","is","Folgers","in","your","cup",
    "for","and","not","but","so","or","yet"
  ];
  var length = Math.floor(Math.random()*100);
  var folg = "The best part of waking up is ";
  for (var i=0;i<length;i++) {
    folg=folg+words[Math.floor(Math.random()*words.length)]+" ";
  }
  return(folg);
}
