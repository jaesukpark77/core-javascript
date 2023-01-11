function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof className !== 'string') {
    TypeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.')
  }
  node.classList.add(className)
}

function removeClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    TypeError('removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다.')
  }

  node.classList.remove(className)
}

function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    TypeError('toggleCalss 함수의 두 번째 인자는 문자 타입이어야 합니다.')
  }
  node.classList.toggle(className)
}