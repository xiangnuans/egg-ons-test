'use strict';

const BAR = Symbol('Application#bar');


module.exports = {

  // 方法扩展
  foo() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
  },

  // 属性扩展
  get bar() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[BAR]) {
      // 实际情况肯定更复杂
      this[BAR] = this.config.xx + this.config.yy;
    }
    return this[BAR];
  },
};
