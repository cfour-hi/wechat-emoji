import styles from './styles.css';
import { as, bs } from './alts';

/**
 * 根据索引创建 img 元素
 * @param {number} i 索引
 * @returns {Element}
 */
const createEmojiImg = (i) => {
  const img = document.createElement('img');
  img.src =
    'https://mp.weixin.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif';
  img.classList.add(styles['emoji-item__icon']);
  img.style.backgroundPosition = `0px -${i * 20}px`;
  return img;
};

/**
 * 将 emoji 别名转换为 emoji 表情对应的 img 元素
 * @param {any} alt emoji 别名
 * @returns {Element | any}
 */
export const convertAlt2Emoji = (alt) => {
  let order = as.indexOf(alt);
  if (order < 0) order = bs.indexOf(alt);
  return order < 0 ? alt : createEmojiImg(order);
};

/**
 * 使用图片替换文本中的符号 仅配合 func[convertText2Emoji] 使用
 * @param {string} text 原文本
 * @param {string[]} list 符号列表
 * @returns {string}
 */
const replaceEmojiText = (text, list) => {
  list.forEach((item, index) => {
    text = text.replaceAll(item, createEmojiImg(index).outerHTML);
  });
  return text;
};

/**
 * 分别使用不同的规则列表尝试替换
 * @param {string} text
 * @returns {string}
 */
export const convertText2Emoji = (text) => {
  if (typeof text === 'string') {
    text = replaceEmojiText(text, as);
    text = replaceEmojiText(text, bs);
  }
  return text;
};
