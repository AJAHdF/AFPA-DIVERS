//Les top éléments
let html = document.documentElement;
console.log(html);
let head = document.head;
console.log(head);
let body = document.body;
console.log(body);

//childNodes est une collection des noeuds enfants directs (1er niveau)
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
for (let node of document.body.childNodes) {
    console.log(node);
}
//childNodes est en lecture seule, pas possible d'ajouter, modifier ou supprimer un noeud
console.log(document.body.childNodes);
let divElt = document.createElement('div');
divElt.innerText = "Nouveau Div";
document.body.childNodes[0] = divElt;
console.log(document.body.childNodes);
//childNodes est dîte "live" (comme les méthodes getElementsBy*), elle se mets à jour automatiquement
let collectionOfNodes = document.body.childNodes;
console.log(collectionOfNodes);
document.body.append(divElt);//utiliser append pour ajouter un élément à la fin
console.log(collectionOfNodes);

//firstChild et lastChild
let h1 = document.body.firstChild;
//firstChild correspond à document.body.childNodes[0]
let script = document.body.lastChild;
//lastChild correspond à  document.body.childNodes[document.body.childNodes.length - 1]

//parentNode est le noeud parent direct
let liste = document.getElementById('liste');
console.log(liste.parentNode) //body
let firstLi = liste.firstChild; //1er li
console.log(firstLi.parentNode) //ul#liste

//nextSiblig est le noeud frère ou voisin suivant
let secondLi = firstLi.nextSibling; 
console.log(secondLi); //2ème li

//previousSibling est le noeud frère ou voisin précédant
let firstLiAgain = secondLi.previousSibling;
console.log(firstLiAgain); //1er li ??? Non : ce noeud correspond  à un retour chariot

//Pour ne récupérer que les noeuds correspondants à de véritables élément HTML
console.log("*** Utilisation de Element plutôt que Node ***")
//utiliser children à la place de childNodes
let collectionOfElts = document.body.children;
console.log(collectionOfElts);
let spanElt = document.createElement('span');
spanElt.innerText = "Nouveau Span";
document.body.children[0] = spanElt; //Ne fonctionne pas !
console.log(collectionOfElts);
document.body.prepend(spanElt);//utiliser prepend pour ajouter un élément au début
console.log(collectionOfElts);
//children, comme childNodes, est une collection en lecture seule et dite live (MàJ auto)

//firstElementChild à la place de firstChild
console.log(document.body.firstElementChild); //span (Nouveau Span) ajouté avec prepend

//lastElementChild à la place de lastChild
console.log(document.body.lastElementChild); //div (Nouveau Div) ajouté avec append

//parentElement à la place de parentNode
console.log(spanElt.parentElement); //body

//previousElementSibling à la place de nextSiblig
console.log(liste.previousElementSibling); //p

//nextElementSibling à la place de previousSibling
console.log(liste.nextElementSibling); //div