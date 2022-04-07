declare const gapi: any;
declare const YT: any;

const search: any = document.querySelector('.search')
const form: any = document.querySelector('form');
const section: any = document.querySelector('section');

const client = () => {
  gapi.client.load('youtube', 'v3', videoApi);
};

window.addEventListener('load', client);

const videoApi: Function = () => {
  gapi.client.setApiKey('AIzaSyBp2xNlHdU3D-HWjUR-XSuzKzD4gSTos8c')
  form.addEventListener('submit', videoSearch);
};

const videoSearch: Function = (e: Event) => {
  e.preventDefault();

  const request: any = gapi.client.youtube.search.list({
    part:<string> 'snippet',
    maxResults:<number> 4,
    q:<string> search.value,
  });

  request.execute(videoResponse);
};

const videoResponse: Function = (res: any) => {
  section.textContent = '';
  
  const results: [] = res.items; 
  for (let i: number = 0; i < results.length; i++) {
    videoDisplay(results[i], i);
  };
};

const videoDisplay: Function = (res: any, i: number) => {
  const vid: Element = document.createElement('div');
  let vidId: string = 'id' + i;
  vid.id = vidId;
  section.appendChild(vid);

  const videoTime: Function = (e: any) => {
    const duration: number = e.target.getDuration();
    if (duration === 0) {
      section.removeChild(e.target.a);
    };
  };

  const player: any = new YT.Player(vidId, {
    videoId:<[]> res.id.videoId,
    events: {
      'onReady':<Function> videoTime,
    },
  });
};
