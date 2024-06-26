'use strict';

const BAR = Symbol('Context#bar');

module.exports = {

  get isIOS() {
    const iosReg = '/iphone/ipad/ipod/i';
    return iosReg.test(this.get('usr-agent'));
  },
  // 方法扩展
  foo() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
  },
  // 属性扩展
  get bar() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    if (!this[BAR]) {
      // 例如，从 header 中获取，实际情况肯定更复杂
      this[BAR] = this.get('x-bar');
    }
    return this[BAR];
  },
};
