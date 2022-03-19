// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var h=t,f=e,g=n,j=s,c=r.isPrimitive,b=i,v=o,y=d,x=m,w=l.factory,L=a,N=p,E=u;var O=function(){var t,e,n,s;if(0===arguments.length)e=w();else if(1===arguments.length&&j(arguments[0]))if(v(t=arguments[0],"prng")){if(!b(t.prng))throw new TypeError(E("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",t.prng));e=t.prng}else e=w(t);else{if(!c(s=arguments[0]))throw new TypeError(E("invalid argument. First argument must be a probability. Value: `%s`.",s));if(arguments.length>1){if(!j(t=arguments[1]))throw new TypeError(E("invalid argument. Options argument must be an object. Value: `%s`.",t));if(v(t,"prng")){if(!b(t.prng))throw new TypeError(E("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",t.prng));e=t.prng}else e=w(t)}else e=w()}return h(n=void 0===s?u:p,"NAME","bernoulli"),t&&t.prng?(h(n,"seed",null),h(n,"seedLength",null),g(n,"state",y(null),x),h(n,"stateLength",null),h(n,"byteLength",null),h(n,"toJSON",y(null)),h(n,"PRNG",e)):(f(n,"seed",r),f(n,"seedLength",i),g(n,"state",m,l),f(n,"stateLength",o),f(n,"byteLength",d),h(n,"toJSON",a),h(n,"PRNG",e),e=e.normalized),n;function r(){return e.seed}function i(){return e.seedLength}function o(){return e.stateLength}function d(){return e.byteLength}function m(){return e.state}function l(t){e.state=t}function a(){var t={type:"PRNG"};return t.name=n.NAME,t.state=N(e.state),t.params=void 0===s?[]:[s],t}function p(){return e()<=s?1:0}function u(t){return L(t)||t<0||t>1?NaN:e()<=t?1:0}},P=O(),T=O;t(P,"factory",T);var G=P;export{G as default,T as factory};
//# sourceMappingURL=index.mjs.map
