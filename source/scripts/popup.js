import 'emoji-log';
import browser from 'webextension-polyfill';

import '../styles/popup.scss';

function openWebPage(url) {
  return browser.tabs.create({url});
}

document.addEventListener('DOMContentLoaded', async () => {
  const tabs = await browser.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  const url = tabs.length && tabs[0].url;

  const response = await browser.runtime.sendMessage({
    msg: 'hello',
    url,
  });

  console.emoji('🦄', response);

  const manifest = chrome.runtime.getManifest();
  document.getElementById('version').textContent = manifest.version;

  document.getElementById('github__button').addEventListener('click', () => {
    return openWebPage(
      'https://github.com/pathway27/stop-loading-za-warudo'
    );
  });

  document.getElementById('donate__button').addEventListener('click', () => {
    return openWebPage('https://ko-fi.com/pathway27');
  });
});

