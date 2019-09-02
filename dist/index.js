/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gsap/AttrPlugin.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/AttrPlugin.js ***!
  \*****************************************/
/*! exports provided: AttrPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return AttrPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttrPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



var AttrPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
	propName: "attr",
	API: 2,
	version: "0.6.1",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function(target, value, tween, index) {
		var p, end;
		if (typeof(target.setAttribute) !== "function") {
			return false;
		}
		for (p in value) {
			end = value[p];
			if (typeof(end) === "function") {
				end = end(index, target);
			}
			this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
			this._overwriteProps.push(p);
		}
		return true;
	}

});







/***/ }),

/***/ "./node_modules/gsap/BezierPlugin.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/BezierPlugin.js ***!
  \*******************************************/
/*! exports provided: BezierPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return BezierPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 1.3.9
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */


		var _RAD2DEG = 180 / Math.PI,
			_r1 = [],
			_r2 = [],
			_r3 = [],
			_corProps = {},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			Segment = function(a, b, c, d) {
				if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
					c = d - (d - b) / 1000000;
				}
				if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
					b = a + (c - a) / 1000000;
				}
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			cubicToQuadratic = function(a, b, c, d) {
				var q1 = {a:a},
					q2 = {},
					q3 = {},
					q4 = {c:d},
					mab = (a + b) / 2,
					mbc = (b + c) / 2,
					mcd = (c + d) / 2,
					mabc = (mab + mbc) / 2,
					mbcd = (mbc + mcd) / 2,
					m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
					ii = 0,
					cp1 = a[0].a,
					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii+1].d;

					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;

					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}

					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;

					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}

					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			_parseAnchors = function(values, p, correlate, prepend) {
				var a = [],
					l, i, p1, p2, p3, tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i+1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i+2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
				return a;
			},
			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
					props = [],
					first = prepend || values[0],
					i, p, a, j, r, l, seamless, last;
				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = (a[j+1].da / _r2[j] + a[j].da / _r1[j]) || 0;
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			_parseBezierData = function(values, type, prepend) {
				type = type || "soft";
				var obj = {},
					inc = (type === "cubic") ? 3 : 2,
					soft = (type === "soft"),
					props = [],
					a, b, c, d, cur, i, j, l, p, cnt, tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt-2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j+1];
						c = cur[j+2];
						d = (inc === 2) ? 0 : cur[j+3];
						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			_addCubicLengths = function(a, steps, resolution) {
				var inc = 1 / resolution,
					j = a.length,
					d, d1, s, da, ca, ba, p, i, inv, bez, index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			_parseLengthData = function(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
					lengths = [],
					d = 0,
					total = 0,
					threshold = resolution - 1,
					segments = [],
					curLS = [], //current length segments array
					p, i, l, index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = (i / resolution) >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return {length:total, lengths:lengths, segments:segments};
			},



			BezierPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.9",
					API: 2,
					global:true,

					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, vars, tween) {
						this._target = target;
						if (vars instanceof Array) {
							vars = {values:vars};
						}
						this._func = {};
						this._mod = {};
						this._props = [];
						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
						var values = vars.values || [],
							first = {},
							second = values[0],
							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
							p, isFunc, i, j, prepend;

						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
						for (p in second) {
							this._props.push(p);
						}

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];

							this._overwriteProps.push(p);
							isFunc = this._func[p] = (typeof(target[p]) === "function");
							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
							if (!prepend) if (first[p] !== values[0][p]) {
								prepend = first;
							}
						}
						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
						this._segCount = this._beziers[p].length;

						if (this._timeRes) {
							var ld = _parseLengthData(this._beziers, this._timeRes);
							this._length = ld.length;
							this._lengths = ld.lengths;
							this._segments = ld.segments;
							this._l1 = this._li = this._s1 = this._si = 0;
							this._l2 = this._lengths[0];
							this._curSeg = this._segments[0];
							this._s2 = this._curSeg[0];
							this._prec = 1 / this._curSeg.length;
						}

						if ((autoRotate = this._autoRotate)) {
							this._initialRotations = [];
							if (!(autoRotate[0] instanceof Array)) {
								this._autoRotate = autoRotate = [autoRotate];
							}
							i = autoRotate.length;
							while (--i > -1) {
								for (j = 0; j < 3; j++) {
									p = autoRotate[i][j];
									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
								}
								p = autoRotate[i][2];
								this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
								this._overwriteProps.push(p);
							}
						}
						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
						return true;
					},

					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
					set: function(v) {
						var segments = this._segCount,
							func = this._func,
							target = this._target,
							notStart = (v !== this._startRatio),
							curIndex, inv, i, p, b, t, val, l, lengths, curSeg, v1;
						if (!this._timeRes) {
							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
							t = (v - (curIndex * (1 / segments))) * segments;
						} else {
							lengths = this._lengths;
							curSeg = this._curSeg;
							v1 = v * this._length;
							i = this._li;
							//find the appropriate segment (if the currently cached one isn't correct)
							if (v1 > this._l2 && i < segments - 1) {
								l = segments - 1;
								while (i < l && (this._l2 = lengths[++i]) <= v1) {	}
								this._l1 = lengths[i-1];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s2 = curSeg[(this._s1 = this._si = 0)];
							} else if (v1 < this._l1 && i > 0) {
								while (i > 0 && (this._l1 = lengths[--i]) >= v1) { }
								if (i === 0 && v1 < this._l1) {
									this._l1 = 0;
								} else {
									i++;
								}
								this._l2 = lengths[i];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
								this._s2 = curSeg[this._si];
							}
							curIndex = i;
							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
							v1 -= this._l1;
							i = this._si;
							if (v1 > this._s2 && i < curSeg.length - 1) {
								l = curSeg.length - 1;
								while (i < l && (this._s2 = curSeg[++i]) <= v1) {	}
								this._s1 = curSeg[i-1];
								this._si = i;
							} else if (v1 < this._s1 && i > 0) {
								while (i > 0 && (this._s1 = curSeg[--i]) >= v1) {	}
								if (i === 0 && v1 < this._s1) {
									this._s1 = 0;
								} else {
									i++;
								}
								this._s2 = curSeg[i];
								this._si = i;
							}
							t = (v === 1) ? 1 : ((i + (v1 - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
						}
						inv = 1 - t;

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];
							b = this._beziers[p][curIndex];
							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
							if (this._mod[p]) {
								val = this._mod[p](val, target);
							}
							if (func[p]) {
								target[p](val);
							} else {
								target[p] = val;
							}
						}

						if (this._autoRotate) {
							var ar = this._autoRotate,
								b2, x1, y1, x2, y2, add, conv;
							i = ar.length;
							while (--i > -1) {
								p = ar[i][2];
								add = ar[i][3] || 0;
								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
								b = this._beziers[ar[i][0]];
								b2 = this._beziers[ar[i][1]];

								if (b && b2) { //in case one of the properties got overwritten.
									b = b[curIndex];
									b2 = b2[curIndex];

									x1 = b.a + (b.b - b.a) * t;
									x2 = b.b + (b.c - b.b) * t;
									x1 += (x2 - x1) * t;
									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

									y1 = b2.a + (b2.b - b2.a) * t;
									y2 = b2.b + (b2.c - b2.b) * t;
									y1 += (y2 - y1) * t;
									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

									if (this._mod[p]) {
										val = this._mod[p](val, target); //for modProps
									}

									if (func[p]) {
										target[p](val);
									} else {
										target[p] = val;
									}
								}
							}
						}
					}
			}),
			p = BezierPlugin.prototype;


		BezierPlugin.bezierThrough = bezierThrough;
		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		BezierPlugin.quadraticToCubic = function(a, b, c) {
			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		};

		BezierPlugin._cssRegister = function() {
			var CSSPlugin = _globals.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
				if (e instanceof Array) {
					e = {values:e};
				}
				plugin = new BezierPlugin();
				var values = e.values,
					l = values.length - 1,
					pluginValues = [],
					v = {},
					i, p, data;
				if (l < 0) {
					return pt;
				}
				for (i = 0; i <= l; i++) {
					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
					pluginValues[i] = data.end;
				}
				for (p in e) {
					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
				}
				v.values = pluginValues;
				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
				pt.data = data;
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				if (v.autoRotate === 0) {
					v.autoRotate = true;
				}
				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
				}
				if (v.autoRotate) {
					if (!cssp._transform) {
						cssp._enableTransforms(false);
					}
					data.autoRotate = cssp._target._gsTransform;
					data.proxy.rotation = data.autoRotate.rotation || 0;
					cssp._overwriteProps.push("rotation");
				}
				plugin._onInitTween(data.proxy, v, cssp._tween);
				return pt;
			}});
		};

		p._mod = function(lookup) {
			var op = this._overwriteProps,
				i = op.length,
				val;
			while (--i > -1) {
				val = lookup[op[i]];
				if (val && typeof(val) === "function") {
					this._mod[op[i]] = val;
				}
			}
		};

		p._kill = function(lookup) {
			var a = this._props,
				p, i;
			for (p in this._beziers) {
				if (p in lookup) {
					delete this._beziers[p];
					delete this._func[p];
					i = a.length;
					while (--i > -1) {
						if (a[i] === p) {
							a.splice(i, 1);
						}
					}
				}
			}
			a = this._autoRotate;
			if (a) {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i][2]]) {
						a.splice(i, 1);
					}
				}
			}
			return this._super._kill.call(this, lookup);
		};



/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



	_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function() {

		/** @constructor **/
		var CSSPlugin = function() {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "2.1.3";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_valuesExpWithCommas = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_dummyElement = {style:{}},
			_doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {createElement: function() {return _dummyElement;}},
			_createElement = function(type, ns) {
				var e = _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
				return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator || {}).userAgent || "",
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].console) {
					console.log(s);
				}
			},
			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_computedStyleScope = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}),
			_getComputedStyle = function(e) {
				return _computedStyleScope.getComputedStyle(e); //to avoid errors in Microsoft Edge, we need to call getComputedStyle() from a specific scope, typically window.
			},

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					precise = (v === 1),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
					cache = _getComputedStyle(t).lineHeight;
					t.style.lineHeight = v;
					pix = parseFloat(_getComputedStyle(t).lineHeight);
					t.style.lineHeight = cache;
				} else if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
							style.position = "absolute";
						}
						cache = node._gsCache;
						time = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getCTM && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					return v + " ";
				}
				if (v == null || v === "") {
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
					i;
				if (a.length > 3 && !recObj) { //multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				var isRelative = (typeof(v) === "string" && v.charAt(1) === "=");
				if (typeof(v) === "string" && v.charAt(v.length - 2) === "v") { //convert vw and vh into px-equivalents.
					v = (isRelative ? v.substr(0, 2) : 0) + (window["inner" + ((v.substr(-2) === "vh") ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100));
				}
				return (v == null) ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(a[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = "",
					i, color, temp;
				if (!colors.length) {
					return s;
				}
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + " " + a[1],
				toHSL;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(delim === "," ? _valuesExp : _valuesExpWithCommas) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return ((pfx && v !== "none") ? v.substr(0, v.indexOf(vals[0])) || pfx : pfx) + vals.join(delim) + sfx; //note: prefix might be different, like for clipPath it could start with inset( or polygon(
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str, p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = mpt.r(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = (v === 1) ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					} else {
						ba = ba.join(" ").split(",").join(", ").split(" ");
						ea = ea.join(" ").split(",").join(", ").split(" ");
					}
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i] + "";
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						temp = ev; //original string value so we can look for any prefix later.
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.allowFunc = options.allowFunc;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = _internals._registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement || {},
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].chrome),
					svg, rect, width;
				if (_doc.createElementNS && _docElement.appendChild && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
					}
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
					oldParent = this.parentNode,
					oldSibling = this.nextSibling,
					oldCSS = this.style.cssText,
					bbox;
				_docElement.appendChild(svg);
				svg.appendChild(this);
				this.style.display = "block";
				if (swapIfPossible) {
					try {
						bbox = this.getBBox();
						this._originalGetBBox = this.getBBox;
						this.getBBox = _getBBoxHack;
					} catch (e) { }
				} else if (this._originalGetBBox) {
					bbox = this._originalGetBBox();
				}
				if (oldSibling) {
					oldParent.insertBefore(this, oldSibling);
				} else {
					oldParent.appendChild(this);
				}
				_docElement.removeChild(svg);
				this.style.cssText = oldCSS;
				return bbox;
			},
			_getBBox = function(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (error) {
					return _getBBoxHack.call(e, true);
				}
			},
			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					style = e.style,
					isDefault, s, m, n, dec, nextSibling, parent;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (_transformProp && isDefault && !e.offsetParent && e !== _docElement) { //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
					//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
					n = style.display;
					style.display = "block";
					parent = e.parentNode;
					if (!parent || !e.offsetParent) {
						dec = 1; //flag
						nextSibling = e.nextSibling;
						_docElement.appendChild(e); //we must add it to the DOM in order to get values properly
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (n) {
						style.display = n;
					} else {
						_removeProp(style, "display");
					}
					if (dec) {
						if (nextSibling) {
							parent.insertBefore(e, nextSibling);
						} else if (parent) {
							parent.appendChild(e);
						} else {
							_docElement.removeChild(e);
						}
					}
				}
				if (tm.svg || (e.getCTM && _isSVG(e))) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
						isDefault = 0;
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getCTM && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;
						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							t1 = a11*cos+a21*sin;
							t2 = a12*cos+a22*sin;
							t3 = a13*cos+a23*sin;
							a21 = a21*cos-a11*sin;
							a22 = a22*cos-a12*sin;
							a23 = a23*cos-a13*sin;
							a11 = t1;
							a12 = t2;
							a13 = t3;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}

						//skewX
						angle = Math.atan2(a12, a22);

						//scales
						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						a11 /= tm.scaleX;
						a12 /= tm.scaleY;
						a21 /= tm.scaleX;
						a22 /= tm.scaleY;
						if (Math.abs(angle) > min) {
							tm.skewX = angle * _RAD2DEG;
							a12 = 0; //unskews
							if (tm.skewType !== "simple") {
								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
							}

						} else {
							tm.skewX = 0;
						}

						/* //for testing purposes
						var transform = "matrix3d(",
							comma = ",",
							zero = "0";
						a13 /= tm.scaleZ;
						a23 /= tm.scaleZ;
						a31 /= tm.scaleX;
						a32 /= tm.scaleY;
						a33 /= tm.scaleZ;
						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
						console.log(transform);
						document.querySelector(".test").style[_transformProp] = transform;
						*/

						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
						if (invX) {
							tm.scaleX *= -1;
							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
						} else {
							tm.scaleY *= -1;
							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf( true && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					skewY = t.skewY,
					skewX = t.skewX,
					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
					skewX += skewY;
					angle += skewY;
				}

				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew - skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (skewX) {
						angle -= skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS a[row][column]
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0; //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1 = _getTransform(t, _cs, true, v.parseTransform),
				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
			cssp._transform = m1;
			if ("rotationZ" in v) {
				v.rotation = v.rotationZ;
			}
			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
					copy.width = _getStyle(t, "width");
					copy.height = _getStyle(t, "height");
				}
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
				}
				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = (typeof(v.transformOrigin) === "function") ? v.transformOrigin(_index, _target) : v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					if (!orig) {
						orig = (_getStyle(t, p, _cs, false, "50% 50%") + "").split(" ");
						orig = orig[0] + " " + orig[1] + " " + m1.zOrigin + "px";
					}
					orig += "";
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, allowFunc:true, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});
		_registerComplexSpecialProp("clipPath", {defaultValue:"inset(0%)", prefix:true, multi:true, formatter:_getFormatter("inset(0% 0% 0% 0%)", false, true)});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
			v += ""; //ensure it's a string
			return (v.substr(0,2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
		}});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				end = this.format(e).split(" "),
				esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			if (t.style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
				t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			}
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween, index) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				sp = _specialProps[p]; //SpecialProp lookup.
				if (typeof(es) === "function" && !(sp && sp.allowFunc)) {
					es = es(_index, _target);
				}
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);
				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
					continue;
				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = pt.r(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = pt.r(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function(lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof(lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
					pt.r = lookup[pt.p];
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

var CSSPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].CSSPlugin;


/***/ }),

/***/ "./node_modules/gsap/DirectionalRotationPlugin.js":
/*!********************************************************!*\
  !*** ./node_modules/gsap/DirectionalRotationPlugin.js ***!
  \********************************************************/
/*! exports provided: DirectionalRotationPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return DirectionalRotationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectionalRotationPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var DirectionalRotationPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.3.1",
		API: 2,

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween, index) {
			if (typeof(value) !== "object") {
				value = {rotation:value};
			}
			this.finals = {};
			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
				min = 0.000001,
				p, v, start, end, dif, split;
			for (p in value) {
				if (p !== "useRadians") {
					end = value[p];
					if (typeof(end) === "function") {
						end = end(index, target);
					}
					split = (end + "").split("_");
					v = split[0];
					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
					dif = end - start;
					if (split.length) {
						v = split.join("_");
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					if (dif > min || dif < -min) {
						this._addTween(target, p, start, start + dif, p);
						this._overwriteProps.push(p);
					}
				}
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var pt;
			if (ratio !== 1) {
				this._super.setRatio.call(this, ratio);
			} else {
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](this.finals[pt.p]);
					} else {
						pt.t[pt.p] = this.finals[pt.p];
					}
					pt = pt._next;
				}
			}
		}

	});

DirectionalRotationPlugin._autoCSS = true;



/***/ }),

/***/ "./node_modules/gsap/EasePack.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/EasePack.js ***!
  \***************************************/
/*! exports provided: Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase, Linear, Power0, Power1, Power2, Power3, Power4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return RoughEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return SlowMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return Circ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return ExpoScaleEase; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("easing.Back", ["easing.Ease"], function() {
		
		var w = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](),
			SteppedEase, ExpoScaleEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + (immediateStart ? 0 : 1);
				this._p3 = immediateStart ? 1 : 0;
			}, true);
		p = SteppedEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return (((this._p2 * p) | 0) + this._p3) * this._p1;
		};
		p.config = SteppedEase.config = function(steps, immediateStart) {
			return new SteppedEase(steps, immediateStart);
		};


		//ExpoScaleEase
		ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
			this._p1 = Math.log(end / start);
			this._p2 = end - start;
			this._p3 = start;
			this._ease = ease;
		}, true);
		p = ExpoScaleEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = ExpoScaleEase;
		p.getRatio = function(p) {
			if (this._ease) {
				p = this._ease.getRatio(p);
			}
			return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
		};
		p.config = ExpoScaleEase.config = function(start, end, ease) {
			return new ExpoScaleEase(start, end, ease);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

var Back = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Back;
var Elastic = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Elastic;
var Bounce = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Bounce;
var RoughEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].RoughEase;
var SlowMo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].SlowMo;
var SteppedEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].SteppedEase;
var Circ = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Circ;
var Expo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Expo;
var Sine = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].Sine;
var ExpoScaleEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].ExpoScaleEase;


/***/ }),

/***/ "./node_modules/gsap/RoundPropsPlugin.js":
/*!***********************************************!*\
  !*** ./node_modules/gsap/RoundPropsPlugin.js ***!
  \***********************************************/
/*! exports provided: RoundPropsPlugin, _getRoundFunc, _roundLinkedList, p, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return RoundPropsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getRoundFunc", function() { return _getRoundFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_roundLinkedList", function() { return _roundLinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundPropsPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */



var RoundPropsPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
				propName: "roundProps",
				version: "1.7.0",
				priority: -1,
				API: 2,

				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._tween = tween;
					return true;
				}

			}),
			_getRoundFunc = function(v) { //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
				var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
				return function(n) {
					return ((Math.round(n / v) * v * p) | 0) / p;
				};
			},
			_roundLinkedList = function(node, mod) {
				while (node) {
					if (!node.f && !node.blob) {
						node.m = mod || Math.round;
					}
					node = node._next;
				}
			},
			p = RoundPropsPlugin.prototype;

		p._onInitAllProps = function() {
			var tween = this._tween,
				rp = tween.vars.roundProps,
				lookup = {},
				rpt = tween._propLookup.roundProps,
				pt, next, i, p;
			if (typeof(rp) === "object" && !rp.push) {
				for (p in rp) {
					lookup[p] = _getRoundFunc(rp[p]);
				}
			} else {
				if (typeof(rp) === "string") {
					rp = rp.split(",");
				}
				i = rp.length;
				while (--i > -1) {
					lookup[rp[i]] = Math.round;
				}
			}

			for (p in lookup) {
				pt = tween._firstPT;
				while (pt) {
					next = pt._next; //record here, because it may get removed
					if (pt.pg) {
						pt.t._mod(lookup);
					} else if (pt.n === p) {
						if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
							_roundLinkedList(pt.t._firstPT, lookup[p]);
						} else {
							this._add(pt.t, p, pt.s, pt.c, lookup[p]);
							//remove from linked list
							if (next) {
								next._prev = pt._prev;
							}
							if (pt._prev) {
								pt._prev._next = next;
							} else if (tween._firstPT === pt) {
								tween._firstPT = next;
							}
							pt._next = pt._prev = null;
							tween._propLookup[p] = rpt;
						}
					}
					pt = next;
				}
			}
			return false;
		};

		p._add = function(target, p, s, c, mod) {
			this._addTween(target, p, s, s + c, p, mod || Math.round);
			this._overwriteProps.push(p);
		};




/***/ }),

/***/ "./node_modules/gsap/TimelineLite.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/TimelineLite.js ***!
  \*******************************************/
/*! exports provided: TimelineLite, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return TimelineLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineLite; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var TimelineLite = function(vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].call(this, vars);
				var self = this,
					v = self.vars,
					val, p;
				self._labels = {};
				self.autoRemoveChildren = !!v.autoRemoveChildren;
				self.smoothChildTiming = !!v.smoothChildTiming;
				self._sortChildren = true;
				self._onUpdate = v.onUpdate;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = self._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					self.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.00000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i], targets) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_defaultImmediateRender = function(tl, toVars, fromVars, defaultFalse) { //default to immediateRender:true unless otherwise set in toVars, fromVars or if defaultFalse is passed in as true
				var ir = "immediateRender";
				if (!(ir in toVars)) {
					toVars[ir] = !((fromVars && fromVars[ir] === false) || defaultFalse);
				}
				return toVars;
			},
			//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
			_distribute = function(v) {
				if (typeof(v) === "function") {
					return v;
				}
				var vars = (typeof(v) === "object") ? v : {each:v}, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
					ease = vars.ease,
					from = vars.from || 0,
					base = vars.base || 0,
					cache = {},
					isFromKeyword = isNaN(from),
					axis = vars.axis,
					ratio = {center:0.5, end:1}[from] || 0;
				return function(i, target, a) {
					var l = (a || vars).length,
						distances = cache[l],
						originX, originY, x, y, d, j, max, min, wrap;
					if (!distances) {
						wrap = (vars.grid === "auto") ? 0 : (vars.grid || [Infinity])[0];
						if (!wrap) {
							max = -Infinity;
							while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) { }
							wrap--;
						}
						distances = cache[l] = [];
						originX = isFromKeyword ? (Math.min(wrap, l) * ratio) - 0.5 : from % wrap;
						originY = isFromKeyword ? l * ratio / wrap - 0.5 : (from / wrap) | 0;
						max = 0;
						min = Infinity;
						for (j = 0; j < l; j++) {
							x = (j % wrap) - originX;
							y = originY - ((j / wrap) | 0);
							distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
							if (d > max) {
								max = d;
							}
							if (d < min) {
								min = d;
							}
						}
						distances.max = max - min;
						distances.min = min;
						distances.v = l = vars.amount || (vars.each * (wrap > l ? l - 1 : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap)) || 0;
						distances.b = (l < 0) ? base - l : base;
					}
					l = (distances[i] - distances.min) / distances.max;
					return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
				};
			},
			p = TimelineLite.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]();

		TimelineLite.version = "2.1.3";
		TimelineLite.distribute = _distribute;
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]).from(target, duration, _defaultImmediateRender(this, vars)), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			toVars = _defaultImmediateRender(this, toVars, fromVars);
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				staggerFunc = _distribute(vars.stagger || stagger),
				startAt = vars.startAt,
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //if the targets object is a selector, translate it into an array.
				targets = _slice(targets);
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (startAt) {
					copy.startAt = _copy(startAt);
					if (startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				tl.to(targets[i], duration, copy, staggerFunc(i, targets[i], targets));
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, _defaultImmediateRender(this, vars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			return this.staggerTo(targets, duration, _defaultImmediateRender(this, toVars, fromVars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			return this.add( new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"](target, 0, _defaultImmediateRender(this, vars, null, true)), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				hasNegativeStart, time,	tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"] && tween.target === tween.vars.onComplete)) {
					time = tween._startTime - tween._delay;
					if (time < 0) {
						hasNegativeStart = 1;
					}
					tl.add(tween, time);
				}
				tween = next;
			}
			root.add(tl, 0);
			if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
				tl.totalDuration();
			}
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var self = this,
				curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = self._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"])) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						self.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return self._uncache(true);
				} else if (typeof(value) === "string") {
					return self.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype.add.call(self, value, position);

			if (value._time || (!value._duration && value._initted)) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
				curTime = (self.rawTime() - value._startTime) * value._timeScale;
				if (!value._duration || Math.abs(Math.max(0, Math.min(value.totalDuration(), curTime))) - value._totalTime > 0.00001) {
					value.render(curTime, false, false);
				}
			}

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (self._gc || self._time === self._duration) if (!self._paused) if (self._duration < self.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = self;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return self;
		};

		p.remove = function(value) {
			if (value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > this.duration()) {
				this._time = this._duration;
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var clippedDuration, i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
			} else if (timeOrLabel == null) {
				timeOrLabel = clippedDuration;
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var self = this,
				prevTime = self._time,
				totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
				prevStart = self._startTime,
				prevTimeScale = self._timeScale,
				prevPaused = self._paused,
				tween, isComplete, next, callback, internalForce, pauseTween, curTime, pauseTime;
			if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += self._time - prevTime;
			}
			if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
				if (time > prevTime) {
					tween = self._first;
					while (tween && tween._startTime <= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
							pauseTween = tween;
						}
						tween = tween._next;
					}
				} else {
					tween = self._last;
					while (tween && tween._startTime >= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
							pauseTween = tween;
						}
						tween = tween._prev;
					}
				}
				if (pauseTween) {
					self._time = self._totalTime = time = pauseTween._startTime;
					pauseTime = self._startTime + (self._reversed ? self._duration - time : time) / self._timeScale;
				}
			}
			if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
				self._totalTime = self._time = totalDur;
				if (!self._reversed) if (!self._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || self._rawPrevTime < 0 || self._rawPrevTime === _tinyNum) if (self._rawPrevTime !== time && self._first) {
						internalForce = true;
						if (self._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
				self._totalTime = self._time = 0;
				if (time > -_tinyNum) {
					time = 0;
				}
				if (prevTime !== 0 || (self._duration === 0 && self._rawPrevTime !== _tinyNum && (self._rawPrevTime > 0 || (time < 0 && self._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = self._reversed;
				}
				if (time < 0) {
					self._active = false;
					if (self._timeline.autoRemoveChildren && self._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (self._rawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					self._rawPrevTime = time;
				} else {
					self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = self._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!self._initted) {
						internalForce = true;
					}
				}

			} else {
				self._totalTime = self._time = self._rawPrevTime = time;
			}
			if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!self._initted) {
				self._initted = true;
			}

			if (!self._active) if (!self._paused && self._time !== prevTime && time > 0) {
				self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (self.vars.onStart) if (self._time !== 0 || !self._duration) if (!suppressEvents) {
				self._callback("onStart");
			}

			curTime = self._time;
			if (curTime >= prevTime) {
				tween = self._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							self.pause();
							self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = self._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > self._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							self.pause();
							self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (self._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				self._callback("onUpdate");
			}

			if (callback) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (self._timeline.autoRemoveChildren) {
						self._enabled(false, false);
					}
					self._active = false;
				}
				if (!suppressEvents && self.vars[callback]) {
					self._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						self = this,
						tween = self._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && self._sortChildren && !tween._paused && !self._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							self._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
							self.add(tween, tween._startTime - tween._delay);
							self._calculatingDuration = 0;
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (self._timeline.smoothChildTiming) {
								self._startTime += tween._startTime / self._timeScale;
								self._time -= tween._startTime;
								self._totalTime -= tween._startTime;
								self._rawPrevTime -= tween._startTime;
							}
							self.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					self._duration = self._totalDuration = max;
					self._dirty = false;
				}
				return this._totalDuration;
			}
			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
		};

		p.paused = function(value) {
			if (value === false && this._paused) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first;
				while (tween) {
					if (tween._startTime === this._time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline);
		};

		p.rawTime = function(wrapRepeats) {
			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);

var TimelineLite = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TimelineLite;



/***/ }),

/***/ "./node_modules/gsap/TimelineMax.js":
/*!******************************************!*\
  !*** ./node_modules/gsap/TimelineMax.js ***!
  \******************************************/
