/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";var u=e,h=t,f=n,g=s,j=r.isPrimitive,c=i,b=o,v=d,y=m,x=l.factory,w=a,L=p;var N=function(){var e,t,n,s;if(0===arguments.length)t=x();else if(1===arguments.length&&g(arguments[0]))if(b(e=arguments[0],"prng")){if(!c(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=x(e);else{if(!j(s=arguments[0]))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+s+"`.");if(arguments.length>1){if(!g(e=arguments[1]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(b(e,"prng")){if(!c(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=x(e)}else t=x()}return u(n=void 0===s?N:p,"NAME","bernoulli"),e&&e.prng?(u(n,"seed",null),u(n,"seedLength",null),f(n,"state",v(null),y),u(n,"stateLength",null),u(n,"byteLength",null),u(n,"toJSON",v(null)),u(n,"PRNG",t)):(h(n,"seed",r),h(n,"seedLength",i),f(n,"state",m,l),h(n,"stateLength",o),h(n,"byteLength",d),u(n,"toJSON",a),u(n,"PRNG",t),t=t.normalized),n;function r(){return t.seed}function i(){return t.seedLength}function o(){return t.stateLength}function d(){return t.byteLength}function m(){return t.state}function l(e){t.state=e}function a(){var e={type:"PRNG"};return e.name=n.NAME,e.state=L(t.state),e.params=void 0===s?[]:[s],e}function p(){return t()<=s?1:0}function N(e){return w(e)||e<0||e>1?NaN:t()<=e?1:0}},E=N();e(E,"factory",N);var O=E;export{O as default};
//# sourceMappingURL=index.mjs.map
