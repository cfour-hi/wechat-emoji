import styles from './styles.css';
import { as } from './alts';

export default class WechatEmojiPanel {
  constructor(options) {
    this.options = options;

    if (typeof this.options.onSelect !== 'function') {
      throw new TypeError('onSelect is not a function');
    }

    this.appendPanel();
  }

  appendPanel() {
    const ul = document.createElement('ul');
    ul.classList.add(styles['emoji-list']);

    for (let i = 0; i < as.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add(styles['emoji-item']);
      li.setAttribute('data-order', i);

      const span = document.createElement('span');
      span.classList.add(styles['emoji-item__icon']);
      span.style.backgroundPosition = `0px -${i * 20}px`;

      li.appendChild(span);
      ul.appendChild(li);
    }

    ul.addEventListener('click', (e) => {
      let li = e.target;
      while (li.tagName !== 'LI') {
        if (li.tagName === 'UL') return;
        li = li.parentElement;
      }
      this.options.onSelect.call(this, as[li.dataset.order]);
    });

    this.options.el.appendChild(ul);
  }
}