/*! exports provided: TimelineMax, TimelineLite, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return TimelineMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineLite.js */ "./node_modules/gsap/TimelineLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function() {
		
		var TimelineMax = function(vars) {
				_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = !!this.vars.yoyo;
				this._dirty = true;
			},
			_tinyNum = 0.00000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_easeNone = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](null, null, 1, 0),
			p = TimelineMax.prototype = new _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

		p.constructor = TimelineMax;
		p.kill()._gc = false;
		TimelineMax.version = "2.1.3";

		p.invalidate = function() {
			this._yoyo = !!this.vars.yoyo;
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};

		p.addCallback = function(callback, position, params, scope) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};

		p.removeCallback = function(callback, position) {
			if (callback) {
				if (position == null) {
					this._kill(null, callback);
				} else {
					var a = this.getTweensOf(callback, false),
						i = a.length,
						time = this._parseTimeOrLabel(position);
					while (--i > -1) {
						if (a[i]._startTime === time) {
							a[i]._enabled(false, false);
						}
					}
				}
			}
			return this;
		};

		p.removePause = function(position) {
			return this.removeCallback(_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.pauseCallback, position);
		};

		p.tweenTo = function(position, vars) {
			vars = vars || {};
			var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false, lazy:false},
				Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				duration, p, t;
			for (p in vars) {
				copy[p] = vars[p];
			}
			copy.time = this._parseTimeOrLabel(position);
			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
			t = new Engine(this, duration, copy);
			copy.onStart = function() {
				t.target.paused(true);
				if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale ).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
				}
				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
					vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
				}
			};
			return t;
		};

		p.tweenFromTo = function(fromPosition, toPosition, vars) {
			vars = vars || {};
			fromPosition = this._parseTimeOrLabel(fromPosition);
			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
			vars.immediateRender = (vars.immediateRender !== false);
			var t = this.tweenTo(toPosition, vars);
			t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var self = this,
				prevTime = self._time,
				totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
				dur = self._duration,
				prevTotalTime = self._totalTime,
				prevStart = self._startTime,
				prevTimeScale = self._timeScale,
				prevRawPrevTime = self._rawPrevTime,
				prevPaused = self._paused,
				prevCycle = self._cycle,
				tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime, pauseTime;
			if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += self._time - prevTime;
			}
			if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
				if (!self._locked) {
					self._totalTime = totalDur;
					self._cycle = self._repeat;
				}
				if (!self._reversed) if (!self._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && self._first) {
						internalForce = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (self._yoyo && (self._cycle & 1)) {
					self._time = time = 0;
				} else {
					self._time = dur;
					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
				}

			} else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
				if (!self._locked) {
					self._totalTime = self._cycle = 0;
				}
				self._time = 0;
				if (time > -_tinyNum) {
					time = 0;
				}
				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !self._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
					callback = "onReverseComplete";
					isComplete = self._reversed;
				}
				if (time < 0) {
					self._active = false;
					if (self._timeline.autoRemoveChildren && self._reversed) {
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (prevRawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					self._rawPrevTime = time;
				} else {
					self._rawPrevTime = (dur || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = self._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!self._initted) {
						internalForce = true;
					}
				}

			} else {
				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
					internalForce = true;
				}
				self._time = self._rawPrevTime = time;
				if (!self._locked) {
					self._totalTime = time;
					if (self._repeat !== 0) {
						cycleDuration = dur + self._repeatDelay;
						self._cycle = (self._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
						if (self._cycle) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
							self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						self._time = self._totalTime - (self._cycle * cycleDuration);
						if (self._yoyo) if (self._cycle & 1) {
							self._time = dur - self._time;
						}
						if (self._time > dur) {
							self._time = dur;
							time = dur + 0.0001; //to avoid occasional floating point rounding error
						} else if (self._time < 0) {
							self._time = time = 0;
						} else {
							time = self._time;
						}
					}
				}
			}

			if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
				time = self._time;
				if (time > prevTime || (self._repeat && prevCycle !== self._cycle)) {
					tween = self._first;
					while (tween && tween._startTime <= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
							pauseTween = tween;
						}
						tween = tween._next;
					}
				} else {
					tween = self._last;
					while (tween && tween._startTime >= time && !pauseTween) {
						if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
							pauseTween = tween;
						}
						tween = tween._prev;
					}
				}
				if (pauseTween) {
					pauseTime = self._startTime + (self._reversed ? self._duration - pauseTween._startTime : pauseTween._startTime) / self._timeScale;
					if (pauseTween._startTime < dur) {
						self._time = self._rawPrevTime = time = pauseTween._startTime;
						self._totalTime = time + (self._cycle * (self._totalDuration + self._repeatDelay));
					}
				}
			}

			if (self._cycle !== prevCycle) if (!self._locked) {
				/*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example,
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
				*/
				var backwards = (self._yoyo && (prevCycle & 1) !== 0),
					wrap = (backwards === (self._yoyo && (self._cycle & 1) !== 0)),
					recTotalTime = self._totalTime,
					recCycle = self._cycle,
					recRawPrevTime = self._rawPrevTime,
					recTime = self._time;

				self._totalTime = prevCycle * dur;
				if (self._cycle < prevCycle) {
					backwards = !backwards;
				} else {
					self._totalTime += dur;
				}
				self._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

				self._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
				self._cycle = prevCycle;
				self._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
				prevTime = (backwards) ? 0 : dur;
				self.render(prevTime, suppressEvents, (dur === 0));
				if (!suppressEvents) if (!self._gc) {
					if (self.vars.onRepeat) {
						self._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
						self._locked = false;
						self._callback("onRepeat");
					}
				}
				if (prevTime !== self._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
					return;
				}
				if (wrap) {
					self._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
					self._locked = true;
					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
					self.render(prevTime, true, false);
				}
				self._locked = false;
				if (self._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
					return;
				}
				self._time = recTime;
				self._totalTime = recTotalTime;
				self._cycle = recCycle;
				self._rawPrevTime = recRawPrevTime;
			}

			if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
				if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					self._callback("onUpdate");
				}
				return;
			} else if (!self._initted) {
				self._initted = true;
			}

			if (!self._active) if (!self._paused && self._totalTime !== prevTotalTime && time > 0) {
				self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTotalTime === 0) if (self.vars.onStart) if (self._totalTime !== 0 || !self._totalDuration) if (!suppressEvents) {
				self._callback("onStart");
			}

			curTime = self._time;
			if (curTime >= prevTime) {
				tween = self._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= self._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							self.pause();
							self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = self._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > self._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							self.pause();
							self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (self._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				self._callback("onUpdate");
			}
			if (callback) if (!self._locked) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (self._timeline.autoRemoveChildren) {
						self._enabled(false, false);
					}
					self._active = false;
				}
				if (!suppressEvents && self.vars[callback]) {
					self._callback(callback);
				}
			}
		};

		p.getActive = function(nested, tweens, timelines) {
			var a = [],
				all = this.getChildren(nested || (nested == null), tweens || (nested == null), !!timelines),
				cnt = 0,
				l = all.length,
				i, tween;
			for (i = 0; i < l; i++) {
				tween = all[i];
				if (tween.isActive()) {
					a[cnt++] = tween;
				}
			}
			return a;
		};


		p.getLabelAfter = function(time) {
			if (!time) if (time !== 0) { //faster than isNan()
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				l = labels.length,
				i;
			for (i = 0; i < l; i++) {
				if (labels[i].time > time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelBefore = function(time) {
			if (time == null) {
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				i = labels.length;
			while (--i > -1) {
				if (labels[i].time < time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelsArray = function() {
			var a = [],
				cnt = 0,
				p;
			for (p in this._labels) {
				a[cnt++] = {time:this._labels[p], name:p};
			}
			a.sort(function(a,b) {
				return a.time - b.time;
			});
			return a;
		};

		p.invalidate = function() {
			this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};


//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};

		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.totalDuration.call(this); //just forces refresh
					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
				}
				return this._totalDuration;
			}
			return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			var duration = this._duration,
				cycle = this._cycle,
				cycleDur = cycle * (duration + this._repeatDelay);
			if (value > duration) {
				value = duration;
			}
			return this.totalTime((this._yoyo && (cycle & 1)) ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};

		p.currentLabel = function(value) {
			if (!arguments.length) {
				return this.getLabelBefore(this._time + _tinyNum);
			}
			return this.seek(value, true);
		};
		
		return TimelineMax;
		
	}, true);

var TimelineMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TimelineMax;


/***/ }),

/***/ "./node_modules/gsap/TweenLite.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/TweenLite.js ***!
  \****************************************/
/*! exports provided: _gsScope, TweenLite, globals, default, SimpleTimeline, Animation, Ease, Linear, Power0, Power1, Power2, Power3, Power4, TweenPlugin, EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/* eslint-disable */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set var TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
var _gsScope = (typeof(window) !== "undefined") ? window : ( true && module.exports && typeof(global) !== "undefined") ? global : undefined || {};

var TweenLite = (function(window) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.00000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							/*
							if (typeof(module) !== "undefined" && module.exports) { //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							} else if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							}
							*/
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) {
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
					return (_lagThreshold < 1 / _tinyNum);
				}
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = !!vars.immediateRender;
				this.data = vars.data;
				this._reversed = !!vars.reversed;

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
					_ticker.wake();
				}
				var t = setTimeout(_checkTimeout, 2000);
				if (t.unref) {
					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
					t.unref();
				}
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			var pauseTime, t;
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				pauseTime = this._pauseTime;
				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			t = this.timeline;
			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
				t._dirty = true;
				t.totalDuration();
				t = t.timeline;
			}
			return this;
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "2.1.3";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
				_doc = window.document;
			}
			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_relExp = /[\+-]=-?[\.\d]/,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			_blobRound = function(v) {
				return (((v * 1000) | 0) / 1000) + "";
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : _blobRound}; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
					a.end = null;
				}
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1, stagger:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var l = _lazyTweens.length,
					i, tween;
				_lazyLookup = {};
				for (i = 0; i < l; i++) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				startAt = this._startAt,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (startAt) {
					startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.data = "isStart";
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				startVars.onUpdate = v.onUpdate;
				startVars.onUpdateParams = v.onUpdateParams;
				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (startAt) {
					startAt.render(-1, true);
					startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}
			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var self = this,
				prevTime = self._time,
				duration = self._duration,
				prevRawPrevTime = self._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
				self._totalTime = self._time = duration;
				self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
				if (!self._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
				self._totalTime = self._time = 0;
				self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = self._reversed;
				}
				if (time > -_tinyNum) {
					time = 0;
				} else if (time < 0) {
					self._active = false;
					if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
							force = true;
						}
						self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!self._initted || (self._startAt && self._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
					force = true;
				}
			} else {
				self._totalTime = self._time = time;

				if (self._easeType) {
					var r = time / duration, type = self._easeType, pow = self._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}
					self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (time / duration < 0.5) ? r / 2 : 1 - (r / 2);
				} else {
					self.ratio = self._ease.getRatio(time / duration);
				}
			}

			if (self._time === prevTime && !force) {
				return;
			} else if (!self._initted) {
				self._init();
				if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) {
					self._time = self._totalTime = prevTime;
					self._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(self);
					self._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (self._time && !isComplete) {
					self.ratio = self._ease.getRatio(self._time / duration);
				} else if (isComplete && self._ease._calcEnd) {
					self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
				}
			}
			if (self._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				self._lazy = false;
			}
			if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
				self._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (self._startAt) {
					if (time >= 0) {
						self._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
					self._callback("onStart");
				}
			}
			pt = self._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * self.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * self.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (self._onUpdate) {
				if (time < 0) if (self._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
					self._callback("onUpdate");
				}
			}
			if (callback) if (!self._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					self._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (self._timeline.autoRemoveChildren) {
						self._enabled(false, false);
					}
					self._active = false;
				}
				if (!suppressEvents && self.vars[callback]) {
					self._callback(callback);
				}
				if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					self._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				firstPT = this._firstPT,
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted && firstPT) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			var t = this._time;
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(t, false, this.vars.lazy !== false);
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else if (target._gsTweenID) {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a || [];
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

		return TweenLite;

})(_gsScope, "TweenLite");

var globals = _gsScope.GreenSockGlobals;
var nonGlobals = globals.com.greensock;

var SimpleTimeline = nonGlobals.core.SimpleTimeline;
var Animation = nonGlobals.core.Animation;
var Ease = globals.Ease;
var Linear = globals.Linear;
var Power0 = Linear;
var Power1 = globals.Power1;
var Power2 = globals.Power2;
var Power3 = globals.Power3;
var Power4 = globals.Power4;
var TweenPlugin = globals.TweenPlugin;
var EventDispatcher = nonGlobals.events.EventDispatcher;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/gsap/TweenMax.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/TweenMax.js ***!
  \***************************************/
/*! exports provided: TweenMax, default, TweenLite, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, DirectionalRotationPlugin, RoundPropsPlugin, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony import */ var _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TweenMaxBase.js */ "./node_modules/gsap/TweenMaxBase.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttrPlugin.js */ "./node_modules/gsap/AttrPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoundPropsPlugin.js */ "./node_modules/gsap/RoundPropsPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DirectionalRotationPlugin.js */ "./node_modules/gsap/DirectionalRotationPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimelineLite.js */ "./node_modules/gsap/TimelineLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimelineMax.js */ "./node_modules/gsap/TimelineMax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BezierPlugin.js */ "./node_modules/gsap/BezierPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EasePack.js */ "./node_modules/gsap/EasePack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */












//the following two lines are designed to prevent tree shaking of the classes that were historically included with TweenMax (otherwise, folks would have to reference CSSPlugin, for example, to ensure their CSS-related animations worked)
var TweenMax = _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__["default"];
TweenMax._autoActivated = [_TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"], _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"], _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"], _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"], _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"], _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]];





/***/ }),

/***/ "./node_modules/gsap/TweenMaxBase.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/TweenMaxBase.js ***!
  \*******************************************/
/*! exports provided: TweenMax, TweenMaxBase, default, TweenLite, Ease, Power0, Power1, Power2, Power3, Power4, Linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMaxBase", function() { return TweenMaxBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i], targets) : val[i % val.length];
				}
				delete vars.cycle;
			},
			//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
			_distribute = function(v) {
				if (typeof(v) === "function") {
					return v;
				}
				var vars = (typeof(v) === "object") ? v : {each:v}, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
					ease = vars.ease,
					from = vars.from || 0,
					base = vars.base || 0,
					cache = {},
					isFromKeyword = isNaN(from),
					axis = vars.axis,
					ratio = {center:0.5, end:1}[from] || 0;
				return function(i, target, a) {
					var l = (a || vars).length,
						distances = cache[l],
						originX, originY, x, y, d, j, max, min, wrap;
					if (!distances) {
						wrap = (vars.grid === "auto") ? 0 : (vars.grid || [Infinity])[0];
						if (!wrap) {
							max = -Infinity;
							while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) { }
							wrap--;
						}
						distances = cache[l] = [];
						originX = isFromKeyword ? (Math.min(wrap, l) * ratio) - 0.5 : from % wrap;
						originY = isFromKeyword ? l * ratio / wrap - 0.5 : (from / wrap) | 0;
						max = 0;
						min = Infinity;
						for (j = 0; j < l; j++) {
							x = (j % wrap) - originX;
							y = originY - ((j / wrap) | 0);
							distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
							if (d > max) {
								max = d;
							}
							if (d < min) {
								min = d;
							}
						}
						distances.max = max - min;
						distances.min = min;
						distances.v = l = vars.amount || (vars.each * (wrap > l ? l - 1 : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap)) || 0;
						distances.b = (l < 0) ? base - l : base;
					}
					l = (distances[i] - distances.min) / distances.max;
					return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
				};
			},
			TweenMax = function(target, duration, vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				if (this._repeat) {
					this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				}
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_tinyNum = 0.00000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			p = TweenMax.prototype = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to({}, 0.1, {}),
			_blankArray = [];

		TweenMax.version = "2.1.3";
		p.constructor = TweenMax;
		p.kill()._gc = false;
		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf;
		TweenMax.getTweensOf = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf;
		TweenMax.lagSmoothing = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].lagSmoothing;
		TweenMax.ticker = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker;
		TweenMax.render = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].render;
		TweenMax.distribute = _distribute;

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._yoyoEase = null;
			this._uncache(true);
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.invalidate.call(this);
		};

		p.updateTo = function(vars, resetDuration) {
			var self = this,
				curRatio = self.ratio,
				immediate = self.vars.immediateRender || vars.immediateRender,
				p;
			if (resetDuration && self._startTime < self._timeline._time) {
				self._startTime = self._timeline._time;
				self._uncache(false);
				if (self._gc) {
					self._enabled(true, false);
				} else {
					self._timeline.insert(self, self._startTime - self._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			for (p in vars) {
				self.vars[p] = vars[p];
			}
			if (self._initted || immediate) {
				if (resetDuration) {
					self._initted = false;
					if (immediate) {
						self.render(0, true, true);
					}
				} else {
					if (self._gc) {
						self._enabled(true, false);
					}
					if (self._notifyPluginsOfEnabled && self._firstPT) {
						_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._onPluginEvent("_onDisable", self); //in case a plugin like MotionBlur must perform some cleanup tasks
					}
					if (self._time / self._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
						var prevTime = self._totalTime;
						self.render(0, true, false);
						self._initted = false;
						self.render(prevTime, true, false);
					} else {
						self._initted = false;
						self._init();
						if (self._time > 0 || immediate) {
							var inv = 1 / (1 - curRatio),
								pt = self._firstPT, endValue;
							while (pt) {
								endValue = pt.s + pt.c;
								pt.c *= inv;
								pt.s = endValue - pt.c;
								pt = pt._next;
							}
						}
					}
				}
			}
			return self;
		};

		p.render = function(time, suppressEvents, force) {
			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
				this.invalidate();
			}
			var self = this,
				totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
				prevTime = self._time,
				prevTotalTime = self._totalTime,
				prevCycle = self._cycle,
				duration = self._duration,
				prevRawPrevTime = self._rawPrevTime,
				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase;
			if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
				self._totalTime = totalDur;
				self._cycle = self._repeat;
				if (self._yoyo && (self._cycle & 1) !== 0) {
					self._time = 0;
					self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
				} else {
					self._time = duration;
					self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
				}
				if (!self._reversed) {
					isComplete = true;
					callback = "onComplete";
					force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
				self._totalTime = self._time = self._cycle = 0;
				self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
				if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = self._reversed;
				}
				if (time > -_tinyNum) {
					time = 0;
				} else if (time < 0) {
					self._active = false;
					if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0) {
							force = true;
						}
						self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!self._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				self._totalTime = self._time = time;
				if (self._repeat !== 0) {
					cycleDuration = duration + self._repeatDelay;
					self._cycle = (self._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
					if (self._cycle !== 0) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
						self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					self._time = self._totalTime - (self._cycle * cycleDuration);
					if (self._yoyo) if ((self._cycle & 1) !== 0) {
						self._time = duration - self._time;
						yoyoEase = self._yoyoEase || self.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
						if (yoyoEase) {
							if (!self._yoyoEase) {
								if (yoyoEase === true && !self._initted) { //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
									yoyoEase = self.vars.ease;
									self._yoyoEase = yoyoEase = !yoyoEase ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : (typeof(yoyoEase) === "function") ? new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](yoyoEase, self.vars.easeParams) : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase] || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase;
								} else {
									self._yoyoEase = yoyoEase = (yoyoEase === true) ? self._ease : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase];
								}
							}
							self.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - self._time) / duration) : 0;
						}
					}
					if (self._time > duration) {
						self._time = duration;
					} else if (self._time < 0) {
						self._time = 0;
					}
				}
				if (self._easeType && !yoyoEase) {
					r = self._time / duration;
					type = self._easeType;
					pow = self._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}
					self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (self._time / duration < 0.5) ? r / 2 : 1 - (r / 2);

				} else if (!yoyoEase) {
					self.ratio = self._ease.getRatio(self._time / duration);
				}

			}

			if (prevTime === self._time && !force && prevCycle === self._cycle) {
				if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					self._callback("onUpdate");
				}
				return;
			} else if (!self._initted) {
				self._init();
				if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
					self._time = prevTime;
					self._totalTime = prevTotalTime;
					self._rawPrevTime = prevRawPrevTime;
					self._cycle = prevCycle;
					TweenLiteInternals.lazyTweens.push(self);
					self._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (self._time && !isComplete && !yoyoEase) {
					self.ratio = self._ease.getRatio(self._time / duration);
				} else if (isComplete && this._ease._calcEnd && !yoyoEase) {
					self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
				}
			}
			if (self._lazy !== false) {
				self._lazy = false;
			}

			if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
				self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTotalTime === 0) {
				if (self._initted === 2 && time > 0) {
					self._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
				}
				if (self._startAt) {
					if (time >= 0) {
						self._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (self.vars.onStart) if (self._totalTime !== 0 || duration === 0) if (!suppressEvents) {
					self._callback("onStart");
				}
			}

			pt = self._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * self.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * self.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (self._onUpdate) {
				if (time < 0) if (self._startAt && self._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (self._totalTime !== prevTotalTime || callback) {
					self._callback("onUpdate");
				}
			}
			if (self._cycle !== prevCycle) if (!suppressEvents) if (!self._gc) if (self.vars.onRepeat) {
				self._callback("onRepeat");
			}
			if (callback) if (!self._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && self._startAt && !self._onUpdate && self._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					self._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (self._timeline.autoRemoveChildren) {
						self._enabled(false, false);
					}
					self._active = false;
				}
				if (!suppressEvents && self.vars[callback]) {
					self._callback(callback);
				}
				if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					self._rawPrevTime = 0;
				}
			}
		};

//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

		TweenMax.to = function(target, duration, vars) {
			return new TweenMax(target, duration, vars);
		};

		TweenMax.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenMax(target, duration, vars);
		};

		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenMax(target, duration, toVars);
		};

		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var a = [],
				staggerFunc = _distribute(vars.stagger || stagger),
				cycle = vars.cycle,
				fromCycle = (vars.startAt || _blankArray).cycle,
				l, copy, i, p;
			if (!_isArray(targets)) {
				if (typeof(targets) === "string") {
					targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
				}
				if (_isSelector(targets)) {
					targets = _slice(targets);
				}
			}
			targets = targets || [];
			l = targets.length - 1;
			for (i = 0; i <= l; i++) {
				copy = {};
				for (p in vars) {
					copy[p] = vars[p];
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				if (fromCycle) {
					fromCycle = copy.startAt = {};
					for (p in vars.startAt) {
						fromCycle[p] = vars.startAt[p];
					}
					_applyCycle(copy.startAt, targets, i);
				}
				copy.delay = staggerFunc(i, targets[i], targets) + (copy.delay || 0);
				if (i === l && onCompleteAll) {
					copy.onComplete = function() {
						if (vars.onComplete) {
							vars.onComplete.apply(vars.onCompleteScope || this, arguments);
						}
						onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
					};
				}
				a[i] = new TweenMax(targets[i], duration, copy);
			}
			return a;
		};

		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, useFrames:useFrames, overwrite:0});
		};

		TweenMax.set = function(target, vars) {
			return new TweenMax(target, 0, vars);
		};

		TweenMax.isTweening = function(target) {
			return (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target, true).length > 0);
		};

		var _getChildrenOf = function(timeline, includeTimelines) {
				var a = [],
					cnt = 0,
					tween = timeline._first;
				while (tween) {
					if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			},
			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
				return _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline, includeTimelines).concat( _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline, includeTimelines) );
			};

		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
			if (tweens == null) {
				tweens = true;
			}
			if (delayedCalls == null) {
				delayedCalls = true;
			}
			var a = getAllTweens((timelines != false)),
				l = a.length,
				allTrue = (tweens && delayedCalls && timelines),
				isDC, tween, i;
			for (i = 0; i < l; i++) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					if (complete) {
						tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
					} else {
						tween._enabled(false, false);
					}
				}
			}
		};

		TweenMax.killChildTweensOf = function(parent, complete) {
			if (parent == null) {
				return;
			}
			var tl = TweenLiteInternals.tweenLookup,
				a, curParent, p, i, l;
			if (typeof(parent) === "string") {
				parent = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(parent) || parent;
			}
			if (_isSelector(parent)) {
				parent = _slice(parent);
			}
			if (_isArray(parent)) {
				i = parent.length;
				while (--i > -1) {
					TweenMax.killChildTweensOf(parent[i], complete);
				}
				return;
			}
			a = [];
			for (p in tl) {
				curParent = tl[p].target.parentNode;
				while (curParent) {
					if (curParent === parent) {
						a = a.concat(tl[p].tweens);
					}
					curParent = curParent.parentNode;
				}
			}
			l = a.length;
			for (i = 0; i < l; i++) {
				if (complete) {
					a[i].totalTime(a[i].totalDuration());
				}
				a[i]._enabled(false, false);
			}
		};

		var _changePause = function(pause, tweens, delayedCalls, timelines) {
			tweens = (tweens !== false);
			delayedCalls = (delayedCalls !== false);
			timelines = (timelines !== false);
			var a = getAllTweens(timelines),
				allTrue = (tweens && delayedCalls && timelines),
				i = a.length,
				isDC, tween;
			while (--i > -1) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					tween.paused(pause);
				}
			}
		};

		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
			_changePause(true, tweens, delayedCalls, timelines);
		};

		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
			_changePause(false, tweens, delayedCalls, timelines);
		};

		TweenMax.globalTimeScale = function(value) {
			var tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline,
				t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.time;
			if (!arguments.length) {
				return tl._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline;
			t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl._timeScale = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline._timeScale = value;
			return value;
		};


//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? (this.duration() ? this._time / this._duration : this.ratio) : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};

		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			var duration = this._duration,
				cycle = this._cycle,
				cycleDur = cycle * (duration + this._repeatDelay);
			if (value > duration) {
				value = duration;
			}
			return this.totalTime((this._yoyo && (cycle & 1)) ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.duration.call(this, value);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};


		return TweenMax;

	}, true);

var TweenMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["globals"].TweenMax;
var TweenMaxBase = TweenMax;




/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/*! exports provided: default, TweenLite, TweenMax, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, RoundPropsPlugin, DirectionalRotationPlugin, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase, _gsScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TweenLite.js */ "./node_modules/gsap/TweenLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineLite.js */ "./node_modules/gsap/TimelineLite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineMax.js */ "./node_modules/gsap/TimelineMax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TweenMax.js */ "./node_modules/gsap/TweenMax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AttrPlugin.js */ "./node_modules/gsap/AttrPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundPropsPlugin.js */ "./node_modules/gsap/RoundPropsPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DirectionalRotationPlugin.js */ "./node_modules/gsap/DirectionalRotationPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BezierPlugin.js */ "./node_modules/gsap/BezierPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EasePack.js */ "./node_modules/gsap/EasePack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
















/***/ }),

/***/ "./node_modules/signals/dist/signals.js":
/*!**********************************************!*\
  !*** ./node_modules/signals/dist/signals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal : function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function(){
            Signal.prototype.dispatch.apply(self, arguments);
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                n = this._bindings.length,
                bindings;

            if (this.memorize) {
                this._prevParams = paramsArr;
            }

            if (! n) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(true){ //AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return signals; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/experiment/base.js":
/*!********************************!*\
  !*** ./src/experiment/base.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signal_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signal/signals */ "./src/signal/signals.js");
/**
 * Base module to extend experiments from
 * @module experiment/base
 */

const extend = Object.assign,
      basePrototype = {
  init,
  exit,
  pause,
  handleResize,
  handleAnimate,
  handleDragStart,
  handleDrag,
  handleDragEnd,
  handleClick
},
      baseProperties = {};
/**
 * Initialise and append the canvas element, add event listeners
 * @param {HTMLElement} target
 * @returns {HTMLCanvasElement}
 */

function init(target) {
  let canvas = document.createElement('canvas'),
      context = canvas.getContext(this.contextType, {
    preserveDrawingBuffer: true
  }); // preserveDrawingBuffer is for webgl to save images, but slower than the default false (=swapping instead of copying)

  extend(this, {
    target,
    canvas,
    context,
    paused: false,
    w: 1 // todo: make into getter/setter
    ,
    h: 1,
    isMouseDown: false,
    lastX: null,
    lastY: null,
    offsetX: null
  });
  target.appendChild(canvas); //

  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["resize"].add(this.handleResize);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["animate"].add(this.handleAnimate);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["dragstart"].add(this.handleDragStart);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["drag"].add(this.handleDrag);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["dragend"].add(this.handleDragEnd);
  this.canvas.addEventListener('click', this.handleClick); //

  return this.canvas;
}
/**
 * Remove the canvas element, remove event listeners
 */


function exit() {
  this.canvas.parentNode && this.target.removeChild(this.canvas);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["resize"].remove(this.handleResize);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["animate"].remove(this.handleAnimate);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["dragstart"].remove(this.handleDragStart);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["drag"].remove(this.handleDrag);
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["dragend"].remove(this.handleDragEnd);
  this.canvas.removeEventListener('click', this.handleClick);
}
/**
 * Pause experiment by removing the animation signal
 */


function pause(_pause) {
  if (this.canvas.parentNode && (_pause === undefined || _pause !== this.paused)) {
    this.paused && _signal_signals__WEBPACK_IMPORTED_MODULE_0__["animate"].add(this.handleAnimate) || _signal_signals__WEBPACK_IMPORTED_MODULE_0__["animate"].remove(this.handleAnimate);
    this.paused = !this.paused;
  }
}
/**
 * Default resize signal handler
 */


function handleResize() {
  let clientWidth = Math.max(2, this.target.clientWidth),
      clientHeight = Math.max(2, this.target.clientHeight);

  if (this.w !== clientWidth) {
    this.w = clientWidth;
    this.canvas.width = clientWidth;
  }

  if (this.h !== clientHeight) {
    this.h = clientHeight;
    this.canvas.height = clientHeight;
  }
}
/**
 * Base animation signal handler
 * @param {number} deltaT
 * @param {number} millis
 */


function handleAnimate(deltaT, millis) {
  _signal_signals__WEBPACK_IMPORTED_MODULE_0__["experimentFrame"].dispatch(this.canvas); // console.warn('overwrite experimentInstance.handleAnimate',deltaT,millis)
}
/**
 * Base dragstart signal handler
 */


function handleDragStart() {
  this.isMouseDown = true;
}
/**
 * Base drag signal handler
 * @param {object[]} touchList
 */


function handleDrag(touchList) {
  let touch;
  touchList.forEach((id, tch) => tch.pos && (touch = tch));

  if (touch) {
    let x = touch.pos.getX(),
        y = touch.pos.getY();

    if (this.lastX !== null) {
      this.offsetX += x - this.lastX;
    }

    this.lastX = x;
    this.lastY = y;
  }
}
/**
 * Base dragend signal handler
 */


function handleDragEnd() {
  this.isMouseDown = false;
  this.lastX = null;
}
/**
 * Base click event handler
 */


function handleClick() {
  this.isMouseDown = false;
  this.lastX = null;
}
/**
 *
 * @param {string} name
 * @param {object} extension
 * @param {string} contextType
 * @returns {basePrototype}
 */


/* harmony default export */ __webpack_exports__["default"] = (function (name, extension, contextType) {
  let inst = Object.create(basePrototype, baseProperties);
  extend(inst, {
    name: name || 'noName',
    contextType: contextType || '2d' //
    ,
    expose: {} // The property the child object should return (type could be object, Array or function).
    ,
    zuper: {} // Alas, super is reserved

  }); //
  // create super

  for (let s in basePrototype) {
    if (basePrototype.hasOwnProperty(s)) {
      inst.zuper[s] = inst[s].bind(inst);
    } // bind private- unoverridden methods to inst


    if (extension && !extension.hasOwnProperty(s)) {
      // todo: exclude public
      inst[s] = basePrototype[s].bind(inst);
    }
  }

  Object.freeze(inst.zuper); // Because we can
  //
  // extend the instance

  if (extension) {
    for (let fncName in extension) {
      if (extension.hasOwnProperty(fncName)) {
        inst[fncName] = extension[fncName].bind(inst);
      }
    }
  } // extend expose property with public methods


  extend(inst.expose, {
    init: inst.init.bind(inst),
    exit: inst.exit.bind(inst),
    pause: inst.pause.bind(inst),
    toString: function () {
      return '[object ' + inst.name + ']';
    }
  }); //

  Object.defineProperty(inst.expose, 'contextType', {
    value: inst.contextType
  });
  Object.defineProperty(inst.expose, 'name', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: inst.name
  });
  return inst;
});

