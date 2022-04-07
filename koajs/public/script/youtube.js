"use strict";
const search = document.querySelector('.search');
const form = document.querySelector('form');
const section = document.querySelector('section');
const client = () => {
    gapi.client.load('youtube', 'v3', videoApi);
};
window.addEventListener('load', client);
const videoApi = () => {
    gapi.client.setApiKey('AIzaSyBp2xNlHdU3D-HWjUR-XSuzKzD4gSTos8c');
    form.addEventListener('submit', videoSearch);
};
const videoSearch = (e) => {
    e.preventDefault();
    const request = gapi.client.youtube.search.list({
        part: 'snippet',
        maxResults: 4,
        q: search.value,
    });
    request.execute(videoResponse);
};
const videoResponse = (res) => {
    section.textContent = '';
    const results = res.items;
    for (let i = 0; i < results.length; i++) {
        videoDisplay(results[i], i);
    }
    ;
};
const videoDisplay = (res, i) => {
    const vid = document.createElement('div');
    let vidId = 'id' + i;
    vid.id = vidId;
    section.appendChild(vid);
    const videoTime = (e) => {
        const duration = e.target.getDuration();
        if (duration === 0) {
            section.removeChild(e.target.a);
        }
        ;
    };
    const player = new YT.Player(vidId, {
        videoId: res.id.videoId,
        events: {
            'onReady': videoTime,
        },
    });
};
