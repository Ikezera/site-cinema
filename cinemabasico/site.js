function stop() {
  let video = document.getElementById('videoId');
  video.contentWindow.postMessage(
    '{"event":"command", "func":"stopVideo", "args":""}',
    '*'
  );
}