/***/ }),

/***/ "./src/experiment/blob.js":
/*!********************************!*\
  !*** ./src/experiment/blob.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Dripping noise blobs
 * @module experiment/blob
 * @see module:experiment/base
 */

let speedBase = 0.001,
    speed = speedBase //
,
    lookAtRadius = 2,
    lookAtRadians = {
  x: 0,
  y: -0.5 * Math.PI
},
    lookAtVec3 = [0, 0, 0],
    campPVec3 = [0.0, 0.0, 0.0] //
,
    inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('blob', '/static/glsl/blob.glsl', {
  cameraPosition: [0.0, -0.1, 0.0],
  init,
  handleDrag,
  handleKeyPress,
  handleKeyUp
}),
    addUniformChange = inst.addUniformChange;

function init() {
  let options = this.options;
  if (options.lookAtRadians) lookAtRadians = options.lookAtRadians;
  if (options.cameraPosition) campPVec3 = options.cameraPosition;
  addUniformChange('camP', campPVec3.slice(0));
  calcLookat();
}

function handleDrag(touchList, dragX, dragY, isFirst, isLast, deltaX, deltaY) {
  if (!isFirst && !isLast) {
    lookAtRadians.x += 0.005 * deltaX;
    lookAtRadians.y += 0.005 * deltaY;
    calcLookat();
  }
}

function handleKeyPress(key) {
  let keys = key,
      fw = keys[87] ? 1 : keys[83] ? -1 : 0,
      lr = keys[65] ? 1 : keys[68] ? -1 : 0;
  if (speed < 1) speed *= 1.15;

  if (fw !== 0) {
    campPVec3[0] += fw * speed * [0];
    campPVec3[1] += fw * speed * lookAtVec3[1];
    campPVec3[2] += fw * speed * lookAtVec3[2];
  }

  if (lr !== 0) {
    let up = [0, 1, 0],
        cr = crossProduct(campPVec3, up);
    campPVec3[0] += lr * speed * cr[0];
    campPVec3[1] += lr * speed * cr[1];
    campPVec3[2] += lr * speed * cr[2];
  }

  (fw !== 0 || lr !== 0) && addUniformChange('camP', campPVec3);
}

function handleKeyUp(key) {
  speed = speedBase;

  if (key === 67) {
    console.log('lookAtRadians', lookAtRadians, '\n\tcampPVec3', campPVec3); // log
  }
}
/**
 * Calculate the lookAt vector
 */


function calcLookat() {
  let radiansX = lookAtRadians.x,
      radiansY = lookAtRadians.y,
      sinY = Math.sin(radiansY);
  lookAtVec3[0] = lookAtRadius * Math.sin(radiansX) * sinY;
  lookAtVec3[2] = lookAtRadius * Math.cos(radiansX) * sinY;
  lookAtVec3[1] = lookAtRadius * Math.cos(radiansY);
  addUniformChange('lookAt', lookAtVec3);
}
/**
 * Calculate the crossproduct
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */


function crossProduct(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/boids.js":
/*!*********************************!*\
  !*** ./src/experiment/boids.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_lcg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/lcg */ "./src/math/lcg.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/vector */ "./src/math/vector.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/canvasrenderingcontext2d */ "./src/utils/canvasrenderingcontext2d.js");







let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('boids', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
,
    rnd = _math_lcg__WEBPACK_IMPORTED_MODULE_1__["default"].random,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_4__["default"].noise,
    random = function (f) {
  return (f || 1) * (Math.random() - 0.5);
},
    push = Array.prototype.push //
,
    mTarget,
    iW,
    iH,
    iSurface //
,
    aCanvas //
,
    mCanvas,
    oContext //
,
    mCvLeaf,
    oCtxLeaf //
,
    mCvTree,
    oCtxTree //
,
    mCvTest,
    oCtxTest //
,
    mCnvSea,
    oCtxSea //
,
    aNoiseField,
    iNoiseGridSize = 16,
    iNoiseGridW,
    iNoiseGridLength //
,
    iSeed = Math.random() * 1E9 << 0 //
,
    iLeafSize = 16 //
,
    iFishSize = 11,
    mCvFish,
    oCtxFish,
    iFishTypes = 8,
    aFishTypes = [] //
,
    iBoids = 66,
    aBoids = [],
    aObstacles = [],
    aGrid = [],
    iGridSize = 20,
    iGridW,
    iGridH,
    iGridLength //
,
    aNb = [];

function init(_target) {
  mTarget = _target;
  mCanvas = zuper.init(_target);
  oContext = inst.context; //

  _math_perlin__WEBPACK_IMPORTED_MODULE_4__["default"].setRng(_math_lcg__WEBPACK_IMPORTED_MODULE_1__["default"]); //mTarget = target
  //mCanvas = document.createElement('canvas')
  //oContext = mCanvas.getContext('2d')

  mCnvSea = document.createElement('canvas');
  oCtxSea = mCnvSea.getContext('2d');
  mCvTree = document.createElement('canvas');
  oCtxTree = mCvTree.getContext('2d');
  mCvTest = document.createElement('canvas');
  oCtxTest = mCvTest.getContext('2d');
  aCanvas = [mCanvas, mCnvSea, mCvTree, mCvTest]; //document.body.appendChild(mCvTree)
  //

  drawLeafAsset();
  drawFishAsset(); //

  handleResize(); //

  mCanvas.addEventListener('mousedown', handleClickCanvas);
  mCanvas.addEventListener('touchstart', handleClickCanvas); //mCanvas.addEventListener('click',handleClickCanvas)

  mTarget.appendChild(mCanvas); //

  aBoids.length = 0;

  for (let i = 0; i < iBoids; i++) {
    aBoids.push(boid());
  } //


  return mCanvas;
}

function handleResize() {
  //ow,oh,w,h
  iW = mTarget.clientWidth;
  iH = mTarget.clientHeight;
  iSurface = iW * iH; // todo: add pool to add/remove boids
  //if (mTarget.clientHeight<150) iBoids = .0007*iSurface<<0
  //		console.log('.0007*iSurface<<0',.0007*iSurface<<0); // log

  iBoids = Math.min(0.0007 * iSurface << 0, 300); // todo: uncomment

  aCanvas.forEach(function (canvas) {
    canvas.width = iW;
    canvas.height = iH;
  });
  iGridW = Math.ceil(iW / iGridSize);
  iGridH = Math.ceil(iH / iGridSize);
  iGridLength = iGridW * iGridH;

  while (aGrid.length < iGridLength) aGrid.push(getGridCell());

  while (aGrid.length > iGridLength) aGrid.pop(); //


  createObstacles(); //

  drawTreeAsset();
  drawSeaAsset(); //testPolygon()
}

function handleAnimate(deltaT) {
  // ,millis
  oContext.drawImage(mCnvSea, 0, 0, iW, iH); // grid

  setGrid(); // move

  let i = iBoids;

  while (i--) {
    let oBoid = aBoids[i],
        bSpeedUp = oBoid.speed > oBoid.lastSpeed; //oContext.fillStyle = oBoid.alone?'#f00':'#fff'

    oBoid.step(getNeighbours(oBoid), deltaT);
    let mFish = aFishTypes[oBoid.id % iFishTypes];
    oContext.save();
    oContext.translate(oBoid.x, oBoid.y);
    oContext.rotate(oBoid.dir.radians() * Math.PI + (bSpeedUp ? random(0.5 * oBoid.dir.size()) : 0));
    oContext.translate(-iFishSize / 2, -iFishSize / 2);
    oContext.drawImage(mFish, 0, 0, iFishSize, iFishSize);
    oContext.restore(); //oContext.fillRect(oBoid.x,oBoid.y,1,1)
  } //oContext.drawImage(mCvTest,0,0)

}

function handleClickCanvas(e) {
  let bTouch = !!e.changedTouches,
      o = bTouch ? e.changedTouches[0] : e,
      x = o.pageX,
      y = o.pageY,
      vClick = Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(x, y),
      iCell = getGridPos(x, y),
      aFish = [],
      iAround = 3,
      iArndSize = 2 * iAround + 1,
      aArnd = [];

  for (let i = 0; i < iArndSize; i++) {
    for (let j = 0; j < iArndSize; j++) {
      aArnd.push(-iGridW * iAround - iAround + i * iGridW + j);
    }
  }

  aArnd.forEach(function (add) {
    push.apply(aFish, gridIndex(iCell + add));
  });
  aFish.forEach(function (boid) {
    let vDist = vClick.clone().subtractVector(boid.pos),
        fDst = vDist.size(),
        f1Dst = 1 / fDst;
    boid.dir.addVector(vDist.multiplyNumber(-50 * f1Dst * f1Dst).drop());
  });
  vClick.drop();
}

function createObstacles() {
  aObstacles.length = 0;
  let i = 0;

  while (i--) {
    let iSize = 5 + rnd() * 20;
    aObstacles.push({
      pos: Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(rnd() * iW, iSize + rnd() * (iH - 3 * iSize)),
      size: iSize
    });
  }
}

function drawSeaAsset() {
  //console.log('drawSeaAsset'); // log
  oCtxSea.drawImage(mCvTree, 0, 0, iW, iH);
  oCtxSea.globalCompositeOperation = 'xor';
  oCtxSea.fillRect(0, 0, iW, iH); //

  let fDarken = 0.85,
      cHigh = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])('#47a').multiply(0.8),
      cLow = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])('#124'),
      iHw = iW / 2 << 0,
      iHh = iH / 2 << 0 //,oLight = oCtxSea.createGradient(false,iHw,0,cHigh,1,cLow)
  //,oDark = oCtxSea.createGradient(false,iHh,0,cHigh.multiply(fDarken),1,cLow.multiply(fDarken))
  ,
      oLight = oCtxSea.createRadialGradient(iHw, iHh, 0, iHw, iHh, iHw),
      oDark = oCtxSea.createRadialGradient(iHw, iHh, 0, iHw, iHh, iHw); //console.log('cHigh',cHigh); // log

  oLight.addColorStop(0, cHigh);
  oLight.addColorStop(1, cLow);
  oDark.addColorStop(0, cHigh.multiply(fDarken));
  oDark.addColorStop(1, cLow.multiply(fDarken));

  for (let i = 0; i < 2; i++) {
    let bFirst = i === 0;
    oCtxSea.globalCompositeOperation = bFirst ? 'source-in' : 'destination-over';
    oCtxSea.fillStyle = bFirst ? oLight : oDark;
    oCtxSea.fillRect(0, 0, iW, iH); //if (bFirst) {

    oCtxSea.globalCompositeOperation = 'source-atop';
    let j = 0.125 * iSurface << 0;

    while (j--) {
      oCtxSea.fillStyle = 'rgba(255,255,255,' + 0.1 * Math.random() + ')';
      oCtxSea.fillRect(Math.random() * iW << 0, Math.random() * iH << 0, 1, 1);
    } //}

  } // draw obstacles


  oCtxSea.globalCompositeOperation = 'source-over';
  oCtxSea.fillStyle = _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_5__["createGradient"].call(oCtxSea, false, 50, 0, '#777', 1, '#333');
  aObstacles.forEach(function (obstacle) {
    _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_5__["drawCircle"].call(oCtxSea, obstacle.pos.getX(), obstacle.pos.getY(), obstacle.size, true);
  });
}

function drawLeafAsset() {
  mCvLeaf = document.createElement('canvas');
  mCvLeaf.width = mCvLeaf.height = iLeafSize; //document.body.appendChild(mCvLeaf);mCvLeaf.style.zoom = 6

  oCtxLeaf = mCvLeaf.getContext('2d');
  oCtxLeaf.fillStyle = '#064';
  oCtxLeaf.scale(0.5, 1);
  oCtxLeaf.translate(0.25 * iLeafSize, 0);
  oCtxLeaf.arc(iLeafSize / 2, iLeafSize / 2, iLeafSize / 2, 0, 2 * Math.PI);
  oCtxLeaf.fill();
}

function drawTreeAsset() {
  let fNoiseScale = 0.007; //
  // test noise /////////

  iNoiseGridW = iW / iNoiseGridSize << 0;
  let iNoiseGridH = iH / iNoiseGridSize << 0;
  iNoiseGridLength = iNoiseGridW * iNoiseGridH;
  let i = 0;
  aNoiseField = [];

  while (i < iNoiseGridLength) {
    let x = iNoiseGridSize * (i % iNoiseGridW),
        y = iNoiseGridSize * Math.floor(i / iNoiseGridW),
        fPerlin = noise(123 + fNoiseScale * x, 657 + fNoiseScale * y + iSeed),
        fSine = Math.sin(x / iW * Math.PI),
        fVal = fPerlin * fPerlin * (1 - fSine * fSine);
    aNoiseField.push(fVal);
    oCtxTest.save();
    oCtxTest.translate(x, y);
    oCtxTest.fillStyle = 'rgba(255,255,255,' + 0.5 * fVal + ')'; //(0x808080*rnd()<<0).toString(16)

    oCtxTest.fillRect(0, 0, iNoiseGridSize, iNoiseGridSize);
    oCtxTest.restore();
    i += 1; //iNoiseGridSize
  } //console.log('iNoiseGridLength',iNoiseGridLength); // log
  //console.log('aNoiseField.length',aNoiseField.length); // log
  //////////////////////
  //


  i = 0.05 * iSurface << 0;
  let cnt = 0;

  while (i--) {
    let xx = rnd() * iW - iLeafSize / 2,
        yy = rnd() * iH //				,fPerlin = Perlin.noise(123+fNoiseScale*x,657+fNoiseScale*y)
    //				,fSine = Math.sin((x/iW)*Math.PI)
    ,
        iGridX = xx / iNoiseGridSize << 0,
        iGridY = yy / iNoiseGridSize << 0,
        iGridPos = iGridY * iNoiseGridW + iGridX,
        fNoise = aNoiseField[iGridPos];

    if (rnd() * fNoise > 0.1) {
      //			if (rnd()*(1-fSine*fSine)*fPerlin*fPerlin>0.1) {
      let iScale = 0.5 + rnd();
      oCtxTree.save();
      oCtxTree.translate(xx, yy);
      oCtxTree.scale(iScale, iScale);
      oCtxTree.rotate(rnd() * 2 * Math.PI);
      oCtxTree.drawImage(mCvLeaf, 0, 0, iLeafSize, iLeafSize);
      oCtxTree.restore();
      cnt++;
    }
  }
}

function drawFishAsset() {
  mCvFish = document.createElement('canvas');
  mCvFish.width = mCvFish.height = iFishSize; //document.body.appendChild(mCvFish);mCvFish.style.zoom = 6

  oCtxFish = mCvFish.getContext('2d'); //oCtxFish.fillStyle = '#f60'

  oCtxFish.fillStyle = _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_5__["createGradient"].call(oCtxFish, false, iFishSize / 2, 0, '#f84', 1, '#f60'); //

  let aFish = [[0.5, 0.1], [0.6, 0.3], [0.55, 0.5], [0.53, 0.6], [0.51, 0.7], [0.65, 0.9], [0.5, 0.85]],
      iFishPoints = aFish.length; //

  oCtxFish.save();
  oCtxFish.beginPath();

  for (let j = 0; j < 2 * iFishPoints - 1; j++) {
    let bReverse = j >= iFishPoints,
        iIndex = bReverse ? iFishPoints - 1 - (j - iFishPoints) : j,
        oPoint = aFish[iIndex],
        fX = (bReverse ? 0.5 - (oPoint[0] - 0.5) : oPoint[0]) * iFishSize,
        fY = oPoint[1] * iFishSize;
    if (j === 0) oCtxFish.moveTo(fX, fY);else oCtxFish.lineTo(fX, fY);
  }

  oCtxFish.fill();
  oCtxFish.closePath();
  oCtxFish.restore(); //
  //oCtxFish.globalCompositeOperation = 'source-in'
  //this.arc(0,0,radius,0,2*Math.PI)

  let i = iFishTypes;
  aFishTypes.push(mCvFish);

  while (i--) {
    let mCvRiba = document.createElement('canvas');
    mCvRiba.width = mCvRiba.height = iFishSize; //document.body.appendChild(mCvFish);mCvFish.style.zoom = 6

    let oCtxRiba = mCvRiba.getContext('2d');
    oCtxRiba.drawImage(mCvFish, 0, 0, iFishSize, iFishSize);
    oCtxRiba.globalCompositeOperation = 'source-atop';
    oCtxRiba.globalAlpha = 0.2;
    oCtxRiba.fillStyle = (0x808080 * rnd() << 0).toString(16);
    oCtxRiba.fillRect(0, 0, iFishSize, iFishSize);
    aFishTypes.push(mCvRiba);
  }
}
/*
let aPoly = []
function testPolygon(){
  aPoly.length = 0
  let fRds = 35*(1+rnd())
    ,fCx = rnd()*iW
    ,fCy = fRds+rnd()*(iH-3*fRds)
    ,iVtcs = 7
  for (let i=0;i<iVtcs;i++) {
    let fRdns = i/iVtcs*2*Math.PI
      ,fRndRds = .5*(fRds+rnd()*fRds)
    aPoly.push(vector(
      fCx+fRndRds*Math.sin(fRdns)
      ,fCy+fRndRds*Math.cos(fRdns)
    ))
  }
  // find grid
  let aPolyGrid = []
  for (let i=0,l=aPoly.length;i<l;i++) {
    let vVtx1 = aPoly[(i-1+l)%l]
      ,vVtx2 = aPoly[i]
    bline(
      vVtx1.getX()/iGridSize<<0
      ,vVtx1.getY()/iGridSize<<0
      ,vVtx2.getX()/iGridSize<<0
      ,vVtx2.getY()/iGridSize<<0
    ).forEach(function(cell){
      for (let x=-1;x<=1;x++) {
        for (let y=-1;y<=1;y++) {
          let iCellAround = cell+x+y*iGridW
            ,iCell = (iCellAround+iGridLength)%iGridLength
          if (aPolyGrid.indexOf(iCell)===-1) {
            aPolyGrid.push(iCell)
          }
        }
      }
    })
  }
  oCtxSea.fillStyle = 'rgba(0,255,0,.2)'
  aPolyGrid.forEach(function(cell) {
    oCtxSea.fillRect(
      (cell%iGridW)*iGridSize
      ,(cell/iGridW<<0)*iGridSize
      ,iGridSize
      ,iGridSize)
  })
  // draw polygon test
  oCtxSea.fillStyle = 'rgba(255,0,0,.3)'
  oCtxSea.beginPath()
  for (let i=0,l=aPoly.length;i<l;i++) {
    let vVtx = aPoly[i]
    if (i===0)	oCtxSea.lineTo(vVtx.getX(),vVtx.getY())
    else		oCtxSea.lineTo(vVtx.getX(),vVtx.getY())
  }
  oCtxSea.fill()
  oCtxSea.closePath()
}
function bline(x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1
  let dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1
  let err = (dx>dy ? dx : -dy)/2
  let a = []
  while (true) {
    //a.push(vector(x0,y0))
    a.push(x0+iGridW*y0)
    if (x0 === x1 && y0 === y1) break
    let e2 = err
    if (e2 > -dx) { err -= dy; x0 += sx; }
    if (e2 < dy) { err += dx; y0 += sy; }
  }
  return a
}
*/


function getGridCell() {
  let a = [];
  a.around = [];
  return a;
}

function boid() {
  let x,
      y,
      vPos = Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(iW * Math.random(), iH * Math.random()),
      vDir = Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(random(), random()),
      fSpdMx = 2,
      fDstAv = 16,
      oBoid = {
    id: boid.id ? boid.id++ : boid.id = 1,
    x: vPos.getX(),
    y: vPos.getY(),
    pos: vPos,
    dir: vDir,
    step: step,
    alone: true,
    speed: 0,
    lastSpeed: 0
  };

  function step(neighbours, deltaT) {
    deltaT = 1; // find neighbours

    let iNumNeighbours = neighbours.length,
        iNumRealNeighbours = 0,
        i = iNumNeighbours;

    while (i--) {
      let oOther = neighbours[i] // todo: cache mutual distance
      ,
          vDist = vPos.clone().subtractVector(oOther.pos),
          fDist = vDist.size();

      if (fDist < iGridSize) {
        iNumRealNeighbours++;
        let fDistP = fDist / iGridSize,
            fTsid = 1 - fDistP //,fDistTo = .5*fDist
        //,fNSnd = 1/fDistTo
        ,
            fDestDist = fDstAv - fDist; //

        vDir.average(oOther.dir, 0.1 * fTsid);
        vDir.addVector(vDist.normalize().multiplyNumber(0.07 * fDestDist)); //

        /*let bCloseIn = (fDist<fDstMn&&fDist>fDstMx)||(Math.random()<.5)
        if (bCloseIn) {
          vDir.average(oOther.dir,.1*fTsid)
          vDir.addVector(vDist.normalize().multiplyNumber(.05*(fDstAv-fDist)))
        }*/
        //
        //vPos.addVector(vDist.multiplyNumber(.1*fTsid))
        //vPos.addVector(vDist.normalize().multiplyNumber(.0001*iGridSize))
        //vPos.addVector(vDist.multiplyNumber(.1*fNSnd*fNSnd))
        //vPos.addVector(vDist.normalize().multiplyNumber(.07*(fDstMn-fDist)))
      }

      vDist.drop();
    }

    oBoid.alone = iNumRealNeighbours === 0; // random velocity depending on group size

    let iNeighbMx = 6,
        iNeighb = iNumRealNeighbours > iNeighbMx ? iNeighbMx : iNumRealNeighbours,
        fNeighb = iNeighb / iNeighbMx,
        fNNeighb = 1 - fNeighb,
        fRnd = 0.3 * fNNeighb * fNNeighb;
    vDir.addNumber(random(fRnd), random(fRnd)).multiplyNumber(1 - 0.1 * fNeighb * fNeighb); //
    // noise grid

    let iGridX = vPos.getX() / iNoiseGridSize << 0,
        iGridY = vPos.getY() / iNoiseGridSize << 0,
        iGridPos = iGridY * iNoiseGridW + iGridX,
        fNoise = aNoiseField[iGridPos % iNoiseGridLength],
        fNoiseX = fNoise - aNoiseField[(iGridPos + 1) % iNoiseGridLength],
        fNoiseY = fNoise - aNoiseField[(iGridPos + iNoiseGridW) % iNoiseGridLength];
    vDir.addVector(Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(fNoiseX, fNoiseY).multiplyNumber(-0.2)); //
    // min and max velocity

    if (vDir.size() > fSpdMx) {
      vDir.multiplyNumber(0.95);
    }
    /* else if (vDir.size()<fSpdMn) {
     vDir.multiplyNumber(1/.95)
    }*/


    oBoid.lastSpeed = oBoid.speed;
    oBoid.speed = vDir.size(); //
    // obstacles

    aObstacles.forEach(function (obstacle) {
      let vObstacle = obstacle.pos,
          iObstacle = obstacle.size,
          vDist = vPos.clone().subtractVector(vObstacle),
          iDist = vDist.size() - iObstacle,
          i1Dist = 1 / iDist;

      if (iDist < iGridSize) {
        vDir.addVector(vDist.normalize().multiplyNumber(1 * i1Dist));

        if (iDist < 0) {
          vPos.setVector(vObstacle).addVector(vDist.normalize().multiplyNumber(iObstacle + 1.1));
        }
      }

      vDist.drop();
    }); // sides
    //let iSideDstL = vPos.getX()-iGridSize

    if (vPos.getX() < iGridSize && vDir.getX() < 0) {
      let fDstL = vPos.getX(),
          f1DstL = 1 / fDstL;
      vDir.addVector(Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(f1DstL, 0).drop()); //vDir.rotate(.01*(vDir.getY()>0?-1:1))
    } else if (vPos.getX() > iW - iGridSize && vDir.getX() > 0) {
      let fDstR = iW - vPos.getX(),
          f1DstR = 1 / fDstR;
      vDir.addVector(Object(_math_vector__WEBPACK_IMPORTED_MODULE_3__["default"])(-f1DstR, 0).drop());
    } // move


    vPos.addVector(vDir.clone().multiplyNumber(deltaT).drop());
    x = vPos.getX();
    y = vPos.getY(); // wrap edges

    if (x < 0 || x > iW) {
      x = (x + iW) % iW;
      vPos.setX(x);
    }

    if (y < 0 || y > iH) {
      y = (y + iH) % iH;
      vPos.setY(y);
    } // done


    oBoid.x = x;
    oBoid.y = y;
  }

  return oBoid;
}

function getBoidGridPos(boid) {
  return getGridPos(boid.x, boid.y);
}

function getGridPos(x, y) {
  //return (y/iGridSize<<0)*iGridW + (x/iGridSize<<0)
  return ((y / iGridSize << 0) + iGridH) % iGridH * iGridW + ((x / iGridSize << 0) + iGridW) % iGridW;
}

function setGrid() {
  let i = iGridLength;

  while (i--) {
    aGrid[i].length = 0;
  } //


  i = iBoids;

  while (i--) {
    if (aBoids[i] === undefined) {
      //console.log('aBoids',i,aBoids); // log
      aBoids[i] = boid();
    }

    let oBoid = aBoids[i],
        iGridPos = getBoidGridPos(oBoid);
    if (iGridPos < iGridLength) aGrid[iGridPos].push(oBoid);
  } //


  i = iGridLength;

  while (i--) {
    let aCell = aGrid[i],
        aAround = aCell.around;
    aAround.length = 0;
    push.apply(aAround, gridIndex(i - 1));
    push.apply(aAround, gridIndex(i + 1));
    push.apply(aAround, gridIndex(i - iGridW));
    push.apply(aAround, gridIndex(i + iGridW));
    push.apply(aAround, gridIndex(i - iGridW - 1));
    push.apply(aAround, gridIndex(i - iGridW + 1));
    push.apply(aAround, gridIndex(i + iGridW - 1));
    push.apply(aAround, gridIndex(i + iGridW + 1));
  }
}

function gridIndex(i) {
  return aGrid[(i + iGridLength) % iGridLength];
}

function getNeighbours(boid) {
  let iGridPos = getBoidGridPos(boid),
      aCell = aGrid[iGridPos];
  aNb.length = 0;
  push.apply(aNb, aCell);
  aNb.splice(aNb.indexOf(boid), 1);
  push.apply(aNb, aCell.around);
  return aNb;
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/clouds.js":
/*!**********************************!*\
  !*** ./src/experiment/clouds.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Clouds
 * @module experiment/clouds
 * @see module:experiment/base
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('clouds', '/static/glsl/clouds.glsl').expose);

/***/ }),

/***/ "./src/experiment/copyclouds.js":
/*!**************************************!*\
  !*** ./src/experiment/copyclouds.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_lcg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/lcg */ "./src/math/lcg.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");



let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('copyclouds', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper,
    rnd = _math_lcg__WEBPACK_IMPORTED_MODULE_1__["default"].random,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_2__["default"].noise //
,
    imageData,
    data //
,
    target,
    w,
    h //
,
    canvas,
    context,
    canvasTmp = document.createElement('canvas'),
    contextTmp = canvasTmp.getContext('2d') //
,
    iSize = 32,
    fRds = 2,
    fNoiseScale = 0.02;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  handleResize(); //

  return canvas;
}

function handleResize() {
  zuper.handleResize.call(zuper, arguments);
  canvasTmp.width = w = target.clientWidth;
  canvasTmp.height = h = target.clientHeight;

  if (w * h) {
    imageData = context.createImageData(w, h);
    data = imageData.data;
  }
}

function handleAnimate(deltaT, millis) {
  // rnd((millis*0.001)<<0)
  rnd(millis);

  for (let i = 0, l = 4 * w * h; i < l; i += 4) {
    let gray = rnd() * 255 << 0; //Math.random()*255<<0
    // let ii = i/4
    //     ,x = ii%w
    //   ,y = ii/w<<0
    //   ,gray = noise(
    //     1243+x*fNoiseScale
    //     ,2231+y*fNoiseScale
    //     ,5231+millis*.0001
    //   )*255<<0

    data[i + 0] = rnd() * 255 << 0;
    data[i + 1] = rnd() * 255 << 0;
    data[i + 2] = rnd() * 255 << 0;
    data[i + 3] = 255;
  }

  contextTmp.putImageData(imageData, 0, 0);
  contextTmp.globalAlpha = 0.7; // context.globalCompositeOperation = 'multiply'

  for (let i = 1, l = 6; i < l; i++) {
    contextTmp.drawImage(canvasTmp, 0, 0, w, h, -rnd() * (w * i - w), -rnd() * (h * i - h), w * i, h * i);
  } //


  context.globalAlpha = 0.1;
  context.drawImage(canvasTmp, 0, 0);
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/earth.js":
/*!*********************************!*\
  !*** ./src/experiment/earth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Earth
 * @module experiment/earth
 * @see module:experiment/base
 */

let inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('earth', '/static/glsl/earth.glsl', {
  cameraPosition: [0, 10, 20],
  lookAtRadians: {
    x: 0,
    y: -0.6 * Math.PI
  }
});
/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/fire.js":
/*!********************************!*\
  !*** ./src/experiment/fire.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Fire in webgl
 * @module experiment/fire
 * @see module:experiment/base
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('fire', '/static/glsl/fire.glsl').expose);

/***/ }),

