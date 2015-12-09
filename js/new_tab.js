var videosUrl = "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json"

var init = function() {
  $.ajax({
    dataType: "json",
    url: videosUrl,
  }).done(function(videoCategories){
    var randomVideoCategory = randomFromArray(videoCategories);
    var randomVideo = randomFromArray(randomVideoCategory.assets);
    var randomVideoUrl = randomVideo.url;

    var video = document.getElementById('backgroundVideo');
    var source = document.createElement('source');
    source.setAttribute('src', randomVideoUrl);
    video.appendChild(source);
    video.play();

  });
}


init();


var randomFromArray = function(array) {
  return array[Math.floor(Math.random()*array.length)]
}