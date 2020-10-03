import {
  WechatEmojiPanel,
  convertAlt2Emoji,
  convertText2Emoji,
} from '../src/index';

const elSelected = document.getElementById('selected');

new WechatEmojiPanel({
  el: document.getElementById('panel'),
  onSelect(alt) {
    elSelected.appendChild(convertAlt2Emoji(alt));
  },
});

const text = "你伤害了我[大哭]/::'(，还一笑而过😒\ue40e";
const div = document.createElement('div');
div.innerHTML = convertText2Emoji(text);
document.body.appendChild(div);