/***/ "./src/experiment/glass.js":
/*!*********************************!*\
  !*** ./src/experiment/glass.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");



let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('glass', {
  init,
  exit,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_1__["default"].noise,
    PI = Math.PI,
    w,
    h,
    wHalf,
    hHalf //
,
    target,
    canvas,
    context //
,
    numbers = [0, 0, 0, 0],
    gradient,
    pattern;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  canvas.addEventListener('click', handleCanvasClick);
  context = inst.context;
  handleResize();
  handleCanvasClick();
  return canvas;
}

function exit() {
  zuper.exit();
  canvas.removeEventListener('click', handleCanvasClick);
} // protected methods


function handleAnimate(deltaT, millis) {
  let speed = 0.000002 * millis,
      scale = 1 + (noise(numbers[0] - 10 * speed) - 0.5),
      rotation = (2.3 + 3 * noise(numbers[1] + speed)) % 2 * PI,
      offset1 = noise(numbers[2] - speed) - 0.5,
      offset2 = noise(numbers[3] + speed) - 0.5,
      offset = scale * 2347,
      offsetX = offset * offset1,
      offsetY = offset * offset2; //

  context.beginPath(); //

  context.globalAlpha = 0.1;
  context.fillStyle = gradient;
  context.fillRect(0, 0, w, h); //

  context.globalAlpha = 1;
  pattern = context.createPattern(canvas, 'repeat');
  context.fillStyle = pattern;
  context.save();
  context.rect(0, 0, w, h);
  context.translate(wHalf + offsetX, hHalf + offsetY);
  context.scale(scale, scale);
  context.rotate(rotation);
  context.fill();
  context.restore(); //

  context.closePath(); //

  pattern = null;
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  wHalf = w / 2;
  hHalf = h / 2;
} // private methods


function handleCanvasClick() {
  let gradientColor = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])(0).randomize().lightness(0.1).toString();
  gradient = context.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, gradientColor);
  gradient.addColorStop(1, gradientColor);

  for (let i = 0, l = 1 + (5 * Math.random() << 0); i < l; i++) {
    let fStop = (1 + i) * (1 / (l + 1));
    gradient.addColorStop(fStop, Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])(0).randomize().saturation(1).toString());
  }

  context.fillStyle = gradient;
  context.fillRect(0, 0, w, h); //

  numbers.forEach(function (o, i) {
    numbers[i] = Math.random() * 1E9 << 0;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/grid.js":
/*!********************************!*\
  !*** ./src/experiment/grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");



let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('grid', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_1__["default"].noise,
    w,
    h,
    wHalf,
    hHalf //
,
    target //
,
    colorBack,
    colorFront = '#f04',
    colorBackFade //
,
    canvas,
    context //
,
    patternCanvas,
    patternContext,
    patternSize = 2,
    patternFront;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  handleResize(); //

  colorBack = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])('#599cee').multiply(0.2).toString();
  colorBackFade = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])(colorBack).rgba(0.4).toString(); //

  patternCanvas = document.createElement('canvas');
  patternContext = patternCanvas.getContext('2d'); //

  patternFront = getPattern(patternSize * 4, patternSize * 4, function () {
    patternContext.fillStyle = colorFront;
    patternContext.fillRect(patternSize, patternSize, patternSize * 2, patternSize * 2);
  }); //

  return canvas;
} // protected methods


function handleAnimate(deltaT, millis) {
  canvas.width = canvas.width;
  let speed = 0.0001 * millis,
      scale = 1 + 8 * noise(213 - speed),
      offset1 = noise(78657 - speed) - 0.5,
      offset2 = noise(25973 + speed) - 0.5,
      offsetX,
      offsetY;

  for (let i = 0; i < 6; i++) {
    scale *= 0.1 * i + 1;
    let isFirst = i === 0,
        offset = scale * i * 50;
    offsetX = offset * offset1;
    offsetY = offset * offset2; //

    context.globalCompositeOperation = 'source-over'; //

    context.fillStyle = isFirst ? colorBack : colorBackFade;
    context.fillRect(0, 0, w, h); //

    context.globalCompositeOperation = 'lighter'; //

    context.fillStyle = patternFront;
    context.save();
    context.rect(0, 0, w, h);
    context.translate(wHalf + offsetX, hHalf + offsetY);
    context.scale(scale, scale);
    context.rotate((2 + 3 * noise(73237.14 + speed + 0.03 * i, 8376.12)) % 2 * Math.PI);
    context.fill();
    context.restore();
  }
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  wHalf = w / 2;
  hHalf = h / 2;
} // private methods


function getPattern(w, h, fn) {
  patternCanvas.width = w;
  patternCanvas.height = h;
  fn(context);
  return context.createPattern(patternCanvas, 'repeat');
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/hypno.js":
/*!*********************************!*\
  !*** ./src/experiment/hypno.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_lcg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/lcg */ "./src/math/lcg.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");




let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('hypno', {
  init,
  exit,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
,
    random = _math_lcg__WEBPACK_IMPORTED_MODULE_1__["default"].random,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_3__["default"].noise,
    PI = Math.PI,
    PI2 = 2 * PI,
    PIH = PI / 2,
    ceil = Math.ceil,
    w,
    h //
,
    target,
    canvas,
    context,
    bgCanvas = document.createElement('canvas'),
    bgContext = bgCanvas.getContext('2d'),
    flakeCanvas = document.createElement('canvas'),
    flakeContext = flakeCanvas.getContext('2d'),
    flakeSize = 64 * 2,
    flakeMax = flakeSize,
    flakeGradient,
    flakeHalf = flakeSize / 2,
    ringNum = 8,
    flakeLine = flakeHalf / ringNum,
    flakeWidth = flakeHalf * (1 / ringNum * (ringNum - 1)) //
,
    gridSize = 64,
    gridRadius = 100,
    noiseScale = 0.3,
    noiseSpeed = 2E-7,
    gridX,
    gridY //
,
    sineList = [],
    sineListSize = PI2 * gridRadius << 0 //
,
    offsetX = 1E-7,
    offsetY = 1E-7,
    counter = 1E6,
    millisLast = Date.now();

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  handleResize(); //

  drawFlake(1);
  const oColor = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])().randomize();
  flakeGradient = flakeContext.createRadialGradient(flakeHalf, flakeHalf, flakeWidth, flakeHalf, flakeHalf, 0);
  flakeGradient.addColorStop(1, oColor.clone().divide(3));
  flakeGradient.addColorStop(0, oColor.rgba(0)); //

  if (sineList.length === 0) {
    for (let i = 0; i < sineListSize; i++) {
      sineList.push(Math.sin(i / sineListSize * PI2));
    }
  } //


  return canvas;
}

function exit() {
  zuper.exit();
}

function handleAnimate(deltaT, millis) {
  let i;
  counter += (inst.isMouseDown ? 1 : -1) * (millis - millisLast);
  millisLast = millis;
  drawFlake(millis); //

  context.globalAlpha = 1;
  context.globalCompositeOperation = 'source-over';
  context.drawImage(bgCanvas, 0, 0); //

  const aIndexed = [];

  for (i = 0; i < gridX; i++) {
    for (let k = 0; k < gridY; k++) {
      const iX = i - ceil(offsetX / gridSize),
            iY = k - ceil(offsetY / gridSize),
            iSeed = 131071 * iX * iX + 8191 * iY * iY,
            fRandom = random(iSeed),
            fNoise1 = 3075 + noiseScale * iX,
            fNoise2 = 4571 + noiseScale * iY,
            fNoiseMillis = noise(fNoise1, fNoise2, noiseSpeed * counter),
            fRadians = 5E3 * fNoiseMillis,
            iSize = flakeSize + 8191 * fRandom % flakeMax;
      aIndexed.push({
        x: i * gridSize + gridRadius * sin(fRadians) - gridRadius + offsetX % gridSize - iSize / 2,
        y: k * gridSize + gridRadius * cos(fRadians) - gridRadius + offsetY % gridSize - iSize / 2,
        z: random(iSeed),
        size: iSize
      });
    }
  }

  aIndexed.sort(function (a, b) {
    return a.z > b.z ? 1 : -1;
  });
  let l = aIndexed.length;

  for (i = 0; i < l; i++) {
    let oFlake = aIndexed[i];
    context.drawImage(flakeCanvas, 0, 0, flakeSize, flakeSize, oFlake.x, oFlake.y, oFlake.size, oFlake.size);
  }
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h; //

  let gridAdd = ceilGrid(gridRadius);
  gridX = ceilGrid(w) + 2 * gridAdd;
  gridY = ceilGrid(h) + 2 * gridAdd;
  bgCanvas.width = w;
  bgCanvas.height = h; //

  let gradientColor = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])().randomize(),
      diagonal = Math.sqrt(w * w + h * h),
      gradient = bgContext.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, diagonal);
  gradient.addColorStop(0, gradientColor);
  gradient.addColorStop(1, gradientColor.divide(3));
  bgContext.fillStyle = gradient;
  bgContext.fillRect(0, 0, w, h);
}

function drawFlake(t) {
  flakeCanvas.width = flakeCanvas.height = flakeSize;
  flakeContext.lineWidth = flakeHalf / ringNum / 2;
  flakeContext.fillStyle = flakeGradient;
  flakeCanvas.globalCompositeOperation = 'source-over';
  flakeContext.arc(flakeHalf, flakeHalf, flakeWidth, 0, Math.PI * 2);
  flakeContext.fill();
  flakeContext.globalCompositeOperation = 'destination-out';

  for (let i = 0, l = ringNum; i < l; i++) {
    const iPrt = flakeHalf - i / l * flakeHalf - (flakeLine - 0.01 * t % flakeLine);
    flakeContext.beginPath();
    flakeContext.arc(flakeHalf, flakeHalf, Math.max(0, iPrt), 0, Math.PI * 2);
    flakeContext.stroke();
  }
}

function ceilGrid(i) {
  return ceil((i + 1E-6) / gridSize);
}

function sin(f) {
  return sineList[f / PI2 * sineListSize % sineListSize << 0];
}

function cos(f) {
  return sin(f + PIH);
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/index.js":
/*!*********************************!*\
  !*** ./src/experiment/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glass */ "./src/experiment/glass.js");
/* harmony import */ var _river__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./river */ "./src/experiment/river.js");
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob */ "./src/experiment/blob.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ "./src/experiment/grid.js");
/* harmony import */ var _snow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snow */ "./src/experiment/snow.js");
/* harmony import */ var _boids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boids */ "./src/experiment/boids.js");
/* harmony import */ var _hypno__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hypno */ "./src/experiment/hypno.js");
/* harmony import */ var _spiralmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spiralmap */ "./src/experiment/spiralmap.js");
/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clouds */ "./src/experiment/clouds.js");
/* harmony import */ var _infinitecubes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infinitecubes */ "./src/experiment/infinitecubes.js");
/* harmony import */ var _starzoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./starzoom */ "./src/experiment/starzoom.js");
/* harmony import */ var _copyclouds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./copyclouds */ "./src/experiment/copyclouds.js");
/* harmony import */ var _knottywood__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./knottywood */ "./src/experiment/knottywood.js");
/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./touches */ "./src/experiment/touches.js");
/* harmony import */ var _earth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./earth */ "./src/experiment/earth.js");
/* harmony import */ var _marbles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marbles */ "./src/experiment/marbles.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vertical */ "./src/experiment/vertical.js");
/* harmony import */ var _noiseballs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./noiseballs */ "./src/experiment/noiseballs.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fire */ "./src/experiment/fire.js");
/* harmony import */ var _plasma__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plasma */ "./src/experiment/plasma.js");
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/* harmony import */ var _radialdifference__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./radialdifference */ "./src/experiment/radialdifference.js");

















 //import voronoi from './voronoi'



 //import flowfield from './flowfield'


/* harmony default export */ __webpack_exports__["default"] = ({
  glass: _glass__WEBPACK_IMPORTED_MODULE_0__["default"],
  river: _river__WEBPACK_IMPORTED_MODULE_1__["default"],
  blob: _blob__WEBPACK_IMPORTED_MODULE_2__["default"],
  grid: _grid__WEBPACK_IMPORTED_MODULE_3__["default"],
  snow: _snow__WEBPACK_IMPORTED_MODULE_4__["default"],
  boids: _boids__WEBPACK_IMPORTED_MODULE_5__["default"],
  hypno: _hypno__WEBPACK_IMPORTED_MODULE_6__["default"],
  spiralmap: _spiralmap__WEBPACK_IMPORTED_MODULE_7__["default"],
  clouds: _clouds__WEBPACK_IMPORTED_MODULE_8__["default"],
  infinitecubes: _infinitecubes__WEBPACK_IMPORTED_MODULE_9__["default"],
  starzoom: _starzoom__WEBPACK_IMPORTED_MODULE_10__["default"],
  copyclouds: _copyclouds__WEBPACK_IMPORTED_MODULE_11__["default"],
  knottywood: _knottywood__WEBPACK_IMPORTED_MODULE_12__["default"],
  touches: _touches__WEBPACK_IMPORTED_MODULE_13__["default"] // ,earth
  ,
  marbles: _marbles__WEBPACK_IMPORTED_MODULE_15__["default"],
  vertical: _vertical__WEBPACK_IMPORTED_MODULE_16__["default"] //,voronoi
  ,
  fire: _fire__WEBPACK_IMPORTED_MODULE_18__["default"],
  plasma: _plasma__WEBPACK_IMPORTED_MODULE_19__["default"] // ,webgl
  //,flowfield
  ,
  radialdifference: _radialdifference__WEBPACK_IMPORTED_MODULE_21__["default"]
});

/***/ }),

/***/ "./src/experiment/infinitecubes.js":
/*!*****************************************!*\
  !*** ./src/experiment/infinitecubes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Infinite cubes
 * @module experiment/infinitecubes
 * @see module:experiment/base
 */

let inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('infinitecubes', '/static/glsl/infinitecubes.glsl');
/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/knottywood.js":
/*!**************************************!*\
  !*** ./src/experiment/knottywood.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Perlin noise turned wood
 * @module experiment/knottywood
 * @see module:experiment/base
 */

let inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('knottywood', '/static/glsl/knottywood.glsl', {
  images: {
    u_image0: '/static/img/knottywood.jpg'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/marbles.js":
/*!***********************************!*\
  !*** ./src/experiment/marbles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/**
 * Webgl marble displacement mapping
 * @module experiment/marbles
 * @see module:experiment/base
 */

 // import Matter from 'matter-js'
//

let random = Math.random,
    rnd = f => f * (Math.random() - 0.5) //
,
    Body,
    Engine,
    engine,
    world //
,
    numMarbles = 16,
    marbles = [],
    marbleSelected //
,
    w,
    h //
,
    holeOffset = 0.35,
    holePosition = {
  x: 0,
  y: 0
},
    holeSize = 50 //
,
    randomPulseTime = 0,
    keyPressed = false //
,
    isMatterLoaded = false //
,
    inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('marbles', '/static/glsl/marbles.glsl', {
  images: {
    ground: '/static/img/wood.jpg' //'/static/img/stonetiles.jpg'//'/static/img/concrete.jpg'//'/static/img/concrete.jpg'//'/static/img/sand.jpg'//'/static/img/linen.jpg'//'/static/img/knit.jpg'//'/static/img/pavement.jpg'//'/static/img/felt.jpg'//
    ,
    sky: '/static/img/sky.jpg'
  },
  init,
  handleAnimate,
  handleResize,
  handleDragStart,
  handleDragEnd,
  handleKeyPress,
  handleKeyUp
}),
    touchListPos = inst.touchListPos,
    setUniform = inst.setUniform,
    addUniformChange = inst.addUniformChange;

function init() {
  w = inst.target.clientWidth;
  h = inst.target.clientHeight;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["loadScript"])('https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.10.0/matter.min.js').then(() => {
    console.log('matterloaded'); // todo: remove log

    randomPulseTime = Date.now() + 10000;
    addUniformChange('holeSize', [holeSize]);
    Engine = Matter.Engine;
    Body = Matter.Body;
    engine = engine || Engine.create();
    world = engine.world;
    world.gravity.y = 0;

    for (let i = 0; i < numMarbles; i++) {
      marbles.push(setMarble());
    }

    Matter.World.add(world, marbles);
    isMatterLoaded = true;
  }, err => console.warn(err));
}

function handleAnimate(fps, millis) {
  if (!isMatterLoaded) return;
  Engine.update(engine, 1 / fps);
  /*if (!window.foo&&millis>2000) {
    console.log('marbles[0]',marbles[0]); // todo: remove log
    window.foo = true
  }*/
  // teleport at borders

  let w = inst.w,
      h = inst.h,
      dw = w / 2,
      dh = h / 2;
  marbles.forEach(marble => {
    let position = marble.position,
        x = position.x,
        y = position.y,
        nx = x,
        ny = y,
        out = false;

    if (x > dw) {
      out = true;
      nx = x - w;
    } else if (x < -dw) {
      out = true;
      nx = x + w;
    }

    if (y > dh) {
      out = true;
      ny = y - h;
    } else if (y < -dh) {
      out = true;
      ny = y + h;
    }

    out && Body.setPosition(marble, {
      x: nx,
      y: ny
    }); // track travel

    let velocity = marble.velocity,
        vx = velocity.x,
        vy = velocity.y;
    marble.travel += (vx > 0 ? -1 : 1) * Math.sqrt(vx * vx + vy * vy); //

    if (keyPressed) {
      let g = 0.0001,
          keyOffsetX = holeOffset * w;
      Body.setVelocity(marble, {
        x: vx - g * (x + keyOffsetX),
        y: vy - g * y
      });
    } // hole


    let distHoleX = x - holePosition.x,
        distHoleY = y - holePosition.y,
        distHole = Math.sqrt(distHoleX * distHoleX + distHoleY * distHoleY);

    if (distHole < holeSize) {
      let holeDepth = 0.03;
      Body.setVelocity(marble, {
        x: vx - holeDepth * distHoleX,
        y: vy - holeDepth * distHoleY
      });

      if (marble.timeInHole === 0) {
        marble.timeInHole = Date.now();
      } else if (millis - marble.timeInHole > 3000) {
        let shrink = 1;

        if (marble.circleRadius - shrink < 0.0) {
          resetMarble(marble);
        } else {
          marble.circleRadius -= shrink;
        }
      }
    } else if (marble.timeInHole !== 0) {
      marble.timeInHole = 0;
    } //

  }); // random

  if (randomPulseTime < millis) {
    setRandomPulseTime(500, 5000);

    if (!inst.isMouseDown) {
      let rndMarble = marbles[Math.random() * numMarbles << 0];
      Body.setVelocity(rndMarble, {
        x: rnd(22),
        y: rnd(11)
      });
    }
  } // moving hole

  /*let holecx = holeOffset*w
      ,holecy = 0
      ,radians = 0.001*millis
      ,radius = 50
      ,holex = holecx + radius*Math.sin(radians)
      ,holey = holecy + radius*Math.cos(radians)
  holePosition.x = holex;
  holePosition.y = holey;
  addUniformChange('holePosition'[holePosition.x,holePosition.y])*/
  // view


  let gl = this.gl,
      program = this.program;
  marbles.forEach((marble, i) => {
    let location,
        position = marble.position,
        baseName = 'marbles[' + i + ']';
    setUniform(baseName + '.position', [position.x, position.y]);
    setUniform(baseName + '.travel', [marble.travel]);
    setUniform(baseName + '.size', [marble.circleRadius]);
    setUniform(baseName + '.color1', marble.color1);
    setUniform(baseName + '.color2', marble.color2);
    setUniform(baseName + '.selected', [marble.selected ? 1.0 : 0.0]);
  });
}

function handleResize(_w, _h) {
  w = _w;
  h = _h;
  let isLandscape = w > h;
  holePosition.x = isLandscape ? holeOffset * w : 0;
  holePosition.y = isLandscape ? 0 : holeOffset * h;
  addUniformChange('holePosition', [holePosition.x, holePosition.y]);
}

function setMarble(marble) {
  let isLandscape = w > h,
      x = isLandscape ? rnd(222) - holeOffset * w : rnd(333),
      y = isLandscape ? rnd(333) : rnd(222) - holeOffset * h,
      v = 2.0,
      circleRadius = 20 + rnd(15); //
  // force 16 vertices for all marbles

  if (marble === undefined) marble = Matter.Bodies.polygon(x, y, 16, circleRadius, {
    circleRadius,
    label: 'Circle Body'
  }); //

  Body.setPosition(marble, {
    x,
    y
  });
  Body.setVelocity(marble, {
    x: 0,
    y: 0
  });
  Matter.Body.set(marble, {
    circleRadius,
    positionPrev: {
      x: x + rnd(v),
      y: y + rnd(v)
    },
    friction: 0.0001,
    frictionAir: 0.01,
    restitution: 0.66 //http://hypertextbook.com/facts/2006/restitution.shtml

  }); // change radius

  if (marble.orgRadius && marble.orgRadius !== circleRadius) {
    let scale = circleRadius / marble.orgRadius; // Matter.Body.scale(marble, scale) // shit disappears

    Matter.Vertices.scale(marble.vertices, scale, scale);
    Matter.Bounds.update(marble.bounds, marble.vertices);
    Matter.Body.setVertices(marble, marble.vertices);
    marble.orgRadius = circleRadius;
  } //


  marble.color1 = [random(), random(), random()];
  marble.color2 = [random(), random(), random()];
  marble.travel = 0;
  marble.selected = false;
  marble.timeInHole = 0;
  marble.orgRadius = circleRadius; //

  return marble;
}

function resetMarble(marble) {
  setMarble(marble);
}

function handleDragStart(add, touches, e) {
  let pos = touchListPos(add),
      x = pos.x - inst.w / 2,
      y = -(pos.y - inst.h / 2),
      closest,
      closestD = Number.POSITIVE_INFINITY;
  marbles.forEach(marble => {
    let pos = marble.position,
        dx = x - pos.x,
        dy = y - pos.y,
        d = Math.sqrt(dx * dx + dy * dy);

    if (d < closestD) {
      closestD = d;
      closest = marble;
    }
  });

  if (closest) {
    marbleSelected = closest;
    marbleSelected.selected = true;
  }
}

function handleDragEnd(removed, touches, e) {
  if (marbleSelected) {
    let pos = touchListPos(removed),
        x = pos.x - inst.w / 2,
        y = -(pos.y - inst.h / 2),
        position = marbleSelected.position,
        velocity = marbleSelected.velocity,
        marbleX = position.x,
        marbleY = position.y,
        dx = x - marbleX,
        dy = y - marbleY,
        d = Math.sqrt(dx * dx + dy * dy),
        force = 5E-5 * d;
    Body.setVelocity(marbleSelected, {
      x: velocity.x + force * dx,
      y: velocity.y + force * dy
    });
    marbleSelected.selected = false;
    marbleSelected = null;
    setRandomPulseTime();
  }
}

function handleKeyPress() {
  keyPressed = true;
}

function handleKeyUp() {
  keyPressed = false;
}

function setRandomPulseTime(mint = 10000, maxt = 15000) {
  randomPulseTime = Date.now() + Math.round(mint + (maxt - mint) * Math.random());
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/noiseballs.js":
/*!**************************************!*\
  !*** ./src/experiment/noiseballs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");


 // get an instance

let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('noiseballs', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    random = Math.random,
    w,
    h,
    wHalf,
    hHalf,
    diagonal,
    wh,
    cx,
    cy //
,
    canvas,
    context //
,
    target //
,
    orientationX = 0,
    orientationY = 0 //
,
    fieldZoom = 4,
    fieldW // = w/fieldZoom<<0
,
    fieldH // = h/fieldZoom<<0
,
    fieldSize // = fieldW*fieldH
,
    fieldScale = 0.012,
    fieldStep = 0.01,
    fieldHeight = 8E2,
    firstPoint,
    pointSize = 7 //
,
    gridSize = pointSize,
    gridW // = Math.ceil(w/gridSize)+3
,
    gridH // = Math.ceil(h/gridSize)+3
,
    gridLength // = gridW*gridH
,
    gridCheck // = [-gridW-1,-gridW,-gridW+1,-1,0,1,gridW-1,gridW,gridW+1]
,
    gridCheckLength // = gridCheck.length
,
    grid
/* = (function(a,i){
while (i--) a.push([])
return a
})([],gridLength)*/
//
,
    numPoints = 444,
    spdv = 0.0018,
    frc = 0.94,
    maxhitB = 55;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  context.globalCompositeOperation = 'screen'; //

  handleResize();
  !firstPoint && initBalls(); //

  window.addEventListener('deviceorientation', onOrientation, false);
  window.addEventListener('MozOrientation', onOrientation, false); //

  return canvas;
} // protected methods


function handleAnimate() {
  //deltaT,millis
  step();
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  wh = w + h;
  cx = wHalf = w / 2;
  cy = hHalf = h / 2;
  diagonal = Math.sqrt(w * w + h * h);
  fieldW = w / fieldZoom << 0;
  fieldH = h / fieldZoom << 0;
  fieldSize = fieldW * fieldH;
  spdv = 2.5 / diagonal; //

  gridW = Math.ceil(w / gridSize) + 3;
  gridH = Math.ceil(h / gridSize) + 3;
  gridLength = gridW * gridH;
  gridCheck = [-gridW - 1, -gridW, -gridW + 1, -1, 0, 1, gridW - 1, gridW, gridW + 1];
  gridCheckLength = gridCheck.length;

  grid = function (a, i) {
    while (i--) a.push([]);

    return a;
  }([], gridLength);
} // private methods


function noise(x, y) {
  let PerlinSimplex = _math_perlin__WEBPACK_IMPORTED_MODULE_1__["default"];
  return PerlinSimplex.noise(157 + fieldScale * x, 249 + fieldScale * y, 328 + 0.00021 * Date.now());
}

function initBalls() {
  let pointPrototype = {
    init: function (o) {
      for (let key in o) this[key] = o[key];

      return this;
    },
    step: function () {
      let vx = this.vx,
          vy = this.vy,
          x = this.x,
          y = this.y,
          b = this.b,
          n = noise(x, y),
          nx = noise(x + fieldStep, y),
          ny = noise(x, y + fieldStep),
          neighbours = this.getGrid(),
          i = neighbours.length;

      if (i > 1) {
        while (i--) {
          let p = neighbours[i];

          if (p !== this) {
            let dx = p.x - x,
                dy = p.y - y,
                pow = dx * dx + dy * dy,
                dist = Math.sqrt(pow),
                maxDist = p.r + this.r,
                mdist = 0.2 / pow;

            if (dist < maxDist) {
              if (b === 0 && b === p.b) {
                b = this.b = p.b = maxhitB;
              } else {
                this.b = p.b;
                p.b = b;
                b = this.b;
              }

              vx -= mdist * dx;
              vy -= mdist * dy;
            }
          }
        }
      }

      if (b > 0) this.b = b - 1;
      vx = frc * (vx + spdv * orientationX + fieldHeight * (n - nx));
      vy = frc * (vy + spdv * orientationY + fieldHeight * (n - ny) + 0.1);
      this.x += vx;
      this.y += vy;
      this.vx = vx;
      this.vy = vy;
      this.setGrid(); //

      return this;
    },
    setGrid: function () {
      let index = (this.x / gridSize + 1 << 0) + gridW * (this.y / gridSize + 1 << 0);

      if (index !== this.gridIndex) {
        if (this.gridIndex) {
          let a = grid[this.gridIndex],
              i = a && a.indexOf(this) || -1;
          i !== -1 && a.splice(i, 1);
        }

        grid[index] && grid[index].push(this);
        this.gridIndex = index;
      }
    },
    getGrid: function () {
      let neighbours = [],
          gridIndex = this.gridIndex,
          push = Array.prototype.push,
          i = gridCheckLength;

      if (gridIndex) {
        while (i--) {
          push.apply(neighbours, grid[gridIndex + gridCheck[i]]);
        }
      }

      return neighbours;
    },
    wrapField: function () {
      let x = this.x,
          y = this.y,
          r = this.r;
      if (x > w + r) this.x -= w + 2 * r;else if (x < -r) this.x += w + 2 * r;
      if (y > h + r) this.y -= h + 2 * r;else if (y < -r) this.y += h + 2 * r;
      return this;
    }
    /*,borderField: function(){
      let x = this.x
        ,y = this.y
        ,r = this.r
      if (x>w-r) this.x = w-r
      else if (x<r) this.x = r
      if (y>h-r) this.y = h-r
      else if (y<r) this.y = r
      return this
    }*/
    ,
    draw: function (ctx) {
      if (this.b !== 0) {
        let x = this.x,
            y = this.y,
            r = this.r //,bb = (this.b/maxhitB*255<<0).toString(16)
        //,c = '#'+bb+bb+bb
        ,
            c = this.color.clone() //.multiply(this.b/maxhitB).toString()
        //,ffffgg=log(x,y,r)
        ,
            gradient = ctx.createRadialGradient(x, y, r, x, y, 0);
        gradient.addColorStop(0, c.setAlpha(0).toString(true));
        gradient.addColorStop(1, c.setAlpha(this.b / maxhitB).toString(true)); //ctx.fillStyle = this.b?'#F00':'#FFF'
        //ctx.fillStyle = '#'+bb+bb+bb

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      return this;
    }
  },
      base = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])('#F48'),
      i = numPoints;

  while (i--) {
    firstPoint = Object.create(pointPrototype).init({
      x: random() * w,
      y: random() * h,
      vx: (random() - 0.5) * (w + h) * 0.001,
      vy: (random() - 0.5) * (w + h) * 0.001,
      r: pointSize - 0.8 * random() * pointSize,
      b: 0,
      color: Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])().average(base, 0.65) //.multiply(i%2===0?1:0.1)
      ,
      next: firstPoint,
      i: i
    });
  }
}

function step() {
  context.clearRect(0, 0, w, h);
  context.fillStyle = '#000';
  context.fillRect(0, 0, w, h);
  context.fill();
  let point = firstPoint;

  while (point) {
    point = point.step().wrapField().draw(context).next;
  }
}

function onOrientation(evt) {
  try {
    if (!evt.gamma && !evt.beta) {
      evt.gamma = -(evt.x * (180 / Math.PI));
      evt.beta = -(evt.y * (180 / Math.PI));
    }
  } catch (err) {}

  orientationX = evt.gamma;
  orientationY = evt.beta;
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/plasma.js":
/*!**********************************!*\
  !*** ./src/experiment/plasma.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/vector */ "./src/math/vector.js");



let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('plasma', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    scale = 1,
    center = Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 0),
    points = [],
    num = 30,
    elmCanvas,
    context,
    w,
    h,
    target;

function init(_target) {
  //
  target = _target; //

  elmCanvas = zuper.init(_target);
  elmCanvas.classList.add('canvas');
  elmCanvas.style.zoom = scale; //

  context = inst.context; //

  points.length = 0;

  for (let i = 0; i < num; i++) points.push(point()); //


  handleResize(); //

  return elmCanvas;
} // protected methods


function handleAnimate(deltaT, millis) {
  context.globalCompositeOperation = 'source-over';
  context.fillStyle = '#000';
  context.fillRect(0, 0, w, h);
  context.translate(center.getX(), center.getY());
  context.globalCompositeOperation = 'lighter';

  for (let i = 0; i < num; i++) draw(points[i].step(millis));

  context.translate(-center.getX(), -center.getY());
  context.fillStyle = '#800'; //'#800'

  context.shadowBlur = 0;
  context.shadowColor = 0; //'rgb(0,0,0,0)'

  context.fillRect(0, 0, w, h);
}

function handleResize() {
  w = Math.ceil(target.clientWidth / scale);
  h = Math.ceil(target.clientHeight / scale);
  center.set(w / 2, h / 2, w / 4 + h / 4);
  elmCanvas.width = w;
  elmCanvas.height = h;
} // private methods


