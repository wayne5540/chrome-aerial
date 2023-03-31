var videosUrl = "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json"

const getRandomVideoUrl = (videoCategories) => {
  let randomVideoCategory = randomFromArray(videoCategories);
  let randomVideo = randomFromArray(randomVideoCategory.assets);

  return randomVideo.url;
};

var init = function() {
  $.ajax({
    dataType: "json",
    url: videosUrl,
  }).done(function(videoCategories){
    var randomVideoUrl = getRandomVideoUrl(videoCategories);

    var video = document.getElementById('backgroundVideo');
    var source = document.createElement('source');
    source.setAttribute('src', randomVideoUrl);
    video.appendChild(source);

    video.addEventListener("loadeddata", () => {
      if (video.readyState >= 2) {
        video.setAttribute('style', "display: inline-block;");
        video.play();
      }
    });
  });
}


init();


var randomFromArray = function(array) {
  return array[Math.floor(Math.random()*array.length)]
}