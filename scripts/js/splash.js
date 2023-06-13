const splash = document.getElementById('splash');
const splashes = new Array('Xgdps awakened!', 'Apogee is love, Apogee is life.', 'A good ps.', 'Game about 2d cubes.', 'I love Sy3rena!', 'Where is my mind?', 'Void', 'RobTopTeam is cool!');

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

splash.innerText = splashes[getRandomInt(0, splashes.length - 1)];