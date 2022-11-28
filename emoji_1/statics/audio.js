function CustomAudio(config) {
  const { template } = config;
  this.config = config
  this.audio = null;
  this.init();
}
CustomAudio.prototype.init = function () {
  const { bgmSrc, clickBgm } = this.config;
  this.createAudioDom([
    {
      key: 'audio',
      loop: true,
    },
    {
      key: 'clickBgmAudio',
      loop: false,
    }
  ]);
}
CustomAudio.prototype.play = function () {
  if (!this.playStatus && this.audio) {
    this.audio.play()
    this.playStatus = true;
  }
}
CustomAudio.prototype.pause = function () {
  if (this.playStatus && this.audio) {
    this.audio.pause()
    this.playStatus = false;
  }
}
CustomAudio.prototype.createAudioDom = function (config) {
  const { template } = this.config;
  config.forEach(item => {
    this[item.key] = document.createElement('audio');
    this[item.key].setAttribute('controls', '');
    if (item.loop) {
      this[item.key].setAttribute('loop', '');
    }
    const source = document.createElement('source');
    source.setAttribute('type', "audio/mpeg");
    source.src = item.src;
    this[item.key].appendChild(source);
    this[item.key].setAttribute('style', 'display: none');
    document.querySelector(template).appendChild(this[item.key])
  });
}