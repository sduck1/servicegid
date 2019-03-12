

if (document.getElementById('map')){
    ymaps.ready(init);
}
if(document.getElementById('map-registration')){
    ymaps.ready(initRegurgitation);
}

function init() {
    // В функцию поступает пространство имен, которое содержит все запрощенные при инициализации модули.
    let myMap = new ymaps.Map('map', {
        center: [59.939095, 30.315868],
        zoom: 10,
        // В данном примере карта создается без контролов, так как те не были загружены при инициализации API.
        controls: []
    }),
    placemark = new ymaps.Placemark(
        myMap.getCenter(), {
            balloonContent: 'Центр'
        }
    );
    myMap.geoObjects.add(placemark);
    myMap.behaviors.disable('scrollZoom');
}

function initRegurgitation() {
    // В функцию поступает пространство имен, которое содержит все запрощенные при инициализации модули.
    let myMap = new ymaps.Map('map-registration', {
            center: [59.939095, 30.315868],
            zoom: 10,
            // В данном примере карта создается без контролов, так как те не были загружены при инициализации API.
            controls: []
        }),
        placemark = new ymaps.Placemark(
            myMap.getCenter(), {
                balloonContent: 'Центр'
            }
        );
  //  myMap.geoObjects.add(placemark);
    myMap.behaviors.disable('scrollZoom');
}