function point() {
  let position = Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 0, 0),
      speed = Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 0, 0),
      size,
      color1 = null,
      color2 = null,
      color1Time = 1,
      color2Time = 1,
      o = {
    toString: function () {
      return '[object Point]';
    },
    color: null,
    size: null,
    setPos: position.set,
    x: position.getX(),
    y: position.getY(),
    setSpd: speed.set,
    step: step,
    reset: reset,
    resetColor: resetColor
  };
  reset();

  function reset() {
    let iSze = 900 / scale,
        fSpd = 3 / scale;
    position.set(rnd(iSze), rnd(iSze));
    speed.set(rnd(fSpd), rnd(fSpd));
    color1 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])();
    color2 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])();
    o.color = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])();
    size = Math.random() * iSze;
    return o;
  }

  function resetColor(t) {
    color2.set(color1.get());
    color1.randomize();
    color1Time = t;
    color2Time = t + 10000 + (10000 * Math.random() << 0);
  }

  function step(t) {
    speed.add(position.clone().multiply(-0.0001)).add(Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(rnd(0.0001), rnd(0.0001)));
    position.add(speed);
    o.x = position.getX();
    o.y = position.getY();
    o.size = 0.1 * w + Math.sin(t * 0.0004 + size) * 0.1 * w;
    if (t > color2Time) resetColor(t);
    o.color.set(color1.get()).average(color2, 1 - (t - color1Time) / (color2Time - color1Time));
    return o;
  }

  return o;
}

function draw(point) {
  let i = point.size;
  context.shadowColor = point.color.hex;
  context.shadowBlur = i;
  context.fillRect(point.x - i / 2, point.y - i / 2, i, i);
}

function rnd(f) {
  return f * (Math.random() - 0.5);
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/radialdifference.js":
/*!********************************************!*\
  !*** ./src/experiment/radialdifference.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/**
 * Diffence of animated radial gradients
 * @module experiment/radialdifference
 * @see module:experiment/base
 */



const Cubic = gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"]; // get an instance

let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('radialdifference', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    random = Math.random,
    w,
    h,
    wHalf,
    hHalf,
    diagonal,
    wh,
    cx,
    cy //
,
    canvas,
    context //
,
    target //
,
    numPoints = 17,
    firstPoint,
    spdv = 0.005,
    spdn = 0.0004,
    friction = 0.96,
    drawDots = false,
    animT = 4000;
window.addEventListener('deviceorientation', orientationhandler, false);
window.addEventListener('MozOrientation', orientationhandler, false);
/**
 * Override base init
 * @param {HTMLElement} _target
 * @returns {HTMLCanvasElement}
 */

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  !firstPoint && handleResize(); //

  initPoints();
  canvas.addEventListener('click', reset);
  canvas.addEventListener('touchstart', function () {
    drawDots = true;
  });
  canvas.addEventListener('touchend', function () {
    drawDots = false;
  }); //

  return canvas;
}
/**
 * Override base handleAnimate
 */


function handleAnimate() {
  //deltaT,millis
  context.clearRect(0, 0, w, h);
  context.globalCompositeOperation = 'difference';
  let point = firstPoint;

  while (point) {
    point = point.step().drawRadial(context).next;
  }

  drawDots && dot(context);
}
/**
 * Override base handleResize
 */


function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  wh = w + h;
  cx = wHalf = w / 2;
  cy = hHalf = h / 2;
  diagonal = Math.sqrt(w * w + h * h);
  spdv = 2.5 / diagonal;
}

function initPoints() {
  let i = numPoints,
      lastPoint,
      endPoint,
      pointPrototype = {
    init: function (o) {
      for (let key in o) if (o.hasOwnProperty(key)) this[key] = o[key];

      return this;
    },
    setRadius: function () {
      this.mass = 1 + 0.7 * (random() - 0.5);
      this.r = this.mass * diagonal / 2;
      return this;
    },
    setColor: function () {
      let fnBool = function () {
        return random() < 0.5 ? 'F' : '0';
      };

      this.c1 = '#' + fnBool() + fnBool() + fnBool();
      this.c2 = this.c1.replace(/F/g, 'g').replace(/0/g, 'F').replace(/g/g, '0');
      return this;
    },
    step: function () {
      let p = firstPoint,
          vx = this.vx,
          vy = this.vy,
          x = this.x,
          y = this.y;

      while (p) {
        if (p !== this) {
          let dx = p.x - x,
              dy = p.y - y,
              mdist = 8 / (dx * dx + dy * dy);
          vx -= mdist * dx;
          vy -= mdist * dy;
        }

        p = p.next;
      }

      let n = this.next || firstPoint,
          previous = this.previous,
          ex = (n.x + previous.x) / 2,
          ey = (n.y + previous.y) / 2,
          previousdx = ex - x,
          previousdy = ey - y;
      vx += spdn * previousdx;
      vy += spdn * previousdy; //

      vx = friction * (vx - spdv * (x - cx));
      vy = friction * (vy - spdv * (y - cy));
      this.x += this.mass * vx;
      this.y += this.mass * vy;
      this.vx = vx;
      this.vy = vy; //

      return this;
    },
    drawRadial: function (context) {
      let x = this.x,
          y = this.y,
          r = this.r,
          gradient = context.createRadialGradient(x, y, r, x, y, 0);
      gradient.addColorStop(0, this.c1);
      gradient.addColorStop(1, this.c2);
      context.fillStyle = gradient;
      context.fillRect(0, 0, w, h);
      return this;
    } //

  };

  while (i--) {
    lastPoint = firstPoint;
    firstPoint = Object.create(pointPrototype).init({
      x: random() * w,
      y: random() * h,
      vx: (random() - 0.5) * (w + h) * 0.1,
      vy: (random() - 0.5) * (w + h) * 0.1,
      previous: lastPoint,
      next: firstPoint
    }).setColor().setRadius();
    if (!endPoint) endPoint = firstPoint;
  }

  endPoint.previous = firstPoint;
}

function dot(context) {
  context.globalCompositeOperation = 'source-over';
  let point = firstPoint;
  context.strokeStyle = '#FFF';
  context.beginPath();

  while (point) {
    context.lineTo(point.x, point.y);
    !point.next && context.lineTo(firstPoint.x, firstPoint.y);
    point = point.next;
  }

  context.stroke(); //

  point = firstPoint;
  context.strokeStyle = '#000';

  while (point) {
    context.beginPath();
    context.arc(point.x, point.y, point.r, 0, Math.PI * 2, true);
    context.stroke();
    point = point.next;
  }
}
/*function screen(i){
  operation(i||1,'screen')
}

function multiply(i){
  operation(i||1,'multiply')
}

function overlay(i){
  operation(i||1,'overlay')
}

function operation(i,type){
  context.globalCompositeOperation = type
  while (i--) context.drawImage(canvas, 0, 0)
}*/


function reset() {
  let point = firstPoint;

  while (point) {
    let change = firstPoint.setRadius.call({}),
        col = firstPoint.setColor.call({}),
        c1 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])(point.c1),
        c2 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])(point.c2),
        c3 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])(col.c1),
        c4 = Object(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"])(col.c2);
    point.part = 0;
    gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(point, animT / 1000, {
      r: change.r,
      mass: change.mass,
      part: 1,
      ease: Cubic.easeInOut,
      overwrite: 'all',
      onUpdate: function (c1, c2, c3, c4, point) {
        let part = point.part;
        point.c1 = c1.clone().average(c3, part).toString();
        point.c2 = c2.clone().average(c4, part).toString();
      }.bind(null, c1, c2, c3, c4, point)
    });
    point = point.next;
  }
}

function orientationhandler(e) {
  // For FF3.6+
  try {
    if (!e.gamma && !e.beta) {
      e.gamma = -(e.x * (180 / Math.PI));
      e.beta = -(e.y * (180 / Math.PI));
    }
  } catch (err) {}

  cx = wHalf + e.gamma;
  cy = hHalf + e.beta; // use e.gamma, e.beta, and e.alpha according to dev.w3.org/geo/api/spec-source-orientation
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/river.js":
/*!*********************************!*\
  !*** ./src/experiment/river.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");


 // get an instance

let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('river', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    random = Math.random,
    w,
    h,
    wHalf,
    hHalf,
    diagonal,
    wh,
    cx,
    cy //
,
    canvas,
    context //
,
    target //
,
    orientationX = 0,
    orientationY = 0 //
,
    fieldZoom = 4,
    fieldW // = w/fieldZoom<<0
,
    fieldH // = h/fieldZoom<<0
,
    fieldSize // = fieldW*fieldH
,
    fieldScale = 0.006,
    fieldStep = 1 //0.01
,
    fieldHeight = 5E1,
    firstPoint,
    pointSize = 7 //
,
    gridSize = pointSize,
    gridW // = Math.ceil(w/gridSize)+3
,
    gridH // = Math.ceil(h/gridSize)+3
,
    gridLength // = gridW*gridH
,
    gridCheck // = [-gridW-1,-gridW,-gridW+1,-1,0,1,gridW-1,gridW,gridW+1]
,
    gridCheckLength // = gridCheck.length
,
    grid
/* = (function(a,i){
while (i--) a.push([])
return a
})([],gridLength)*/
//
,
    numPoints = 3E3,
    spdv = 0.0018,
    frc = 0.94,
    maxhitB = 55;
const timeColor = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 0, 255);

function setTimeColor() {
  const now = Date.now();
  timeColor.set(colorWrap(now / 3E2) << 16 | 63 << 8 //colorWrap(now/4E2)<<8
  | colorWrap(now / 1E2));
}

function colorWrap(c) {
  const d = c % 511;
  return d <= 255 ? d : 511 - d;
}

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  context.globalCompositeOperation = 'screen'; //

  handleResize();
  !firstPoint && initBalls(); //

  window.addEventListener('deviceorientation', onOrientation, false);
  window.addEventListener('MozOrientation', onOrientation, false); //

  return canvas;
} // protected methods


function handleAnimate() {
  //deltaT,millis
  step();
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  wh = w + h;
  cx = wHalf = w / 2;
  cy = hHalf = h / 2;
  diagonal = Math.sqrt(w * w + h * h);
  fieldW = w / fieldZoom << 0;
  fieldH = h / fieldZoom << 0;
  fieldSize = fieldW * fieldH;
  spdv = 2.5 / diagonal; //

  gridW = Math.ceil(w / gridSize) + 3;
  gridH = Math.ceil(h / gridSize) + 3;
  gridLength = gridW * gridH;
  gridCheck = [-gridW - 1, -gridW, -gridW + 1, -1, 0, 1, gridW - 1, gridW, gridW + 1];
  gridCheckLength = gridCheck.length;

  grid = function (a, i) {
    while (i--) a.push([]);

    return a;
  }([], gridLength);
} // private methods


function noise(x, y) {
  let PerlinSimplex = _math_perlin__WEBPACK_IMPORTED_MODULE_1__["default"];
  return PerlinSimplex.noise(157 + fieldScale * x, 249 + fieldScale * y, 328 + 0.000021 * Date.now());
}

function initBalls() {
  let pointPrototype = {
    init: function (o) {
      for (let key in o) this[key] = o[key];

      return this;
    },
    step: function () {
      let vx = this.vx,
          vy = this.vy,
          x = this.x,
          y = this.y,
          b = this.b,
          n = noise(x, y),
          nx = noise(x + fieldStep, y),
          ny = noise(x, y + fieldStep),
          neighbours = this.getGrid(),
          i = neighbours.length;

      if (i > 1) {
        while (i--) {
          let p = neighbours[i];

          if (p !== this) {
            let dx = p.x - x,
                dy = p.y - y,
                pow = dx * dx + dy * dy,
                dist = Math.sqrt(pow),
                maxDist = p.r + this.r,
                mdist = 0.2 / pow;

            if (dist < maxDist) {
              if (b === 0 && b === p.b) {
                b = this.b = p.b = maxhitB;
              } else {
                this.b = p.b;
                p.b = b;
                b = this.b;
              }

              vx -= mdist * dx;
              vy -= mdist * dy;
            }
          }
        }
      }

      if (b > 0) this.b = b - 1;
      vx = frc * (vx + spdv * orientationX + fieldHeight * (n - nx));
      vy = frc * (vy + spdv * orientationY + fieldHeight * (n - ny) + 0.1);
      this.x += vx;
      this.y += vy;
      this.vx = vx;
      this.vy = vy;
      this.setGrid(); //

      return this;
    },
    setGrid: function () {
      let index = (this.x / gridSize + 1 << 0) + gridW * (this.y / gridSize + 1 << 0);

      if (index !== this.gridIndex) {
        if (this.gridIndex) {
          let a = grid[this.gridIndex],
              i = a && a.indexOf(this) || -1;
          i !== -1 && a.splice(i, 1);
        }

        grid[index] && grid[index].push(this);
        this.gridIndex = index;
      }
    },
    getGrid: function () {
      let neighbours = [],
          gridIndex = this.gridIndex,
          push = Array.prototype.push,
          i = gridCheckLength;

      if (gridIndex) {
        while (i--) {
          push.apply(neighbours, grid[gridIndex + gridCheck[i]]);
        }
      }

      return neighbours;
    },
    wrapField: function () {
      let x = this.x,
          y = this.y,
          r = this.r;
      if (x > w + r) this.x -= w + 2 * r;else if (x < -r) this.x += w + 2 * r;

      if (y > h + r) {
        this.y -= h + 2 * r; // this.x = w/2
      } else if (y < -r) this.y += h + 2 * r;

      return this;
    }
    /*,borderField: function(){
      let x = this.x
        ,y = this.y
        ,r = this.r
      if (x>w-r) this.x = w-r
      else if (x<r) this.x = r
      if (y>h-r) this.y = h-r
      else if (y<r) this.y = r
      return this
    }*/
    ,
    draw: function (ctx) {
      //if (this.b!==0&&true){
      let x = this.x,
          y = this.y,
          d = Math.sqrt(this.vx * this.vx + this.vy * this.vy),
          r = Math.min(this.r * d * 0.3, 40) //,bb = (this.b/maxhitB*255<<0).toString(16)
      //,c = '#'+bb+bb+bb
      ,
          c = timeColor //this.color.clone()//.multiply(this.b/maxhitB).toString()
      //,ffffgg=log(x,y,r)
      ,
          gradient = ctx.createRadialGradient(x, y, r, x, y, 0); //

      gradient.addColorStop(0, c.setAlpha(0).toString(true));
      gradient.addColorStop(1, c.setAlpha(1).toString(true));
      gradient.addColorStop(1, c.setAlpha(this.b / maxhitB).toString(true)); //ctx.fillStyle = this.b?'#F00':'#FFF'
      //ctx.fillStyle = '#'+bb+bb+bb
      // ctx.fillStyle = c.toString() //gradientx

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill(); //}

      return this;
    }
  },
      base = Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])('#F48'),
      i = numPoints;

  while (i--) {
    firstPoint = Object.create(pointPrototype).init({
      x: w / 2 + 10 * random() - 5 // random()*w
      ,
      y: 0 + 10 * random() // random()*h
      ,
      vx: (random() - 0.5) * (w + h) * 0.001,
      vy: (random() - 0.5) * (w + h) * 0.001,
      r: pointSize //-0.8*random()*pointSize
      ,
      b: 0,
      color: Object(_math_color__WEBPACK_IMPORTED_MODULE_2__["default"])().average(base, 0.65) //.multiply(i%2===0?1:0.1)
      ,
      next: firstPoint,
      i: i
    });
  }
}

function step() {
  /*context.clearRect(0, 0,w, h)
  context.fillStyle = '#000'
  context.fillRect(0,0,w,h)
  context.fill()*/
  let point = firstPoint;
  setTimeColor();

  while (point) {
    point = point.step().wrapField().draw(context).next;
  }
}

function onOrientation(evt) {
  try {
    if (!evt.gamma && !evt.beta) {
      evt.gamma = -(evt.x * (180 / Math.PI));
      evt.beta = -(evt.y * (180 / Math.PI));
    }
  } catch (err) {}

  orientationX = evt.gamma;
  orientationY = evt.beta;
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/snow.js":
/*!********************************!*\
  !*** ./src/experiment/snow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_lcg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/lcg */ "./src/math/lcg.js");
/* harmony import */ var _math_perlin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/perlin */ "./src/math/perlin.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _signal_signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signal/signals */ "./src/signal/signals.js");





