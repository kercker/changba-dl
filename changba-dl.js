audio = document.getElementById('audio')['src']
span = document.getElementById('export_song')
p = span.parentElement
a = document.createElement('a')
a.setAttribute('href', audio)
a.appendChild(document.createTextNode('下载'))
span.append(a)
