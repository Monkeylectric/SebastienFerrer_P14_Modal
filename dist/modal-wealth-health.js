function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dr = { exports: {} }, Et = {}, Gt = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function No() {
  if (bn)
    return M;
  bn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.iterator;
  function j(s) {
    return s === null || typeof s != "object" ? null : (s = S && s[S] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Y = Object.assign, Q = {};
  function ee(s, p, T) {
    this.props = s, this.context = p, this.refs = Q, this.updater = T || x;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(s, p) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, p, "setState");
  }, ee.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function G() {
  }
  G.prototype = ee.prototype;
  function P(s, p, T) {
    this.props = s, this.context = p, this.refs = Q, this.updater = T || x;
  }
  var z = P.prototype = new G();
  z.constructor = P, Y(z, ee.prototype), z.isPureReactComponent = !0;
  var L = Array.isArray, I = Object.prototype.hasOwnProperty, C = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(s, p, T) {
    var V, D = {}, H = null, K = null;
    if (p != null)
      for (V in p.ref !== void 0 && (K = p.ref), p.key !== void 0 && (H = "" + p.key), p)
        I.call(p, V) && !R.hasOwnProperty(V) && (D[V] = p[V]);
    var U = arguments.length - 2;
    if (U === 1)
      D.children = T;
    else if (1 < U) {
      for (var F = Array(U), oe = 0; oe < U; oe++)
        F[oe] = arguments[oe + 2];
      D.children = F;
    }
    if (s && s.defaultProps)
      for (V in U = s.defaultProps, U)
        D[V] === void 0 && (D[V] = U[V]);
    return { $$typeof: e, type: s, key: H, ref: K, props: D, _owner: C.current };
  }
  function ge(s, p) {
    return { $$typeof: e, type: s.type, key: p, ref: s.ref, props: s.props, _owner: s._owner };
  }
  function xe(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function Le(s) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(T) {
      return p[T];
    });
  }
  var Ae = /\/+/g;
  function de(s, p) {
    return typeof s == "object" && s !== null && s.key != null ? Le("" + s.key) : p.toString(36);
  }
  function me(s, p, T, V, D) {
    var H = typeof s;
    (H === "undefined" || H === "boolean") && (s = null);
    var K = !1;
    if (s === null)
      K = !0;
    else
      switch (H) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case r:
              K = !0;
          }
      }
    if (K)
      return K = s, D = D(K), s = V === "" ? "." + de(K, 0) : V, L(D) ? (T = "", s != null && (T = s.replace(Ae, "$&/") + "/"), me(D, p, T, "", function(oe) {
        return oe;
      })) : D != null && (xe(D) && (D = ge(D, T + (!D.key || K && K.key === D.key ? "" : ("" + D.key).replace(Ae, "$&/") + "/") + s)), p.push(D)), 1;
    if (K = 0, V = V === "" ? "." : V + ":", L(s))
      for (var U = 0; U < s.length; U++) {
        H = s[U];
        var F = V + de(H, U);
        K += me(H, p, T, F, D);
      }
    else if (F = j(s), typeof F == "function")
      for (s = F.call(s), U = 0; !(H = s.next()).done; )
        H = H.value, F = V + de(H, U++), K += me(H, p, T, F, D);
    else if (H === "object")
      throw p = String(s), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function le(s, p, T) {
    if (s == null)
      return s;
    var V = [], D = 0;
    return me(s, V, "", "", function(H) {
      return p.call(T, H, D++);
    }), V;
  }
  function Ee(s) {
    if (s._status === -1) {
      var p = s._result;
      p = p(), p.then(function(T) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = T);
      }, function(T) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = T);
      }), s._status === -1 && (s._status = 0, s._result = p);
    }
    if (s._status === 1)
      return s._result.default;
    throw s._result;
  }
  var E = { current: null }, fe = { transition: null }, we = { ReactCurrentDispatcher: E, ReactCurrentBatchConfig: fe, ReactCurrentOwner: C };
  return M.Children = { map: le, forEach: function(s, p, T) {
    le(s, function() {
      p.apply(this, arguments);
    }, T);
  }, count: function(s) {
    var p = 0;
    return le(s, function() {
      p++;
    }), p;
  }, toArray: function(s) {
    return le(s, function(p) {
      return p;
    }) || [];
  }, only: function(s) {
    if (!xe(s))
      throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, M.Component = ee, M.Fragment = n, M.Profiler = c, M.PureComponent = P, M.StrictMode = i, M.Suspense = m, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, M.cloneElement = function(s, p, T) {
    if (s == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
    var V = Y({}, s.props), D = s.key, H = s.ref, K = s._owner;
    if (p != null) {
      if (p.ref !== void 0 && (H = p.ref, K = C.current), p.key !== void 0 && (D = "" + p.key), s.type && s.type.defaultProps)
        var U = s.type.defaultProps;
      for (F in p)
        I.call(p, F) && !R.hasOwnProperty(F) && (V[F] = p[F] === void 0 && U !== void 0 ? U[F] : p[F]);
    }
    var F = arguments.length - 2;
    if (F === 1)
      V.children = T;
    else if (1 < F) {
      U = Array(F);
      for (var oe = 0; oe < F; oe++)
        U[oe] = arguments[oe + 2];
      V.children = U;
    }
    return { $$typeof: e, type: s.type, key: D, ref: H, props: V, _owner: K };
  }, M.createContext = function(s) {
    return s = { $$typeof: h, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, s.Provider = { $$typeof: f, _context: s }, s.Consumer = s;
  }, M.createElement = he, M.createFactory = function(s) {
    var p = he.bind(null, s);
    return p.type = s, p;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(s) {
    return { $$typeof: _, render: s };
  }, M.isValidElement = xe, M.lazy = function(s) {
    return { $$typeof: w, _payload: { _status: -1, _result: s }, _init: Ee };
  }, M.memo = function(s, p) {
    return { $$typeof: O, type: s, compare: p === void 0 ? null : p };
  }, M.startTransition = function(s) {
    var p = fe.transition;
    fe.transition = {};
    try {
      s();
    } finally {
      fe.transition = p;
    }
  }, M.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, M.useCallback = function(s, p) {
    return E.current.useCallback(s, p);
  }, M.useContext = function(s) {
    return E.current.useContext(s);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(s) {
    return E.current.useDeferredValue(s);
  }, M.useEffect = function(s, p) {
    return E.current.useEffect(s, p);
  }, M.useId = function() {
    return E.current.useId();
  }, M.useImperativeHandle = function(s, p, T) {
    return E.current.useImperativeHandle(s, p, T);
  }, M.useInsertionEffect = function(s, p) {
    return E.current.useInsertionEffect(s, p);
  }, M.useLayoutEffect = function(s, p) {
    return E.current.useLayoutEffect(s, p);
  }, M.useMemo = function(s, p) {
    return E.current.useMemo(s, p);
  }, M.useReducer = function(s, p, T) {
    return E.current.useReducer(s, p, T);
  }, M.useRef = function(s) {
    return E.current.useRef(s);
  }, M.useState = function(s) {
    return E.current.useState(s);
  }, M.useSyncExternalStore = function(s, p, T) {
    return E.current.useSyncExternalStore(s, p, T);
  }, M.useTransition = function() {
    return E.current.useTransition();
  }, M.version = "18.2.0", M;
}
var St = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
St.exports;
var _n;
function $o() {
  return _n || (_n = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", i = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), O = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ee = Symbol.iterator, G = "@@iterator";
      function P(t) {
        if (t === null || typeof t != "object")
          return null;
        var o = ee && t[ee] || t[G];
        return typeof o == "function" ? o : null;
      }
      var z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, L = {
        transition: null
      }, I = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, C = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, R = {}, he = null;
      function ge(t) {
        he = t;
      }
      R.setExtraStackFrame = function(t) {
        he = t;
      }, R.getCurrentStack = null, R.getStackAddendum = function() {
        var t = "";
        he && (t += he);
        var o = R.getCurrentStack;
        return o && (t += o() || ""), t;
      };
      var xe = !1, Le = !1, Ae = !1, de = !1, me = !1, le = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: L,
        ReactCurrentOwner: C
      };
      le.ReactDebugCurrentFrame = R, le.ReactCurrentActQueue = I;
      function Ee(t) {
        {
          for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
            u[l - 1] = arguments[l];
          fe("warn", t, u);
        }
      }
      function E(t) {
        {
          for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
            u[l - 1] = arguments[l];
          fe("error", t, u);
        }
      }
      function fe(t, o, u) {
        {
          var l = le.ReactDebugCurrentFrame, v = l.getStackAddendum();
          v !== "" && (o += "%s", u = u.concat([v]));
          var k = u.map(function(b) {
            return String(b);
          });
          k.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, k);
        }
      }
      var we = {};
      function s(t, o) {
        {
          var u = t.constructor, l = u && (u.displayName || u.name) || "ReactClass", v = l + "." + o;
          if (we[v])
            return;
          E("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", o, l), we[v] = !0;
        }
      }
      var p = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(t) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(t, o, u) {
          s(t, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(t, o, u, l) {
          s(t, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(t, o, u, l) {
          s(t, "setState");
        }
      }, T = Object.assign, V = {};
      Object.freeze(V);
      function D(t, o, u) {
        this.props = t, this.context = o, this.refs = V, this.updater = u || p;
      }
      D.prototype.isReactComponent = {}, D.prototype.setState = function(t, o) {
        if (typeof t != "object" && typeof t != "function" && t != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, o, "setState");
      }, D.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      };
      {
        var H = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, K = function(t, o) {
          Object.defineProperty(D.prototype, t, {
            get: function() {
              Ee("%s(...) is deprecated in plain JavaScript React classes. %s", o[0], o[1]);
            }
          });
        };
        for (var U in H)
          H.hasOwnProperty(U) && K(U, H[U]);
      }
      function F() {
      }
      F.prototype = D.prototype;
      function oe(t, o, u) {
        this.props = t, this.context = o, this.refs = V, this.updater = u || p;
      }
      var Re = oe.prototype = new F();
      Re.constructor = oe, T(Re, D.prototype), Re.isPureReactComponent = !0;
      function Se() {
        var t = {
          current: null
        };
        return Object.seal(t), t;
      }
      var Tt = Array.isArray;
      function Ze(t) {
        return Tt(t);
      }
      function ur(t) {
        {
          var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
          return u;
        }
      }
      function et(t) {
        try {
          return Ve(t), !1;
        } catch {
          return !0;
        }
      }
      function Ve(t) {
        return "" + t;
      }
      function We(t) {
        if (et(t))
          return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(t)), Ve(t);
      }
      function Pt(t, o, u) {
        var l = t.displayName;
        if (l)
          return l;
        var v = o.displayName || o.name || "";
        return v !== "" ? u + "(" + v + ")" : u;
      }
      function Ye(t) {
        return t.displayName || "Context";
      }
      function Te(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case f:
            return "Fragment";
          case c:
            return "Portal";
          case _:
            return "Profiler";
          case h:
            return "StrictMode";
          case S:
            return "Suspense";
          case j:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case O:
              var o = t;
              return Ye(o) + ".Consumer";
            case m:
              var u = t;
              return Ye(u._context) + ".Provider";
            case w:
              return Pt(t, t.render, "ForwardRef");
            case x:
              var l = t.displayName || null;
              return l !== null ? l : Te(t.type) || "Memo";
            case Y: {
              var v = t, k = v._payload, b = v._init;
              try {
                return Te(b(k));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ue = Object.prototype.hasOwnProperty, tt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xt, At, rt;
      rt = {};
      function mt(t) {
        if (Ue.call(t, "ref")) {
          var o = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function De(t) {
        if (Ue.call(t, "key")) {
          var o = Object.getOwnPropertyDescriptor(t, "key").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function cr(t, o) {
        var u = function() {
          xt || (xt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
      function jt(t, o) {
        var u = function() {
          At || (At = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
      function It(t) {
        if (typeof t.ref == "string" && C.current && t.__self && C.current.stateNode !== t.__self) {
          var o = Te(C.current.type);
          rt[o] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, t.ref), rt[o] = !0);
        }
      }
      var ze = function(t, o, u, l, v, k, b) {
        var A = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: i,
          // Built-in properties that belong on the element
          type: t,
          key: o,
          ref: u,
          props: b,
          // Record the component responsible for creating this element.
          _owner: k
        };
        return A._store = {}, Object.defineProperty(A._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(A, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(A, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
      };
      function lr(t, o, u) {
        var l, v = {}, k = null, b = null, A = null, B = null;
        if (o != null) {
          mt(o) && (b = o.ref, It(o)), De(o) && (We(o.key), k = "" + o.key), A = o.__self === void 0 ? null : o.__self, B = o.__source === void 0 ? null : o.__source;
          for (l in o)
            Ue.call(o, l) && !tt.hasOwnProperty(l) && (v[l] = o[l]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          v.children = u;
        else if (Z > 1) {
          for (var re = Array(Z), ne = 0; ne < Z; ne++)
            re[ne] = arguments[ne + 2];
          Object.freeze && Object.freeze(re), v.children = re;
        }
        if (t && t.defaultProps) {
          var ie = t.defaultProps;
          for (l in ie)
            v[l] === void 0 && (v[l] = ie[l]);
        }
        if (k || b) {
          var ue = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          k && cr(v, ue), b && jt(v, ue);
        }
        return ze(t, k, b, A, B, C.current, v);
      }
      function fr(t, o) {
        var u = ze(t.type, o, t.ref, t._self, t._source, t._owner, t.props);
        return u;
      }
      function dr(t, o, u) {
        if (t == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var l, v = T({}, t.props), k = t.key, b = t.ref, A = t._self, B = t._source, Z = t._owner;
        if (o != null) {
          mt(o) && (b = o.ref, Z = C.current), De(o) && (We(o.key), k = "" + o.key);
          var re;
          t.type && t.type.defaultProps && (re = t.type.defaultProps);
          for (l in o)
            Ue.call(o, l) && !tt.hasOwnProperty(l) && (o[l] === void 0 && re !== void 0 ? v[l] = re[l] : v[l] = o[l]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          v.children = u;
        else if (ne > 1) {
          for (var ie = Array(ne), ue = 0; ue < ne; ue++)
            ie[ue] = arguments[ue + 2];
          v.children = ie;
        }
        return ze(t.type, k, b, A, B, Z, v);
      }
      function Ne(t) {
        return typeof t == "object" && t !== null && t.$$typeof === i;
      }
      var Dt = ".", pr = ":";
      function hr(t) {
        var o = /[=:]/g, u = {
          "=": "=0",
          ":": "=2"
        }, l = t.replace(o, function(v) {
          return u[v];
        });
        return "$" + l;
      }
      var nt = !1, Nt = /\/+/g;
      function je(t) {
        return t.replace(Nt, "$&/");
      }
      function Be(t, o) {
        return typeof t == "object" && t !== null && t.key != null ? (We(t.key), hr("" + t.key)) : o.toString(36);
      }
      function $e(t, o, u, l, v) {
        var k = typeof t;
        (k === "undefined" || k === "boolean") && (t = null);
        var b = !1;
        if (t === null)
          b = !0;
        else
          switch (k) {
            case "string":
            case "number":
              b = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case i:
                case c:
                  b = !0;
              }
          }
        if (b) {
          var A = t, B = v(A), Z = l === "" ? Dt + Be(A, 0) : l;
          if (Ze(B)) {
            var re = "";
            Z != null && (re = je(Z) + "/"), $e(B, o, re, "", function(Io) {
              return Io;
            });
          } else
            B != null && (Ne(B) && (B.key && (!A || A.key !== B.key) && We(B.key), B = fr(
              B,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              u + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (B.key && (!A || A.key !== B.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                je("" + B.key) + "/"
              ) : "") + Z
            )), o.push(B));
          return 1;
        }
        var ne, ie, ue = 0, ye = l === "" ? Dt : l + pr;
        if (Ze(t))
          for (var qt = 0; qt < t.length; qt++)
            ne = t[qt], ie = ye + Be(ne, qt), ue += $e(ne, o, u, ie, v);
        else {
          var Tr = P(t);
          if (typeof Tr == "function") {
            var yn = t;
            Tr === yn.entries && (nt || Ee("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), nt = !0);
            for (var Ao = Tr.call(yn), mn, jo = 0; !(mn = Ao.next()).done; )
              ne = mn.value, ie = ye + Be(ne, jo++), ue += $e(ne, o, u, ie, v);
          } else if (k === "object") {
            var gn = String(t);
            throw new Error("Objects are not valid as a React child (found: " + (gn === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : gn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ue;
      }
      function qe(t, o, u) {
        if (t == null)
          return t;
        var l = [], v = 0;
        return $e(t, l, "", "", function(k) {
          return o.call(u, k, v++);
        }), l;
      }
      function vr(t) {
        var o = 0;
        return qe(t, function() {
          o++;
        }), o;
      }
      function $t(t, o, u) {
        qe(t, function() {
          o.apply(this, arguments);
        }, u);
      }
      function yr(t) {
        return qe(t, function(o) {
          return o;
        }) || [];
      }
      function Ft(t) {
        if (!Ne(t))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
      function Mt(t) {
        var o = {
          $$typeof: O,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: t,
          _currentValue2: t,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        o.Provider = {
          $$typeof: m,
          _context: o
        };
        var u = !1, l = !1, v = !1;
        {
          var k = {
            $$typeof: O,
            _context: o
          };
          Object.defineProperties(k, {
            Provider: {
              get: function() {
                return l || (l = !0, E("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), o.Provider;
              },
              set: function(b) {
                o.Provider = b;
              }
            },
            _currentValue: {
              get: function() {
                return o._currentValue;
              },
              set: function(b) {
                o._currentValue = b;
              }
            },
            _currentValue2: {
              get: function() {
                return o._currentValue2;
              },
              set: function(b) {
                o._currentValue2 = b;
              }
            },
            _threadCount: {
              get: function() {
                return o._threadCount;
              },
              set: function(b) {
                o._threadCount = b;
              }
            },
            Consumer: {
              get: function() {
                return u || (u = !0, E("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), o.Consumer;
              }
            },
            displayName: {
              get: function() {
                return o.displayName;
              },
              set: function(b) {
                v || (Ee("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", b), v = !0);
              }
            }
          }), o.Consumer = k;
        }
        return o._currentRenderer = null, o._currentRenderer2 = null, o;
      }
      var Ge = -1, gt = 0, bt = 1, mr = 2;
      function gr(t) {
        if (t._status === Ge) {
          var o = t._result, u = o();
          if (u.then(function(k) {
            if (t._status === gt || t._status === Ge) {
              var b = t;
              b._status = bt, b._result = k;
            }
          }, function(k) {
            if (t._status === gt || t._status === Ge) {
              var b = t;
              b._status = mr, b._result = k;
            }
          }), t._status === Ge) {
            var l = t;
            l._status = gt, l._result = u;
          }
        }
        if (t._status === bt) {
          var v = t._result;
          return v === void 0 && E(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, v), "default" in v || E(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, v), v.default;
        } else
          throw t._result;
      }
      function br(t) {
        var o = {
          // We use these fields to store the result.
          _status: Ge,
          _result: t
        }, u = {
          $$typeof: Y,
          _payload: o,
          _init: gr
        };
        {
          var l, v;
          Object.defineProperties(u, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(k) {
                E("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = k, Object.defineProperty(u, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return v;
              },
              set: function(k) {
                E("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), v = k, Object.defineProperty(u, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return u;
      }
      function _r(t) {
        t != null && t.$$typeof === x ? E("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof t != "function" ? E("forwardRef requires a render function but was given %s.", t === null ? "null" : typeof t) : t.length !== 0 && t.length !== 2 && E("forwardRef render functions accept exactly two parameters: props and ref. %s", t.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), t != null && (t.defaultProps != null || t.propTypes != null) && E("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var o = {
          $$typeof: w,
          render: t
        };
        {
          var u;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return u;
            },
            set: function(l) {
              u = l, !t.name && !t.displayName && (t.displayName = l);
            }
          });
        }
        return o;
      }
      var a;
      a = Symbol.for("react.module.reference");
      function d(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === f || t === _ || me || t === h || t === S || t === j || de || t === Q || xe || Le || Ae || typeof t == "object" && t !== null && (t.$$typeof === Y || t.$$typeof === x || t.$$typeof === m || t.$$typeof === O || t.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        t.$$typeof === a || t.getModuleId !== void 0));
      }
      function y(t, o) {
        d(t) || E("memo: The first argument must be a component. Instead received: %s", t === null ? "null" : typeof t);
        var u = {
          $$typeof: x,
          type: t,
          compare: o === void 0 ? null : o
        };
        {
          var l;
          Object.defineProperty(u, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(v) {
              l = v, !t.name && !t.displayName && (t.displayName = v);
            }
          });
        }
        return u;
      }
      function g() {
        var t = z.current;
        return t === null && E(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), t;
      }
      function q(t) {
        var o = g();
        if (t._context !== void 0) {
          var u = t._context;
          u.Consumer === t ? E("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : u.Provider === t && E("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return o.useContext(t);
      }
      function J(t) {
        var o = g();
        return o.useState(t);
      }
      function W(t, o, u) {
        var l = g();
        return l.useReducer(t, o, u);
      }
      function $(t) {
        var o = g();
        return o.useRef(t);
      }
      function ve(t, o) {
        var u = g();
        return u.useEffect(t, o);
      }
      function ae(t, o) {
        var u = g();
        return u.useInsertionEffect(t, o);
      }
      function se(t, o) {
        var u = g();
        return u.useLayoutEffect(t, o);
      }
      function be(t, o) {
        var u = g();
        return u.useCallback(t, o);
      }
      function Fe(t, o) {
        var u = g();
        return u.useMemo(t, o);
      }
      function Lt(t, o, u) {
        var l = g();
        return l.useImperativeHandle(t, o, u);
      }
      function ke(t, o) {
        {
          var u = g();
          return u.useDebugValue(t, o);
        }
      }
      function so() {
        var t = g();
        return t.useTransition();
      }
      function uo(t) {
        var o = g();
        return o.useDeferredValue(t);
      }
      function co() {
        var t = g();
        return t.useId();
      }
      function lo(t, o, u) {
        var l = g();
        return l.useSyncExternalStore(t, o, u);
      }
      var _t = 0, Kr, Xr, Jr, Qr, Zr, en, tn;
      function rn() {
      }
      rn.__reactDisabledLog = !0;
      function fo() {
        {
          if (_t === 0) {
            Kr = console.log, Xr = console.info, Jr = console.warn, Qr = console.error, Zr = console.group, en = console.groupCollapsed, tn = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: rn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          _t++;
        }
      }
      function po() {
        {
          if (_t--, _t === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: T({}, t, {
                value: Kr
              }),
              info: T({}, t, {
                value: Xr
              }),
              warn: T({}, t, {
                value: Jr
              }),
              error: T({}, t, {
                value: Qr
              }),
              group: T({}, t, {
                value: Zr
              }),
              groupCollapsed: T({}, t, {
                value: en
              }),
              groupEnd: T({}, t, {
                value: tn
              })
            });
          }
          _t < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Er = le.ReactCurrentDispatcher, wr;
      function Vt(t, o, u) {
        {
          if (wr === void 0)
            try {
              throw Error();
            } catch (v) {
              var l = v.stack.trim().match(/\n( *(at )?)/);
              wr = l && l[1] || "";
            }
          return `
` + wr + t;
        }
      }
      var Rr = !1, Wt;
      {
        var ho = typeof WeakMap == "function" ? WeakMap : Map;
        Wt = new ho();
      }
      function nn(t, o) {
        if (!t || Rr)
          return "";
        {
          var u = Wt.get(t);
          if (u !== void 0)
            return u;
        }
        var l;
        Rr = !0;
        var v = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var k;
        k = Er.current, Er.current = null, fo();
        try {
          if (o) {
            var b = function() {
              throw Error();
            };
            if (Object.defineProperty(b.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (ye) {
                l = ye;
              }
              Reflect.construct(t, [], b);
            } else {
              try {
                b.call();
              } catch (ye) {
                l = ye;
              }
              t.call(b.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ye) {
              l = ye;
            }
            t();
          }
        } catch (ye) {
          if (ye && l && typeof ye.stack == "string") {
            for (var A = ye.stack.split(`
`), B = l.stack.split(`
`), Z = A.length - 1, re = B.length - 1; Z >= 1 && re >= 0 && A[Z] !== B[re]; )
              re--;
            for (; Z >= 1 && re >= 0; Z--, re--)
              if (A[Z] !== B[re]) {
                if (Z !== 1 || re !== 1)
                  do
                    if (Z--, re--, re < 0 || A[Z] !== B[re]) {
                      var ne = `
` + A[Z].replace(" at new ", " at ");
                      return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), typeof t == "function" && Wt.set(t, ne), ne;
                    }
                  while (Z >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          Rr = !1, Er.current = k, po(), Error.prepareStackTrace = v;
        }
        var ie = t ? t.displayName || t.name : "", ue = ie ? Vt(ie) : "";
        return typeof t == "function" && Wt.set(t, ue), ue;
      }
      function vo(t, o, u) {
        return nn(t, !1);
      }
      function yo(t) {
        var o = t.prototype;
        return !!(o && o.isReactComponent);
      }
      function Yt(t, o, u) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return nn(t, yo(t));
        if (typeof t == "string")
          return Vt(t);
        switch (t) {
          case S:
            return Vt("Suspense");
          case j:
            return Vt("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case w:
              return vo(t.render);
            case x:
              return Yt(t.type, o, u);
            case Y: {
              var l = t, v = l._payload, k = l._init;
              try {
                return Yt(k(v), o, u);
              } catch {
              }
            }
          }
        return "";
      }
      var on = {}, an = le.ReactDebugCurrentFrame;
      function Ut(t) {
        if (t) {
          var o = t._owner, u = Yt(t.type, t._source, o ? o.type : null);
          an.setExtraStackFrame(u);
        } else
          an.setExtraStackFrame(null);
      }
      function mo(t, o, u, l, v) {
        {
          var k = Function.call.bind(Ue);
          for (var b in t)
            if (k(t, b)) {
              var A = void 0;
              try {
                if (typeof t[b] != "function") {
                  var B = Error((l || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw B.name = "Invariant Violation", B;
                }
                A = t[b](o, b, l, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                A = Z;
              }
              A && !(A instanceof Error) && (Ut(v), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", u, b, typeof A), Ut(null)), A instanceof Error && !(A.message in on) && (on[A.message] = !0, Ut(v), E("Failed %s type: %s", u, A.message), Ut(null));
            }
        }
      }
      function ot(t) {
        if (t) {
          var o = t._owner, u = Yt(t.type, t._source, o ? o.type : null);
          ge(u);
        } else
          ge(null);
      }
      var Sr;
      Sr = !1;
      function sn() {
        if (C.current) {
          var t = Te(C.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
      function go(t) {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + o + ":" + u + ".";
        }
        return "";
      }
      function bo(t) {
        return t != null ? go(t.__source) : "";
      }
      var un = {};
      function _o(t) {
        var o = sn();
        if (!o) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
      function cn(t, o) {
        if (!(!t._store || t._store.validated || t.key != null)) {
          t._store.validated = !0;
          var u = _o(o);
          if (!un[u]) {
            un[u] = !0;
            var l = "";
            t && t._owner && t._owner !== C.current && (l = " It was passed a child from " + Te(t._owner.type) + "."), ot(t), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, l), ot(null);
          }
        }
      }
      function ln(t, o) {
        if (typeof t == "object") {
          if (Ze(t))
            for (var u = 0; u < t.length; u++) {
              var l = t[u];
              Ne(l) && cn(l, o);
            }
          else if (Ne(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var v = P(t);
            if (typeof v == "function" && v !== t.entries)
              for (var k = v.call(t), b; !(b = k.next()).done; )
                Ne(b.value) && cn(b.value, o);
          }
        }
      }
      function fn(t) {
        {
          var o = t.type;
          if (o == null || typeof o == "string")
            return;
          var u;
          if (typeof o == "function")
            u = o.propTypes;
          else if (typeof o == "object" && (o.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          o.$$typeof === x))
            u = o.propTypes;
          else
            return;
          if (u) {
            var l = Te(o);
            mo(u, t.props, "prop", l, t);
          } else if (o.PropTypes !== void 0 && !Sr) {
            Sr = !0;
            var v = Te(o);
            E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
          }
          typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Eo(t) {
        {
          for (var o = Object.keys(t.props), u = 0; u < o.length; u++) {
            var l = o[u];
            if (l !== "children" && l !== "key") {
              ot(t), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ot(null);
              break;
            }
          }
          t.ref !== null && (ot(t), E("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
        }
      }
      function dn(t, o, u) {
        var l = d(t);
        if (!l) {
          var v = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = bo(o);
          k ? v += k : v += sn();
          var b;
          t === null ? b = "null" : Ze(t) ? b = "array" : t !== void 0 && t.$$typeof === i ? (b = "<" + (Te(t.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : b = typeof t, E("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, v);
        }
        var A = lr.apply(this, arguments);
        if (A == null)
          return A;
        if (l)
          for (var B = 2; B < arguments.length; B++)
            ln(arguments[B], t);
        return t === f ? Eo(A) : fn(A), A;
      }
      var pn = !1;
      function wo(t) {
        var o = dn.bind(null, t);
        return o.type = t, pn || (pn = !0, Ee("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(o, "type", {
          enumerable: !1,
          get: function() {
            return Ee("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: t
            }), t;
          }
        }), o;
      }
      function Ro(t, o, u) {
        for (var l = dr.apply(this, arguments), v = 2; v < arguments.length; v++)
          ln(arguments[v], l.type);
        return fn(l), l;
      }
      function So(t, o) {
        var u = L.transition;
        L.transition = {};
        var l = L.transition;
        L.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          t();
        } finally {
          if (L.transition = u, u === null && l._updatedFibers) {
            var v = l._updatedFibers.size;
            v > 10 && Ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), l._updatedFibers.clear();
          }
        }
      }
      var hn = !1, zt = null;
      function Co(t) {
        if (zt === null)
          try {
            var o = ("require" + Math.random()).slice(0, 7), u = e && e[o];
            zt = u.call(e, "timers").setImmediate;
          } catch {
            zt = function(v) {
              hn === !1 && (hn = !0, typeof MessageChannel > "u" && E("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var k = new MessageChannel();
              k.port1.onmessage = v, k.port2.postMessage(void 0);
            };
          }
        return zt(t);
      }
      var at = 0, vn = !1;
      function ko(t) {
        {
          var o = at;
          at++, I.current === null && (I.current = []);
          var u = I.isBatchingLegacy, l;
          try {
            if (I.isBatchingLegacy = !0, l = t(), !u && I.didScheduleLegacyUpdate) {
              var v = I.current;
              v !== null && (I.didScheduleLegacyUpdate = !1, Or(v));
            }
          } catch (ie) {
            throw Bt(o), ie;
          } finally {
            I.isBatchingLegacy = u;
          }
          if (l !== null && typeof l == "object" && typeof l.then == "function") {
            var k = l, b = !1, A = {
              then: function(ie, ue) {
                b = !0, k.then(function(ye) {
                  Bt(o), at === 0 ? Cr(ye, ie, ue) : ie(ye);
                }, function(ye) {
                  Bt(o), ue(ye);
                });
              }
            };
            return !vn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              b || (vn = !0, E("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), A;
          } else {
            var B = l;
            if (Bt(o), at === 0) {
              var Z = I.current;
              Z !== null && (Or(Z), I.current = null);
              var re = {
                then: function(ie, ue) {
                  I.current === null ? (I.current = [], Cr(B, ie, ue)) : ie(B);
                }
              };
              return re;
            } else {
              var ne = {
                then: function(ie, ue) {
                  ie(B);
                }
              };
              return ne;
            }
          }
        }
      }
      function Bt(t) {
        t !== at - 1 && E("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), at = t;
      }
      function Cr(t, o, u) {
        {
          var l = I.current;
          if (l !== null)
            try {
              Or(l), Co(function() {
                l.length === 0 ? (I.current = null, o(t)) : Cr(t, o, u);
              });
            } catch (v) {
              u(v);
            }
          else
            o(t);
        }
      }
      var kr = !1;
      function Or(t) {
        if (!kr) {
          kr = !0;
          var o = 0;
          try {
            for (; o < t.length; o++) {
              var u = t[o];
              do
                u = u(!0);
              while (u !== null);
            }
            t.length = 0;
          } catch (l) {
            throw t = t.slice(o + 1), l;
          } finally {
            kr = !1;
          }
        }
      }
      var Oo = dn, To = Ro, Po = wo, xo = {
        map: qe,
        forEach: $t,
        count: vr,
        toArray: yr,
        only: Ft
      };
      r.Children = xo, r.Component = D, r.Fragment = f, r.Profiler = _, r.PureComponent = oe, r.StrictMode = h, r.Suspense = S, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, r.cloneElement = To, r.createContext = Mt, r.createElement = Oo, r.createFactory = Po, r.createRef = Se, r.forwardRef = _r, r.isValidElement = Ne, r.lazy = br, r.memo = y, r.startTransition = So, r.unstable_act = ko, r.useCallback = be, r.useContext = q, r.useDebugValue = ke, r.useDeferredValue = uo, r.useEffect = ve, r.useId = co, r.useImperativeHandle = Lt, r.useInsertionEffect = ae, r.useLayoutEffect = se, r.useMemo = Fe, r.useReducer = W, r.useRef = $, r.useState = J, r.useSyncExternalStore = lo, r.useTransition = so, r.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(St, St.exports)), St.exports;
}
var En;
function Ur() {
  return En || (En = 1, process.env.NODE_ENV === "production" ? Gt.exports = No() : Gt.exports = $o()), Gt.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Fo() {
  if (wn)
    return Et;
  wn = 1;
  var e = Ur(), r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(_, m, O) {
    var w, S = {}, j = null, x = null;
    O !== void 0 && (j = "" + O), m.key !== void 0 && (j = "" + m.key), m.ref !== void 0 && (x = m.ref);
    for (w in m)
      i.call(m, w) && !f.hasOwnProperty(w) && (S[w] = m[w]);
    if (_ && _.defaultProps)
      for (w in m = _.defaultProps, m)
        S[w] === void 0 && (S[w] = m[w]);
    return { $$typeof: r, type: _, key: j, ref: x, props: S, _owner: c.current };
  }
  return Et.Fragment = n, Et.jsx = h, Et.jsxs = h, Et;
}
var wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Mo() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ur(), r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), _ = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), Y = Symbol.iterator, Q = "@@iterator";
    function ee(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = Y && a[Y] || a[Q];
      return typeof d == "function" ? d : null;
    }
    var G = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(a) {
      {
        for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
          y[g - 1] = arguments[g];
        z("error", a, y);
      }
    }
    function z(a, d, y) {
      {
        var g = G.ReactDebugCurrentFrame, q = g.getStackAddendum();
        q !== "" && (d += "%s", y = y.concat([q]));
        var J = y.map(function(W) {
          return String(W);
        });
        J.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, J);
      }
    }
    var L = !1, I = !1, C = !1, R = !1, he = !1, ge;
    ge = Symbol.for("react.module.reference");
    function xe(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === i || a === f || he || a === c || a === O || a === w || R || a === x || L || I || C || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === S || a.$$typeof === h || a.$$typeof === _ || a.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ge || a.getModuleId !== void 0));
    }
    function Le(a, d, y) {
      var g = a.displayName;
      if (g)
        return g;
      var q = d.displayName || d.name || "";
      return q !== "" ? y + "(" + q + ")" : y;
    }
    function Ae(a) {
      return a.displayName || "Context";
    }
    function de(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case O:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case _:
            var d = a;
            return Ae(d) + ".Consumer";
          case h:
            var y = a;
            return Ae(y._context) + ".Provider";
          case m:
            return Le(a, a.render, "ForwardRef");
          case S:
            var g = a.displayName || null;
            return g !== null ? g : de(a.type) || "Memo";
          case j: {
            var q = a, J = q._payload, W = q._init;
            try {
              return de(W(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, le = 0, Ee, E, fe, we, s, p, T;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function D() {
      {
        if (le === 0) {
          Ee = console.log, E = console.info, fe = console.warn, we = console.error, s = console.group, p = console.groupCollapsed, T = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        le++;
      }
    }
    function H() {
      {
        if (le--, le === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, a, {
              value: Ee
            }),
            info: me({}, a, {
              value: E
            }),
            warn: me({}, a, {
              value: fe
            }),
            error: me({}, a, {
              value: we
            }),
            group: me({}, a, {
              value: s
            }),
            groupCollapsed: me({}, a, {
              value: p
            }),
            groupEnd: me({}, a, {
              value: T
            })
          });
        }
        le < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = G.ReactCurrentDispatcher, U;
    function F(a, d, y) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (q) {
            var g = q.stack.trim().match(/\n( *(at )?)/);
            U = g && g[1] || "";
          }
        return `
` + U + a;
      }
    }
    var oe = !1, Re;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new Se();
    }
    function Tt(a, d) {
      if (!a || oe)
        return "";
      {
        var y = Re.get(a);
        if (y !== void 0)
          return y;
      }
      var g;
      oe = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = K.current, K.current = null, D();
      try {
        if (d) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (ke) {
              g = ke;
            }
            Reflect.construct(a, [], W);
          } else {
            try {
              W.call();
            } catch (ke) {
              g = ke;
            }
            a.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            g = ke;
          }
          a();
        }
      } catch (ke) {
        if (ke && g && typeof ke.stack == "string") {
          for (var $ = ke.stack.split(`
`), ve = g.stack.split(`
`), ae = $.length - 1, se = ve.length - 1; ae >= 1 && se >= 0 && $[ae] !== ve[se]; )
            se--;
          for (; ae >= 1 && se >= 0; ae--, se--)
            if ($[ae] !== ve[se]) {
              if (ae !== 1 || se !== 1)
                do
                  if (ae--, se--, se < 0 || $[ae] !== ve[se]) {
                    var be = `
` + $[ae].replace(" at new ", " at ");
                    return a.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", a.displayName)), typeof a == "function" && Re.set(a, be), be;
                  }
                while (ae >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        oe = !1, K.current = J, H(), Error.prepareStackTrace = q;
      }
      var Fe = a ? a.displayName || a.name : "", Lt = Fe ? F(Fe) : "";
      return typeof a == "function" && Re.set(a, Lt), Lt;
    }
    function Ze(a, d, y) {
      return Tt(a, !1);
    }
    function ur(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function et(a, d, y) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Tt(a, ur(a));
      if (typeof a == "string")
        return F(a);
      switch (a) {
        case O:
          return F("Suspense");
        case w:
          return F("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case m:
            return Ze(a.render);
          case S:
            return et(a.type, d, y);
          case j: {
            var g = a, q = g._payload, J = g._init;
            try {
              return et(J(q), d, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, We = {}, Pt = G.ReactDebugCurrentFrame;
    function Ye(a) {
      if (a) {
        var d = a._owner, y = et(a.type, a._source, d ? d.type : null);
        Pt.setExtraStackFrame(y);
      } else
        Pt.setExtraStackFrame(null);
    }
    function Te(a, d, y, g, q) {
      {
        var J = Function.call.bind(Ve);
        for (var W in a)
          if (J(a, W)) {
            var $ = void 0;
            try {
              if (typeof a[W] != "function") {
                var ve = Error((g || "React class") + ": " + y + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              $ = a[W](d, W, g, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              $ = ae;
            }
            $ && !($ instanceof Error) && (Ye(q), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", y, W, typeof $), Ye(null)), $ instanceof Error && !($.message in We) && (We[$.message] = !0, Ye(q), P("Failed %s type: %s", y, $.message), Ye(null));
          }
      }
    }
    var Ue = Array.isArray;
    function tt(a) {
      return Ue(a);
    }
    function xt(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, y = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y;
      }
    }
    function At(a) {
      try {
        return rt(a), !1;
      } catch {
        return !0;
      }
    }
    function rt(a) {
      return "" + a;
    }
    function mt(a) {
      if (At(a))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(a)), rt(a);
    }
    var De = G.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, It, ze;
    ze = {};
    function lr(a) {
      if (Ve.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function fr(a) {
      if (Ve.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function dr(a, d) {
      if (typeof a.ref == "string" && De.current && d && De.current.stateNode !== d) {
        var y = de(De.current.type);
        ze[y] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(De.current.type), a.ref), ze[y] = !0);
      }
    }
    function Ne(a, d) {
      {
        var y = function() {
          jt || (jt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Dt(a, d) {
      {
        var y = function() {
          It || (It = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var pr = function(a, d, y, g, q, J, W) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: y,
        props: W,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function hr(a, d, y, g, q) {
      {
        var J, W = {}, $ = null, ve = null;
        y !== void 0 && (mt(y), $ = "" + y), fr(d) && (mt(d.key), $ = "" + d.key), lr(d) && (ve = d.ref, dr(d, q));
        for (J in d)
          Ve.call(d, J) && !cr.hasOwnProperty(J) && (W[J] = d[J]);
        if (a && a.defaultProps) {
          var ae = a.defaultProps;
          for (J in ae)
            W[J] === void 0 && (W[J] = ae[J]);
        }
        if ($ || ve) {
          var se = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          $ && Ne(W, se), ve && Dt(W, se);
        }
        return pr(a, $, ve, q, g, De.current, W);
      }
    }
    var nt = G.ReactCurrentOwner, Nt = G.ReactDebugCurrentFrame;
    function je(a) {
      if (a) {
        var d = a._owner, y = et(a.type, a._source, d ? d.type : null);
        Nt.setExtraStackFrame(y);
      } else
        Nt.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function $e(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function qe() {
      {
        if (nt.current) {
          var a = de(nt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function vr(a) {
      {
        if (a !== void 0) {
          var d = a.fileName.replace(/^.*[\\\/]/, ""), y = a.lineNumber;
          return `

Check your code at ` + d + ":" + y + ".";
        }
        return "";
      }
    }
    var $t = {};
    function yr(a) {
      {
        var d = qe();
        if (!d) {
          var y = typeof a == "string" ? a : a.displayName || a.name;
          y && (d = `

Check the top-level render call using <` + y + ">.");
        }
        return d;
      }
    }
    function Ft(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var y = yr(d);
        if ($t[y])
          return;
        $t[y] = !0;
        var g = "";
        a && a._owner && a._owner !== nt.current && (g = " It was passed a child from " + de(a._owner.type) + "."), je(a), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, g), je(null);
      }
    }
    function Mt(a, d) {
      {
        if (typeof a != "object")
          return;
        if (tt(a))
          for (var y = 0; y < a.length; y++) {
            var g = a[y];
            $e(g) && Ft(g, d);
          }
        else if ($e(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var q = ee(a);
          if (typeof q == "function" && q !== a.entries)
            for (var J = q.call(a), W; !(W = J.next()).done; )
              $e(W.value) && Ft(W.value, d);
        }
      }
    }
    function Ge(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var y;
        if (typeof d == "function")
          y = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === S))
          y = d.propTypes;
        else
          return;
        if (y) {
          var g = de(d);
          Te(y, a.props, "prop", g, a);
        } else if (d.PropTypes !== void 0 && !Be) {
          Be = !0;
          var q = de(d);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gt(a) {
      {
        for (var d = Object.keys(a.props), y = 0; y < d.length; y++) {
          var g = d[y];
          if (g !== "children" && g !== "key") {
            je(a), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), je(null);
            break;
          }
        }
        a.ref !== null && (je(a), P("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function bt(a, d, y, g, q, J) {
      {
        var W = xe(a);
        if (!W) {
          var $ = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = vr(q);
          ve ? $ += ve : $ += qe();
          var ae;
          a === null ? ae = "null" : tt(a) ? ae = "array" : a !== void 0 && a.$$typeof === r ? (ae = "<" + (de(a.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof a, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, $);
        }
        var se = hr(a, d, y, q, J);
        if (se == null)
          return se;
        if (W) {
          var be = d.children;
          if (be !== void 0)
            if (g)
              if (tt(be)) {
                for (var Fe = 0; Fe < be.length; Fe++)
                  Mt(be[Fe], a);
                Object.freeze && Object.freeze(be);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(be, a);
        }
        return a === i ? gt(se) : Ge(se), se;
      }
    }
    function mr(a, d, y) {
      return bt(a, d, y, !0);
    }
    function gr(a, d, y) {
      return bt(a, d, y, !1);
    }
    var br = gr, _r = mr;
    wt.Fragment = i, wt.jsx = br, wt.jsxs = _r;
  }()), wt;
}
process.env.NODE_ENV === "production" ? Dr.exports = Fo() : Dr.exports = Mo();
var Rt = Dr.exports, _e = function() {
  return _e = Object.assign || function(r) {
    for (var n, i = 1, c = arguments.length; i < c; i++) {
      n = arguments[i];
      for (var f in n)
        Object.prototype.hasOwnProperty.call(n, f) && (r[f] = n[f]);
    }
    return r;
  }, _e.apply(this, arguments);
};
function ut(e, r, n) {
  if (n || arguments.length === 2)
    for (var i = 0, c = r.length, f; i < c; i++)
      (f || !(i in r)) && (f || (f = Array.prototype.slice.call(r, 0, i)), f[i] = r[i]);
  return e.concat(f || Array.prototype.slice.call(r));
}
function Lo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var Vo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wo = /* @__PURE__ */ Lo(
  function(e) {
    return Vo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), st = Ur();
const Ot = /* @__PURE__ */ Do(st);
var te = "-ms-", kt = "-moz-", X = "-webkit-", Wn = "comm", nr = "rule", zr = "decl", Yo = "@import", Yn = "@keyframes", Uo = "@layer", zo = Math.abs, Br = String.fromCharCode, Nr = Object.assign;
function Bo(e, r) {
  return pe(e, 0) ^ 45 ? (((r << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function Un(e) {
  return e.trim();
}
function Ie(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function N(e, r, n) {
  return e.replace(r, n);
}
function Jt(e, r) {
  return e.indexOf(r);
}
function pe(e, r) {
  return e.charCodeAt(r) | 0;
}
function ct(e, r, n) {
  return e.slice(r, n);
}
function Pe(e) {
  return e.length;
}
function zn(e) {
  return e.length;
}
function Ct(e, r) {
  return r.push(e), e;
}
function qo(e, r) {
  return e.map(r).join("");
}
function Sn(e, r) {
  return e.filter(function(n) {
    return !Ie(n, r);
  });
}
var or = 1, lt = 1, Bn = 0, Ce = 0, ce = 0, ht = "";
function ar(e, r, n, i, c, f, h, _) {
  return { value: e, root: r, parent: n, type: i, props: c, children: f, line: or, column: lt, length: h, return: "", siblings: _ };
}
function Me(e, r) {
  return Nr(ar("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function it(e) {
  for (; e.root; )
    e = Me(e.root, { children: [e] });
  Ct(e, e.siblings);
}
function Go() {
  return ce;
}
function Ho() {
  return ce = Ce > 0 ? pe(ht, --Ce) : 0, lt--, ce === 10 && (lt = 1, or--), ce;
}
function Oe() {
  return ce = Ce < Bn ? pe(ht, Ce++) : 0, lt++, ce === 10 && (lt = 1, or++), ce;
}
function Xe() {
  return pe(ht, Ce);
}
function Qt() {
  return Ce;
}
function ir(e, r) {
  return ct(ht, e, r);
}
function $r(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ko(e) {
  return or = lt = 1, Bn = Pe(ht = e), Ce = 0, [];
}
function Xo(e) {
  return ht = "", e;
}
function Pr(e) {
  return Un(ir(Ce - 1, Fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Jo(e) {
  for (; (ce = Xe()) && ce < 33; )
    Oe();
  return $r(e) > 2 || $r(ce) > 3 ? "" : " ";
}
function Qo(e, r) {
  for (; --r && Oe() && !(ce < 48 || ce > 102 || ce > 57 && ce < 65 || ce > 70 && ce < 97); )
    ;
  return ir(e, Qt() + (r < 6 && Xe() == 32 && Oe() == 32));
}
function Fr(e) {
  for (; Oe(); )
    switch (ce) {
      case e:
        return Ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fr(ce);
        break;
      case 40:
        e === 41 && Fr(e);
        break;
      case 92:
        Oe();
        break;
    }
  return Ce;
}
function Zo(e, r) {
  for (; Oe() && e + ce !== 47 + 10; )
    if (e + ce === 42 + 42 && Xe() === 47)
      break;
  return "/*" + ir(r, Ce - 1) + "*" + Br(e === 47 ? e : Oe());
}
function ea(e) {
  for (; !$r(Xe()); )
    Oe();
  return ir(e, Ce);
}
function ta(e) {
  return Xo(Zt("", null, null, null, [""], e = Ko(e), 0, [0], e));
}
function Zt(e, r, n, i, c, f, h, _, m) {
  for (var O = 0, w = 0, S = h, j = 0, x = 0, Y = 0, Q = 1, ee = 1, G = 1, P = 0, z = "", L = c, I = f, C = i, R = z; ee; )
    switch (Y = P, P = Oe()) {
      case 40:
        if (Y != 108 && pe(R, S - 1) == 58) {
          Jt(R += N(Pr(P), "&", "&\f"), "&\f") != -1 && (G = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Pr(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Jo(Y);
        break;
      case 92:
        R += Qo(Qt() - 1, 7);
        continue;
      case 47:
        switch (Xe()) {
          case 42:
          case 47:
            Ct(ra(Zo(Oe(), Qt()), r, n, m), m);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * Q:
        _[O++] = Pe(R) * G;
      case 125 * Q:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            ee = 0;
          case 59 + w:
            G == -1 && (R = N(R, /\f/g, "")), x > 0 && Pe(R) - S && Ct(x > 32 ? kn(R + ";", i, n, S - 1, m) : kn(N(R, " ", "") + ";", i, n, S - 2, m), m);
            break;
          case 59:
            R += ";";
          default:
            if (Ct(C = Cn(R, r, n, O, w, c, _, z, L = [], I = [], S, f), f), P === 123)
              if (w === 0)
                Zt(R, r, C, C, L, f, S, _, I);
              else
                switch (j === 99 && pe(R, 3) === 110 ? 100 : j) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zt(e, C, C, i && Ct(Cn(e, C, C, 0, 0, c, _, z, c, L = [], S, I), I), c, I, S, _, i ? L : I);
                    break;
                  default:
                    Zt(R, C, C, C, [""], I, 0, _, I);
                }
        }
        O = w = x = 0, Q = G = 1, z = R = "", S = h;
        break;
      case 58:
        S = 1 + Pe(R), x = Y;
      default:
        if (Q < 1) {
          if (P == 123)
            --Q;
          else if (P == 125 && Q++ == 0 && Ho() == 125)
            continue;
        }
        switch (R += Br(P), P * Q) {
          case 38:
            G = w > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            _[O++] = (Pe(R) - 1) * G, G = 1;
            break;
          case 64:
            Xe() === 45 && (R += Pr(Oe())), j = Xe(), w = S = Pe(z = R += ea(Qt())), P++;
            break;
          case 45:
            Y === 45 && Pe(R) == 2 && (Q = 0);
        }
    }
  return f;
}
function Cn(e, r, n, i, c, f, h, _, m, O, w, S) {
  for (var j = c - 1, x = c === 0 ? f : [""], Y = zn(x), Q = 0, ee = 0, G = 0; Q < i; ++Q)
    for (var P = 0, z = ct(e, j + 1, j = zo(ee = h[Q])), L = e; P < Y; ++P)
      (L = Un(ee > 0 ? x[P] + " " + z : N(z, /&\f/g, x[P]))) && (m[G++] = L);
  return ar(e, r, n, c === 0 ? nr : _, m, O, w, S);
}
function ra(e, r, n, i) {
  return ar(e, r, n, Wn, Br(Go()), ct(e, 2, -2), 0, i);
}
function kn(e, r, n, i, c) {
  return ar(e, r, n, zr, ct(e, 0, i), ct(e, i + 1, -1), i, c);
}
function qn(e, r, n) {
  switch (Bo(e, r)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 4789:
      return kt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + kt + e + te + e + e;
    case 5936:
      switch (pe(e, r + 11)) {
        case 114:
          return X + e + te + N(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + te + N(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + te + N(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return X + e + te + e + e;
    case 6165:
      return X + e + te + "flex-" + e + e;
    case 5187:
      return X + e + N(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + te + "flex-$1$2") + e;
    case 5443:
      return X + e + te + "flex-item-" + N(e, /flex-|-self/g, "") + (Ie(e, /flex-|baseline/) ? "" : te + "grid-row-" + N(e, /flex-|-self/g, "")) + e;
    case 4675:
      return X + e + te + "flex-line-pack" + N(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return X + e + te + N(e, "shrink", "negative") + e;
    case 5292:
      return X + e + te + N(e, "basis", "preferred-size") + e;
    case 6060:
      return X + "box-" + N(e, "-grow", "") + X + e + te + N(e, "grow", "positive") + e;
    case 4554:
      return X + N(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return N(N(N(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return N(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return N(N(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + e + e;
    case 4200:
      if (!Ie(e, /flex-|baseline/))
        return te + "grid-column-align" + ct(e, r) + e;
      break;
    case 2592:
    case 3360:
      return te + N(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(i, c) {
        return r = c, Ie(i.props, /grid-\w+-end/);
      }) ? ~Jt(e + (n = n[r].value), "span") ? e : te + N(e, "-start", "") + e + te + "grid-row-span:" + (~Jt(n, "span") ? Ie(n, /\d+/) : +Ie(n, /\d+/) - +Ie(e, /\d+/)) + ";" : te + N(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(i) {
        return Ie(i.props, /grid-\w+-start/);
      }) ? e : te + N(N(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pe(e) - 1 - r > 6)
        switch (pe(e, r + 1)) {
          case 109:
            if (pe(e, r + 4) !== 45)
              break;
          case 102:
            return N(e, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + kt + (pe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Jt(e, "stretch") ? qn(N(e, "stretch", "fill-available"), r, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return N(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, c, f, h, _, m, O) {
        return te + c + ":" + f + O + (h ? te + c + "-span:" + (_ ? m : +m - +f) + O : "") + e;
      });
    case 4949:
      if (pe(e, r + 6) === 121)
        return N(e, ":", ":" + X) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return N(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + X + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + te + "$2box$3") + e;
        case 100:
          return N(e, ":", ":" + te) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return N(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tr(e, r) {
  for (var n = "", i = 0; i < e.length; i++)
    n += r(e[i], i, e, r) || "";
  return n;
}
function na(e, r, n, i) {
  switch (e.type) {
    case Uo:
      if (e.children.length)
        break;
    case Yo:
    case zr:
      return e.return = e.return || e.value;
    case Wn:
      return "";
    case Yn:
      return e.return = e.value + "{" + tr(e.children, i) + "}";
    case nr:
      if (!Pe(e.value = e.props.join(",")))
        return "";
  }
  return Pe(n = tr(e.children, i)) ? e.return = e.value + "{" + n + "}" : "";
}
function oa(e) {
  var r = zn(e);
  return function(n, i, c, f) {
    for (var h = "", _ = 0; _ < r; _++)
      h += e[_](n, i, c, f) || "";
    return h;
  };
}
function aa(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function ia(e, r, n, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case zr:
        e.return = qn(e.value, e.length, n);
        return;
      case Yn:
        return tr([Me(e, { value: N(e.value, "@", "@" + X) })], i);
      case nr:
        if (e.length)
          return qo(n = e.props, function(c) {
            switch (Ie(c, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                it(Me(e, { props: [N(c, /:(read-\w+)/, ":" + kt + "$1")] })), it(Me(e, { props: [c] })), Nr(e, { props: Sn(n, i) });
                break;
              case "::placeholder":
                it(Me(e, { props: [N(c, /:(plac\w+)/, ":" + X + "input-$1")] })), it(Me(e, { props: [N(c, /:(plac\w+)/, ":" + kt + "$1")] })), it(Me(e, { props: [N(c, /:(plac\w+)/, te + "input-$1")] })), it(Me(e, { props: [c] })), Nr(e, { props: Sn(n, i) });
                break;
            }
            return "";
          });
    }
}
var sa = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Qe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", qr = typeof window < "u" && "HTMLElement" in window, ua = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), On = /invalid hook call/i, Ht = /* @__PURE__ */ new Set(), ca = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = r ? ' with the id of "'.concat(r, '"') : "", i = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, c = console.error;
    try {
      var f = !0;
      console.error = function(h) {
        for (var _ = [], m = 1; m < arguments.length; m++)
          _[m - 1] = arguments[m];
        On.test(h) ? (f = !1, Ht.delete(i)) : c.apply(void 0, ut([h], _, !1));
      }, st.useRef(), f && !Ht.has(i) && (console.warn(i), Ht.add(i));
    } catch (h) {
      On.test(h.message) && Ht.delete(i);
    } finally {
      console.error = c;
    }
  }
}, sr = Object.freeze([]), ft = Object.freeze({});
function la(e, r, n) {
  return n === void 0 && (n = ft), e.theme !== n.theme && e.theme || r || n.theme;
}
var Mr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), fa = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, da = /(^-|-$)/g;
function Tn(e) {
  return e.replace(fa, "-").replace(da, "");
}
var pa = /(a)(d)/gi, Pn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Lr(e) {
  var r, n = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    n = Pn(r % 52) + n;
  return (Pn(r % 52) + n).replace(pa, "$1-$2");
}
var xr, He = function(e, r) {
  for (var n = r.length; n; )
    e = 33 * e ^ r.charCodeAt(--n);
  return e;
}, Gn = function(e) {
  return He(5381, e);
};
function ha(e) {
  return Lr(Gn(e) >>> 0);
}
function Hn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ar(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kn = typeof Symbol == "function" && Symbol.for, Xn = Kn ? Symbol.for("react.memo") : 60115, va = Kn ? Symbol.for("react.forward_ref") : 60112, ya = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ma = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Jn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ga = ((xr = {})[va] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, xr[Xn] = Jn, xr);
function xn(e) {
  return ("type" in (r = e) && r.type.$$typeof) === Xn ? Jn : "$$typeof" in e ? ga[e.$$typeof] : ya;
  var r;
}
var ba = Object.defineProperty, _a = Object.getOwnPropertyNames, An = Object.getOwnPropertySymbols, Ea = Object.getOwnPropertyDescriptor, wa = Object.getPrototypeOf, jn = Object.prototype;
function Qn(e, r, n) {
  if (typeof r != "string") {
    if (jn) {
      var i = wa(r);
      i && i !== jn && Qn(e, i, n);
    }
    var c = _a(r);
    An && (c = c.concat(An(r)));
    for (var f = xn(e), h = xn(r), _ = 0; _ < c.length; ++_) {
      var m = c[_];
      if (!(m in ma || n && n[m] || h && m in h || f && m in f)) {
        var O = Ea(r, m);
        try {
          ba(e, m, O);
        } catch {
        }
      }
    }
  }
  return e;
}
function dt(e) {
  return typeof e == "function";
}
function Gr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ke(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function In(e, r) {
  if (e.length === 0)
    return "";
  for (var n = e[0], i = 1; i < e.length; i++)
    n += r ? r + e[i] : e[i];
  return n;
}
function pt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vr(e, r, n) {
  if (n === void 0 && (n = !1), !n && !pt(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      e[i] = Vr(e[i], r[i]);
  else if (pt(r))
    for (var i in r)
      e[i] = Vr(e[i], r[i]);
  return e;
}
function Hr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Ra = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Sa() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var n = e[0], i = [], c = 1, f = e.length; c < f; c += 1)
    i.push(e[c]);
  return i.forEach(function(h) {
    n = n.replace(/%[a-z]/, h);
  }), n;
}
function vt(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Sa.apply(void 0, ut([Ra[e]], r, !1)).trim());
}
var Ca = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, e.prototype.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, c = i.length, f = c; r >= f; )
        if ((f <<= 1) < 0)
          throw vt(16, "".concat(r));
      this.groupSizes = new Uint32Array(f), this.groupSizes.set(i), this.length = f;
      for (var h = c; h < f; h++)
        this.groupSizes[h] = 0;
    }
    for (var _ = this.indexOfGroup(r + 1), m = (h = 0, n.length); h < m; h++)
      this.tag.insertRule(_, n[h]) && (this.groupSizes[r]++, _++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), c = i + n;
      this.groupSizes[r] = 0;
      for (var f = i; f < c; f++)
        this.tag.deleteRule(i);
    }
  }, e.prototype.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], c = this.indexOfGroup(r), f = c + i, h = c; h < f; h++)
      n += "".concat(this.tag.getRule(h)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), er = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), jr = 1, Kt = function(e) {
  if (er.has(e))
    return er.get(e);
  for (; rr.has(jr); )
    jr++;
  var r = jr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1073741824))
    throw vt(16, "".concat(r));
  return er.set(e, r), rr.set(r, e), r;
}, ka = function(e, r) {
  er.set(e, r), rr.set(r, e);
}, Oa = "style[".concat(Qe, "][").concat("data-styled-version", '="').concat("6.1.0", '"]'), Ta = new RegExp("^".concat(Qe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Pa = function(e, r, n) {
  for (var i, c = n.split(","), f = 0, h = c.length; f < h; f++)
    (i = c[f]) && e.registerName(r, i);
}, xa = function(e, r) {
  for (var n, i = ((n = r.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), c = [], f = 0, h = i.length; f < h; f++) {
    var _ = i[f].trim();
    if (_) {
      var m = _.match(Ta);
      if (m) {
        var O = 0 | parseInt(m[1], 10), w = m[2];
        O !== 0 && (ka(w, O), Pa(e, w, m[3]), e.getTag().insertRules(O, c)), c.length = 0;
      } else
        c.push(_);
    }
  }
};
function Aa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zn = function(e) {
  var r = document.head, n = e || r, i = document.createElement("style"), c = function(_) {
    var m = Array.from(_.querySelectorAll("style[".concat(Qe, "]")));
    return m[m.length - 1];
  }(n), f = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Qe, "active"), i.setAttribute("data-styled-version", "6.1.0");
  var h = Aa();
  return h && i.setAttribute("nonce", h), n.insertBefore(i, f), i;
}, ja = function() {
  function e(r) {
    this.element = Zn(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var i = document.styleSheets, c = 0, f = i.length; c < f; c++) {
        var h = i[c];
        if (h.ownerNode === n)
          return h;
      }
      throw vt(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Ia = function() {
  function e(r) {
    this.element = Zn(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n);
      return this.element.insertBefore(i, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Da = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Dn = qr, Na = { isServer: !qr, useCSSOMInjection: !ua }, eo = function() {
  function e(r, n, i) {
    r === void 0 && (r = ft), n === void 0 && (n = {});
    var c = this;
    this.options = _e(_e({}, Na), r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && qr && Dn && (Dn = !1, function(f) {
      for (var h = document.querySelectorAll(Oa), _ = 0, m = h.length; _ < m; _++) {
        var O = h[_];
        O && O.getAttribute(Qe) !== "active" && (xa(f, O), O.parentNode && O.parentNode.removeChild(O));
      }
    }(this)), Hr(this, function() {
      return function(f) {
        for (var h = f.getTag(), _ = h.length, m = "", O = function(S) {
          var j = function(G) {
            return rr.get(G);
          }(S);
          if (j === void 0)
            return "continue";
          var x = f.names.get(j), Y = h.getGroup(S);
          if (x === void 0 || Y.length === 0)
            return "continue";
          var Q = "".concat(Qe, ".g").concat(S, '[id="').concat(j, '"]'), ee = "";
          x !== void 0 && x.forEach(function(G) {
            G.length > 0 && (ee += "".concat(G, ","));
          }), m += "".concat(Y).concat(Q, '{content:"').concat(ee, '"}').concat(`/*!sc*/
`);
        }, w = 0; w < _; w++)
          O(w);
        return m;
      }(c);
    });
  }
  return e.registerId = function(r) {
    return Kt(r);
  }, e.prototype.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(_e(_e({}, this.options), r), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(n) {
      var i = n.useCSSOMInjection, c = n.target;
      return n.isServer ? new Da(c) : i ? new ja(c) : new Ia(c);
    }(this.options), new Ca(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.prototype.registerName = function(r, n) {
    if (Kt(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, e.prototype.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Kt(r), i);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Kt(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), $a = /&/g, Fa = /^\s*\/\/.*$/gm;
function to(e, r) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(r, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(r, " ")), n.props = n.props.map(function(i) {
      return "".concat(r, " ").concat(i);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = to(n.children, r)), n;
  });
}
function Ma(e) {
  var r, n, i, c = e === void 0 ? ft : e, f = c.options, h = f === void 0 ? ft : f, _ = c.plugins, m = _ === void 0 ? sr : _, O = function(j, x, Y) {
    return Y === n || Y.startsWith(n) && Y.endsWith(n) && Y.replaceAll(n, "").length > 0 ? ".".concat(r) : j;
  }, w = m.slice();
  w.push(function(j) {
    j.type === nr && j.value.includes("&") && (j.props[0] = j.props[0].replace($a, n).replace(i, O));
  }), h.prefix && w.push(ia), w.push(na);
  var S = function(j, x, Y, Q) {
    x === void 0 && (x = ""), Y === void 0 && (Y = ""), Q === void 0 && (Q = "&"), r = Q, n = x, i = new RegExp("\\".concat(n, "\\b"), "g");
    var ee = j.replace(Fa, ""), G = ta(Y || x ? "".concat(Y, " ").concat(x, " { ").concat(ee, " }") : ee);
    h.namespace && (G = to(G, h.namespace));
    var P = [];
    return tr(G, oa(w.concat(aa(function(z) {
      return P.push(z);
    })))), P;
  };
  return S.hash = m.length ? m.reduce(function(j, x) {
    return x.name || vt(15), He(j, x.name);
  }, 5381).toString() : "", S;
}
var La = new eo(), Wr = Ma(), ro = Ot.createContext({ shouldForwardProp: void 0, styleSheet: La, stylis: Wr });
ro.Consumer;
Ot.createContext(void 0);
function Nn() {
  return st.useContext(ro);
}
var $n = function() {
  function e(r, n) {
    var i = this;
    this.inject = function(c, f) {
      f === void 0 && (f = Wr);
      var h = i.name + f.hash;
      c.hasNameForId(i.id, h) || c.insertRules(i.id, h, f(i.rules, h, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = n, Hr(this, function() {
      throw vt(12, String(i.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Wr), this.name + r.hash;
  }, e;
}(), Va = function(e) {
  return e >= "A" && e <= "Z";
};
function Fn(e) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e[n];
    if (n === 1 && i === "-" && e[0] === "-")
      return e;
    Va(i) ? r += "-" + i.toLowerCase() : r += i;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var no = function(e) {
  return e == null || e === !1 || e === "";
}, oo = function(e) {
  var r, n, i = [];
  for (var c in e) {
    var f = e[c];
    e.hasOwnProperty(c) && !no(f) && (Array.isArray(f) && f.isCss || dt(f) ? i.push("".concat(Fn(c), ":"), f, ";") : pt(f) ? i.push.apply(i, ut(ut(["".concat(c, " {")], oo(f), !1), ["}"], !1)) : i.push("".concat(Fn(c), ": ").concat((r = c, (n = f) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || r in sa || r.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return i;
};
function Je(e, r, n, i) {
  if (no(e))
    return [];
  if (Gr(e))
    return [".".concat(e.styledComponentId)];
  if (dt(e)) {
    if (!dt(f = e) || f.prototype && f.prototype.isReactComponent || !r)
      return [e];
    var c = e(r);
    return process.env.NODE_ENV === "production" || typeof c != "object" || Array.isArray(c) || c instanceof $n || pt(c) || c === null || console.error("".concat(Hn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Je(c, r, n, i);
  }
  var f;
  return e instanceof $n ? n ? (e.inject(n, i), [e.getName(i)]) : [e] : pt(e) ? oo(e) : Array.isArray(e) ? Array.prototype.concat.apply(sr, e.map(function(h) {
    return Je(h, r, n, i);
  })) : [e.toString()];
}
function Wa(e) {
  for (var r = 0; r < e.length; r += 1) {
    var n = e[r];
    if (dt(n) && !Gr(n))
      return !1;
  }
  return !0;
}
var Ya = Gn("6.1.0"), Ua = function() {
  function e(r, n, i) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && Wa(r), this.componentId = n, this.baseHash = He(Ya, n), this.baseStyle = i, eo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(r, n, i) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, n, i) : "";
    if (this.isStatic && !i.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        c = Ke(c, this.staticRulesId);
      else {
        var f = In(Je(this.rules, r, n, i)), h = Lr(He(this.baseHash, f) >>> 0);
        if (!n.hasNameForId(this.componentId, h)) {
          var _ = i(f, ".".concat(h), void 0, this.componentId);
          n.insertRules(this.componentId, h, _);
        }
        c = Ke(c, h), this.staticRulesId = h;
      }
    else {
      for (var m = He(this.baseHash, i.hash), O = "", w = 0; w < this.rules.length; w++) {
        var S = this.rules[w];
        if (typeof S == "string")
          O += S, process.env.NODE_ENV !== "production" && (m = He(m, S));
        else if (S) {
          var j = In(Je(S, r, n, i));
          m = He(m, j + w), O += j;
        }
      }
      if (O) {
        var x = Lr(m >>> 0);
        n.hasNameForId(this.componentId, x) || n.insertRules(this.componentId, x, i(O, ".".concat(x), void 0, this.componentId)), c = Ke(c, x);
      }
    }
    return c;
  }, e;
}(), ao = Ot.createContext(void 0);
ao.Consumer;
var Ir = {}, Mn = /* @__PURE__ */ new Set();
function za(e, r, n) {
  var i = Gr(e), c = e, f = !Ar(e), h = r.attrs, _ = h === void 0 ? sr : h, m = r.componentId, O = m === void 0 ? function(L, I) {
    var C = typeof L != "string" ? "sc" : Tn(L);
    Ir[C] = (Ir[C] || 0) + 1;
    var R = "".concat(C, "-").concat(ha("6.1.0" + C + Ir[C]));
    return I ? "".concat(I, "-").concat(R) : R;
  }(r.displayName, r.parentComponentId) : m, w = r.displayName, S = w === void 0 ? function(L) {
    return Ar(L) ? "styled.".concat(L) : "Styled(".concat(Hn(L), ")");
  }(e) : w, j = r.displayName && r.componentId ? "".concat(Tn(r.displayName), "-").concat(r.componentId) : r.componentId || O, x = i && c.attrs ? c.attrs.concat(_).filter(Boolean) : _, Y = r.shouldForwardProp;
  if (i && c.shouldForwardProp) {
    var Q = c.shouldForwardProp;
    if (r.shouldForwardProp) {
      var ee = r.shouldForwardProp;
      Y = function(L, I) {
        return Q(L, I) && ee(L, I);
      };
    } else
      Y = Q;
  }
  var G = new Ua(n, j, i ? c.componentStyle : void 0);
  function P(L, I) {
    return function(C, R, he) {
      var ge = C.attrs, xe = C.componentStyle, Le = C.defaultProps, Ae = C.foldedComponentIds, de = C.styledComponentId, me = C.target, le = Ot.useContext(ao), Ee = Nn(), E = C.shouldForwardProp || Ee.shouldForwardProp;
      process.env.NODE_ENV !== "production" && st.useDebugValue(de);
      var fe = function(D, H, K) {
        for (var U, F = _e(_e({}, H), { className: void 0, theme: K }), oe = 0; oe < D.length; oe += 1) {
          var Re = dt(U = D[oe]) ? U(F) : U;
          for (var Se in Re)
            F[Se] = Se === "className" ? Ke(F[Se], Re[Se]) : Se === "style" ? _e(_e({}, F[Se]), Re[Se]) : Re[Se];
        }
        return H.className && (F.className = Ke(F.className, H.className)), F;
      }(ge, R, la(R, le, Le) || ft), we = fe.as || me, s = {};
      for (var p in fe)
        fe[p] === void 0 || p[0] === "$" || p === "as" || p === "theme" || (p === "forwardedAs" ? s.as = fe.forwardedAs : E && !E(p, we) || (s[p] = fe[p], E || process.env.NODE_ENV !== "development" || Wo(p) || Mn.has(p) || !Mr.has(we) || (Mn.add(p), console.warn('styled-components: it looks like an unknown prop "'.concat(p, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var T = function(D, H) {
        var K = Nn(), U = D.generateAndInjectStyles(H, K.styleSheet, K.stylis);
        return process.env.NODE_ENV !== "production" && st.useDebugValue(U), U;
      }(xe, fe);
      process.env.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(T);
      var V = Ke(Ae, de);
      return T && (V += " " + T), fe.className && (V += " " + fe.className), s[Ar(we) && !Mr.has(we) ? "class" : "className"] = V, s.ref = he, st.createElement(we, s);
    }(z, L, I);
  }
  process.env.NODE_ENV !== "production" && (P.displayName = S);
  var z = Ot.forwardRef(P);
  return z.attrs = x, z.componentStyle = G, z.shouldForwardProp = Y, process.env.NODE_ENV !== "production" && (z.displayName = S), z.foldedComponentIds = i ? Ke(c.foldedComponentIds, c.styledComponentId) : "", z.styledComponentId = j, z.target = i ? c.target : e, Object.defineProperty(z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = i ? function(I) {
      for (var C = [], R = 1; R < arguments.length; R++)
        C[R - 1] = arguments[R];
      for (var he = 0, ge = C; he < ge.length; he++)
        Vr(I, ge[he], !0);
      return I;
    }({}, c.defaultProps, L) : L;
  } }), process.env.NODE_ENV !== "production" && (ca(S, j), z.warnTooManyClasses = function(L, I) {
    var C = {}, R = !1;
    return function(he) {
      if (!R && (C[he] = !0, Object.keys(C).length >= 200)) {
        var ge = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(L).concat(ge, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), R = !0, C = {};
      }
    };
  }(S, j)), Hr(z, function() {
    return ".".concat(z.styledComponentId);
  }), f && Qn(z, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), z;
}
function Ln(e, r) {
  for (var n = [e[0]], i = 0, c = r.length; i < c; i += 1)
    n.push(r[i], e[i + 1]);
  return n;
}
var Vn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ba(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (dt(e) || pt(e)) {
    var i = e;
    return Vn(Je(Ln(sr, ut([i], r, !0))));
  }
  var c = e;
  return r.length === 0 && c.length === 1 && typeof c[0] == "string" ? Je(c) : Vn(Je(Ln(c, r)));
}
function Yr(e, r, n) {
  if (n === void 0 && (n = ft), !r)
    throw vt(1, r);
  var i = function(c) {
    for (var f = [], h = 1; h < arguments.length; h++)
      f[h - 1] = arguments[h];
    return e(r, n, Ba.apply(void 0, ut([c], f, !1)));
  };
  return i.attrs = function(c) {
    return Yr(e, r, _e(_e({}, n), { attrs: Array.prototype.concat(n.attrs, c).filter(Boolean) }));
  }, i.withConfig = function(c) {
    return Yr(e, r, _e(_e({}, n), c));
  }, i;
}
var io = function(e) {
  return Yr(za, e);
}, yt = io;
Mr.forEach(function(e) {
  yt[e] = io(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xt = "__sc-".concat(Qe, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Xt] || (window[Xt] = 0), window[Xt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xt] += 1);
const qa = yt.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
`, Ga = yt.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${(e) => e.$opacity ?? ".4"});
    display: flex;
    justify-content: center;
    align-items: center;
`, Ha = yt.div`
    position: relative;
    width: 30%;
    height: 10%;
    background: ${(e) => e.$background ?? "#FFF"};
    border-radius: 10px;
`, Ka = yt.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em .5em;
    font-weight: bold;
    color: ${(e) => e.$color ?? "#000"};
`, Xa = yt.div`
    position: relative;
    bottom: 12px;
    left: 97%;
    width: 24px;
    height: 24px;
    background: #000;
    border-radius: 50%;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
    z-index: 99;
`;
function Ja({ displayModal: e, setDisplayModal: r, message: n, overlayOpacity: i, modalBackground: c, modalColor: f }) {
  const h = () => {
    r(!e);
  };
  return e && /* @__PURE__ */ Rt.jsx(qa, { children: /* @__PURE__ */ Rt.jsx(Ga, { $opacity: i, children: /* @__PURE__ */ Rt.jsxs(Ha, { $background: c, children: [
    /* @__PURE__ */ Rt.jsx(Xa, { onClick: h, children: "X" }),
    n && /* @__PURE__ */ Rt.jsx(Ka, { $color: f, children: n })
  ] }) }) });
}
export {
  Ja as Modal
};
