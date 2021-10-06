(function () {
  const parent = document.querySelector('#hs_cos_wrapper_widget_6067785034');
  const removeElement = document.querySelector('.header-2-sub-v2');
  const removeElement2 = document.querySelector('.content-25');
  const layer1 = document.querySelector(
    'body > div.body-container-wrapper > div > div.row-fluid-wrapper.row-depth-1.row-number-2 > div > div'
  );
  const layer2 = document.querySelector(
    'body > div.body-container-wrapper > div > div.row-fluid-wrapper.row-depth-1.row-number-4 > div > div'
  );

  const scrollHeightLayers = layer1.scrollHeight + layer2.scrollHeight;

  const eventMethod = window.addEventListener
    ? 'addEventListener'
    : 'attachEvent';
  const eventer = window[eventMethod];
  const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

  const sendMessageChild = (msg, url) => {
    const App = document.querySelector('#calculator');
    if (App === undefined) return;
    App.contentWindow.postMessage(msg, url);
    console.log('posted');
    clearInterval(clear);
  };

  eventer(messageEvent, function (e) {
    const calculator = document.querySelector('#calculator');

    if (e.data.step) {
      window.scrollTo({
        top: e.data.scrollSize + scrollHeightLayers,
        behavior: 'smooth',
      });
    }

    if (calculator) {
      calculator.style.height = e.data + 'px';
    }
  });

  removeElement.remove();
  removeElement2.remove();
  parent.insertAdjacentHTML(
    'afterend',
    '<iframe style="border:none;" scrolling="no" src="https://calc-embeded.cognni.ai" title="calculator" id="calculator" width="100%" height="550px"></iframe>'
  );

  const clear = setInterval(() => {
    sendMessageChild('kizan', '*');
    console.log(1);
  }, 1000);
})();
