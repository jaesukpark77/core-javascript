import { typeError } from '../error/index.js';

export function disableElement(node) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
}

export function enableElement(node) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = false;
}