const audioPlayer = document.getElementById('audio-player');
const cards = document.querySelectorAll('.playlist-card');
let currentCard = null;

audioPlayer.volume = 0.8; // set volume

cards.forEach(card => {
  card.addEventListener('click', () => {
    const audioSrc = card.getAttribute('data-audio');

    if(currentCard === card){
      if(!audioPlayer.paused){
        audioPlayer.pause();
        card.querySelector('.equalizer').style.display = 'none';
        card.querySelector('.play-icon').textContent = 'play_arrow';
      } else {
        audioPlayer.play();
        card.querySelector('.equalizer').style.display = 'flex';
        card.querySelector('.play-icon').textContent = 'pause';
      }
    } else {
      if(currentCard){
        currentCard.querySelector('.equalizer').style.display = 'none';
        currentCard.querySelector('.play-icon').textContent = 'play_arrow';
      }
      audioPlayer.src = audioSrc;
      audioPlayer.play();
      card.querySelector('.equalizer').style.display = 'flex';
      card.querySelector('.play-icon').textContent = 'pause';
      currentCard = card;
    }
  });
});

audioPlayer.addEventListener('ended', () => {
  if(currentCard){
    currentCard.querySelector('.equalizer').style.display = 'none';
    currentCard.querySelector('.play-icon').textContent = 'play_arrow';
  }
});