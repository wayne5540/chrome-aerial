const videosUrl = "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json"

const randomFromArray = function(array) {
  return array[Math.floor(Math.random()*array.length)]
}

const getRandomVideoUrl = (videoCategories) => {
  let randomVideoCategory = randomFromArray(videoCategories);
  let randomVideo = randomFromArray(randomVideoCategory.assets);

  return randomVideo.url;
};

const init = function() {
  $.ajax({
    dataType: "json",
    url: videosUrl,
  }).done(function(videoCategories){
    let randomVideoUrl = getRandomVideoUrl(videoCategories);
    let video = document.getElementById('backgroundVideo');
    let source = document.createElement('source');
    let loadingImage = document.getElementById('loading-gif');

    source.setAttribute('src', randomVideoUrl);
    video.appendChild(source);
    video.addEventListener("loadeddata", () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
      if (video.readyState >= 2) {
        loadingImage.setAttribute('style', "display: none;");
        video.setAttribute('style', "display: inline-block;");
        video.play();
      }
    });
  });
}

init();