function gratitude(){
    const gratitude_idea = document.getElementById("grat_li");
    var list = document.getElementsByTagName('ul')[0];
    var newItemLast = document.createElement('li');
    var newTextLast = document.createTextNode(gratitude_idea.value);
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
    console.log("text");
}