let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('snow', {
  init,
  exit,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    millis = Date.now,
    random = _math_lcg__WEBPACK_IMPORTED_MODULE_1__["default"].random,
    noise = _math_perlin__WEBPACK_IMPORTED_MODULE_2__["default"].noise,
    PI = Math.PI,
    PI2 = 2 * PI,
    PIH = PI / 2,
    ceil = Math.ceil,
    w,
    h //
,
    target,
    canvas,
    context,
    canvasBg = document.createElement('canvas'),
    contextBg = canvasBg.getContext('2d'),
    canvasFlake = document.createElement('canvas'),
    contextFlake = canvasFlake.getContext('2d'),
    flakeSize = 3,
    flakeMax = 8 * flakeSize //
,
    gridSize = 30,
    gridRadius = 100,
    noiseScale = 0.3,
    noiseSpeed = 1E-7,
    gridX,
    gridY //
,
    sineList = [],
    sineListSize = PI2 * gridRadius << 0 //
,
    offsetX = 1E-7,
    offsetY = 1E-7,
    counter = 1E6,
    millisLast = millis() //
,
    isMouseDown = false,
    lastX,
    lastY;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  handleResize(); //

  canvasFlake.width = canvasFlake.height = flakeSize;
  contextFlake.fillStyle = '#ffffff';
  contextFlake.fillRect(1, 1, 1, 1); //

  sineList = [];

  for (let i = 0; i < sineListSize; i++) {
    sineList.push(Math.sin(i / sineListSize * PI2));
  } //


  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["dragstart"].add(handleDragStart);
  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["drag"].add(handleDrag);
  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["dragend"].add(handleDragEnd); //

  return canvas;
}

function exit() {
  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["dragstart"].remove(handleDragStart);
  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["drag"].remove(handleDrag);
  _signal_signals__WEBPACK_IMPORTED_MODULE_4__["dragend"].remove(handleDragEnd);
  zuper.exit();
}

function handleDragStart() {
  isMouseDown = true;
}

function handleDrag(touchList) {
  let touch;
  touchList.forEach(_touch => _touch.pos && (touch = _touch));
  /*loop(touchList,function(id,_touch){
    if(_touch.pos) touch = _touch
  })*/

  if (touch) {
    let x = touch.pos.getX(),
        y = touch.pos.getY();

    if (lastX !== undefined) {
      offsetX += x - lastX;
    }

    lastX = x;
    lastY = y;
  }
}

function handleDragEnd() {
  isMouseDown = false;
  lastX = undefined;
} // protected methods


function handleAnimate(deltaT, millis) {
  counter += (isMouseDown ? 1 : -1) * (millis - millisLast);
  millisLast = millis;
  offsetY = 0.0200001 * counter; //

  context.globalAlpha = 1;
  context.drawImage(canvasBg, 0, 0); //

  for (let i = 0; i < gridX; i++) {
    for (let k = 0; k < gridY; k++) {
      let x = i - ceil(offsetX / gridSize),
          y = k - ceil(offsetY / gridSize),
          seed = 131071 * x * x + 8191 * y * y,
          randomFloat = random(seed),
          noise1 = 3075 + noiseScale * x,
          noise2 = 4571 + noiseScale * y,
          noiseMillis = noise(noise1, noise2, noiseSpeed * counter),
          radians = 5E3 * noiseMillis,
          size = flakeSize + 8191 * randomFloat % flakeMax;
      context.globalAlpha = 1E3 * randomFloat % 1; //

      context.drawImage(canvasFlake, 0, 0, flakeSize, flakeSize, i * gridSize + gridRadius * sin(radians) - gridRadius + offsetX % gridSize, k * gridSize + gridRadius * cos(radians) - gridRadius + offsetY % gridSize, size, size);
    }
  }
}

function handleResize() {
  w = target.clientWidth;
  h = target.clientHeight;
  let gridAdd = ceilGrid(gridRadius);
  gridX = ceilGrid(w) + 2 * gridAdd;
  gridY = ceilGrid(h) + 2 * gridAdd;
  canvas.width = w;
  canvas.height = h;
  canvasBg.width = w;
  canvasBg.height = h; //

  let oGradient = contextBg.createLinearGradient(0, 0, 0, h);
  oGradient.addColorStop(1, '#004');
  oGradient.addColorStop(0, '#448');
  contextBg.fillStyle = oGradient;
  contextBg.fillRect(0, 0, w, h);
}

function ceilGrid(i) {
  return ceil((i + 1E-6) / gridSize);
}

function sin(f) {
  return sineList[f / PI2 * sineListSize % sineListSize << 0];
}

function cos(f) {
  return sin(f + PIH);
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/spiralmap.js":
/*!*************************************!*\
  !*** ./src/experiment/spiralmap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/experiment/webgl.js");
/**
 * Webgl spiral displacement mapping
 * @module experiment/spiralmap
 * @see module:experiment/base
 */

let inst = Object(_webgl__WEBPACK_IMPORTED_MODULE_0__["default"])('spiralmap', '/static/glsl/spiralmap.glsl', {
  images: {
    u_image0: '/static/img/crystal0.jpg',
    u_image1: '/static/img/crystal1.jpg'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/starzoom.js":
/*!************************************!*\
  !*** ./src/experiment/starzoom.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/**
 * A zooming canvas
 * @module experiment/starzoom
 * @see module:experiment/base
 */

let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('starzoom', {
  init,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
,
    target,
    w,
    h //
,
    canvas,
    context,
    imgData,
    pixels //
,
    tempCanvas,
    tempContext //
,
    particles = 11,
    zoom = 1.3,
    zw,
    zh,
    zx,
    zy;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  tempCanvas = document.createElement('canvas');
  tempContext = tempCanvas.getContext('2d'); //

  handleResize(); //

  return canvas;
}

function handleAnimate() {
  // deltaT,millis
  context.drawImage(canvas, zx, zy, zw, zh);
  imgData = context.getImageData(0, 0, w, h);
  pixels = imgData.data;
  let x,
      y,
      n,
      i = particles;

  while (i--) {
    x = w / 2 + 10 * (Math.random() - 0.5) << 0;
    y = h / 2 + 10 * (Math.random() - 0.5) << 0;
    n = 4 * (y * w + x);
    pixels[n] = 128 + 128 * Math.random() << 0;
    pixels[n + 1] = 128 * Math.random() << 0;
    pixels[n + 2] = 128 * Math.random() << 0;
    pixels[n + 3] = 255;
  }

  context.putImageData(imgData, 0, 0);
}

function handleResize() {
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height); //

  w = target.clientWidth;
  h = target.clientHeight;
  zw = zoom * w;
  zh = zoom * h;
  zx = (w - zw) / 2;
  zy = (h - zh) / 2; //

  canvas.width = w;
  canvas.height = h;
  context.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, w, h);
  imgData = context.getImageData(0, 0, w, h);
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/touches.js":
/*!***********************************!*\
  !*** ./src/experiment/touches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/color */ "./src/math/color.js");
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/vector */ "./src/math/vector.js");
/* harmony import */ var _signal_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signal/signals */ "./src/signal/signals.js");
/* harmony import */ var _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/canvasrenderingcontext2d */ "./src/utils/canvasrenderingcontext2d.js");





let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('touches', {
  init,
  exit,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    target //
,
    w,
    h //
,
    deltaT //
,
    canvas,
    context,
    canvasTemp = document.createElement('canvas') //
,
    rings = {},
    ringsPool = [];

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context;
  handleResize(); //

  for (let i = 0; i < 20; i++) ringsPool.push(ring({
    pos: 0
  })); //


  let nr = 0,
      sizeMax = 125,
      fnSpawn = function () {
    let fakeID = 'a' + nr++,
        isHorVer = Math.random() < 0.5,
        fakeTouch = _signal_signals__WEBPACK_IMPORTED_MODULE_3__["drag"].touch(fakeID, Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(!isHorVer ? -sizeMax + (w + 2 * sizeMax) * Math.random() : Math.random() < 0.5 ? -sizeMax : w + sizeMax, isHorVer ? -sizeMax + (h + 2 * sizeMax) * Math.random() : Math.random() < 0.5 ? -sizeMax : h + sizeMax));
    fakeTouch.last.add(Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(9 * (Math.random() - 0.5), 9 * (Math.random() - 0.5)));
    rings[fakeID] = getRing(fakeTouch);
    rings[fakeID].setSize(1).kill();
  }; //


  setInterval(fnSpawn, 1999);

  for (let i = 0; i < 5; i++) setTimeout(fnSpawn, i * 40); //


  target.appendChild(canvas); //

  _signal_signals__WEBPACK_IMPORTED_MODULE_3__["drag"].stopPageScroll = false;
  _signal_signals__WEBPACK_IMPORTED_MODULE_3__["animate"].add(handleAnimate);
  _signal_signals__WEBPACK_IMPORTED_MODULE_3__["resize"].add(handleResize);
  _signal_signals__WEBPACK_IMPORTED_MODULE_3__["dragstart"].add(function (added) {
    //,touches){
    added.forEach((otouch, id) => rings[id] = getRing(otouch));
  });
  _signal_signals__WEBPACK_IMPORTED_MODULE_3__["dragend"].add(function (del) {
    //,touches){
    del.forEach((otouch, id) => rings[id].kill());
  }); //

  return canvas;
}

function exit() {
  //todo:remove drag
  zuper.exit();
} // protected methods


function handleAnimate(_deltaT, millis, frames) {
  deltaT = _deltaT;

  for (let ring in rings) rings[ring].update(context, deltaT, millis, frames);
}

function handleResize() {
  w = target.clientWidth;
  h = target.clientHeight;
  canvasTemp.width = canvas.width;
  canvasTemp.height = canvas.height;
  canvasTemp.getContext('2d').drawImage(canvas, 0, 0);
  canvas.width = w;
  canvas.height = h;
  context.drawImage(canvasTemp, 0, 0);
}

function getRing(touch) {
  return ringsPool.length ? ringsPool.shift().reset(touch) : ring(touch);
}

function ring(touch) {
  let touchPos = touch.pos,
      rotation = 1,
      sizeMin = 1,
      sizeMax = 250,
      sizeMaxH = sizeMax / 2,
      sizeDead,
      size = sizeMin,
      ageMax = 333,
      born = Date.now(),
      died = 0,
      diedMax = 15000,
      dead,
      typeMax = 8,
      type = typeMax * Math.random() << 0,
      sprite = function () {
    let sprite = document.createElement('canvas'),
        spriteContext = sprite.getContext('2d'),
        sizeMaxHalf = sizeMax / 2,
        colorSprite = _math_color__WEBPACK_IMPORTED_MODULE_1__["default"].apply(_math_color__WEBPACK_IMPORTED_MODULE_1__["default"], [192 + Math.random() * 63 << 0, Math.random() * 64 << 0, Math.random() * 255 << 0].sort(function () {
      return Math.random() < 0.5 ? 1 : -1;
    })),
        colorShade = colorSprite.clone().multiply(0.6).rgba(0.4),
        fill = _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_4__["createGradient"].call(spriteContext, type !== 0, sizeMaxHalf // ,fill = crc.createGradient(spriteContext,type!==0,sizeMaxHalf
    , 0, colorSprite.clone().multiply(0.9), 0.6999, colorSprite, 0.7, colorShade, 1, colorSprite.clone().multiply(0.7).rgba(0));
    sprite.width = sprite.height = sizeMax;
    spriteContext.translate(sizeMaxH, sizeMaxH);
    spriteContext.fillStyle = fill;
    if (type === 0) _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_4__["drawCircle"].call(spriteContext, 0, 0, sizeMaxH);else if (type < 5) _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_4__["drawPolygon"].call(spriteContext, 0, 0, sizeMaxH, type + 2);else _utils_canvasrenderingcontext2d__WEBPACK_IMPORTED_MODULE_4__["drawPolygram"].call(spriteContext, 0, 0, sizeMaxH, 1 - 2.2 / (type - 2), type - 2); // if (type===0)		crc.drawCircle(spriteContext,0,0,sizeMaxH)
    // else if (type<5)	crc.drawPolygon(spriteContext,0,0,sizeMaxH,type+2)
    // else				crc.drawPolygram(spriteContext,0,0,sizeMaxH,1-2.2/(type-2),type-2)

    return sprite;
  }(),
      animateSignal;

  function updateView(context, x, y, scale, rotation, alpha) {
    if (alpha !== 1) context.globalAlpha = alpha;
    context.translate(x, y);
    context.scale(scale, scale);
    context.rotate(rotation);
    context.drawImage(sprite, -sizeMaxH, -sizeMaxH);
    context.setTransform(1, 0, 0, 1, 0, 0);
    if (alpha !== 1) context.globalAlpha = 1;
  }

  function update(context, deltaT, millis) {
    //,frames) {
    let isAlive = died === 0,
        age = millis - (isAlive ? born : died),
        maxAge = isAlive ? ageMax : diedMax,
        sizeFrom = isAlive ? sizeMin : sizeDead,
        sizeTo = isAlive ? sizeMax : sizeMin;

    if (age < maxAge) {
      let ageOne = age / maxAge;
      size = sizeFrom + ageOne * (sizeTo - sizeFrom);

      if (!isAlive) {
        let centerDistance = Object(_math_vector__WEBPACK_IMPORTED_MODULE_2__["default"])(w / 2, h / 2).subtract(touchPos),
            centerDistanceSize = centerDistance.size();
        dead.add(centerDistance.multiplyNumber(1 / (centerDistanceSize * centerDistanceSize)));
        touch.pos.add(dead.clone().multiply(deltaT));
        rotation = rotation + 0.01 * deltaT * dead.size();
        if (touchPos.getX() < -9999 || touchPos.getX() > w + 9999 || touchPos.getY() < -9999 || touchPos.getY() > h + 9999) fnDie();
      }
    } else if (!isAlive) {
      fnDie();
    }

    let sizeOne = size / sizeMax,
        fade = 0.1;
    updateView(context, touchPos.getX(), touchPos.getY(), sizeOne / 2 + 0.5, rotation, sizeOne < fade ? sizeOne / fade : 1);
  }

  function moveTo(x, y) {
    if (animateSignal) animatecancel();
    let starX = touchPos.getX(),
        starY = touchPos.getY(),
        distX = x - starX,
        distY = y - starY;
    animateSignal = _signal_signals__WEBPACK_IMPORTED_MODULE_3__["animate"].during(800, f => updateView(starX + f * distX, starY + f * distY), kill);
  }

  function setSize(f) {
    let ff = f > 1 ? 1 : f < 0 ? 0 : f;
    size = sizeMax * ff;
    born = Date.now() - ageMax * ff;
    return returnValue;
  }

  function kill() {
    if (died === 0) {
      died = Date.now() - (1 - size / sizeMax) * diedMax;
      sizeDead = size;
      dead = touch.pos.clone().subtract(touch.last).divide(deltaT);
    }
  }

  function fnDie() {
    ringsPool.push(rings[touch.id]);
    delete rings[touch.id];
  }

  let returnValue = {
    update,
    moveTo,
    setSize,
    kill,
    toString: () => '[object ring ' + touch.id + ']'
  };

  returnValue.reset = function (tch) {
    touch = tch;
    touchPos = touch.pos;
    born = Date.now();
    died = 0;
    return returnValue;
  };

  return returnValue;
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/vertical.js":
/*!************************************!*\
  !*** ./src/experiment/vertical.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");

const imgBasePath = 'https://res.cloudinary.com/dn1rmdjs5/image/upload/v1566568767/rv/';
const list = ['01_CAT_Shavers', '03_boot-sequence', '01_welcome', '1-A-_KrEvMuiH7dlwshFw5aw', '2', '1', '02_wake-up', 'yoleo_0003_Yoleo-2', 'yoleo_2', 'yoleo_0002_Yoleo-3', 'yoleo_3', 'yoleo_4', 'yoleo_0004_Yoleo-1', 'yoleo_1', 'Vincent_van_Gogh_-_Green_Field_-_Google_Art_Project', 'yoleo_0001_Yoleo-4', 'yoleo_0000_Yoleo-5', 'yoleo_0', 'webpack', 'wpid-photo-e1410255897752', 'WPSFBrowser', 'wood', 'clients_vodafone', 'walk2janjina', 'vf_PDP', 'vfIDE', 'voetbalreizen', 'vf_160712-DEVICE_Page_03a', 'vf_160712-DEVICE_Page_03b', 'vangular', 'vacansoleil7', 'untitled-2', 'vacansoleil6', 'tree-96973_1280', 'vacansoleil2', 'vacansoleil1', 'vacansoleil5', 'vacansoleil4', 'vacansoleil0', 'vacansoleil3', 'tvprototype_loading', 'tvprototype_feed', 'tvprototype_start', 'tvprototype_leftright', 'trstenik2drace', 'treefolder.zip', 'rv', 'ZIP', '4.13 KB', 'tinysort', 'tatarataaII3', 'Terraformer', 'tatarataaII2', 'termux', 'tatarataaII1', 'tatarataa4', 'tatarataa3', 'tatarataa2', 'Sus_scrofa_piglet', 'spiralmap', 'tatarataa1', 'Structure_Paris_les_Halles', 'studio04', 'studio02', 'studio01', 'studio03', 'soundcircus5', 'sphere', 'soundcircus4', 'soundcircus1', 'soundcircus3', 'smorenburg1', 'soundcircus2', 'smorenburg3', 'sketchCylinders', 'smorenburg2', 'sketchCube', 'sl_unb', 'sl_unb', 'rv', 'PNG', '891 Bytes', '378 × 30', 'sky', 'sk123ow', 'simplexAs4D.rar', 'rv', 'RAR', '11.67 KB', 'sfbrowser3', 'sfbrowser2', 'Screenshot_2018-03-25-20-58-43', 'sfbrowser4', 'simplexAs.rar', 'rv', 'RAR', '7 KB', 'sfbrowser', 'sfbrowser1', 'seattleIpad4', 'sfbrowser0', 'seattleIpad3', 'seattleIpad2', 'seattleIpad1', 'Screenshot_2015-06-03-19-31-03-e1433359905965', 'Screenshot_2018-03-02-21-27-17', 'Screenshot_2018-03-25-20-57-20', 'Screenshot_2018-03-25-20-56-46', 'Screenshot_2018-03-02-21-30-49', 'Screenshot_2018-03-02-21-25-31', 'Screenshot_2018-03-25-20-55-28', 'Screenshot_2018-03-02-21-24-19', 'Screenshot_2015-06-03-20-00-12-e1433359959134', 'schapenII_4', 'schapenII_3', 'schapenII_1', 'schapenII_5', 'schapenII_2', 'schapen3', 'schapen2', 'schapen4', 'schapen0', 'schapen1', 'schapen', 'Satriun-Corporate-Performance-Management', 'particleemitter.zip', 'rv', 'ZIP', '3.3 MB', 'Satriun-Our-vision', 'ronvalstar.nl_', 'rekentuin', 'red', 'clients_randstad', 'radialdifference-1', 'qrsRonvalstar', 'qrsRonvalstar', 'rv', 'PNG', '421 Bytes', '155 × 155', 'purple', 'prizes_webby', 'prizes_fwa', 'prizes_adcn', 'pixels', 'pp', 'primitives', 'pocket-masthead', 'PhilipsSpotify.png', 'pi', 'pixelfabrics2', 'pixelfabrics3', 'pixelfabrics1', 'Philips-GEZICHT-Scheerapparaten-e1437373862527', 'perlincomparison.rar', 'rv', 'RAR', '42.73 KB', 'Philips-Consumenten-producten-e1437373928995', 'perlinAndSimplex.rar', 'rv', 'RAR', '13.4 KB', 'philips', 'PDP_CRP_overview_v1', 'perlinnoise.zip', 'rv', 'ZIP', '16.41 KB', 'PDP_CRP_reviews_v1', 'pano3', 'pano4', 'pano2', 'pano1', 'pano0', 'omewillem3', 'Opleidingen-Widget', 'omewillem1', 'omewillem2', 'omewillem0', 'omewillem', 'novartis2', 'novartis5', 'novartis3', 'novartis4', 'noiseTiling.zip', 'rv', 'ZIP', '111.13 KB', 'Lorenz-84-52', 'novartis1', 'noiseCubeMap', 'noiseSpherical', 'noiseTileable', 'noiseCubeMap3D1', 'noiseCylindrical', 'noiseCubeMap3D', 'MYOS_Karly', 'noiseCircle', 'Lorenz-84-57', 'newcolt4', 'newcolt3', 'noise', 'MYOS_home', 'newcolt2', 'newcolt1', 'newcolt', 'newcolt0', 'MYOS_Karly_mobile', 'micromint', 'metenIsWeten', 'microleaf', 'me', 'Lorenz84-12700-04809-11237-03526-02731', 'Lorenz-4600-18500-600-3-4000', 'marbles', 'Lorenz84-1235-655-946-484-356', 'Lorenz84-1235-683-864-484-356', 'Lorenz84-225-2391-2665-1236-48', 'lorenz84-1115-479-974-530-336_copy0', 'Lorenz-84-31', 'lorenz84-1115-479-974-530-336', 'Lorenz84-225-2391-2665-1218-48-11', 'Lorenz84-225-2391-2665-1218-48-1', 'lineLoop', 'Latoocarfian-2304-2991-856-4738-3673-4877', 'line', 'L84', 'logo_s1', 'logo_s', 'kosmonaut3', 'kosmonaut2', 'kosmonaut1', 'kosmonaut4', 'kosmonaut0', 'kosmonaut', 'knottywood', 'kleurenspeuren4', 'kleurenspeuren5', 'kleurenspeuren2', 'kleurenspeuren3', 'kleurenspeuren1', 'kleurenspeuren', 'keizerrijk-1', 'kleurenspeuren0', 'keizerrijk', 'kees5', 'keesfwa', 'kees3', 'kees', 'kees4', 'kees1', 'kees2', 'jurida1', 'kees0', 'jurida5', 'kakebeeke3', 'jurida4', 'jurida3', 'kakebeeke2', 'jurida2', 'kakebeeke1', 'jurida0', 'jsnoise-sjeiti', 'jurida', 'jsnoise-slimeland', 'jsnoise-firefox', 'jsnoise-processingJs', 'jsnoise-opera', 'jsnoise-safari', 'jsnoise-perlincomparison.rar', 'rv', 'RAR', '42.73 KB', 'jsnoise-lonelypinkelephantsX', 'jsnoise-lonelypinkelephants', 'jsnoise-chrome', 'ill_nherengrachtalt', 'jsnoise-classicVsSimplex', 'ill_schelp', 'jsnoise-bankseanClassical', 'ill_kleurenspeuren', 'jsnoise-bankseanSimplex', 'ill_lorenz', 'ill_kapoentjes', 'ill_jennifer', 'ill_gtp', 'HSO-App-students', 'HSO-App-week-1', 'ill_frobfrob', 'HSO-App-student', 'ill_cova', 'HSO-App-profile', 'Edvard_Munch_-_Inheritance_-_Google_Art_Project1', 'HSO-App-mobile-week-1', 'HSO-App-settings', 'HSO-App-overview', 'Helder', 'HSO-App-mobile-login', 'Experiment-glass-Ron-Valstar-8', 'HSO-App-mobile-menu', 'HSO-App-mobile-group-tasks', 'hours', 'Hans-Reinerie-Photography-3', 'headerLogo', 'Hans-Reinerie-Photography-1', 'gridrng', 'gridrng', 'rv', 'PNG', '601 Bytes', '200 × 160', 'Hans-Reinerie-Photography-2', 'gtp-ill', 'gridmodulus', 'gridfloored', 'gridfloored', 'rv', 'PNG', '630 Bytes', '200 × 160', 'greentoday3', 'Drought-e1408008972471', 'greentoday2', 'greentoday1', 'greentoday0', 'git-icon', 'foobarbaz.zip', 'rv', 'ZIP', '2.7 KB', 'fnd', 'fire', 'fire', 'rv', 'JPG', '422 Bytes', '256 × 1', 'ello-optimized-6269606d-1', 'fcwalvisch', 'ffpreview_preview1', 'elephant', 'dustin2', 'dustin4', 'dustin3', 'dustin1', 'De-Philips-SHAVER-Series-9000-SensoTouch-Scheerapparaat-voor-nat-droog-scheren-RQ1275-16-Scheerapparaat-voor-nat-droog-scheren-kopen-e1437373812808', 'diagram_1-1', 'diagramcircleline.txt', 'rv', 'TXT', '2.75 KB', 'del', 'DEC_Grid_Latest_small_banner', 'Curiculum-Vitae-_-Ron-Valstar-_-front-end-developer', 'deepred3', 'deepred2', 'deepred1', 'DEC_Compare_Page_v1', 'crystal1', 'crystal0', 'Clipboard35', 'clouds', 'Clipboard01', 'Clipboard011', 'Clifford3D-1111-1293-4665-2408-3651-2627', 'clients_sikkens', 'clients_uva', 'clients_tddb', 'clients_2x4', 'clients_bia', 'clients_resn', 'clients_novartis', 'clients_72', 'clients_philips', 'classicVsSimplex', 'chocolatl2', 'chocolatl1', 'chocolatl3', '20141111_130028', 'budlight_1', 'attractorLorenz84_1', 'budlight_6', 'budlight_4', 'budlight_5', 'budlight_3', 'budlight_2', 'blob', 'bookmarklet.rar', 'rv', 'RAR', '2.41 KB', 'blauweplaneet', 'blauweplaneet3', 'blauweplaneet4', 'blauweplaneet2', 'attractors00', 'blauweplaneet0', 'blauweplaneet1', 'attractors02', 'blackfun1', 'blackjack', 'blackfun', 'attractors01', 'baard', 'attractorDeJong', 'attractorLorenz', 'attractor', 'allerhande71', 'Artboard-1', 'amm1', 'allerhande31', 'amfphp_as3.zip', 'rv', 'ZIP', '1.73 KB', 'allerhande51', 'allerhande61', 'allerhande41', 'allerhande6', 'allerhande21', 'allerhande11', '12723551', 'allerhande2', 'allerhande7', '11054398564_d0001f56ff_b', 'allerhande5', 'allerhande4', 'allerhande3', 'allerhande1', 'allerhande01', '5410177218_d28d7c8f42_o', 'allerhande0', '7050027543_c352248fc7_b', '140102-N-PL185-099', '5572829236_cc13d5e471_o', '6788949859_4f4efbe244_o', '5411825070_3eb14f3130_o', '10599605_936299733064994_595747535533991474_n', '09_PDP_Coffee', '800px-Binary_Code', '8145-v1', '404', '06_glitches', '2007', '05_medisch-rapport', '5', '03_PDP_Shavers', '3', '4', '04_video'];

const getImg = () => {
  const index = Math.random() * list.length << 0;
  return imgBasePath + list[index] + '.jpg';
};

let inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])('vertical', {
  init,
  exit,
  handleAnimate,
  handleResize
}),
    zuper = inst.zuper //
// private variables
,
    w,
    h,
    hMax,
    target //
,
    canvas,
    context //
,
    patternCanvas,
    patternContext //
,
    img,
    imgTemp,
    imgPreview,
    imgPreviewUri,
    feedback,
    margin = 8,
    millisOffset = 0,
    millisScale = 0.01,
    switchMillLst = 0,
    switchMillCnt = 0;

function init(_target) {
  target = _target;
  canvas = zuper.init(_target);
  context = inst.context; //

  patternCanvas = document.createElement('canvas');
  patternContext = patternCanvas.getContext('2d'); //

  handleResize(); //

  canvas.addEventListener('click', loadImage, true); //

  imgPreview = document.createElement('img');
  imgPreview.setAttribute('style', 'position:absolute;top:0;left:0;width:10%;display:none;');
  target.appendChild(imgPreview); //

  imgPreviewUri = document.createElement('code');
  imgPreviewUri.setAttribute('style', 'position:absolute;bottom:0;left:0;font:bold 12px Arial;color:white;text-shadow:0 0 2px #000;display:none;');
  target.appendChild(imgPreviewUri); //

  feedback = document.createElement('p');
  Object.assign(feedback.style, {
    position: 'absolute',
    bottom: '5px',
    left: '0',
    display: 'none',
    width: '100%',
    textAlign: 'left',
    font: 'bold 12px Arial',
    color: 'white',
    textShadow: '0 0 2px #000'
  });
  feedback.innerText = 'loading google jsapi';
  target.appendChild(feedback); //

  loadImage(); //

  return canvas;
}

function exit() {
  zuper.exit();
  target.removeChild(imgPreview);
  target.removeChild(imgPreviewUri);
  target.removeChild(feedback);
  canvas.removeEventListener('click', loadImage, true);
} // protected methods


function handleAnimate(deltaT, millis) {
  if (img) {
    millis -= millisOffset;
    canvas.width = w;
    context.fillStyle = '#f00';
    context.fillRect(0, 0, 10, 10);
    let iMaxH = hMax - margin,
        iMil = millisScale * millis << 0,
        iMill = iMil % iMaxH,
        iOff = iMaxH - Math.abs(2 * iMill - iMaxH),
        sx = 1,
        sy = 0;
    switchMillCnt += iMil - switchMillLst;
    switchMillLst = iMil;

    if (switchMillCnt > 0.45 * iMaxH) {
      switchMillCnt = 0;
      loadImage();
    } //


    context.save();
    context.globalCompositeOperation = 'source-over';
    context.transform(1, sy, sx, 1, 0, 0);
    context.drawImage(patternCanvas, 0, iOff, w, margin, -h, 0, w + h, h);
    context.restore(); //

    context.globalCompositeOperation = 'lighter';
    sx = -1;
    context.transform(1, sy, sx, 1, 0, 0);
    context.drawImage(patternCanvas, 0, iOff, w, margin, 0, 0, w + h, h);
  }
}

function handleResize() {
  zuper.handleResize();
  w = inst.w;
  h = inst.h;
  hMax = h;
  patternCanvas.width = w;
  patternCanvas.height = hMax;

  if (img) {
    buildPattern();
  }
} // private methods


function loadImage() {
  feedback.innerText = 'loading image';

  if (!img) {
    imgTemp = document.createElement('img');
    imgTemp.setAttribute('crossOrigin', 'anonymous');
  }

  imgTemp.addEventListener('load', handleImageLoad, false);
  imgTemp.addEventListener('error', handleImageError, false);
  imgTemp.setAttribute('src', getImg());
}

function handleImageError() {
  loadImage();
  imgTemp.removeEventListener('error', handleImageError);
}

function handleImageLoad() {
  img = imgTemp; //

  buildPattern(); //

  let sSrc = img.getAttribute('src');
  imgPreview.setAttribute('src', sSrc);
  imgPreviewUri.innerHTML = sSrc;
  feedback.innerText = ''; //

  switchMillLst = 0;
  switchMillCnt = 0;
  millisOffset = Date.now(); //

  imgTemp.removeEventListener('load', handleImageLoad);
}

function buildPattern() {
  patternCanvas.width = w;
  patternContext.fillStyle = 'rgba(0,0,0,.3)';
  patternContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, hMax);
  patternContext.rect(0, 0, w, h);
  patternContext.fill();
}

/* harmony default export */ __webpack_exports__["default"] = (inst.expose);

/***/ }),

/***/ "./src/experiment/webgl.js":
/*!*********************************!*\
  !*** ./src/experiment/webgl.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/experiment/base.js");
/* harmony import */ var _signal_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signal/signals */ "./src/signal/signals.js");
/* harmony import */ var _utils_parseglsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/parseglsl */ "./src/utils/parseglsl.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/*globals WebGLProgram, WebGLShader*/

/**
 * Base script for initialising a webgl experiment
 * Exposes basic interaction uniforms
 * @module experiment/webgl
 * @see module:experiment/base
 */




let glProto = WebGLRenderingContext.prototype,
    uniformsXF = [function () {}, glProto.uniform1fv, glProto.uniform2fv, glProto.uniform3fv];
/**
 * Webgl scaffold that parses the following uniforms
 * - {float} time Time in seconds
 * - {vec2} resolution Resolution in pixels
 * - {vec3} camP Camera position in coordinates
 * - {vec3} lookAt Camera lookAt in coordinates
 * - {float} down Mouse down is 1.0, not is 0.0
 * - {vec2} drag Current drag in pixels
 * - {vec2} offset Total drag in pixels
 * @param {string} name
 * @param {string} scriptUri
 * @param {object} options
 * @param {object} [options.images]
 * @param {number[]} [options.init]
 * @param {number[]} [options.exit]
 * @param {number[]} [options.handleAnimate]
 * @param {number[]} [options.handleResize]
 * @param {number[]} [options.handleDragStart]
 * @param {number[]} [options.handleDrag]
 * @param {number[]} [options.handleDragEnd]
 * @param {number[]} [options.handleClick]
 * @returns {basePrototype}
 */

function webgl(name, scriptUri, options = {}) {
  let glslUri = location.port !== '' ? scriptUri.replace('/wordpress/wp-content/themes/sjeiti', '') : scriptUri,
      images = options.images,
      inst = Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(name, {
    init,
    exit,
    handleAnimate,
    handleResize,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleClick
  }, 'webgl'),
      zuper = inst.zuper //
  ,
      w,
      h //
  ,
      target,
      canvas,
      gl //
  ,
      buffer,
      contentVertex = 'attribute vec3 position;void main() {gl_Position = vec4( position, 1.0 );}',
      currentProgram,
      vertex_position //
  ,
      start_time = 0,
      time = 0 //
  ,
      isMouseDown = false //
  ,
      mouseLast = {
    x: 0,
    y: 0
  },
      offset = {
    x: 0,
    y: 0 //

  },
      uniformChanges = [],
      initialUniforms = Object.assign({
    size: [2],
    down: [0],
    drag: [0, 0],
    offset: [0, 0],
    resolution: [10, 10]
  }, options.uniforms || {}); //

  for (let name in initialUniforms) {
    addUniformChange(name, initialUniforms[name]);
  } //


  Object.assign(inst, {
    options,
    changes: uniformChanges,
    isMouseDown,
    touchListPos,
    setUniform,
    addUniformChange
  }); //

  return inst;
  /**
   * Override base init
   * @param {HTMLElement} _target
   * @returns {HTMLCanvasElement}
   */

  function init(_target) {
    target = _target;
    canvas = zuper.init(_target);
    gl = inst.gl = inst.context; //

    start_time = Date.now(); //

    currentProgram = inst.program = null;
    Object(_utils_parseglsl__WEBPACK_IMPORTED_MODULE_2__["default"])(glslUri).then(handleFragmentRequest, console.warn.bind(console, 'parse')).then(loadImages); //
    // call child init before events

    callChildMethod(options.init, arguments); //

    _signal_signals__WEBPACK_IMPORTED_MODULE_1__["key"].press.add(handleKeyPress);
    _signal_signals__WEBPACK_IMPORTED_MODULE_1__["key"].up.add(handleKeyUp); //

    handleResize(); //

    return canvas;
  }
  /**
   * Override base exit
   */


  function exit() {
    zuper.exit();
    _signal_signals__WEBPACK_IMPORTED_MODULE_1__["key"].press.remove(handleKeyPress);
    _signal_signals__WEBPACK_IMPORTED_MODULE_1__["key"].up.remove(handleKeyUp);
  }
  /**
   * Override base handleAnimate
   */


  function handleAnimate() {
    if (!currentProgram) return; // clear canvas

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // load program into GPU

    gl.useProgram(currentProgram); // set specific values to program variables

    time = Date.now() - start_time;
    gl.uniform1f(gl.getUniformLocation(currentProgram, 'time'), time / 1000); //
    // call child handleAnimate after useProgram has been called

    callChildMethod(options.handleAnimate, arguments); //
    // set arbitrary values to program variables

    applyUniformChanges(); //
    // Render geometry

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(vertex_position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_position);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disableVertexAttribArray(vertex_position); //

    zuper.handleAnimate();
  }
  /**
   * Override base handleResize
   */


  function handleResize() {
    w = target.clientWidth;
    h = target.clientHeight;
    canvas.width = inst.w = w;
    canvas.height = inst.h = h;
    gl.viewport(0, 0, w, h);
    addUniformChange('resolution', [w, h]);
    callChildMethod(options.handleResize, [w, h]);
  }
  /**
   * Override base handleDragStart
   */


  function handleDragStart(added, touches, e) {
    if (e.target.nodeName === 'CANVAS') {
      isMouseDown = inst.isMouseDown = true;
      addUniformChange('down', [1]);
      e.preventDefault();
      let pos = touchListPos(touches);
      addUniformChange('drag', [pos.x, pos.y]);
      callChildMethod(options.handleDragStart, arguments);
    }
  }
  /**
   * Override base handleDrag
   */


  function handleDrag(touches, e) {
    let pos = touchListPos(touches);

    if (isMouseDown && pos) {
      let dragX = pos.x,
          dragY = pos.y,
          lastX = mouseLast.x,
          lastY = mouseLast.y,
          deltaX = dragX - lastX,
          deltaY = dragY - lastY,
          isFirst = lastX === 0 && lastY === 0,
          isLast = dragX === 0 && dragY === 0;

      if (!isFirst && !isLast) {
        addUniformChange('offset', [offset.x += deltaX, offset.y += deltaY]);
      }

      mouseLast.x = dragX;
      mouseLast.y = dragY;
      addUniformChange('drag', [dragX, dragY]);
      callChildMethod(options.handleDrag, [touches, dragX, dragY, isFirst, isLast, deltaX, deltaY]); //arguments
    }
  }
  /**
   * Override base handleDragEnd
   */


  function handleDragEnd(removed, touches, e) {
    if (isMouseDown) {
      isMouseDown = inst.isMouseDown = false;
      mouseLast.x = 0;
      mouseLast.y = 0;
      addUniformChange('down', [0]);
      addUniformChange('drag', [0, 0]);
      callChildMethod(options.handleDragEnd, arguments);
    }
  }
  /**
   * Override base handleClick
   */


  function handleClick(e) {
    callChildMethod(options.handleClick, arguments);
    inst.changes.push({
      name: 'click',
      values: [e.offsetX, e.offsetY]
    });
  }
  /**
   * Create Vertex buffer (2 triangles) and program
   * @param {string} glslFragment
   * @returns {WebGLProgram}
   */


  function handleFragmentRequest(glslFragment) {
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]), gl.STATIC_DRAW);
    currentProgram = inst.program = createProgram(contentVertex, glslFragment);
    return currentProgram;
  }
  /**
   * Apply uniform changes
   */


  function applyUniformChanges() {
    let numChanges = uniformChanges.length,
        changed = [];

    while (numChanges--) {
      let change = uniformChanges[numChanges],
          name = change.name; // only set last changes

      if (changed.indexOf(name) === -1) {
        setUniform(name, change.values);
        changed.push(name);
      }
    }

    uniformChanges.length = 0;
  }
  /**
   * Set a uniform change to be applied
   * @param {string} name
   * @param {Array} values
   */


  function addUniformChange(name, values) {
    uniformChanges.push({
      name,
      values
    });
  }
  /**
   * Set a uniform
   * @param {string} name
   * @param {Array} values
   * @param {Function} type
   */


  function setUniform(name, values, type) {
    let uniformLocation = gl.getUniformLocation(currentProgram, name),
        num = values.length,
        fn = type || uniformsXF[num];
    fn.call(gl, uniformLocation, values);
  }
  /**
   * Load images and append the textures to the program
   * @param {WebGLProgram} program
   * @returns {WebGLProgram}
   */


  function loadImages(program) {
    images && Promise.all(Object.keys(images).map(name => {
      let src = images[name],
          srcParams = (src.match(/[?&]([^&]*)/g) || []).map(s => s.substr(1).split('=')).reduce((o, [k, v]) => (o[k] = v ? decodeURIComponent(v) : true, o), {}),
          texture = gl.createTexture(),
          uniformLocation = gl.getUniformLocation(program, name),
          wrap = srcParams.clamp ? gl.CLAMP_TO_EDGE : gl.REPEAT; // set temporary 1x1 texture

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255])); // red

      gl.bindTexture(gl.TEXTURE_2D, null); //

      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["loadImage"])(src).then(e => [e.target, wrap, texture, uniformLocation]);
    })).then(loads => {
      // first bind all textures
      loads.forEach(([image, wrap, texture]) => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      }); // then apply all to program

      loads.forEach(([image, wrap, texture, uniformLocation], i) => {
        gl.activeTexture(gl['TEXTURE' + i]); // gl.TEXTURE0

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uniformLocation, i);
      });
    });
    return program;
  }
  /**
   * Handle key up signal
   * @param {number} key
   */


  function handleKeyUp() {
    callChildMethod(options.handleKeyUp, arguments);
  }
  /**
   * Handle key press signal
   */


  function handleKeyPress() {
    //key,eLastKeyDown
    callChildMethod(options.handleKeyPress, arguments);
  }
  /**
   * Create the program from the vertex and the glsl fragment code
   * @param {string} vertex
   * @param {string} fragment
   * @returns {WebGLProgram}
   */


  function createProgram(vertex, fragment) {
    let program = gl.createProgram(),
        vertexShader = initShader(vertex, gl.VERTEX_SHADER),
        fragmentShader = initShader('#ifdef GL_ES\nprecision highp float;\n#endif\n\n' + fragment, gl.FRAGMENT_SHADER);
    if (vertexShader === null || fragmentShader === null) return null;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("ERROR:\n" + "VALIDATE_STATUS: " + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + "\n" + "ERROR: " + gl.getError() + "\n\n" + "- Vertex Shader -\n" + vertex + "\n\n" + "- Fragment Shader -\n" + fragment);
      return null;
    }

    return program;
  }
  /**
   * Initialise webgl shader
   * @param {string} src
   * @param {number} type
   * @returns {WebGLShader}
   */


  function initShader(src, type) {
    src = src.replace(/^\s+|\s+$/g, '');
    let shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn((type === gl.VERTEX_SHADER ? "VERTEX" : "FRAGMENT") + " SHADER:\n" + gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  function callChildMethod(method, methodArguments) {
    method && method.apply(inst, methodArguments);
  }

  function touchListPos(touchList) {
    let touch, value;
    touchList && touchList.forEach(_touch => _touch.pos && (touch = _touch));

    if (touch) {
      let pos = touch.pos;
      value = {
        x: pos.getX(),
        y: pos.getY()
      };
    }

    return value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (webgl);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _experiment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiment */ "./src/experiment/index.js");
//import asdd from './experiment'
//alert(467)

/*window.onerror = function(msg,uri) {
    alert('Error caught'+msg+uri)
}*/
 //alert(!!xp)s
// xp.river.init(document.body)

_experiment__WEBPACK_IMPORTED_MODULE_0__["default"].vertical.init(document.body);

/***/ }),

