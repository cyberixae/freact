/* eslint-disable */
import * as P from 'maasglobal-prelude-ts';
import R from 'react';

type FreactNode = P.IO<R.ReactNode>;

function createElement(
    type: "input",
    props?: R.InputHTMLAttributes<HTMLInputElement> & R.ClassAttributes<HTMLInputElement> | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.DetailedReactHTMLElement<R.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
function createElement<P extends R.HTMLAttributes<T>, T extends HTMLElement>(
    type: keyof R.ReactHTML,
    props?: R.ClassAttributes<T> & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.DetailedReactHTMLElement<P, T>>;
function createElement<P extends R.SVGAttributes<T>, T extends SVGElement>(
    type: keyof R.ReactSVG,
    props?: R.ClassAttributes<T> & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.ReactSVGElement>;
function createElement<P extends R.DOMAttributes<T>, T extends Element>(
    type: string,
    props?: R.ClassAttributes<T> & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.DOMElement<P, T>>;

// Custom components

function createElement<P extends {}>(
    type: R.FunctionComponent<P>,
    props?: R.Attributes & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.FunctionComponentElement<P>>;
function createElement<P extends {}>(
    type: R.ClassType<P, R.ClassicComponent<P, R.ComponentState>, R.ClassicComponentClass<P>>,
    props?: R.ClassAttributes<R.ClassicComponent<P, R.ComponentState>> & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.CElement<P, R.ClassicComponent<P, R.ComponentState>>>;
function createElement<P extends {}, T extends R.Component<P, R.ComponentState>, C extends R.ComponentClass<P>>(
    type: R.ClassType<P, T, C>,
    props?: R.ClassAttributes<T> & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.CElement<P, T>>;
function createElement<P extends {}>(
    type: R.FunctionComponent<P> | R.ComponentClass<P> | string,
    props?: R.Attributes & P | null,
    ...children: Array<R.ReactNode|P.IO<R.ReactNode>>): P.IO<R.ReactElement<P>>;

function createElement(t: any, p: any, ...c: Array<any>): P.IO<any> {
  return P.pipe(
    P.NonEmptyArray_.cons(t, c),
    P.NonEmptyArray_.map((v) => typeof v === 'function' ? v : P.IO_.of(v)),
    P.NonEmptyArray__.sequence(P.IO__),
    P.IO_.chain((d: Array<any>) => {
        return () => R.createElement(t, p, ...d)
    }),
  )
}

export declare namespace freact.JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  type Element = P.IO<any>
}
export const freact = createElement;

export default freact; 
