'use strict';

const aside = document.querySelector('aside');
const videos = [
  {name: 'gimme'},
  {name: 'nofun'}
];

let db;

const init = () => {
  for (const video of videos) {
    const objStore = db.transaction('videos_os').objectStore('videos_os');
    const request = objStore.get(video.name);
    request.addEventListener('success', () => {
      if (request.result) {
        displayVideo(request.result.mp4, request.result.name);
      } else {
        fetchVideo(video);
      }
    })
  }
};

const fetchVideo = (video) => {
  const mp4Blob = fetch(`../image/${video.name}.mp4`).then(response => response.blob());
  Promise.all([mp4Blob]).then(values => {
    displayVideo(values[0], video.name);
  });
};

const storeVideo = (mp4, name) => {
  const objStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os');
  const record = {
    mp4: mp4,
    name: name,
  };

  const request = objStore.add(record);
  request.addEventListener('success', () => console.log('good'));
  request.addEventListener('error', () => console.error(request.error));
};

const displayVideo = (mp4, title) => {
  const mp4URL = URL.createObjectURL(mp4);

  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const video = document.createElement('video');
  video.controls = true;
  const source = document.createElement('source');
  source.src = mp4URL;
  source.type = 'video/mp4';

  aside.appendChild(article);
  article.appendChild(h2);
  article.appendChild(video);
  video.appendChild(source);
};

const request = window.indexedDB.open('videos_db', 1);
request.addEventListener('error', () => console.error(request.error));
request.addEventListener('success', () => {
  db = request.result;
  init();
});

request.addEventListener('upgradeneeded', e => {
  const db = e.target.result;
  const objStore = db.createObjectStore('videos_os', {keyPath: 'name'});
  objStore.createIndex('mp4', 'mp4', {unique: false});
});
