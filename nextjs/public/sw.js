if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e12929d04694c76156a76972dfeffcf7"},{url:"/_next/static/H3dJQpCeQ_sEsFVU12zr_/_buildManifest.js",revision:"9700669aa21c63eeeb27eb3386d2147f"},{url:"/_next/static/H3dJQpCeQ_sEsFVU12zr_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1664-6810adff47f32177.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/182-589617e6e76e4cea.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/1958-01467b6ce3015940.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/2443530c-d9b40a6321409a6b.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/2678b245-f72a1e5588712178.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/3741-915414f8bf46c7bf.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/4257-2431106fbe5678a2.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/4705-7d305583cec0dcdd.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/4895-13a4d714f0bf2747.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/5551-1574c57c43e2332f.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/5913-949ca07740cb0450.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/6130-472cac0ffc6ba0a7.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/6478-12eeb9016477b251.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/6490-61d6be2c3fb75f06.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/6679-acb5ceb274b7b02b.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/7093-f99bd8c9dac97a21.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/7386-22bb7ea6dcd0acb8.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/75fc9c18-1d6133135d3d283c.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/7860-d7cc70db2b18f960.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/8118-8b50689e6414b75a.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/8139-9138dca77d5e6b14.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/8543-b31f5491b89acf1c.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/8594-70b8051f1b63d723.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/9305-430a53c909b4aded.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/9359-3880315fe2195b9f.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/app/layout-072d7288f7c6b87a.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/app/page-934fadaa7b7ca428.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/app/signin/page-ed727a352d1d7220.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/app/signup/page-5ba981e7f46ceb87.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/ee8b1517-a5b5a7b3a2ff188c.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/f389acab-bdaa04644790a70a.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/main-a3e81b6314ce50fd.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/main-app-7f6878fa5acd125b.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/_app-143fbb7a6cad9a71.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/_error-48231c25f4fdaf06.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/dashboard-ddea9bf952fd7d7e.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/freelancers/%5BprofileId%5D-d4d22d86825bad6e.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/home-f8eeeaa102406253.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/linkaccount-627b88a21bdcf086.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/me-f1b8ed83c278f960.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/notification-3b613013be466e9e.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects-43a1b364202a5a43.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D-c9905c7355fa0e56.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/%5Bproposal_id%5D-b93803ab366237f7.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/%5Bproposal_id%5D/edit-6dce6bd0e1d13dac.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/contracts/%5Bcontract_id%5D-7ae7eb74368e9b8e.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/contracts/%5Bcontract_id%5D/edit-ad6112e8a4baa821.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/contracts/create-470f62eed67b0324.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/projects/%5Bproject_id%5D/proposals/create-fddfc2ff03a6a606.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/register-ad9b4a073915223b.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/pages/users/emailverification/%5BemailVerificationToken%5D-e9c2467ac1b492ca.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-52f0e91b32ad8aed.js",revision:"H3dJQpCeQ_sEsFVU12zr_"},{url:"/_next/static/css/0c8e6b96f2a571c8.css",revision:"0c8e6b96f2a571c8"},{url:"/_next/static/css/727ad4402a4b7c9f.css",revision:"727ad4402a4b7c9f"},{url:"/_next/static/css/bcb74d9a230ee7af.css",revision:"bcb74d9a230ee7af"},{url:"/_next/static/css/c5bb6ca3ffdf80c6.css",revision:"c5bb6ca3ffdf80c6"},{url:"/_next/static/css/d590f4c3c5620e08.css",revision:"d590f4c3c5620e08"},{url:"/_next/static/media/client.b872823b.png",revision:"2ef876e7e534de8a85f0c0371dfb621f"},{url:"/_next/static/media/fa-brands-400.5f7c5bb7.ttf",revision:"5f7c5bb7"},{url:"/_next/static/media/fa-brands-400.9210030c.woff2",revision:"9210030c"},{url:"/_next/static/media/fa-regular-400.02ad4ff9.woff2",revision:"02ad4ff9"},{url:"/_next/static/media/fa-regular-400.570a165b.ttf",revision:"570a165b"},{url:"/_next/static/media/fa-solid-900.0b5caff7.ttf",revision:"0b5caff7"},{url:"/_next/static/media/fa-solid-900.3eae9857.woff2",revision:"3eae9857"},{url:"/_next/static/media/fa-v4compatibility.6209cf01.woff2",revision:"6209cf01"},{url:"/_next/static/media/fa-v4compatibility.92dce52f.ttf",revision:"92dce52f"},{url:"/_next/static/media/facebook.943a925c.png",revision:"8f5ce27564945d2c9a10ef827549a78c"},{url:"/_next/static/media/freelancer.8c47c91e.png",revision:"612b58cbe01af1eb711c50c8b6a7e2cf"},{url:"/_next/static/media/fst.d2b6c0e3.png",revision:"a2133e528b341668fd79babc322b65be"},{url:"/_next/static/media/google.aeee8a20.png",revision:"e91b3a96a67a4ef0a7f60d26a45f8277"},{url:"/_next/static/media/heroImage.13feb790.jpg",revision:"b25c5f2b79287ea8e9dc58517265aaba"},{url:"/_next/static/media/logo.900fedab.png",revision:"650252261ed21868167c563458b7fee6"},{url:"/_next/static/media/microsoft.80529d7a.png",revision:"d9727c7024ffa06b6d6ad35bcc527f02"},{url:"/client.png",revision:"2ef876e7e534de8a85f0c0371dfb621f"},{url:"/facebook.png",revision:"8f5ce27564945d2c9a10ef827549a78c"},{url:"/freelancer.png",revision:"612b58cbe01af1eb711c50c8b6a7e2cf"},{url:"/fst.png",revision:"a2133e528b341668fd79babc322b65be"},{url:"/google.png",revision:"e91b3a96a67a4ef0a7f60d26a45f8277"},{url:"/heroImage.jpg",revision:"b25c5f2b79287ea8e9dc58517265aaba"},{url:"/icon-192x192.png",revision:"e00df923b3e552be7d1fcb9bbda9c9dd"},{url:"/icon-256x256.png",revision:"8aa9b44f1a5a551b97dff35a0682cd8b"},{url:"/icon-384x384.png",revision:"fd37a642bea830d82906742f42a3da28"},{url:"/icon-512x512.png",revision:"650252261ed21868167c563458b7fee6"},{url:"/logo.png",revision:"650252261ed21868167c563458b7fee6"},{url:"/manifest.json",revision:"141ebf557a8a0d964f580c6c792d8093"},{url:"/microsoft.png",revision:"d9727c7024ffa06b6d6ad35bcc527f02"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
