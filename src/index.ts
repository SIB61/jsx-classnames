export class Styles {
  static from(...args: Array<any>) {
    const cssModule: any = args?.reduce(
      (acc, cur) => ({ ...acc, ...cur }),
      {}
    );
    return (classnames: string): string => {
      if (!cssModule) {
        return classnames;
      }
      const classnamesArr = classnames.split(" ");
      return classnamesArr.reduce((acc, cur) => {
        if (cssModule[cur]) {
          acc += cssModule[cur] + " ";
        } else {
          acc += cur + " ";
        }
        return acc;
      }, " ");
    };
  }
}