/***/ "./src/math/color.js":
/*!***************************!*\
  !*** ./src/math/color.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
function color() {
  var undef = function (a) {
    return a;
  }(),
      oReturn = {
    integer: undef,
    r: undef,
    g: undef,
    b: undef,
    hex: undef,
    get: getColor,
    set: setColor,
    randomize: randomize,
    clone: clone,
    rgba: rgba,
    setAlpha: setAlpha,
    add: addColor,
    subtract: subtract,
    average: average,
    multiply: multiply,
    divide: divide,
    brightness: brightness,
    huey: huey,
    saturation: saturation,
    lightness: lightness,
    toString: function () {
      return iA === 1 ? oReturn.hex : oReturn.rgba;
    } //

  },
      fBr = 0.241,
      fBg = 0.691,
      fBb = 0.068 //
  ,
      iClr = 0,
      iLen = 6,
      FF = Math.pow(2, 8) - 1 //,FFFFFF = Math.pow(2,24)-1
  //
  ,
      iR = arguments[0] || 0,
      iG = arguments[1] || 0,
      iB = arguments[2] || 0,
      iA = arguments[3] | 1 //
  ,
      fR = iR / 255,
      fG = iG / 255,
      fB = iB / 255 //,fA = iA/255
  //
  ,
      bHSL = false,
      fH,
      fS,
      fL;

  switch (arguments.length) {
    case 0:
      randomize();
      break;

    case 1:
      if (typeof iR == 'string') {
        if (iR.match(/rgb/gi)) {
          var aRGB = iR.match(/\d+/g);
          iR = parseInt(aRGB[0], 10);
          iG = parseInt(aRGB[1], 10);
          iB = parseInt(aRGB[2], 10);
          iClr = iR << 16 | iG << 8 | iB;
        } else {
          var s = iR.replace('#', '');
          if (s.length === 3) s = s.substr(0, 1) + s.substr(0, 1) + s.substr(1, 1) + s.substr(1, 1) + s.substr(2, 1) + s.substr(2, 1);
          oReturn.integer = iClr = parseInt(s, 16);
        }
      } else oReturn.integer = iClr = iR < 255 ? iR << 16 | iR << 8 | iR : iR;

      break;

    case 2:
      oReturn.integer = iClr = iR;
      break;

    case 3:
      oReturn.integer = iClr = iR << 16 | iG << 8 | iB;
      break;
  }
  /**
   * A color instance as generated by {@link math/color}
   * @namespace colorInstance
   * @see math/color
   */


  function setR(i) {
    oReturn.r = iR = i < 0 ? 0 : i > 255 ? 255 : i + 0.5 << 0;
    fR = iR / 255;
  }

  function setG(i) {
    oReturn.g = iG = i < 0 ? 0 : i > 255 ? 255 : i + 0.5 << 0;
    fG = iG / 255;
  }

  function setB(i) {
    oReturn.b = iB = i < 0 ? 0 : i > 255 ? 255 : i + 0.5 << 0;
    fB = iB / 255;
  } //function setA(i){ /* todo: implement? */ }


  function makeRGB2Int() {
    oReturn.integer = iClr = iR << 16 | iG << 8 | iB;
  }

  function makeInt2RGB() {
    setR(iClr >> 16 & FF);
    setG(iClr >> 8 & FF);
    setB(iClr & FF);
  }

  function makeInt2Hex() {
    //    console.log('iLen',iLen); // log
    //    oReturn.hex = '#'+iClr.toString(16).pad(iLen,'0',true);
    //    oReturn.hex = '#'+string.pad(iClr.toString(16),iLen,'0',true);
    oReturn.hex = '#' + ('000000' + iClr.toString(16)).slice(-iLen);
  }
  /**
   * Returns the color integer value
   * @memberof colorInstance
   * @returns {number}
   */


  function getColor() {
    return iClr;
  }
  /**
   * Set the color
   * @memberof colorInstance
   * @param {Number} i A hexadecimal integer ie 0xFF0000
   * @returns {colorInstance}
   */


  function setColor(i) {
    oReturn.integer = iClr = i;
    makeInt2RGB();
    makeInt2Hex();
    return oReturn;
  }
  /**
   * Randomizes the color
   * @memberof colorInstance
   * @returns {colorInstance}
   */


  function randomize() {
    oReturn.integer = iClr = 0xFFFFFF * Math.random() << 0;
    makeInt2RGB();
    makeInt2Hex();
    return oReturn;
  }
  /**
   * Clones the color
   * @memberof colorInstance
   * @returns {colorInstance}
   */


  function clone() {
    return color(iClr);
  }
  /**
   * Sets the color alpha value
   * @memberof colorInstance
   * @param {Number} alpha The alpha value
   * @returns {String}
   */


  function setAlpha(alpha) {
    rgba(alpha);
    return oReturn;
  }
  /**
   * Sets the color alpha value
   * @memberof colorInstance
   * @param {Number} alpha The alpha value
   * @returns {String}
   */


  function rgba(alpha) {
    if (alpha !== undefined) iA = alpha;
    oReturn.rgba = 'rgba(' + iR + ',' + iG + ',' + iB + ',' + iA + ')';
    return oReturn.rgba;
  }

  function addColor(c) {
    if (!isColor(c)) c = color(c);
    setR(iR + c.r, FF);
    setG(iG + c.g, FF);
    setB(iB + c.b, FF);
    makeRGB2Int();
    makeInt2Hex();
    return oReturn;
  }

  function subtract(c) {
    if (!isColor(c)) c = color(c);
    setR(iR - c.r, 0);
    setG(iG - c.g, 0);
    setB(iB - c.b, 0);
    makeRGB2Int();
    makeInt2Hex();
    return oReturn;
  }

  function multiply(f) {
    setR(f * iR);
    setG(f * iG);
    setB(f * iB);
    makeRGB2Int();
    makeInt2Hex();
    return oReturn;
  }

  function divide(f) {
    setR(iR / f);
    setG(iG / f);
    setB(iB / f);
    makeRGB2Int();
    makeInt2Hex();
    return oReturn;
  }

  function average(clr, part) {
    if (!isColor(clr)) clr = color(clr);
    if (part === undefined) part = 0.5;
    var h = 1 - part;
    setR(h * iR + part * clr.r);
    setG(h * iG + part * clr.g);
    setB(h * iB + part * clr.b);
    makeRGB2Int();
    makeInt2Hex();
    return oReturn;
  }

  function brightness() {
    // todo: add calc bool
    return fR * fR * fBr + fG * fG * fBg + fB * fB * fBb;
  } //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////


  function huey(f) {
    if (!bHSL) makeRGB2HSL();

    if (f === undefined) {
      return fH;
    } else {
      fH = f;
      makeHSL2RGB();
      return oReturn;
    }
  }

  function saturation(f) {
    if (!bHSL) makeRGB2HSL();

    if (f === undefined) {
      return fS;
    } else {
      fS = f;
      makeHSL2RGB();
      return oReturn;
    }
  }

  function lightness(f) {
    if (!bHSL) makeRGB2HSL();

    if (f === undefined) {
      return fL;
    } else {
      fL = f;
      makeHSL2RGB();
      return oReturn;
    }
  }

  function makeRGB2HSL() {
    var fMax = Math.max(fR, fG, fB),
        fMin = Math.min(fR, fG, fB);
    fL = (fMax + fMin) / 2;

    if (fMax === fMin) {
      fH = fS = 0; // achromatic
    } else {
      var d = fMax - fMin;
      fS = fL > 0.5 ? d / (2 - fMax - fMin) : d / (fMax + fMin);

      switch (fMax) {
        case fR:
          fH = (fG - fB) / d + (fG < fB ? 6 : 0);
          break;

        case fG:
          fH = (fB - fR) / d + 2;
          break;

        case fB:
          fH = (fR - fG) / d + 4;
          break;
      }

      fH /= 6;
    }

    bHSL = true;
  }

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function makeHSL2RGB() {
    if (fS === 0) {
      fR = fG = fB = fL; // achromatic
    } else {
      var q = fL < 0.5 ? fL * (1 + fS) : fL + fS - fL * fS,
          p = 2 * fL - q;
      fR = hue2rgb(p, q, fH + 1 / 3);
      fG = hue2rgb(p, q, fH);
      fB = hue2rgb(p, q, fH - 1 / 3);
    }

    setR(fR * 255);
    setG(fG * 255);
    setB(fB * 255);
    makeRGB2Int();
    makeInt2Hex();
  }
  /*function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
      return [h, s, l];
  }
  function hslToRgb(h, s, l){
    var r, g, b;
      if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
      return [r * 255, g * 255, b * 255];
  }*/
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////


  function isColor(c) {
    if (!c) return false;

    for (var s in oReturn) if (c.hasOwnProperty(s) !== oReturn.hasOwnProperty(s)) return false;

    return true;
  }

  makeInt2RGB();
  makeInt2Hex();
  return oReturn;
}

/***/ }),

/***/ "./src/math/lcg.js":
/*!*************************!*\
  !*** ./src/math/lcg.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Implementation of a linear congruential generator.<br/>
 * The linear congruential generator follows this formula: x=(a*x+c)%n where a=multiplier, c=increment and m=modulus.<br/>
 * Multiplier, increment and modulus can be set separately or via one of the presets.<br/>
 * By default the Lehmer prng is used.
 * @namespace math.lcg
 * @summary Linear congruential generator
 * @todo document
 */
var iMultiplier = 48271,
    iIncrement = 0,
    iModulus = 2147483647,
    iSeed = 123,
    oReturn = {
  rnd: rnd,
  random: random //
  ,
  setMultiplier: setMultiplier,
  setIncrement: setIncrement,
  setModulus: setModulus //
  ,
  getMultiplier: getMultiplier,
  getIncrement: getIncrement,
  getModulus: getModulus //
  ,
  setSeed: setSeed //
  ,
  presetLehmer: presetLehmer,
  presetJava: presetJava,
  presetNumeralRecipes: presetNumeralRecipes
};
/**
 * Returns a random number between zero and the set modulus
 * @memberOf math.lcg
 * @param {number} [seed] The seed from which to calculate
 * @param {number} [iterate] The number of iterations
 * @returns {number} An integer between zero and the set modulus
 */

function rnd(seed, iterate) {
  if (seed !== undefined) iSeed = seed;
  if (iterate === undefined) iterate = 1;

  while (iterate--) iSeed = (iMultiplier * iSeed + iIncrement) % iModulus;

  return iSeed;
}
/**
 * Returns a random number between zero and one
 * @memberOf math.lcg
 * @param {number} [seed] The seed from which to calculate
 * @param {number} [iterate] The number of iterations
 * @returns {number} A floating point between zero and one
 */


function random(seed, iterate) {
  return rnd(seed, iterate) / iModulus;
}
/**
 * @memberOf math.lcg
 * @param {number} seed The integer seed
 */


function setSeed(seed) {
  iSeed = seed;
}
/**
 * @memberOf math.lcg
 * @param {number} multiplier The integer multiplier
 */


function setMultiplier(multiplier) {
  iMultiplier = multiplier;
}
/**
 * @memberOf math.lcg
 * @param {number} increment The integer increment
 */


function setIncrement(increment) {
  iIncrement = increment;
}
/**
 * @memberOf math.lcg
 * @param {number} modulus The integer modulus
 */


function setModulus(modulus) {
  iModulus = modulus;
}
/**
 * @memberOf math.lcg
 * @returns {number} The current multiplier
 */


function getMultiplier() {
  return iMultiplier;
}
/**
 * @memberOf math.lcg
 * @returns {number} The current increment
 */


function getIncrement() {
  return iIncrement;
}
/**
 * @memberOf math.lcg
 * @returns {number} The current modulus
 */


function getModulus() {
  return iModulus;
}
/**
 * Sets the current lcg settings to Lehmer
 * @memberOf math.lcg
 * @param {boolean} [minstd]
 * @returns {iddqd.math.prng.lcg}
 */


function presetLehmer(minstd) {
  iMultiplier = minstd ? 16807 : 48271;
  iIncrement = 0;
  iModulus = 2147483647; // 2E31-1 mersenne prime

  return oReturn;
}
/**
 * Sets the current lcg settings to Java
 * @memberOf math.lcg
 * @returns {math.lcg}
 */


function presetJava() {
  iMultiplier = 25214903917;
  iIncrement = 11;
  iModulus = 2E48;
  return oReturn;
}
/**
 * Sets the current lcg settings to NumeralRecipes
 * @memberOf math.lcg
 * @returns {math.lcg}
 */


function presetNumeralRecipes() {
  iMultiplier = 1664525;
  iIncrement = 1013904223;
  iModulus = 2E32;
  return oReturn;
}

/* harmony default export */ __webpack_exports__["default"] = (oReturn);

/***/ }),

/***/ "./src/math/perlin.js":
/*!****************************!*\
  !*** ./src/math/perlin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Perlin  1.0
// Ported from java (http://mrl.nyu.edu/~perlin/noise/) by Ron Valstar (http://www.sjeiti.com/)
// and some help from http://freespace.virgin.net/hugo.elias/models/m_perlin.htm
// AS3 optimizations by Mario Klingemann http://www.quasimondo.com
// then ported to js by Ron Valstar

/**
 * Perlin noise
 * @namespace math.perlin
 * @todo documentation
 */
var oRng = Math;
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var iOctaves = 1;
var fPersistence = 0.5;
var aOctFreq; // frequency per octave

var aOctPers; // persistence per octave

var fPersMax; // 1 / max persistence

var iXoffset;
var iYoffset;
var iZoffset; // init

setOffset();
octFreqPers();
/**
 * Offset the noise space
 */

function setOffset() {
  iXoffset = Math.floor(oRng.random() * 256);
  iYoffset = Math.floor(oRng.random() * 256);
  iZoffset = Math.floor(oRng.random() * 256);
}
/**
 * Calculate persistence and frequency by octaves
 */


function octFreqPers() {
  var fFreq, fPers;
  aOctFreq = [];
  aOctPers = [];
  fPersMax = 0;

  for (var i = 0; i < iOctaves; i++) {
    fFreq = Math.pow(2, i);
    fPers = Math.pow(fPersistence, i);
    fPersMax += fPers;
    aOctFreq.push(fFreq);
    aOctPers.push(fPers);
  }

  fPersMax = 1 / fPersMax;
}
/**
 * The noise function.
 * @param x
 * @param y
 * @param z
 * @returns {number}
 * @method
 * @public
 * @name math.perlin.noise
 */


function noise(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  var fResult = 0;
  var fFreq, fPers;
  var xf, yf, zf, u, v, w, xx, yy, zz;
  var x1, y1, z1;
  var X, Y, Z, A, B, AA, AB, BA, BB, hash;
  var g1, g2, g3, g4, g5, g6, g7, g8;
  x += iXoffset;
  y += iYoffset;
  z += iZoffset;

  for (var i = 0; i < iOctaves; i++) {
    fFreq = aOctFreq[i];
    fPers = aOctPers[i];
    xx = x * fFreq;
    yy = y * fFreq;
    zz = z * fFreq;
    xf = Math.floor(xx);
    yf = Math.floor(yy);
    zf = Math.floor(zz);
    X = Math.floor(xf & 255);
    Y = Math.floor(yf & 255);
    Z = Math.floor(zf & 255);
    xx -= xf;
    yy -= yf;
    zz -= zf;
    u = xx * xx * xx * (xx * (xx * 6 - 15) + 10);
    v = yy * yy * yy * (yy * (yy * 6 - 15) + 10);
    w = zz * zz * zz * (zz * (zz * 6 - 15) + 10);
    A = Math.round(p[X]) + Y;
    AA = Math.round(p[A]) + Z;
    AB = Math.round(p[Math.round(A + 1)]) + Z;
    B = Math.round(p[Math.round(X + 1)]) + Y;
    BA = Math.round(p[B]) + Z;
    BB = Math.round(p[Math.round(B + 1)]) + Z;
    x1 = xx - 1;
    y1 = yy - 1;
    z1 = zz - 1;
    hash = Math.round(p[Math.round(BB + 1)]) & 15;
    g1 = ((hash & 1) === 0 ? hash < 8 ? x1 : y1 : hash < 8 ? -x1 : -y1) + ((hash & 2) === 0 ? hash < 4 ? y1 : hash === 12 ? x1 : z1 : hash < 4 ? -y1 : hash === 14 ? -x1 : -z1);
    hash = Math.round(p[Math.round(AB + 1)]) & 15;
    g2 = ((hash & 1) === 0 ? hash < 8 ? xx : y1 : hash < 8 ? -xx : -y1) + ((hash & 2) === 0 ? hash < 4 ? y1 : hash === 12 ? xx : z1 : hash < 4 ? -y1 : hash === 14 ? -xx : -z1);
    hash = Math.round(p[Math.round(BA + 1)]) & 15;
    g3 = ((hash & 1) === 0 ? hash < 8 ? x1 : yy : hash < 8 ? -x1 : -yy) + ((hash & 2) === 0 ? hash < 4 ? yy : hash === 12 ? x1 : z1 : hash < 4 ? -yy : hash === 14 ? -x1 : -z1);
    hash = Math.round(p[Math.round(AA + 1)]) & 15;
    g4 = ((hash & 1) === 0 ? hash < 8 ? xx : yy : hash < 8 ? -xx : -yy) + ((hash & 2) === 0 ? hash < 4 ? yy : hash === 12 ? xx : z1 : hash < 4 ? -yy : hash === 14 ? -xx : -z1);
    hash = Math.round(p[BB]) & 15;
    g5 = ((hash & 1) === 0 ? hash < 8 ? x1 : y1 : hash < 8 ? -x1 : -y1) + ((hash & 2) === 0 ? hash < 4 ? y1 : hash === 12 ? x1 : zz : hash < 4 ? -y1 : hash === 14 ? -x1 : -zz);
    hash = Math.round(p[AB]) & 15;
    g6 = ((hash & 1) === 0 ? hash < 8 ? xx : y1 : hash < 8 ? -xx : -y1) + ((hash & 2) === 0 ? hash < 4 ? y1 : hash === 12 ? xx : zz : hash < 4 ? -y1 : hash === 14 ? -xx : -zz);
    hash = Math.round(p[BA]) & 15;
    g7 = ((hash & 1) === 0 ? hash < 8 ? x1 : yy : hash < 8 ? -x1 : -yy) + ((hash & 2) === 0 ? hash < 4 ? yy : hash === 12 ? x1 : zz : hash < 4 ? -yy : hash === 14 ? -x1 : -zz);
    hash = Math.round(p[AA]) & 15;
    g8 = ((hash & 1) === 0 ? hash < 8 ? xx : yy : hash < 8 ? -xx : -yy) + ((hash & 2) === 0 ? hash < 4 ? yy : hash === 12 ? xx : zz : hash < 4 ? -yy : hash === 14 ? -xx : -zz);
    g2 += u * (g1 - g2);
    g4 += u * (g3 - g4);
    g6 += u * (g5 - g6);
    g8 += u * (g7 - g8);
    g4 += v * (g2 - g4);
    g8 += v * (g6 - g8);
    fResult += (g8 + w * (g4 - g8)) * fPers;
  }

  return (fResult * fPersMax + 1) * 0.5;
}
/**
 * Set the noisedetail
 * @param octaves
 * @param falloff
 */


function noiseDetail(octaves, falloff) {
  iOctaves = octaves || iOctaves;
  fPersistence = falloff || fPersistence;
  octFreqPers();
}
/**
 * Sets the random number generator
 * @param {Object} r
 */


function setRng(r) {
  oRng = r;
  setOffset();
  octFreqPers();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  noise: noise,
  noiseDetail: noiseDetail,
  setRng: setRng,
  toString: function () {
    return "[object Perlin " + iOctaves + " " + fPersistence + "]";
  }
});

/***/ }),

/***/ "./src/math/vector.js":
/*!****************************!*\
  !*** ./src/math/vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A mathematical vector with an x and y position.
 * Can be used for numerous vector calculations.
 * @name iddqd.math.vector
 * @method
 * @param {Number} x
 * @param {Number} y
 * @returns {vectorInstance}
 */
// iddqd.ns('iddqd.math.vector',(function(){
//   'use strict'
let aPool = [],
    _vector;

function vector(x, y) {
  let fX,
      fY // ,_vector// = iddqd.math.vector// todo: check if this works
  ,
      fSize = 0,
      bRecalculateSize = true,
      fRad = 0,
      bRecalculateRadians = true,
      iLargest = 4503599627370496,
      oVector = {
    getX: getX,
    getY: getY,
    setX: setX,
    setY: setY,
    set: setXY,
    setVector: setVector //
    ,
    size: size,
    setSize: setSize,
    normalize: normalize,
    normalized: normalized,
    distance: distance //
    ,
    radians: radians,
    degrees: degrees,
    angle: angle,
    rotate: rotate,
    rotation: rotation //
    ,
    add: add,
    addNumber: addNumber,
    addVector: addVector,
    subtract: subtract,
    subtractNumber: subtractNumber,
    subtractVector: subtractVector,
    multiply: multiply,
    multiplyNumber: multiplyNumber,
    multiplyVector: multiplyVector,
    divide: divide,
    divideNumber: divideNumber,
    divideVector: divideVector,
    average: average //
    ,
    uv: uv,
    inTriangle: inTriangle,
    map: map //,intersectLineLine: intersectLineLine
    //
    ,
    clone: clone //
    ,
    drop: drop //
    ,
    toString: toString,
    toArray: toArray //    /**
    //     * A vector instance
    //     * @typedef {Object} vectorInstance
    //     */

    /**
     * A vector instance as generated by {@link iddqd.math.vector}
     * @namespace vectorInstance
     * @see iddqd.math.vector
     */
    // initialisation

  };
  setXY(x, y);

  function drop() {
    aPool.push(oVector);
    return oVector;
  } // GETTER SETTER

  /**
   * Get the x position
   * @memberof vectorInstance
   * @returns {Number}
   */


  function getX() {
    return fX;
  }
  /**
   * Get the y position
   * @memberof vectorInstance
   * @returns {Number}
   */


  function getY() {
    return fY;
  }
  /**
   * Sets the x value and returns the vector.
   * @memberof vectorInstance
   * @param {Number} x
   * @returns vectorInstance
   */


  function setX(x) {
    bRecalculateRadians = true;
    bRecalculateSize = true;
    fX = x;
    return oVector;
  }
  /**
   * Sets the y value and returns the vector.
   * @memberof vectorInstance
   * @param {Number} y
   * @returns vectorInstance
   */


  function setY(y) {
    bRecalculateRadians = true;
    bRecalculateSize = true;
    fY = y;
    return oVector;
  }
  /**
   * Sets the x and y values and returns the vector.
   * @memberof vectorInstance
   * @param {Number} x
   * @param {Number} y
   * @returns vectorInstance
   */


  function setXY(x, y) {
    bRecalculateRadians = true;
    bRecalculateSize = true;
    fX = x;
    fY = y;
    return oVector;
  }
  /**
   * Copies the x and y value from the parsed vector and returns the vector.
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns vectorInstance
   */


  function setVector(v) {
    bRecalculateRadians = true;
    bRecalculateSize = true;
    fX = v.getX();
    fY = v.getY();
    return oVector;
  } // SIZE FUNCTIONS

  /**
   * Returns the size of the vector
   * @memberof vectorInstance
   * @returns {number}
   */


  function size() {
    if (bRecalculateSize) {
      fSize = Math.sqrt(fX * fX + fY * fY);
      bRecalculateSize = false;
    }

    return fSize;
  }
  /**
   * Sets the size and returns the vector
   * @memberof vectorInstance
   * @param {Number} f
   * @returns vectorInstance
   */


  function setSize(f) {
    normalize();
    fX = fX * f;
    fY = fY * f;
    fSize = f;
    return oVector;
  }
  /**
   * Normalizes the vector and returns it.
   * @memberof vectorInstance
   * @returns vectorInstance
   */


  function normalize() {
    if (size() !== 0 && fSize !== 1) {
      // todo: make faster
      fX = fX / fSize;
      fY = fY / fSize;
      fSize = 1;
    }

    return oVector;
  }
  /**
   * Returns a new, normalized vector.
   * @memberof vectorInstance
   * @returns vectorInstance
   */


  function normalized() {
    return _vector(fX / size(), fY / size());
  }
  /**
   * Returns the distance between two vectors
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns {Number}
   */


  function distance(v) {
    v = v.clone();
    v.subtract(oVector);
    return v.drop().size();
  } // ROTATION FUNCTIONS

  /**
   * Returns the rotation of the vector in radians.
   * @memberof vectorInstance
   * @returns {number} A number from 0 to 2
   */


  function radians() {
    if (bRecalculateRadians) {
      fRad = (fY > 0 ? 1 : 0) + Math.atan(-fX / fY) / Math.PI;
      bRecalculateRadians = false;
    }

    return fRad;
  }
  /**
   * Returns the rotation of the vector in degrees.
   * @memberof vectorInstance
   * @returns {number} A number from 0 to 360
   */


  function degrees() {
    return radians() * 180;
  }
  /**
   * Returns the angle in radians.
   * @memberof vectorInstance
   * @obsolete use radians
   * @returns {number}
   */


  function angle() {
    return radians();
  }
  /**
   * Adds radians to the rotation of the vector and returns it.
   * @memberof vectorInstance
   * @param {Number} radians
   * @returns vectorInstance
   */


  function rotate(radians) {
    fRad = radians() + radians;
    calculateXY();
    return oVector;
  }
  /**
   * Sets the rotation of the vector and returns it.
   * @memberof vectorInstance
   * @param {Number} radians
   * @returns vectorInstance
   */


  function rotation(radians) {
    fRad = radians;
    calculateXY();
    return oVector;
  } // NORMAL CALCULATIONS
  // ADDING

  /**
   * Translates the vector by adding either a number or a vector.
   * @memberof vectorInstance
   * @param {Number|vectorInstance} o
   * @returns vectorInstance
   */


  function add(o) {
    return isObject(o) ? addVector(o) : addNumber(o);
  }
  /**
   * Translates the vector by addition. Presumes x is y if y value is not given.
   * @memberof vectorInstance
   * @param {Number} x
   * @param {Number} [y]
   * @returns vectorInstance
   */


  function addNumber(x, y) {
    fX = fX + x;
    fY = fY + (y === undefined ? x : y);
    bRecalculateRadians = true; // todo: could be unnecessary unless negative

    bRecalculateSize = true;
    return oVector;
  }
  /**
   * Translates the vector by adding another vector.
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns vectorInstance
   */


  function addVector(v) {
    fX = fX + v.getX();
    fY = fY + v.getY();
    bRecalculateRadians = true;
    bRecalculateSize = true;
    return oVector;
  } // SUBTRACTION

  /**
   * Translates the vector by subtracting either a number or a vector.
   * @memberof vectorInstance
   * @param {Number|vectorInstance} o
   * @returns vectorInstance
   */


  function subtract(o) {
    return isObject(o) ? subtractVector(o) : subtractNumber(o);
  }
  /**
   * Translates the vector by subtraction. Presumes x is y if y value is not given.
   * @memberof vectorInstance
   * @param {Number} x
   * @param {Number} [y]
   * @returns vectorInstance
   */


  function subtractNumber(x, y) {
    fX = fX - x;
    fY = fY - (y === undefined ? x : y);
    bRecalculateRadians = true; // todo: could be unnecessary unless negative

    bRecalculateSize = true;
    return oVector;
  }
  /**
   * Translates the vector by subtracting another vector.
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns vectorInstance
   */


  function subtractVector(v) {
    fX = fX - v.getX();
    fY = fY - v.getY();
    bRecalculateRadians = true;
    bRecalculateSize = true;
    return oVector;
  } // MULTIPLY

  /**
   * Multiplies the vector by either a number or a vector.
   * @memberof vectorInstance
   * @param {Number|vectorInstance} o
   * @returns vectorInstance
   */


  function multiply(o) {
    return isObject(o) ? multiplyVector(o) : multiplyNumber(o);
  }
  /**
   * Multiplies the vector. Presumes x is y if y value is not given.
   * @memberof vectorInstance
   * @param {Number} x
   * @param {Number} [y]
   * @returns vectorInstance
   */


  function multiplyNumber(x, y) {
    fX = fX * x;
    fY = fY * (y === undefined ? x : y);
    fSize = fSize * x;
    return oVector;
  }
  /**
   * Multiplies the vector by another vector.
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns vectorInstance
   */


  function multiplyVector(v) {
    fX = fX * v.getX();
    fY = fY * v.getY();
    bRecalculateRadians = true;
    bRecalculateSize = true;
    return oVector;
  } // DIVIDE

  /**
   * Divides the vector by either a number or a vector.
   * @memberof vectorInstance
   * @param {Number|vectorInstance} o
   * @returns vectorInstance
   */


  function divide(o) {
    return isObject(o) ? divideVector(o) : divideNumber(o);
  }
  /**
   * Divides the vector. Presumes x is y if y value is not given.
   * @memberof vectorInstance
   * @param {Number} x
   * @param {Number} [y]
   * @returns vectorInstance
   */


  function divideNumber(x, y) {
    if (x === 0) x = iLargest;
    if (y === 0) y = iLargest;
    fX = fX / x;
    fY = fY / (y === undefined ? x : y);
    fSize = fSize / x;
    return oVector;
  }
  /**
   * Divides the vector by another vector.
   * @memberof vectorInstance
   * @param vectorInstance v
   * @returns vectorInstance
   */


  function divideVector(v) {
    fX = fX / (v.getX() | iLargest);
    fY = fY / (v.getY() | iLargest);
    bRecalculateRadians = true;
    bRecalculateSize = true;
    return oVector;
  } // AVERAGE

  /**
   * Calculates the average between two vectors
   * @memberof vectorInstance
   * @param vectorInstance v the other vector
   * @param {Number} [f=0.5] how much the other vector weighs
   * @returns vectorInstance
   */


  function average(v, f) {
    if (f === undefined) f = 0.5;
    multiplyNumber(1 - f).add(v.clone().drop().multiplyNumber(f));
    bRecalculateRadians = true;
    bRecalculateSize = true;
    return oVector;
  }
  /*  //
    function crossProduct(v1,v2) {
      return v1.getX()*v2.getY() - v1.getY()*v2.getX()
    }
    function dotProduct(v1,v2) {
      return v1.getX()*v2.getX() + v1.getY()*v2.getY()
    }
    function sameSide(p1,p2, a,b) {
  //    let cp1 = crossProduct(b-a, p1-a)
  //      ,cp2 = crossProduct(b-a, p2-a)
      let cp1 = crossProduct(b.clone().subtract(a), p1.clone().subtract(a))
        ,cp2 = crossProduct(b.clone().subtract(a), p2.clone().subtract(a))
      return dotProduct(cp1,cp2)>=0
    }
    function pointInTriangle(p, a,b,c) {
      return sameSide(p,a, b,c)&&sameSide(p,b, a,c)&&sameSide(p,c, a,b)
    }*/


  function getTriangleVectors(a, b, c) {
    let ax = a.getX(),
        ay = a.getY(),
        bx = b.getX(),
        by = b.getY(),
        cx = c.getX(),
        cy = c.getY();
    return {
      v1: _vector(cx - ax, cy - ay),
      v2: _vector(bx - ax, by - ay)
    };
  }

  function uv(a, b, c) {
    let oTV = getTriangleVectors(a, b, c),
        v1 = oTV.v1,
        v2 = oTV.v2,
        a1 = v1.toArray(),
        a2 = v2.toArray(),
        ap = [fX - a.getX(), fY - a.getY()] //
    ,
        dot00 = a1[0] * a1[0] + a1[1] * a1[1],
        dot01 = a1[0] * a2[0] + a1[1] * a2[1],
        dot02 = a1[0] * ap[0] + a1[1] * ap[1],
        dot11 = a2[0] * a2[0] + a2[1] * a2[1],
        dot12 = a2[0] * ap[0] + a2[1] * ap[1] //
    ,
        invDenom = 1 / (dot00 * dot11 - dot01 * dot01) //
    ,
        u = (dot11 * dot02 - dot01 * dot12) * invDenom,
        v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return {
      u: u,
      v: v,
      v1: v1,
      v2: v2
    };
  }

  function map(a, b, c, d, e, f) {
    let oUv = uv(a, b, c),
        oTV = getTriangleVectors(d, e, f),
        vb1 = oTV.v1,
        vb2 = oTV.v2,
        fb1 = vb1.size(),
        fb2 = vb2.size();
    vb1.normalize().multiply(oUv.u * fb1);
    vb2.normalize().multiply(oUv.v * fb2);
    return d.clone().add(vb1).add(vb2);
  }

  function inTriangle(a, b, c) {
    // credit: http://www.blackpawn.com/texts/pointinpoly/default.html
    let oUv = uv(a, b, c),
        u = oUv.u,
        v = oUv.v;
    return u >= 0 && v >= 0 && u + v < 1;
  }
  /*function intersectLineLine(a1,a2,b1,b2) { // credit; http://www.kevlindev.com/gui/math/intersection
    let result
    let ua_t = (b2.getX() - b1.getX()) * (a1.getY() - b1.getY()) - (b2.getY() - b1.getY()) * (a1.getX() - b1.getX())
    let ub_t = (a2.getX() - a1.getX()) * (a1.getY() - b1.getY()) - (a2.getY() - a1.getY()) * (a1.getX() - b1.getX())
    let u_b = (b2.getY() - b1.getY()) * (a2.getX() - a1.getX()) - (b2.getX() - b1.getX()) * (a2.getY() - a1.getY())
    if (u_b!=0) {
      let ua = ua_t/u_b
      let ub = ub_t/u_b
      if (0<=ua && ua<=1 && 0<=ub && ub<=1) {
        result = vector(a1.getX() + ua * (a2.getX() - a1.getX()),a1.getY() + ua * (a2.getY() - a1.getY()))
      }
    }
    return result
  }*/
  // private


  function calculateXY() {
    fX = size() * Math.sin(fRad * Math.PI);
    fY = -size() * Math.cos(fRad * Math.PI);
  }

  function isObject(o) {
    return typeof o == 'object';
  } // misc


  function clone() {
    return _vector(fX, fY);
  }

  function toString() {
    return '[object vector(' + fX + ',' + fY + ')]';
  }

  function toArray() {
    return [fX, fY];
  } // return


  return oVector;
}

