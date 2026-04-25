var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(envAsyncLocalStorage.getStore()), "ownKeys"),
        getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
        get: /* @__PURE__ */ __name((_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property), "get"),
        set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value), "set")
      }
    )
  };
  globalThis[/* @__PURE__ */ Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()), "ownKeys"),
      getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
      get: /* @__PURE__ */ __name((_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property), "get"),
      set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value), "set")
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var ne = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ie = Object.getPrototypeOf;
var oe = Object.prototype.hasOwnProperty;
var T = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "T");
var U = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "U");
var ce = /* @__PURE__ */ __name((e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of re(t)) !oe.call(e, r) && r !== n && H(e, r, { get: /* @__PURE__ */ __name(() => t[r], "get"), enumerable: !(s = ae(t, r)) || s.enumerable });
  return e;
}, "ce");
var V = /* @__PURE__ */ __name((e, t, n) => (n = e != null ? ne(ie(e)) : {}, ce(t || !e || !e.__esModule ? H(n, "default", { value: e, enumerable: true }) : n, e)), "V");
var m;
var u = T(() => {
  m = { collectedLocales: [] };
});
var f;
var d = T(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/(.*).json$", dest: "/$1", override: true, continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", override: true, continue: true }, { continue: true, src: "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/account(\\.json)?[\\/#\\?]?$", missing: [{ type: "header", key: "x-prerender-revalidate", value: "3f42c5bf06e4d8eab6b2594598d0a0f0" }], middlewarePath: "middleware", middlewareRawSrc: ["/account"], override: true }, { continue: true, src: "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/account(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$", missing: [{ type: "header", key: "x-prerender-revalidate", value: "3f42c5bf06e4d8eab6b2594598d0a0f0" }], middlewarePath: "middleware", middlewareRawSrc: ["/account/:path*"], override: true }, { src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/cdp19zTX66gpfdpXWzjYN/index.json", continue: true, override: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/cdp19zTX66gpfdpXWzjYN/$1.json", continue: true, override: true }, { src: "^/?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/(.*).json$", dest: "/$1", continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", continue: true }, { src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/.+$", status: 404, check: true, dest: "/_next/static/not-found.txt", headers: { "content-type": "text/plain; charset=utf-8" } }], rewrite: [{ src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/cdp19zTX66gpfdpXWzjYN/index.json", continue: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/cdp19zTX66gpfdpXWzjYN/$1.json", continue: true }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/account/reservations/edit/(?<nxtPbookingId>[^/]+?)(?:/)?.json$", dest: "/account/reservations/edit/[bookingId]?nxtPbookingId=$nxtPbookingId" }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/api/auth/(?<nxtPnextauth>.+?)(?:/)?.json$", dest: "/api/auth/[...nextauth]?nxtPnextauth=$nxtPnextauth" }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/api/cabins/(?<nxtPcabinId>[^/]+?)(?:/)?.json$", dest: "/api/cabins/[cabinId]?nxtPcabinId=$nxtPcabinId" }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/cabins/(?<nxtPcabinId>[^/]+?)(?:/)?.json$", dest: "/cabins/[cabinId]?nxtPcabinId=$nxtPcabinId" }, { src: "^/account/reservations/edit/(?<nxtPbookingId>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/account/reservations/edit/[bookingId].rsc?nxtPbookingId=$nxtPbookingId" }, { src: "^/account/reservations/edit/(?<nxtPbookingId>[^/]+?)(?:/)?$", dest: "/account/reservations/edit/[bookingId]?nxtPbookingId=$nxtPbookingId" }, { src: "^/api/auth/(?<nxtPnextauth>.+?)(?:\\.rsc)(?:/)?$", dest: "/api/auth/[...nextauth].rsc?nxtPnextauth=$nxtPnextauth" }, { src: "^/api/auth/(?<nxtPnextauth>.+?)(?:/)?$", dest: "/api/auth/[...nextauth]?nxtPnextauth=$nxtPnextauth" }, { src: "^/api/cabins/(?<nxtPcabinId>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/api/cabins/[cabinId].rsc?nxtPcabinId=$nxtPcabinId" }, { src: "^/api/cabins/(?<nxtPcabinId>[^/]+?)(?:/)?$", dest: "/api/cabins/[cabinId]?nxtPcabinId=$nxtPcabinId" }, { src: "^/cabins/(?<nxtPcabinId>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/cabins/[cabinId].rsc?nxtPcabinId=$nxtPcabinId" }, { src: "^/cabins/(?<nxtPcabinId>[^/]+?)(?:/)?$", dest: "/cabins/[cabinId]?nxtPcabinId=$nxtPcabinId" }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/(.*).json$", headers: { "x-nextjs-matched-path": "/$1" }, continue: true, override: true }, { src: "^/_next/data/cdp19zTX66gpfdpXWzjYN/(.*).json$", dest: "__next_data_catchall" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|cdp19zTX66gpfdpXWzjYN)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/_not-found", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [{ protocol: "https", hostname: "^(?:^(?:qcraidegydfvvntdddps\\.supabase\\.co)$)$", port: "", pathname: "^(?:\\/storage\\/v1\\/object\\/public\\/cabin-images(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?)|$))$" }, { protocol: "https", hostname: "^(?:^(?:lh3\\.googleusercontent\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment" }, overrides: { "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "__next_data_catchall.json": { path: "__next_data_catchall", contentType: "application/json" }, "_next/static/not-found.txt": { contentType: "text/plain" } }, framework: { version: "15.1.5" }, crons: [] };
});
var g;
var p = T(() => {
  g = { "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/__next_data_catchall.json": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/cdp19zTX66gpfdpXWzjYN/_buildManifest.js": { type: "static" }, "/_next/static/cdp19zTX66gpfdpXWzjYN/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/173-64bbaaa6972a2afb.js": { type: "static" }, "/_next/static/chunks/253-20ab917b549f274f.js": { type: "static" }, "/_next/static/chunks/4bd1b696-ea07bdc066a4087d.js": { type: "static" }, "/_next/static/chunks/517-a9cfb3c9aefa440f.js": { type: "static" }, "/_next/static/chunks/696-3ad59fac47924118.js": { type: "static" }, "/_next/static/chunks/908-993e30f616d30cfa.js": { type: "static" }, "/_next/static/chunks/970-0eb3875232eed61a.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-8847ac79b5d1caf2.js": { type: "static" }, "/_next/static/chunks/app/about/page-1cdf8e23c2d98c16.js": { type: "static" }, "/_next/static/chunks/app/account/layout-c5e822e8f2ed68c0.js": { type: "static" }, "/_next/static/chunks/app/account/loading-3792dbfc2c8d11f7.js": { type: "static" }, "/_next/static/chunks/app/account/page-a697b91cc31307d9.js": { type: "static" }, "/_next/static/chunks/app/account/profile/page-23426ceea3395f1d.js": { type: "static" }, "/_next/static/chunks/app/account/reservations/edit/[bookingId]/page-0fa74d6f29553b75.js": { type: "static" }, "/_next/static/chunks/app/account/reservations/page-437ebe1bf08c1a77.js": { type: "static" }, "/_next/static/chunks/app/api/auth/[...nextauth]/route-32ab828af33faa0a.js": { type: "static" }, "/_next/static/chunks/app/api/cabins/[cabinId]/route-d5104e0cd802f60a.js": { type: "static" }, "/_next/static/chunks/app/cabins/[cabinId]/not-found-587453b7ecbd56ab.js": { type: "static" }, "/_next/static/chunks/app/cabins/[cabinId]/page-e6c7c7a89a2ad768.js": { type: "static" }, "/_next/static/chunks/app/cabins/loading-dc005e632c068cf2.js": { type: "static" }, "/_next/static/chunks/app/cabins/page-743b5966ed0c3535.js": { type: "static" }, "/_next/static/chunks/app/layout-28f8ee9f164c8c4f.js": { type: "static" }, "/_next/static/chunks/app/loading-d7c4c702cf1c0261.js": { type: "static" }, "/_next/static/chunks/app/login/page-3906e882c62b7c53.js": { type: "static" }, "/_next/static/chunks/app/not-found-871b59e80b9bca1a.js": { type: "static" }, "/_next/static/chunks/app/page-23ac0e0f212db632.js": { type: "static" }, "/_next/static/chunks/app/signup/page-2120574556698fb7.js": { type: "static" }, "/_next/static/chunks/framework-b76b766f590b2b6c.js": { type: "static" }, "/_next/static/chunks/main-app-109d0e46f178f625.js": { type: "static" }, "/_next/static/chunks/main-c2c73e097a49975c.js": { type: "static" }, "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js": { type: "static" }, "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js": { type: "static" }, "/_next/static/chunks/polyfills-42372ed130431b0a.js": { type: "static" }, "/_next/static/chunks/webpack-f780b84ad4e37ea6.js": { type: "static" }, "/_next/static/css/0400ae0e9f04ed65.css": { type: "static" }, "/_next/static/css/816b3a511b6501de.css": { type: "static" }, "/_next/static/media/1b30b992a554bafd-s.woff2": { type: "static" }, "/_next/static/media/312bdf69facd99ca-s.woff2": { type: "static" }, "/_next/static/media/about-1.cde65b36.jpg": { type: "static" }, "/_next/static/media/accc82dc8525882b-s.p.woff2": { type: "static" }, "/_next/static/media/bg.c8baead7.png": { type: "static" }, "/_next/static/media/logo-img.b502d2fa.png": { type: "static" }, "/_next/static/media/logo.b502d2fa.png": { type: "static" }, "/_next/static/not-found.txt": { type: "static" }, "/about-1.jpg": { type: "static" }, "/about-2.jpg": { type: "static" }, "/bg.png": { type: "static" }, "/logo.png": { type: "static" }, "/_not-found": { type: "function", entrypoint: "__next-on-pages-dist__/functions/_not-found.func.js" }, "/_not-found.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/_not-found.func.js" }, "/about": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about.func.js" }, "/about.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about.func.js" }, "/account/profile": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/profile.func.js" }, "/account/profile.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/profile.func.js" }, "/account/reservations/edit/[bookingId]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/reservations/edit/[bookingId].func.js" }, "/account/reservations/edit/[bookingId].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/reservations/edit/[bookingId].func.js" }, "/account/reservations": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/reservations.func.js" }, "/account/reservations.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account/reservations.func.js" }, "/account": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account.func.js" }, "/account.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/account.func.js" }, "/api/auth/[...nextauth]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/auth/[...nextauth].func.js" }, "/api/auth/[...nextauth].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/auth/[...nextauth].func.js" }, "/api/cabins/[cabinId]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/cabins/[cabinId].func.js" }, "/api/cabins/[cabinId].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/cabins/[cabinId].func.js" }, "/cabins/[cabinId]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/cabins/[cabinId].func.js" }, "/cabins/[cabinId].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/cabins/[cabinId].func.js" }, "/cabins": { type: "function", entrypoint: "__next-on-pages-dist__/functions/cabins.func.js" }, "/cabins.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/cabins.func.js" }, "/icon": { type: "function", entrypoint: "__next-on-pages-dist__/functions/icon.func.js" }, "/icon.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/icon.func.js" }, "/index": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/index.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/index.func.js" }, "/login": { type: "function", entrypoint: "__next-on-pages-dist__/functions/login.func.js" }, "/login.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/login.func.js" }, "/signup": { type: "function", entrypoint: "__next-on-pages-dist__/functions/signup.func.js" }, "/signup.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/signup.func.js" }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/__next_data_catchall": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, middleware: { type: "middleware", entrypoint: "__next-on-pages-dist__/functions/middleware.func.js" } };
});
var q = U((Ge, F) => {
  "use strict";
  u();
  d();
  p();
  function b(e, t) {
    e = String(e || "").trim();
    let n = e, s, r = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      r += e.substring(o + 1), e = e.substring(1, o);
    }
    let a = 0;
    return e = pe(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c) throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let l = o.substring(c[0].length, o.length - 1);
        return t && (t[a] = c[1]), a++, `(${l})`;
      }
      return o.substring(0, 3) === "(?:" || a++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => b.characterClasses[c] || o), new b.PCRE(e, r, n, r, s);
  }
  __name(b, "b");
  function pe(e, t) {
    let n = 0, s = 0, r = false;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      if (r) {
        r = false;
        continue;
      }
      switch (a) {
        case "(":
          s === 0 && (n = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = n === 0 ? "" : e.substring(0, n), l = e.substring(o), h = String(t(e.substring(n, o)));
            e = c + h + l, i = n;
          }
          break;
        case "\\":
          r = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(pe, "pe");
  (function(e) {
    class t extends RegExp {
      static {
        __name(this, "t");
      }
      constructor(s, r, i, a, o) {
        super(s, r), this.pcrePattern = i, this.pcreFlags = a, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(b || (b = {}));
  b.prototype = b.PCRE.prototype;
  F.exports = b;
});
var Z = U((O) => {
  "use strict";
  u();
  d();
  p();
  O.parse = Pe;
  O.serialize = ve;
  var Re = Object.prototype.toString, I = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Pe(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var n = {}, s = t || {}, r = s.decode || ke, i = 0; i < e.length; ) {
      var a = e.indexOf("=", i);
      if (a === -1) break;
      var o = e.indexOf(";", i);
      if (o === -1) o = e.length;
      else if (o < a) {
        i = e.lastIndexOf(";", a - 1) + 1;
        continue;
      }
      var c = e.slice(i, a).trim();
      if (n[c] === void 0) {
        var l = e.slice(a + 1, o).trim();
        l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), n[c] = Ce(l, r);
      }
      i = o + 1;
    }
    return n;
  }
  __name(Pe, "Pe");
  function ve(e, t, n) {
    var s = n || {}, r = s.encode || Se;
    if (typeof r != "function") throw new TypeError("option encode is invalid");
    if (!I.test(e)) throw new TypeError("argument name is invalid");
    var i = r(t);
    if (i && !I.test(i)) throw new TypeError("argument val is invalid");
    var a = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o)) throw new TypeError("option maxAge is invalid");
      a += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!I.test(s.domain)) throw new TypeError("option domain is invalid");
      a += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!I.test(s.path)) throw new TypeError("option path is invalid");
      a += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!je(c) || isNaN(c.valueOf())) throw new TypeError("option expires is invalid");
      a += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (a += "; HttpOnly"), s.secure && (a += "; Secure"), s.priority) {
      var l = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (l) {
        case "low":
          a += "; Priority=Low";
          break;
        case "medium":
          a += "; Priority=Medium";
          break;
        case "high":
          a += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var h = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (h) {
        case true:
          a += "; SameSite=Strict";
          break;
        case "lax":
          a += "; SameSite=Lax";
          break;
        case "strict":
          a += "; SameSite=Strict";
          break;
        case "none":
          a += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return a;
  }
  __name(ve, "ve");
  function ke(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(ke, "ke");
  function Se(e) {
    return encodeURIComponent(e);
  }
  __name(Se, "Se");
  function je(e) {
    return Re.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(je, "je");
  function Ce(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(Ce, "Ce");
});
u();
d();
p();
u();
d();
p();
u();
d();
p();
var R = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
d();
p();
u();
d();
p();
u();
d();
p();
u();
d();
p();
var z = V(q());
function S(e, t, n) {
  if (t == null) return { match: null, captureGroupKeys: [] };
  let s = n ? "" : "i", r = [];
  return { match: (0, z.default)(`%${e}%${s}`, r).exec(t), captureGroupKeys: r };
}
__name(S, "S");
function P(e, t, n, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (r, i) => {
    let a = n.indexOf(i);
    return s && a === -1 ? r : (a === -1 ? t[parseInt(i, 10)] : t[a + 1]) || "";
  });
}
__name(P, "P");
function M(e, { url: t, cookies: n, headers: s, routeDest: r }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? E(e.value, s.get(e.key), r) : { valid: s.has(e.key) };
    case "cookie": {
      let i = n[e.key];
      return i && e.value !== void 0 ? E(e.value, i, r) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? E(e.value, t.searchParams.get(e.key), r) : { valid: t.searchParams.has(e.key) };
  }
}
__name(M, "M");
function E(e, t, n) {
  let { match: s, captureGroupKeys: r } = S(e, t);
  return n && s && r.length ? { valid: !!s, newRouteDest: P(n, s, r, { namedOnly: true }) } : { valid: !!s };
}
__name(E, "E");
u();
d();
p();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", R), new Request(e, { headers: t });
}
__name(D, "D");
u();
d();
p();
function x(e, t, n) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [r, i] of s) {
    let a = r.toLowerCase(), o = n?.match ? P(i, n.match, n.captureGroupKeys) : i;
    a === "set-cookie" ? e.append(a, o) : e.set(a, o);
  }
}
__name(x, "x");
function v(e) {
  return /^https?:\/\//.test(e);
}
__name(v, "v");
function _(e, t) {
  for (let [n, s] of t.entries()) {
    let r = /^nxtP(.+)$/.exec(n), i = /^nxtI(.+)$/.exec(n);
    r?.[1] ? (e.set(n, s), e.set(r[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(n) || s && !e.getAll(n).includes(s)) && e.append(n, s);
  }
}
__name(_, "_");
function N(e, t) {
  let n = new URL(t, e.url);
  return _(n.searchParams, new URL(e.url).searchParams), n.pathname = n.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(n, e);
}
__name(N, "N");
function k(e) {
  return new Response(e.body, e);
}
__name(k, "k");
function L(e) {
  return e.split(",").map((t) => {
    let [n, s] = t.split(";"), r = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [n.trim(), isNaN(r) ? 1 : r];
  }).sort((t, n) => n[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(L, "L");
u();
d();
p();
function A(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(A, "A");
async function j(e, { request: t, assetsFetcher: n, ctx: s }, { path: r, searchParams: i }) {
  let a, o = new URL(t.url);
  _(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let l = await import(e.entrypoint);
        try {
          a = await l.default(c, s);
        } catch (h) {
          let y = h;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        a = k(await n.fetch(N(c, e.path ?? r))), e.headers && x(a.headers, e.headers);
        break;
      }
      case "static": {
        a = await n.fetch(N(c, r));
        break;
      }
      default:
        a = new Response("Not Found", { status: 404 });
    }
  } catch (l) {
    return console.error(l), new Response("Internal Server Error", { status: 500 });
  }
  return k(a);
}
__name(j, "j");
function W(e, t) {
  let n = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(n) || !e.endsWith(s) ? false : e.slice(n.length, -s.length).split("|").every((i) => t.has(i));
}
__name(W, "W");
u();
d();
p();
function le(e, { protocol: t, hostname: n, port: s, pathname: r }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(n).test(e.hostname) || s && !new RegExp(s).test(e.port) || r && !new RegExp(r).test(e.pathname));
}
__name(le, "le");
function he(e, t) {
  if (e.method !== "GET") return;
  let { origin: n, searchParams: s } = new URL(e.url), r = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), a = Number.parseInt(s.get("q") ?? "75", 10);
  if (!r || Number.isNaN(i) || Number.isNaN(a) || !t?.sizes?.includes(i) || a < 0 || a > 100) return;
  let o = new URL(r, n);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG) return;
  let c = r.startsWith("//"), l = r.startsWith("/") && !c;
  if (!l && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((w) => le(o, w))) return;
  let h = e.headers.get("Accept") ?? "", y = t?.formats?.find((w) => h.includes(w))?.replace("image/", "");
  return { isRelative: l, imageUrl: o, options: { width: i, quality: a, format: y } };
}
__name(he, "he");
function fe(e, t, n) {
  let s = new Headers();
  if (n?.contentSecurityPolicy && s.set("Content-Security-Policy", n.contentSecurityPolicy), n?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), a = i ? `${n.contentDispositionType}; filename="${i}"` : n.contentDispositionType;
    s.set("Content-Disposition", a);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${n?.minimumCacheTTL ?? 60}`);
  let r = k(e);
  return x(r.headers, s), r;
}
__name(fe, "fe");
async function X(e, { buildOutput: t, assetsFetcher: n, imagesConfig: s }) {
  let r = he(e, s);
  if (!r) return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: a } = r, c = await (i && a.pathname in t ? n.fetch.bind(n) : fetch)(a);
  return fe(c, a, s);
}
__name(X, "X");
u();
d();
p();
u();
d();
p();
u();
d();
p();
async function C(e) {
  return import(e);
}
__name(C, "C");
var ge = "x-vercel-cache-tags";
var me = "x-next-cache-soft-tags";
var ye = /* @__PURE__ */ Symbol.for("__cloudflare-request-context__");
async function K(e) {
  let t = `https://${R}/v1/suspense-cache/`;
  if (!e.url.startsWith(t)) return null;
  try {
    let n = new URL(e.url), s = await xe();
    if (n.pathname === "/v1/suspense-cache/revalidate") {
      let i = n.searchParams.get("tags")?.split(",") ?? [];
      for (let a of i) await s.revalidateTag(a);
      return new Response(null, { status: 200 });
    }
    let r = n.pathname.replace("/v1/suspense-cache/", "");
    if (!r.length) return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = G(e, me), a = await s.get(r, { softTags: i });
        return a ? new Response(JSON.stringify(a.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (a.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = globalThis[ye], a = /* @__PURE__ */ __name(async () => {
          let o = await e.json();
          o.data.tags === void 0 && (o.tags ??= G(e, ge) ?? []), await s.set(r, o);
        }, "a");
        return i ? i.ctx.waitUntil(a()) : await a(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (n) {
    return console.error(n), new Response("Error handling cache request", { status: 500 });
  }
}
__name(K, "K");
async function xe() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? B("kv") : B("cache-api");
}
__name(xe, "xe");
async function B(e) {
  let t = `./__next-on-pages-dist__/cache/${e}.js`, n = await C(t);
  return new n.default();
}
__name(B, "B");
function G(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(G, "G");
function J() {
  globalThis[Y] || (_e(), globalThis[Y] = true);
}
__name(J, "J");
function _e() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let n = new Request(...t), s = await be(n);
    return s || (s = await K(n), s) ? s : (we(n), e(n));
  };
}
__name(_e, "_e");
async function be(e) {
  if (e.url.startsWith("blob:")) try {
    let n = `./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`, s = (await C(n)).default, r = { async arrayBuffer() {
      return s;
    }, get body() {
      return new ReadableStream({ start(i) {
        let a = Buffer.from(s);
        i.enqueue(a), i.close();
      } });
    }, async text() {
      return Buffer.from(s).toString();
    }, async json() {
      let i = Buffer.from(s);
      return JSON.stringify(i.toString());
    }, async blob() {
      return new Blob(s);
    } };
    return r.clone = () => ({ ...r }), r;
  } catch {
  }
  return null;
}
__name(be, "be");
function we(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(we, "we");
var Y = /* @__PURE__ */ Symbol.for("next-on-pages fetch patch");
u();
d();
p();
var Q = V(Z());
var $ = class {
  static {
    __name(this, "$");
  }
  constructor(t, n, s, r, i) {
    this.routes = t;
    this.output = n;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), _(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((a) => a.domain === this.url.hostname), this.locales = new Set(r.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: n, checkIntercept: s }) {
    let r = S(t.src, this.path, t.caseSensitive);
    if (!r.match || t.methods && !t.methods.map((a) => a.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase())) return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((a) => {
      let o = M(a, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((a) => M(a, i).valid) && !(n && t.status !== this.status)) {
      if (s && t.dest) {
        let a = /\/(\(\.+\))+/, o = a.test(t.dest), c = a.test(this.path);
        if (o && !c) return;
      }
      return { routeMatch: r, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let n = "x-middleware-override-headers", s = t.headers.get(n);
    if (s) {
      let c = new Set(s.split(",").map((l) => l.trim()));
      for (let l of c.keys()) {
        let h = `x-middleware-request-${l}`, y = t.headers.get(h);
        this.reqCtx.request.headers.get(l) !== y && (y ? this.reqCtx.request.headers.set(l, y) : this.reqCtx.request.headers.delete(l)), t.headers.delete(h);
      }
      t.headers.delete(n);
    }
    let r = "x-middleware-rewrite", i = t.headers.get(r);
    if (i) {
      let c = new URL(i, this.url), l = this.url.hostname !== c.hostname;
      this.path = l ? `${c}` : c.pathname, _(this.searchParams, c.searchParams), t.headers.delete(r);
    }
    let a = "x-middleware-next";
    t.headers.get(a) ? t.headers.delete(a) : !i && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), x(this.reqCtx.request.headers, t.headers), x(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t) return true;
    let n = t && this.output[t];
    if (!n || n.type !== "middleware") return this.status = 500, false;
    let s = await j(n, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    t.override && (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, n, s) {
    t.headers && (x(this.headers.normal, t.headers, { match: n, captureGroupKeys: s }), t.important && x(this.headers.important, t.headers, { match: n, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    t.status && (this.status = t.status);
  }
  applyRouteDest(t, n, s) {
    if (!t.dest) return this.path;
    let r = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = P(i, n, s);
    let a = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(r), c = /^\/__index\.prefetch\.rsc$/i.test(r);
    a && !o && !c && (this.path = r);
    let l = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    l && !h && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let w = new URL(this.path, this.url);
    return _(this.searchParams, w.searchParams), v(this.path) || (this.path = w.pathname), r;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location")) return;
    let { locale: { redirect: s, cookie: r } } = t, i = r && this.cookies[r], a = L(i ?? ""), o = L(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...a, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, n) {
    return !this.locales || n !== "miss" ? t : W(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, n) {
    let s = this.getLocaleFriendlyRoute(n, t), { routeMatch: r, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, a = { ...s, dest: i };
    if (!r?.match || a.middlewarePath && this.middlewareInvoked.includes(a.middlewarePath)) return "skip";
    let { match: o, captureGroupKeys: c } = r;
    if (this.applyRouteOverrides(a), this.applyLocaleRedirects(a), !await this.runRouteMiddleware(a.middlewarePath)) return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation) return "done";
    this.applyRouteHeaders(a, o, c), this.applyRouteStatus(a);
    let h = this.applyRouteDest(a, o, c);
    if (a.check && !v(this.path)) if (h === this.path) {
      if (t !== "miss") return this.checkPhase(A(t));
      this.status = 404;
    } else if (t === "miss") {
      if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output)) return this.checkPhase("filesystem");
      this.status === 404 && (this.status = void 0);
    } else return this.checkPhase("none");
    return !a.continue || a.status && a.status >= 300 && a.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50) return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let n = true;
    for (let i of this.routes[t]) {
      let a = await this.checkRoute(t, i);
      if (a === "error") return "error";
      if (a === "done") {
        n = false;
        break;
      }
    }
    if (t === "hit" || v(this.path) || this.headers.normal.has("location") || this.body) return "done";
    if (t === "none") for (let i of this.locales) {
      let a = new RegExp(`/${i}(/.*)`), c = this.path.match(a)?.[1];
      if (c && c in this.output) {
        this.path = c;
        break;
      }
    }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let r = "miss";
    return s || t === "miss" || t === "error" ? r = "hit" : n && (r = A(t)), this.checkPhase(r);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let n = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), n;
  }
};
async function ee(e, t, n, s) {
  let r = new $(t.routes, n, e, s, t.wildcard), i = await te(r);
  return Ie(e, i, n);
}
__name(ee, "ee");
async function te(e, t = "none", n = false) {
  return await e.run(t) === "error" || !n && e.status && e.status >= 400 ? te(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(te, "te");
async function Ie(e, { path: t = "/404", status: n, headers: s, searchParams: r, body: i }, a) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let h = [...r.keys()].length ? `?${r.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${h}`);
    }
    return new Response(null, { status: n, headers: s.normal });
  }
  let c;
  if (i !== void 0) c = new Response(i, { status: n });
  else if (v(t)) {
    let h = new URL(t);
    _(h.searchParams, r), c = await fetch(h, e.request);
  } else c = await j(a[t], e, { path: t, status: n, headers: s, searchParams: r });
  let l = s.normal;
  return x(l, c.headers), x(l, s.important), c = new Response(c.body, { ...c, status: n || c.status, headers: l }), c;
}
__name(Ie, "Ie");
u();
d();
p();
function se() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: $e };
}
__name(se, "se");
function $e(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t) return t;
  let n = Te();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, n), n;
}
__name($e, "$e");
function Te() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: /* @__PURE__ */ __name((t, n) => e.has(n) ? e.get(n) : Reflect.get(globalThis, n), "get"), set: /* @__PURE__ */ __name((t, n, s) => Ee.has(n) ? Reflect.set(globalThis, n, s) : (e.set(n, s), true), "set") });
}
__name(Te, "Te");
var Ee = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var Me = Object.defineProperty;
var Ne = /* @__PURE__ */ __name((...e) => {
  let t = e[0], n = e[1], s = "__import_unsupported";
  if (!(n === s && typeof t == "object" && t !== null && s in t)) return Me(...e);
}, "Ne");
globalThis.Object.defineProperty = Ne;
globalThis.AbortController = class extends AbortController {
  constructor() {
    try {
      super();
    } catch (t) {
      if (t instanceof Error && t.message.includes("Disallowed operation called within global scope")) return { signal: { aborted: false, reason: null, onabort: /* @__PURE__ */ __name(() => {
      }, "onabort"), throwIfAborted: /* @__PURE__ */ __name(() => {
      }, "throwIfAborted") }, abort() {
      } };
      throw t;
    }
  }
};
var ks = { async fetch(e, t, n) {
  se(), J();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let a = new URL(e.url), o = await t.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: r, requestContextAsyncLocalStorage: i } = s;
  return r.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: R }, async () => i.run({ env: t, ctx: n, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image")) return X(e, { buildOutput: g, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = D(e);
    return ee({ request: o, ctx: n, assetsFetcher: t.ASSETS }, f, g, m);
  }));
} };
export {
  ks as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=bundledWorker-0.29677863076949784.mjs.map
