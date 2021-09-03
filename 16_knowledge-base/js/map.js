var center = [48.872185073737896, 2.354223999999991];
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: center,
    zoom: 15
  });

  var placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref:'../img/marker.svg',
    icomImageSize: [28, 40],
    icomImageOffset: [0, 0],

  });

  myMap.geoObjects.add(placemark);

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}




