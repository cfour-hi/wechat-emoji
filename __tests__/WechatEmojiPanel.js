import WechatEmojiPanel from '../src/WechatEmojiPanel';
import { convertAlt2Emoji } from '../src/index';

document.body.innerHTML = '<div id="panel"></div><div id="selected"></div>';
const elPanel = document.getElementById('panel');
const elSelected = document.getElementById('selected');

test('WechatEmojiPanel', () => {
  const onSelect = (alt) => {
    elSelected.appendChild(convertAlt2Emoji(alt));
  };
  const mockOnSelect = jest.fn(onSelect);
  new WechatEmojiPanel({
    el: elPanel,
    onSelect: mockOnSelect,
  });
  const elUl = elPanel.children[0];
  const elLis = elUl.children;

  expect(elUl).not.toBeUndefined();
  expect(elLis).toHaveLength(112);

  elUl.click();
  expect(mockOnSelect).not.toHaveBeenCalled();

  elLis[0].click();
  expect(mockOnSelect).toHaveBeenCalled();
  expect(mockOnSelect).toHaveBeenCalledTimes(1);
  expect(elSelected.innerHTML.match(/<img/g)).toHaveLength(1);

  elLis[0].firstElementChild.click();
  expect(mockOnSelect).toHaveBeenCalledTimes(2);
  expect(elSelected.innerHTML.match(/<img/g)).toHaveLength(2);
});

test('WechatEmojiPanel: error', () => {
  expect(
    () =>
      new WechatEmojiPanel({
        el: elPanel,
        onSelect: 1,
      }),
  ).toThrow();
});
