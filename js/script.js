function initMap() {
    const location = { lat: -23.55052, lng: -46.633308 }; // Exemplo: São Paulo
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
