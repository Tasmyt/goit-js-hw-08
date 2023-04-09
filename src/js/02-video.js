import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player);
const CURRENT_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (data) {
  const seconds = data.seconds;
  console.log(seconds);
  localStorage.setItem(CURRENT_KEY, JSON.stringify(seconds));
};


player.on('timeupdate', throttle(onTimeupdate, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_KEY)) || 0);
