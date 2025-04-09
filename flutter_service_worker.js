'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"index.html": "c63780f19b228e2f465b831522d712c1",
"/": "c63780f19b228e2f465b831522d712c1",
"assets/NOTICES": "b983f58499ea605173920562a4bafd41",
"assets/assets/images/party-pop.gif": "bb05c16621c593af785c753f1c504d81",
"assets/assets/images/practice.gif": "f4175da8ad81f58bd9844269ca3ccf61",
"assets/assets/images/backgroundd-dark.gif": "d94d8a0126ce4836aa4a2d08fd1e075d",
"assets/assets/images/circle/q2.png": "5e763cc1d0ba86a60f8bc0c638efae98",
"assets/assets/images/circle/Tangent_s.png": "4308bdf73ba8aeded14227b8ec32b267",
"assets/assets/images/circle/Chord_e.png": "d7d3d10df702a3ec75405a8d4560aa00",
"assets/assets/images/circle/circle_e.png": "1d25ff6b233102bec81c83f0aca4c3bb",
"assets/assets/images/circle/q8.png": "9e5e30eedd18e7102f88010205b7b9b7",
"assets/assets/images/circle/Raduis_e.png": "cce5f314de6230b203605ae08cbcdeb3",
"assets/assets/images/circle/q7.png": "aba3a6432f1121f58228c28aeaddb4f0",
"assets/assets/images/circle/Arc_s.png": "a2382e8cca55a64b28f1fd9c7de1fcb1",
"assets/assets/images/circle/q10.png": "f374c9f14c1cfb2f737965c1b849bb13",
"assets/assets/images/circle/q3.png": "27d712a0137f510cfd34405220a0a975",
"assets/assets/images/circle/q9.png": "520a49984ce5ab993ef32061ec9779f1",
"assets/assets/images/circle/q5.png": "fd22fd9568610be2710de425c93d6537",
"assets/assets/images/circle/Practice4.png": "12da381c88072dbe7f3363ea11c27ef7",
"assets/assets/images/circle/Practice2.png": "dac0a4d83c0f0cc27d9e085d060d1703",
"assets/assets/images/circle/Practice6.png": "e6c1ee2fdb99b344e891394b03f577c6",
"assets/assets/images/circle/Chord_s.png": "8feec7b027a979da4976ee2843737dee",
"assets/assets/images/circle/Tangent_e.png": "5c0403450e27b38a4a5343187323a6ab",
"assets/assets/images/circle/Circumference_e.png": "fded1a7f3a6a843e94f1f0971ad6d9fc",
"assets/assets/images/circle/Practice1.png": "169816eaddf7d88dc888a0237bd80c68",
"assets/assets/images/circle/Raduis_s.png": "0c0818d1bec9637674df3d89dafe953e",
"assets/assets/images/circle/q4.png": "1f0b65c5dbd400aa1f05862d4ea307e4",
"assets/assets/images/circle/Practice3.png": "7cc4782e5b7ac39cf786abb298611e95",
"assets/assets/images/circle/Diameter_s.png": "837c7fa983d54703351e64377b5869c0",
"assets/assets/images/circle/Circumference_s.png": "4948259271c3415ae2e1aad1a596ed76",
"assets/assets/images/circle/circle_s.png": "aecd6171c35142ada5027cf22a4378c1",
"assets/assets/images/circle/Diameter_e.png": "7fef4961f6d21d24a795aaefc7961336",
"assets/assets/images/circle/q6.png": "a9c66aeca2f623fdda1bf1ed9ab00739",
"assets/assets/images/circle/Arc_e.png": "f8b23863cdb7a574903cc2106c7577fa",
"assets/assets/images/circle/Practice5.png": "80d1faa6651c794405e5641b593238f6",
"assets/assets/images/circle/q1.png": "a7067ba4f0af1b94452d30d68a3e2d04",
"assets/assets/images/quadrilateral/Quadrilateral_E.png": "19a4e7e260d796e39aace511e2c991aa",
"assets/assets/images/quadrilateral/square.png": "b9d5c35f9c50f8c9928266ba3d4aa462",
"assets/assets/images/quadrilateral/Kite_E.png": "0c0889b5537f4fa5625697ef9f3ec683",
"assets/assets/images/quadrilateral/parallelogram.png": "eb279f6e0500fd31cfec8a73d82b3574",
"assets/assets/images/quadrilateral/Trapezoid_E.png": "98d5bf724a7940285bb32dbbefc507b1",
"assets/assets/images/quadrilateral/Square_E.png": "377df7b13e94aac149ae59573494d1db",
"assets/assets/images/quadrilateral/Rhombus_S.png": "a11ae63df6b083dfff8011046cadcfd4",
"assets/assets/images/quadrilateral/Rectangle_S.png": "3e9bb4280263c1af2e051ca3c400e487",
"assets/assets/images/quadrilateral/quiz/qq3.jpg": "ad51353e342d4a30820245db099fc0cc",
"assets/assets/images/quadrilateral/quiz/qq8.png": "b895f4e85b3dac9220b4cd41b13492c6",
"assets/assets/images/quadrilateral/quiz/qq4.webp": "0efecc5107d0d6a8858afe6cf230c5a0",
"assets/assets/images/quadrilateral/quiz/qq6.jpg": "a9b44036a30254807ee4126e8910e7ea",
"assets/assets/images/quadrilateral/quiz/qq9.png": "d6e58a451ab810fcb05b4d49d2dc992b",
"assets/assets/images/quadrilateral/quiz/qq7.png": "36e66fa46cddedd9be8bd9ccd1c1d89c",
"assets/assets/images/quadrilateral/quiz/qq5.jpg": "5c89b1df441bb372ba60bc41390cce3a",
"assets/assets/images/quadrilateral/quiz/qq2.jpg": "fd4112d265cbdaf2f4aa6b09f9dea66b",
"assets/assets/images/quadrilateral/quiz/qq10.png": "2c243d99415a8c678fedd99962c846fd",
"assets/assets/images/quadrilateral/quiz/qq1.jpg": "a6d801bfe8d8f0cde1e6dd33db89d0d0",
"assets/assets/images/quadrilateral/Trapezoid_S.png": "d67150053a98fbefe3948ae5f3c4dc03",
"assets/assets/images/quadrilateral/Rhombus_E.png": "72fc65ef7e31af5b724da5d8b086fe82",
"assets/assets/images/quadrilateral/rectangle.png": "bce0045bec0dd34e89f2463cb3f0aa12",
"assets/assets/images/quadrilateral/Parallelogram_E.png": "704b45549f3161aaf81503d07f0c1323",
"assets/assets/images/quadrilateral/Square_S.png": "8368bbd2be74a5eb82beb4e8d843ccd1",
"assets/assets/images/quadrilateral/Parallelogram_S.png": "04a4212487f74969d1bd67d66281a7f6",
"assets/assets/images/quadrilateral/quadrilateral_image.png": "5aca5f8d8b196fb20749ec2d7158708a",
"assets/assets/images/quadrilateral/Quadrilateral_S.png": "caf503928d5a071992ba02bd513ec439",
"assets/assets/images/quadrilateral/Kite_S.png": "d63d56dd51674367ffc68a4560694b34",
"assets/assets/images/quadrilateral/Rectangle_E.png": "6f3172ca836fda8c6b93e89e1cf0ac6d",
"assets/assets/images/angles/obtuse.png": "5ebc5d1970c09f510c01435159434288",
"assets/assets/images/angles/ObtuseANgle_E.png": "f42f2a1873a645408772ec27c32b040b",
"assets/assets/images/angles/AcuteAngle_s.png": "aa840b280cbfa74ff67942d7fa4d1d13",
"assets/assets/images/angles/StraightAngle_S.png": "34dd841ab6fa6bd0396ad6a75d5ff49c",
"assets/assets/images/angles/angles.png": "88e3195f0329beb62d0a49bd052a432c",
"assets/assets/images/angles/FullRotationAngle_s.png": "389b623fe1a0ac6b9b6260b381b93982",
"assets/assets/images/angles/quiz/aq3.jpg": "13369b4e60ccf74fad8340cfc76cbc8a",
"assets/assets/images/angles/quiz/aq10.webp": "50830a634997cfc3a17a3e3de48bf951",
"assets/assets/images/angles/quiz/aq6.jpg": "37843fc2b62be1e4b91356ba80f99bf2",
"assets/assets/images/angles/quiz/aq7.jpg": "79c452f035534392d91baecdb31f037b",
"assets/assets/images/angles/quiz/aq4.jpeg": "a8dce83bfb0d7217f9443dabbb7bfcc0",
"assets/assets/images/angles/quiz/aq2.png": "44aeb19cdf023add4ad0538ccec4a9e5",
"assets/assets/images/angles/quiz/aq1.jpg": "091864531c16330d47fb488ac5e1a3f2",
"assets/assets/images/angles/quiz/aq9.jpg": "402d7895f8f6ce84337ad2abfe86f75a",
"assets/assets/images/angles/quiz/aq5.webp": "d6a8c8101ffb9b99e6fa4979e04bc8fd",
"assets/assets/images/angles/quiz/aq8.jpg": "0243bc4b7204b27c5194788582cb7cfe",
"assets/assets/images/angles/A_Obtuse.png": "ae9b463ff29c0eca5e32cf568be7af8b",
"assets/assets/images/angles/RightAngle_S.png": "061d4d5d65abc13d66e3a22c2458fd62",
"assets/assets/images/angles/Reflex_Angle.png": "f585f91286318b27b603b123296ac77b",
"assets/assets/images/angles/ReflexAngle_E.png": "60cfa3c50774266610614789fa2bbd87",
"assets/assets/images/angles/StraightAngle_E.png": "ba14fdedda4609a021615a182394a5c0",
"assets/assets/images/angles/Angles_S.png": "ee3dcdd7dd8eb821368004e761b266b9",
"assets/assets/images/angles/3.png": "8dcdeddf138aff343b85d302a2fda281",
"assets/assets/images/angles/4.png": "25c94eaf80357ce36597810ed460fe41",
"assets/assets/images/angles/acute.png": "dc7fdef25e17d92b9c1b80c7fb062a75",
"assets/assets/images/angles/Acute_E.png": "047901d3d03c4e047328e61fa57524b0",
"assets/assets/images/angles/Right_Angle_E.png": "930e429fc81d17b1afbd43dd7831badc",
"assets/assets/images/angles/A_Acute.png": "399d4dcf3ccc1fd81f5e6c6390cf05c1",
"assets/assets/images/angles/right.png": "02e743f5cc3736032e15f129ac4dec9e",
"assets/assets/images/angles/ObtuseAngle_S.png": "b5a02bdfbb60a65d4064b6bb41aac5c9",
"assets/assets/images/angles/A_Right.png": "3c90485d5d6d1a786533c117f785b4f3",
"assets/assets/images/angles/FullRotationAngle_E.png": "c0eea54597780ba3a964093676a3d89e",
"assets/assets/images/angles/Angles_E.png": "685538bd526d4c7f8a5310d8a50e9615",
"assets/assets/images/angles/ReflexAngle_S.png": "e8b2878e7838fd7a2bdfcd23fa27f3dd",
"assets/assets/images/plane/Inclined_E.png": "2afbd23c191eaa216ad97ed1e0be586f",
"assets/assets/images/plane/Vertical_E.png": "a5596abaf6b59bab27642f4e8f5f179c",
"assets/assets/images/plane/plane_image.png": "de1eb7f5a92588d24821c7e97e159686",
"assets/assets/images/plane/plane.png": "249bb9805945095604d66eb06c073b24",
"assets/assets/images/plane/Horizontal_S.png": "f0089b21f22f170c0c3433c616110d6c",
"assets/assets/images/plane/Plane_E.png": "00ed3a4fba6bc49e19d48a3e2c31f388",
"assets/assets/images/plane/inclined_plane.png": "a0dff37dd9b4408f34d8ee539d5a25b2",
"assets/assets/images/plane/quiz/pq8.jpg": "3438c0920a6f4a8697d740c74632a18e",
"assets/assets/images/plane/quiz/pq5.jpg": "7e73e545464a3d307004d520190bfd0a",
"assets/assets/images/plane/quiz/pq6.jpg": "631ef3111d93855dd01ca2696ebe7a6b",
"assets/assets/images/plane/quiz/pq10.jpg": "1d92ac31ba2ee8f1b2b6c6b5fe75b24e",
"assets/assets/images/plane/quiz/pq1.jpg": "66d2eb14eea65f02053cb7237a797170",
"assets/assets/images/plane/quiz/pq7.jpg": "b087b2303b2b524859fa7cd962c095d2",
"assets/assets/images/plane/quiz/pq9.webp": "a1f199cc11ea4d65d1d1e6d1709299b8",
"assets/assets/images/plane/quiz/pq2.jpg": "19f3253120e1843a209cd777ea8e8c89",
"assets/assets/images/plane/quiz/pq3.jpg": "1eac91520a6d4da382660ef44cbda49d",
"assets/assets/images/plane/quiz/pq4.jpg": "bdaeea62725fe2cead3a473256f12180",
"assets/assets/images/plane/Vertical_S.png": "a937e77fd45fca8c75e9b7ea04527f40",
"assets/assets/images/plane/Inclined_S.png": "2317d3b398418d0665aca80c8346a59f",
"assets/assets/images/plane/Plane_S.png": "43ebef2bc903856eb8ef77b0452f06e2",
"assets/assets/images/plane/verticle_plane.png": "38db76b3c76daf651b218c646ce1495c",
"assets/assets/images/plane/horizontal_plane.png": "516459daa088dd14d9a29d700c6db003",
"assets/assets/images/plane/Horizontal_E.png": "9727aafd75f8c68b2ebac9b87b3da708",
"assets/assets/images/triangle/Acute_S.png": "0ccc124287f822868844e06bcd54a34a",
"assets/assets/images/triangle/Obtuse_S.png": "b92543e028557abbac3896576eb1f8fb",
"assets/assets/images/triangle/Scalene_E.png": "805f0d5b428960dea5c769b7cf8ee003",
"assets/assets/images/triangle/Equilateral_E.png": "0f360727e867fb976363779119921093",
"assets/assets/images/triangle/Isoceles_E.png": "24c441461de2ba43db6d1c37e82e9ad7",
"assets/assets/images/triangle/Scalene_S.png": "349acb1541cab90e6ff82e4d43026289",
"assets/assets/images/triangle/Triangle_E.png": "565a0e396dde32b0bb959b604de27c3e",
"assets/assets/images/triangle/Isoceles_S.png": "bdea1fb91941cb1e1f092377f342afc1",
"assets/assets/images/triangle/quiz/tq1.webp": "5604034a26f18b4ad0794ae59a74641e",
"assets/assets/images/triangle/quiz/q8.png": "3c392191bc2530e7e1be27f0af24e533",
"assets/assets/images/triangle/quiz/q7.png": "57a4a517eccf3e663b152bcafba54696",
"assets/assets/images/triangle/quiz/q10.png": "46946a42052d7ff5d2e4986649779c67",
"assets/assets/images/triangle/quiz/q9.png": "97d5fd5380b8bb4f281f90731c3f17b1",
"assets/assets/images/triangle/quiz/tq3.jpg": "2500ccc0e747317b10bebbdba2c8f1c7",
"assets/assets/images/triangle/quiz/tq4.jpg": "1b046ef113b832f9d07fdcc1a1de1a60",
"assets/assets/images/triangle/quiz/tq2.webp": "2268f08d76aa0bf30a6adea73fbbb0a3",
"assets/assets/images/triangle/quiz/q5.png": "1e0a22c03359ee00cd1f543fa5f1f866",
"assets/assets/images/triangle/Right_E.png": "4e9b15830372f0f9e13cee89e8afb36c",
"assets/assets/images/triangle/Obtuse_E.png": "bd0529f0d7ba52a0e98e520f50e34030",
"assets/assets/images/triangle/Acute_E.png": "abc216edbf688ba4cbe75aca96d6f5cf",
"assets/assets/images/triangle/Equilateral_S.png": "f1d7bb83898aa2dd5c6cbd4997ab5bd6",
"assets/assets/images/triangle/Triangle_S.png": "d43edc9d1c5e16a6fe4db5b6ed3ee8ca",
"assets/assets/images/triangle/Right_S.png": "d0be9b7da6f8d08ee057e1129f6dbafa",
"assets/assets/images/lines/segment_spanish.png": "59620999b9fd205f594ba0d5e00cf9fc",
"assets/assets/images/lines/intersecting_lines_spanish.png": "960d9f5b5899e71828f21ed20f108083",
"assets/assets/images/lines/lines.png": "58e42b362c0a421ec2d907c1fd016d88",
"assets/assets/images/lines/line_spanish.png": "300f1866fd43e4602fdf6428df532fd2",
"assets/assets/images/lines/P7.png": "1e5feb643da846d1cb8d80197bd4cd73",
"assets/assets/images/lines/perpendiculat_lines_spanish.png": "37fe381b3c4c9657e029bb715918a13f",
"assets/assets/images/lines/segment_learn.png": "d6d5097db7445099feeb23e95164fc55",
"assets/assets/images/lines/P8.png": "c24deca3d4450ffcabbb0495692a8751",
"assets/assets/images/lines/line_all_new.png": "4bf0cbb3ceee600732eb0b063e0e6bab",
"assets/assets/images/lines/lines_copy.png": "4a7a527e80d5d03985fa8466bd6634ed",
"assets/assets/images/lines/line.png": "026fbb612ebfd9de399ac8a37527328a",
"assets/assets/images/lines/quiz/lq9.jpg": "7fb86901b33d510a5ffe29a4d8912132",
"assets/assets/images/lines/quiz/lq2.jpg": "3f5b2108e155d9a86ab18612e12f2756",
"assets/assets/images/lines/quiz/lq6.jpg": "5efbe74847ac169a702937deeeede0d8",
"assets/assets/images/lines/quiz/lq7.webp": "40a0eb27cba2723940fb19db60aa318d",
"assets/assets/images/lines/quiz/lq8.jpg": "091864531c16330d47fb488ac5e1a3f2",
"assets/assets/images/lines/quiz/lq5.jpg": "7333474bc2a39f4e7e9bafcba056bad0",
"assets/assets/images/lines/quiz/lq1.webp": "1f7233e34b082047ce72d522cf011088",
"assets/assets/images/lines/quiz/lq4.jpg": "ada838fdfe16beb611f50fafd9cd2875",
"assets/assets/images/lines/quiz/lq10.jpg": "f8cdf036dab521ca5004559547710ef8",
"assets/assets/images/lines/quiz/lq3.jpg": "4a21d9729d55ca0cd8ebdac6cefe9e0e",
"assets/assets/images/lines/intersecting_lines.png": "7486052e63671c95b266b7561a8da3bf",
"assets/assets/images/lines/P10.png": "ad6e4cca5946c92545a89b3fab5397e6",
"assets/assets/images/lines/ray_spanish.png": "60dceb870e25b28b3186431340903e55",
"assets/assets/images/lines/perpendicular_lines.png": "098fa452cc9e0d9dc372b5ac1038da1d",
"assets/assets/images/lines/line_ans.png": "e705a7976987ee3c0d3bd9f1b470632a",
"assets/assets/images/lines/parallel_lines_spanish.png": "a7914be4f4dba82ffe89d4c6f90f5563",
"assets/assets/images/lines/segment.png": "32e88f2d1f6633c31bd5b47cd89d87c0",
"assets/assets/images/lines/ray.png": "19ec6e38cb224c29625fe62115be6bcf",
"assets/assets/images/lines/line_all_spanish.png": "80094a9838786187f0cf16d89a3772e3",
"assets/assets/images/lines/parallel_lines.png": "d059b6ce24d184616127cc285c258a0c",
"assets/assets/images/lines/ray_learn.png": "22d44fdaf1e23c5c036e3b973b1ec8e4",
"assets/assets/images/full-marks.gif": "952e42cb1a74198fff3eae8132348ac0",
"assets/assets/images/backgroundd.gif": "2a86cf17440d2b3d173559620f3eec9f",
"assets/assets/images/practice-dark.gif": "6f8013340b15b149d39c96ff063577b5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fba56fe6e0b4cd4e5c82584cef767378",
"assets/fonts/MaterialIcons-Regular.otf": "865f3fb3670171f9d9503a2e447ff265",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f0311e6cda60e730f9752f13e7a2d4c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.json": "d29cffba6f62259e14a118dc4c016c8b",
"version.json": "a5bbf87145a0513b247be61b16fb4c4d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "27acc7f83a93cf3074bff881ed2e066d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "a722bfafeb9bb3dcb8cd1124eeaa50e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "99a551c0d2c8cc0538e1402684e10db3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
