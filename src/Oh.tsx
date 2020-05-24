/* @jsx myjsx */

declare namespace myjsx.JSX {
  interface IntrinsicElements {
    foo: any;
  }
  interface Element {
    (): boolean
  }
}

const myjsx = (...args: Array<any>): myjsx.JSX.Element => () => true

 const element: myjsx.JSX.Element = <foo>123</foo>
 
 export {}