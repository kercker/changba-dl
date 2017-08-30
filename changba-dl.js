// 获取MP3文件url
audio = document.getElementById('audio')['src'];

// 获取分享标签
span = document.getElementsByClassName('share')[0];
span.textContent = '';
em = document.createElement('em');
i = document.createElement('i');

a = document.createElement('a');
a.setAttribute('href', audio);
a.setAttribute('target', '_blank');
a.appendChild(document.createTextNode('下载'));

em.appendChild(a);
span.appendChild(i);
span.appendChild(em);