_vector = function (x, y) {
  return aPool.length ? aPool.pop().set(x, y) : vector(x, y);
};

/* harmony default export */ __webpack_exports__["default"] = (_vector); // })())
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/*iddqd.math.vector.crossPoint = function (v1,v2,v3,v4) {
  'use strict'
  let  v12 = v1.clone().subtractVector(v2)
    ,fA1 = v12.getY()/v12.getX()
    ,fB1 = v2.getY()-v2.getX()*fA1
      ,v34 = v3.clone().subtractVector(v4)
    ,fA2 = v34.getY()/v34.getX()
    ,fB2 = v4.getY()-v4.getX()*fA2
      ,fX = (fB2-fB1)/(fA1-fA2)
    ,fY = fX*fA1+fB1
    return iddqd.math.vector(fX,fY)
};*/

/*
      ,p1 = [-40,-20+40*Math.sin(.0001*t)]
      ,p2 = [-20,-5]
      ,p12 = [p1[0]-p2[0],p1[1]-p2[1]]
      ,p12a = p12[1]/p12[0]
      ,p12b = p1[1]-p1[0]*p12a
      //
      ,p3 = [40,0]
      ,p4 = [35+40*Math.sin(.00023*t),-10]
      ,p34 = [p3[0]-p4[0],p3[1]-p4[1]]
      ,p34a = p34[1]/p34[0]
      ,p34b = p3[1]-p3[0]*p34a
      //
      // x = x*p12a+p12b
      // x = x*p34a+p34b
      // x*p12a+p12b = x*p34a+p34b
      // x*p12a-x*p34a = p34b-p12b
      // x*(p12a-p34a) = p34b-p12b
      // x = (p34b-p12b)/(p12a-p34a)
      ,xx = (p34b-p12b)/(p12a-p34a)

*/

/*let vector = iddqd.math.vector
  ,v1 = vector(1,2).drop()
  ,v2 = vector(9,9)
  ,v3 = vector(5,5)

let i = 100
while (i--){
  vector(1,2).drop()
}
window.onerror=function(err){
  //console.log(JSON.stringify(arguments))
  console.log(err)
}
alert(v2);*/

/***/ }),

/***/ "./src/network/xhttp.js":
/*!******************************!*\
  !*** ./src/network/xhttp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global ActiveXObject */

/**
 * Do an xhttp request
 * @module io/xhttp
 * @param {string} url
 * @param {Function} callback
 * @param {Object} postData
 * @returns {XMLHttpRequest}
 **/
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  'use strict'; // todo: refactor

  var XMLHttpFactories = [function () {
    return new XMLHttpRequest();
  }, function () {
    return new ActiveXObject("Msxml2.XMLHTTP");
  }, function () {
    return new ActiveXObject("Msxml3.XMLHTTP");
  }, function () {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }];

  function sendRequest(url, callback, errorCallback, postData) {
    var oXHR = getXHR(),
        sMethod = postData ? 'POST' : 'GET';
    if (!oXHR) return;
    oXHR.open(sMethod, url, true); //req.setRequestHeader('User-Agent','XMLHTTP/1.0');

    if (postData) {
      oXHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    oXHR.onreadystatechange = function () {
      if (oXHR.readyState != 4) return;

      if (oXHR.status != 200 && oXHR.status != 304) {
        errorCallback('HTTP error ' + oXHR.status); // todo: check error stati and flow

        return;
      }

      callback(oXHR);
    };

    if (oXHR.readyState == 4) return;
    oXHR.send(postData);
    return oXHR;
  }
  /**
   * Create an xhttp object
   * @name iddqd.network.xhttp.create
   * @method
   * @return {XMLHttpRequest}
   **/


  function getXHR() {
    var xmlhttp = false;

    for (var i = 0; i < XMLHttpFactories.length; i++) {
      try {
        xmlhttp = XMLHttpFactories[i]();
      } catch (e) {
        continue;
      }

      break;
    }

    return xmlhttp;
  }

  sendRequest.create = getXHR;
  return sendRequest; //[
  //	'Content-length'
  //	//
  //	,'Cache-Control'
  //	,'Content-Language'
  //	,'Content-Type'
  //	,'Expires'
  //	,'Last-Modified'
  //	,'Pragma'
  //	,'Pragma'
  //	//
  //	,'Access-Control-Request-Method'
  //	,'Access-Control-Request-Headers'
  //	,'Access-Control-Allow-Origin'
  //	,'Access-Control-Allow-Credentials'
  //	,'Access-Control-Expose-Headers'
  //	,'Access-Control-Max-Age'
  //	,'Access-Control-Allow-Methods'
  //	,'Access-Control-Allow-Headers'
  //	//
  //	,'Content-Transfer-Encoding'
  //]
})());

/***/ }),

/***/ "./src/signal/animate.js":
/*!*******************************!*\
  !*** ./src/signal/animate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


let fDeltaT = 0,
    iCurMillis,
    iLastMillis = Date.now();

const signal = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
      iMilliLen = 10,
      aMillis = function (a, n) {
  for (let i = 0; i < iMilliLen; i++) a.push(n);

  return a;
}([], iLastMillis),
      iFrameNr = 0;

animate();

function animate() {
  iCurMillis = Date.now();
  aMillis.push(iCurMillis - iLastMillis);
  aMillis.shift();
  fDeltaT = 0;

  for (let i = 0; i < iMilliLen; i++) fDeltaT += aMillis[i];

  iLastMillis = iCurMillis;
  signal.dispatch(fDeltaT / iMilliLen, iCurMillis, iFrameNr);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(animate);
}
/**
 * Animates something
 * @name animate
 * @memberof iddqd.animate
 * @method
 * @private
 * @param {Number} duration Length of animation in milliseconds.
 * @param {Function} step Function called each step with a progress parameter (a 0-1 float).
 * @param {Function} complete Callback function when animation finishes.
 * @return {Object} An animation object with a cancel function.
 */


signal.during = (duration, step, complete) => {
  let timeStart = Date.now(),
      isRunning = true,
      fnRun = function () {
    if (isRunning) {
      let timeCurrent = Date.now() - timeStart;

      if (timeCurrent < duration) {
        step(timeCurrent / duration);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(fnRun);
      } else {
        step(1);
        complete && complete();
      }
    }
  };

  function cancel() {
    isRunning = false;
  }

  fnRun();
  return {
    cancel
  };
};

/* harmony default export */ __webpack_exports__["default"] = (signal);

/***/ }),

/***/ "./src/signal/drag.js":
/*!****************************!*\
  !*** ./src/signal/drag.js ***!
  \****************************/
/*! exports provided: dragstart, drag, dragend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragstart", function() { return dragstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return drag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragend", function() { return dragend; });
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector */ "./src/math/vector.js");


/**
 * Signal for start of drag.<br/>
 * The callback for this signal is Function(oAdd,oTouches)
 * @name dragstart
 * @type Signal
 */

/**
 * Signal for dragging.<br/>
 * The callback for this signal is Function(oTouches)
 * @name drag
 * @type Signal
 */

/**
 * Signal for end of drag.<br/>
 * The callback for this signal is Function(oDelete,oTouches)
 * @name dragend
 * @type Signal
 */

/**
 * Stop page scrolling when dragging
 * @name drag.stopPageScroll
 * @type Boolean
 */

/**
 * todo: ?
 * @name drag.touch
 * @type Function
 */

let typeOfTouch = typeof window.Touch,
    bTouch = !!(typeOfTouch == 'object' || typeOfTouch == 'function' || window.DocumentTouch && document instanceof DocumentTouch),
    loop = (oa, fn) => {
  for (let i = 0, l = oa.length; i < l; i++) fn(oa[i]);
},
    iFakeId = 0,
    dragstart = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
    drag = Object.assign(new signals__WEBPACK_IMPORTED_MODULE_0___default.a(), {
  stopPageScroll: false,
  touch
}),
    dragend = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
    oTouches = {};

Object.defineProperty(oTouches, 'length', {
  value: 0,
  writable: true
});
Object.defineProperty(oTouches, 'add', {
  value: function (touch) {
    this[touch.id] = touch;
    this.length++;
    return touch;
  }
});
Object.defineProperty(oTouches, 'remove', {
  value: function (id) {
    let touch = this[id];
    delete this[id];
    this.length = Math.max(this.length - 1, 0);
    return touch;
  }
});
addForEach(oTouches);

function addForEach(o) {
  Object.defineProperty(o, 'forEach', {
    value: function (fn) {
      for (let s in this) {
        fn(this[s], s, this);
      }
    }
  });
  return o;
}
/**
 * Initialise event listeners
 */


let mBody = document.body;
document.addEventListener('mousemove', handleDrag, false);
document.addEventListener('mousedown', handleDrag, false);
document.addEventListener('mouseup', handleDrag, false);

if (bTouch) {
  mBody.ontouchstart = mBody.ontouchmove = mBody.ontouchend = handleDrag;
}
/**
 * Handles event for both touch and
 * @param e
 * @returns {boolean}
 */


function handleDrag(e) {
  //e.preventDefault()
  let bReturn = true,
      isMouse = Object.prototype.toString.call(e) == '[object MouseEvent]'; // is ['touchstart'...].indexOf(e.type) faster?

  bTouch = !isMouse;

  switch (e.type) {
    case 'mousedown':
    case 'touchstart':
      let oAdd = addForEach({});

      if (bTouch) {
        loop(e.changedTouches, function (o) {
          if (typeof o != 'object') return;
          let id = o.identifier;
          oAdd[id] = oTouches.add(touch(id, Object(_math_vector__WEBPACK_IMPORTED_MODULE_1__["default"])(o.pageX, o.pageY)));
        });
      } else {
        iFakeId++;
        oAdd[iFakeId] = oTouches.add(touch(iFakeId, Object(_math_vector__WEBPACK_IMPORTED_MODULE_1__["default"])(e.pageX, e.pageY)));
      }

      dragstart.dispatch(oAdd, oTouches, e);
      break;

    case 'mouseup':
    case 'touchend':
      let oDelete = addForEach({});

      if (bTouch) {
        loop(e.changedTouches, function (o) {
          if (typeof o != 'object') return;
          let id = o.identifier;
          oDelete[id] = oTouches.remove(id);
        });
      } else {
        oDelete[iFakeId] = oTouches.remove(iFakeId);
      }

      dragend.dispatch(oDelete, oTouches, e);
      break;

    case 'mousemove':
    case 'touchmove':
      if (bTouch) {
        loop(e.touches, function (o) {
          if (typeof o != 'object') return;
          let oTouch = oTouches[o.identifier];
          oTouch.update(o.pageX, o.pageY);
        });
      } else {
        let oTouch = oTouches[iFakeId];
        if (oTouch !== undefined) oTouch.update(e.pageX, e.pageY);
      }

      if (oTouches.length > 0) drag.dispatch(oTouches, e);
      bReturn = false;
      break;

    default:
      console.log(e.type, e);
  }

  if (bTouch && e.touches && e.touches.length !== oTouches.length) checkForOrphans(e.touches);
  return !drag.stopPageScroll || bReturn;
}
/**
 *
 * @param id
 * @param vpos
 * @returns {{id: *, pos: (*|Object|Mixed), start: *, last: (*|Object|Mixed), update: update, toString: toString}}
 */


function touch(id, vpos) {
  let oReturn = {
    id: id,
    pos: vpos.clone(),
    start: vpos,
    last: vpos.clone(),
    update,
    toString: () => '[object touch ' + id + ']'
  };

  function update(x, y) {
    oReturn.last.set(oReturn.pos.getX(), oReturn.pos.getY());
    oReturn.pos.set(x, y);
  }

  return oReturn;
}
/**
 * @param touches
 */


function checkForOrphans(touches) {
  let aIds = [];
  loop(touches, function (o) {
    aIds.push(o.identifier);
  });
  let oDead = {};
  loop(oTouches, function (o, id) {
    if (aIds.indexOf(parseInt(id, 10)) === -1) {
      oDead[id] = o;
      oTouches.remove && oTouches.remove(id); // todo: check
    }
  });
  dragend.dispatch(oDead, touches);
}



/***/ }),

/***/ "./src/signal/fullscreen.js":
/*!**********************************!*\
  !*** ./src/signal/fullscreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);

const fullScreen = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
      vendorPrefixes = ['', 'webkit', 'moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = (fullScreen);
/**
 * Dispatched when the viewport fullscreen state changes.
 * @name signals.fullScreen
 * @type Signal
 */

vendorPrefixes.forEach(prefix => document.addEventListener(prefix + 'fullscreenchange', onFullscreenEvent, false));

function onFullscreenEvent(e) {
  let fullscreenElement = getFullscreenElement();
  fullScreen.dispatch(!!fullscreenElement, fullscreenElement);
}

function getFullscreenElement() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

function getFullscreenState() {
  return !!getFullscreenElement();
}

Object.defineProperty(fullScreen, 'element', {
  enumerable: false,
  configurable: false,
  get: getFullscreenElement
});
Object.defineProperty(fullScreen, 'state', {
  enumerable: false,
  configurable: false,
  get: getFullscreenState
});

/***/ }),

/***/ "./src/signal/key.js":
/*!***************************!*\
  !*** ./src/signal/key.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ "./src/signal/animate.js");


/**
* Wrapper namespace for keyboard signals.<br/>
* Is really an Array containing pressed keycodes.
* @namespace iddqd.signal.key
* @summary Wrapper namespace for keyboard signals.
*/

let eLastKeyDown // ,bInit = false

/**
 * Signal for keyPress.<br/>
 * The callback for this signal is Function(keys,event)
 * @name iddqd.signal.keypress
 * @type Signal
 */
,
    press = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() //signal(init)

/**
 * Signal for keyDown.<br/>
 * The callback for this signal is Function(keyCode,keys,event)
 * @name iddqd.signal.keydown
 * @type Signal
 */
,
    down = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() //signal(initDown)

/**
 * Signal for keyUp.<br/>
 * The callback for this signal is Function(keyCode,keys,event)
 * @name iddqd.signal.keyup
 * @type Signal
 */
,
    up = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() //signal(initUp)
//
,
    key = Object.assign([], {
  press: press,
  down: down,
  up: up
}); // function init(){
//   if (!bInit) {
//     bInit = true;
// up.add(fn).detach();
// press.add(fn).detach();
// down.add(fn).detach();
// }
// }
// function initDown(signal){
//   init();

document.addEventListener('keydown', function (e) {
  const iKeyCode = e.keyCode;
  key[iKeyCode] = true;
  eLastKeyDown = e;
  down.dispatch(iKeyCode, key, e);
  _animate__WEBPACK_IMPORTED_MODULE_1__["default"].add(keypress);
}); // }
// function initUp(signal){
//   init();

document.addEventListener('keyup', function (e) {
  const iKeyCode = e.keyCode;
  key[iKeyCode] = false;
  _animate__WEBPACK_IMPORTED_MODULE_1__["default"].remove(keypress);
  up.dispatch(iKeyCode, key, e);
}); // }

function keypress() {
  press.dispatch(key, eLastKeyDown);
}

/* harmony default export */ __webpack_exports__["default"] = (key);

/***/ }),

/***/ "./src/signal/resize.js":
/*!******************************!*\
  !*** ./src/signal/resize.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);

let resize = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
    win = window,
    doc = document,
    html = doc.documentElement,
    body = doc.body,
    w,
    h;
setSize();
win.addEventListener('resize', function (docElm) {
  const wOld = w,
        hOld = h;
  setSize();
  resize.dispatch(w, h, wOld, hOld);
}, false);

function setSize() {
  resize.w = resize.width = w = win.innerWidth || html.clientWidth || body.clientWidth;
  resize.h = resize.height = h = win.innerHeight || html.clientHeight || body.clientHeight;
}

/* harmony default export */ __webpack_exports__["default"] = (resize);

/***/ }),

/***/ "./src/signal/scroll.js":
/*!******************************!*\
  !*** ./src/signal/scroll.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/** Signal for scrolling.<br/>
 * The callback for this signal is Function(scrollLeft,scrollTop)
 * @name iddqd.signal.scroll
 * @type Signal
 */


let scroll = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
    doc = document,
    body = doc.body,
    capture = true,
    passive = true,
    listenerOptions = {
  capture,
  passive
};
window.addEventListener('touchmove', handleScroll, listenerOptions);
window.addEventListener('scroll', handleScroll, listenerOptions);

function handleScroll(e) {
  scroll.dispatch(e, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getScrollX"])(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getScrollY"])());
}

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/signal/signals.js":
/*!*******************************!*\
  !*** ./src/signal/signals.js ***!
  \*******************************/
/*! exports provided: modelLoaded, routeChange, pageLoaded, projectLoaded, taxonomyHover, lineHighlighted, lockHeader, experimentFrame, fullScreen, resize, animate, dragstart, drag, dragend, key, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelLoaded", function() { return modelLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeChange", function() { return routeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectLoaded", function() { return projectLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxonomyHover", function() { return taxonomyHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHighlighted", function() { return lineHighlighted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockHeader", function() { return lockHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experimentFrame", function() { return experimentFrame; });
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
/* harmony import */ var signals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreen */ "./src/signal/fullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullScreen", function() { return _fullscreen__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize */ "./src/signal/resize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return _resize__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate */ "./src/signal/animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return _animate__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key */ "./src/signal/key.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "key", function() { return _key__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll */ "./src/signal/scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _signal_drag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../signal/drag */ "./src/signal/drag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragstart", function() { return _signal_drag__WEBPACK_IMPORTED_MODULE_6__["dragstart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return _signal_drag__WEBPACK_IMPORTED_MODULE_6__["drag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragend", function() { return _signal_drag__WEBPACK_IMPORTED_MODULE_6__["dragend"]; });








const modelLoaded = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // model
,
      routeChange = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // routefrom, routeto
,
      pageLoaded = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // page
,
      projectLoaded = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // project
,
      taxonomyHover = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(),
      lineHighlighted = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // from, to
,
      lockHeader = new signals__WEBPACK_IMPORTED_MODULE_0___default.a() // boolean
,
      experimentFrame = new signals__WEBPACK_IMPORTED_MODULE_0___default.a(); // canvas



/***/ }),

/***/ "./src/utils/canvasrenderingcontext2d.js":
/*!***********************************************!*\
  !*** ./src/utils/canvasrenderingcontext2d.js ***!
  \***********************************************/
/*! exports provided: createGradient, storeStyle, restoreStyle, drawLine, drawCircle, drawText, drawRect, clear, drawPolygon, drawPolygram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGradient", function() { return createGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeStyle", function() { return storeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreStyle", function() { return restoreStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return drawLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCircle", function() { return drawCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawText", function() { return drawText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRect", function() { return drawRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPolygon", function() { return drawPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPolygram", function() { return drawPolygram; });
/* global CanvasRenderingContext2D */
// todo: document

/**
* CanvasRenderingContext2D methods
* @namespace iddqd.internal.host.canvasrenderingcontext2d
*/
let aStyle = ['strokeStyle', 'fillStyle', 'font', 'lineWidth'],
    oStoredStyle = {};

function createGradient(isLinear, ysize, pos, color) {
  let oGradient = isLinear ? this.createLinearGradient(0, 0, 0, ysize) : this.createRadialGradient(0, 0, 0, 0, 0, ysize),
      i = arguments.length - 2,
      j = i / 2,
      f,
      c;

  if (i <= 0 || i % 2 === 1) {
    throw {
      message: 'please provide position and color' + pos + color
    }; // todo: pos and color?
  }

  while (j--) {
    f = arguments[2 * j + 2];
    c = arguments[2 * j + 3];
    oGradient.addColorStop(f, c);
  }

  return oGradient;
}

function storeStyle() {
  let oStore = {};
  loop(aStyle, function (prop) {
    if (this.hasOwnProperty(prop)) oStore[prop] = this[prop];
  });
  return oStore;
}

function restoreStyle(o) {
  loop(o || oStoredStyle, function (value, prop) {
    if (this.hasOwnProperty(prop)) this[prop] = value;
  });
}

function drawLine(ax, ay, bx, by, lineColor) {
  this.storeStyle();
  this.beginPath();
  if (lineColor) this.strokeStyle = lineColor;
  this.moveTo(ax, ay);
  this.lineTo(bx, by);
  this.stroke();
  this.closePath();
  this.restoreStyle();
}

function drawCircle(x, y, radius, lineColor, fillColor) {
  //        this.storeStyle()
  this.beginPath();
  if (lineColor) this.strokeStyle = lineColor;
  if (fillColor) this.fillStyle = fillColor;
  this.arc(x, y, radius, 0, 2 * Math.PI);
  lineColor && this.stroke();
  fillColor && this.fill();
  this.closePath(); //        this.restoreStyle()
}

function drawText(text, x, y, lineColor, fillColor) {
  this.storeStyle();
  this.beginPath();
  if (lineColor) this.strokeStyle = lineColor;
  if (fillColor) this.fillStyle = fillColor;

  if (lineColor) {
    this.strokeText(text, x, y);
    this.stroke();
  }

  if (fillColor || lineColor === undefined) {
    this.fillText(text, x, y);
    this.fill();
  }

  this.closePath();
  this.restoreStyle();
}

function drawRect(x, y, w, h, lineColor, fillColor) {
  this.storeStyle();
  this.beginPath();
  if (lineColor) this.strokeStyle = lineColor;
  if (fillColor) this.fillStyle = fillColor;
  this.rect(x, y, w, h);
  lineColor && this.stroke();
  fillColor && this.fill();
  this.closePath();
  this.restoreStyle();
}

function clear() {
  this.canvas.width = this.canvas.width;
}
/*,drawCircle: function(x,y,radius,fill,stroke) {
  if (fill===undefined) fill = true
  if (stroke===undefined) stroke = false
  this.translate(x,y)
  this.beginPath()
  this.arc(0,0,radius,0,2*Math.PI)
  fill&&this.fill()
  stroke&&this.stroke()
  this.closePath()
  this.translate(-x,-y)
  return this
}*/


function drawPolygon(x, y, radius, sides, fill, stroke) {
  if (fill === undefined) fill = true;else this.fillStyle = fill;
  if (stroke === undefined) stroke = false;
  this.translate(x, y);

  for (let i = 0, l = sides, a = 2 * Math.PI / l, s = Math.cos(a / 2); i < l; i++) {
    this.beginPath();
    this.moveTo(0, -1);
    this.rotate(-a / 2);
    this.lineTo(0, radius);
    this.rotate(a);
    this.lineTo(0, radius);
    this.rotate(-a / 2);

    if (fill) {
      this.scale(s, s);
      this.fill();
      this.scale(1 / s, 1 / s); //console.log('fill',fill); // log
    }
    /*if (fill) {
      this.fill()
    }*/


    this.rotate(a);
    stroke && this.stroke(); // todo: fix strokes to boundary

    this.closePath();
  }

  this.translate(-x, -y);
  return this;
}

function drawPolygram(x, y, radius, inset, sides, fill, stroke) {
  if (fill === undefined) fill = true;
  if (stroke === undefined) stroke = false;
  this.translate(x, y);

  for (let i = 0, TWOPI = 2 * Math.PI, iNumRot = 2 * sides, fAngle = TWOPI / iNumRot, fAngleH = 0.5 * fAngle, fInset = inset //
  , BB = fInset * Math.sin(fAngle), b = Math.atan(BB / (1 - Math.sqrt(fInset * fInset - BB * BB))) //
  , fGradientScale = Math.tan(b), fGradientAngle = -fAngle / 2 + Math.PI / 2 - b, bSide; i < iNumRot; i++) {
    bSide = i % 2;
    this.beginPath();
    this.moveTo(0, -1);
    this.rotate(-fAngleH);
    this.lineTo(0, bSide ? radius : fInset * radius);
    this.rotate(fAngle);
    this.lineTo(0, bSide ? fInset * radius : radius);
    this.rotate(-fAngleH);

    if (fill) {
      this.rotate(bSide ? fGradientAngle : -fGradientAngle);
      this.scale(fGradientScale, fGradientScale);
      this.fill();
      this.scale(1 / fGradientScale, 1 / fGradientScale);
      this.rotate(bSide ? -fGradientAngle : fGradientAngle);
    }

    this.rotate(fAngle);
    stroke && this.stroke(); // todo: fix strokes to boundary

    this.closePath();
  }

  this.translate(-x, -y);
  return this;
}
/**
 * Traverse an object or array
 * @name iddqd.loop
 * @method
 * @param {Object} o The object or array
 * @param {Function} fn Callback function with the parameters value and key.
 */


function loop(o, fn) {
  if (o && fn) {
    var bArray = Array.isArray ? Array.isArray(o) : Object.prototype.toString.call(o) == '[object Array]';

    if (bArray) {
      var l = o.length,
          i = l,
          j;

      while (i--) {
        j = l - i - 1;
        fn(o[j], j);
      }
    } else {
      //for (var s in o) if (o.hasOwnProperty(s)) fn(s,o[s]);
      for (var s in o) if (fn.call(o[s], o[s], s) === false) break; // ie8 fix

    }
  }
}



/***/ }),

/***/ "./src/utils/parseglsl.js":
/*!********************************!*\
  !*** ./src/utils/parseglsl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _network_xhttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../network/xhttp */ "./src/network/xhttp.js");
 // let xhttp = iddqd.network.xhttp

function parse(uri) {
  return new Promise(function (resolve, reject) {
    //XMLHttpRequest
    Object(_network_xhttp__WEBPACK_IMPORTED_MODULE_0__["default"])(uri, handleXHR.bind(null, resolve, reject));
  });
}

function handleXHR(resolve, reject, request) {
  let responseText = request.responseText,
      includes = responseText.match(/\n*\#include\s+"[^"]+"|\n*\#include\s+<[^>]+>/g) || [],
      promises = [];

  if (includes) {
    for (let i = 0, l = includes.length; i < l; i++) {
      let include = includes[i],
          matchIncludeUri = include.match(/"([^"]+)"|<([^>]+)>/),
          includeUri = matchIncludeUri && (matchIncludeUri[1] || matchIncludeUri[2]),
          promise = parse(includeUri);
      promises.push(promise);
    }
  }

  Promise.all(promises).then(handleParseInclude.bind(null, resolve, reject, request, responseText, includes));
}

function handleParseInclude(resolve, reject, request, responseText, includes, results) {
  for (let i = 0, l = includes.length; i < l; i++) {
    let include = includes[i],
        result = results[i];
    responseText = responseText.replace(include, '\n' + result);
  }

  resolve(responseText);
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getHash, scrollTo, getScrollX, getScrollY, parseLocalUri, toggleFullScreen, wait, deepFreeze, loadImage, requestAnimationFrame, clamp, loadScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHash", function() { return getHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollX", function() { return getScrollX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollY", function() { return getScrollY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLocalUri", function() { return parseLocalUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullScreen", function() { return toggleFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return deepFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScript", function() { return loadScript; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

/**
 * Returns the hash for a scoped module
 * @param {HTMLElement} elm
 * @returns {string}
 */

function getHash(elm) {
  let attrs = elm.attributes,
      hash = '';

  for (let i = attrs.length - 1; i >= 0; i--) {
    let name = attrs[i].name,
        isHash = /^data\-v\-\w+$/.test(name);
    if (isHash) hash = name;
  }

  return hash;
}
/**
 * Scroll
 * @param {HTMLElement} elm
 * @param {number} [t=1000] time in milliseconds
 * @param {function} [ease=Power1.easeInOut] easing
 * @param {number} [offset=0]
 * @param {boolean} [update=false]
 * @returns {string}
 */


function scrollTo(elm, t = 1000, ease = gsap__WEBPACK_IMPORTED_MODULE_0__["Power1"].easeInOut, offset = 0, update = false) {
  let currentY = getScrollY(),
      animObj = {
    y: currentY
  },
      elmTop = elm.getBoundingClientRect().top,
      targetY = currentY + elmTop + offset,
      tweenMethod = update && gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"] || gsap__WEBPACK_IMPORTED_MODULE_0__["TweenLite"],
      tweenInstance;
  tweenInstance = tweenMethod.to(animObj, t / 1000, {
    y: targetY,
    ease: ease,
    onUpdate: function () {
      window.scrollTo(0, animObj.y);

      if (update) {
        let curElmTop = elm.getBoundingClientRect().top,
            newTargetY = animObj.y + curElmTop + offset;
        if (newTargetY !== targetY) tweenInstance.updateTo({
          y: newTargetY
        });
      }
    }
  });
}
/**
 * Retreive current vertical scroll position
 * @returns {Number}
 */


function getScrollY() {
  return window.pageYOffset !== null ? window.pageYOffset : html.scrollTop !== null ? html.scrollTop : document.body.scrollTop;
}
/**
 * Retreive current vertical scroll position
 * @returns {Number}
 */


function getScrollX() {
  return window.pageXOffset !== null ? window.pageXOffset : html.scrollLeft !== null ? html.scrollLeft : document.body.scrollLeft;
}

function parseLocalUri(uri) {
  return uri.replace('http://localhost.ronvalstar', '').replace('http://' + location.host, '');
}

function toggleFullScreen(element) {
  let isNotFullscreen = !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement;

  if (isNotFullscreen) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  return isNotFullscreen;
}

function wait(ticks) {} // requestAnimFrame()

/**
 * Recursive Object.freeze
 * @param {Object} o
 * @returns {Object}
 */


function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
    img.src = src;
  });
}
/**
 * Function that executes the callback asap.
 * @name requestAnimationFrame
 * @method
 */


const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60));
/**
 * @param {number} n
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 */


function clamp(n, min = 0, max = 1) {
  return Math.min(Math.max(n, min), max);
}
/**
 * Load javascript file
 * @name loadScript
 * @method
 * @returns {Promise}
 */


function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    document.body.appendChild(script);
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    script.setAttribute('src', src);
  });
}



/***/ })

/******/ });
//# sourceMappingURL=index.js.map