"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles = void 0;
class Styles {
    static from(...args) {
        const cssModule = args === null || args === void 0 ? void 0 : args.reduce((acc, cur) => (Object.assign(Object.assign({}, acc), cur)), {});
        return (classnames) => {
            if (!cssModule) {
                return classnames;
            }
            const classnamesArr = classnames.split(" ");
            return classnamesArr.reduce((acc, cur) => {
                if (cssModule[cur]) {
                    acc += cssModule[cur] + " ";
                }
                else {
                    acc += cur + " ";
                }
                return acc;
            }, " ");
        };
    }
}
exports.Styles = Styles;
