declare let L:any;

L.mapquest.key = 'OPDLjMgApEyBi94Ne2a8AGA2DXKDFARb';

const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

map.addControl(L.mapquest.control());

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'M'
  })
})
.bindPopup('This is Manschester')
.addTo(map);
