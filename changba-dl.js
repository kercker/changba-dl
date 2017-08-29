function insertAfter(newNode, referenceNode) {
    // code from: https://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

audio = document.getElementById('audio')['src'];
export_song = document.getElementById('export_song');
em = document.createElement('em');
i = document.createElement('i');
span = document.createElement('span');

a = document.createElement('a');
a.setAttribute('href', audio);
a.appendChild(document.createTextNode('下载'));

em.appendChild(a);
span.appendChild(i);
span.appendChild(em);

insertAfter(span, export_song);
