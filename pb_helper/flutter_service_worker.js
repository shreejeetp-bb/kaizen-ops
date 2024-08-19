'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "abbb66fef8d6a2c00fb1bbb544c4601f",
"version.json": "e4297f46aa192f57af31b8506e93c4e2",
"index.html": "ad8890b313c93a0a2ea9a21fdbbaf6a4",
"/": "ad8890b313c93a0a2ea9a21fdbbaf6a4",
"main.dart.js": "cb32c49a560062ceb1c1ee86c0c2d280",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "b27f874e454e94097b9d157566d4bc8a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f3afd89173de606b63c26ae163c1c980",
"main.dart.wasm": "ce00f4e5e8095fcae3e11d0cdb47a595",
"assets/AssetManifest.json": "48a8237d7579ab9e5a0bac9cd45d9a3d",
"assets/NOTICES": "19ab7e7d656de2530dfec1d06998ecb2",
"assets/FontManifest.json": "c78b1b4b1e76a371cf662924d76b6cc9",
"assets/AssetManifest.bin.json": "c19fb835bc32638d76de34e0e276c682",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "87a29cbae506c8b4dfee08b8f1977ca1",
"assets/packages/harmonix_library/assets/images/chevron_white.png": "6542addeea4dfe2b8ac000c6aeaa460d",
"assets/packages/harmonix_library/assets/images/instant.png": "8d58d6d2a6cc133cf212c7b9c7542ad4",
"assets/packages/harmonix_library/assets/images/oa_schedule_delivery_icon.png": "d38b0111ab099e5c3830dc2ea31d1200",
"assets/packages/harmonix_library/assets/images/volume_off.png": "98f9c73503ed5b431074245618eb3e59",
"assets/packages/harmonix_library/assets/images/offer.png": "b8a0ba3f9c8a513cc4bfc111a637240c",
"assets/packages/harmonix_library/assets/images/expand.png": "056f11ad4936ab1579c2eca1ff404a23",
"assets/packages/harmonix_library/assets/images/map.png": "e3a031181286bfa05c4e04a3567dd609",
"assets/packages/harmonix_library/assets/images/arrow-arc-left.png": "5600b48782dd2c682610043181ea1542",
"assets/packages/harmonix_library/assets/images/volume_up.png": "094a93d1df7ec4ec06cb79d179a21e20",
"assets/packages/harmonix_library/assets/images/instant-fade.png": "52f8c2b54519ea7ea2590f0d203c75b4",
"assets/packages/harmonix_library/assets/images/search.png": "8b606342a3c4e795243610bb236009ec",
"assets/packages/harmonix_library/assets/images/placeholder.png": "2aba1b6ca76f6457ece90c9e476387be",
"assets/packages/harmonix_library/assets/images/instant_black.png": "cac0aa9345b9d33ec58d81ae8c520ceb",
"assets/packages/harmonix_library/assets/images/oa_quick_delivery_icon.png": "2f002e55192ddb3b0914828bb6d46ff0",
"assets/packages/harmonix_library/assets/images/mute.png": "178afb82297846cb86c6c02c8cf857d0",
"assets/packages/harmonix_library/assets/icons/helpful_thumb_outline.png": "758dc29fade119a8c58137a4172d30b3",
"assets/packages/harmonix_library/assets/icons/forward_arrow.png": "f4c7643ef151217a902106650596cc15",
"assets/packages/harmonix_library/assets/icons/helpful_thumb_filled.png": "f27139e8d61e45fdea03a181b4feaaad",
"assets/packages/harmonix_library/assets/icons/non_veg.png": "0764c295172ac0190c82c212adcbb75e",
"assets/packages/harmonix_library/assets/icons/arrow_right_rounded.png": "0a6b669525bbc550edf2f5bd2a2c6c4f",
"assets/packages/harmonix_library/assets/icons/tracking_delivery_shield.png": "b90bbe54ac14c913f4902b92b6773356",
"assets/packages/harmonix_library/assets/icons/bar_code_scanner.png": "f359fa15444505e411e3a2127410d18b",
"assets/packages/harmonix_library/assets/icons/elevate_leading.png": "25f5e52cac56ad1162c26c9fd62ff89c",
"assets/packages/harmonix_library/assets/icons/offer_tag.png": "924091c54dd695f680d482300490e503",
"assets/packages/harmonix_library/assets/icons/avatar.png": "a5877d050fc898d78134e948e8c23af6",
"assets/packages/harmonix_library/assets/icons/veg.png": "8c20b3525c1fa7c4c23cbabc7e82697e",
"assets/packages/harmonix_library/assets/icons/keyboard_arrow_down_green.png": "509889530ea50fbb83efd45fcf09823d",
"assets/packages/harmonix_library/assets/icons/true_weight_leading.png": "258f09065eab6267e6293f2d774c76cc",
"assets/packages/harmonix_library/assets/icons/tobacco_copy_icon.png": "ee7b9d7a546b6c6bd2b4c229cb2d1cc5",
"assets/packages/harmonix_library/assets/lottie/default_loading.json": "fb0ca24f6418312d04b20ef70479ea95",
"assets/packages/harmonix_library/assets/fonts/harmonix_icons.ttf": "79a0a8d1bbf810f43c38e9369708e0b7",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-MediumItalic.ttf": "4790a18709e781a0994dc17d04fd66f5",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-SemiBoldItalic.ttf": "a8a77ad44dbe8c031ce7b5442661610f",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf": "5f439e081a4e2980f8368285f7d0f8c9",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-LightItalic.ttf": "ac5353ac12658ccfd7eca99a25be7037",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-BlackItalic.ttf": "db5b8553106c0268251f65367ecfc3a0",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/packages/harmonix_library/assets/fonts/rubik/Rubik-BoldItalic.ttf": "dc069fd43e202359cfef038ce28b20ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c62b1491d6bf2963b987daecb42e87a5",
"assets/fonts/MaterialIcons-Regular.otf": "ff9c1873ec29d6819ac223c2785eabc7",
"assets/assets/icons/checker-square.png": "576e0f5187c65243cde0521cdef0a01c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
