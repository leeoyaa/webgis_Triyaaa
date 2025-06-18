var map = L.map('map').setView([-5.45, 105.26], 11);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Layer kosong untuk control
var layerKecamatan = L.layerGroup();
var layerPLN = L.layerGroup();
var layerAir = L.layerGroup();
var layerPos = L.layerGroup();
var layerTelpon = L.layerGroup();

// Fetch geojson dan tampilkan per layer
// (salin semua fetch dari Adiministrasi_kecamatan hingga kantortlpn.geojson)

// Tambahkan layer ke map
layerKecamatan.addTo(map);
layerPLN.addTo(map);
layerAir.addTo(map);
layerPos.addTo(map);
layerTelpon.addTo(map);

// Kontrol layer
var overlays = {
  "Batas Kecamatan": layerKecamatan,
  "Kantor PLN": layerPLN,
  "Kantor Air Minum": layerAir,
  "Kantor Pos": layerPos,
  "Kantor Telepon": layerTelpon
};
L.control.layers(null, overlays).addTo(map);
