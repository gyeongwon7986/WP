var url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey=9X%2Fzf1vyCizkHr5LSjQlCtk4O4GKaIIKnB9yggi1pFdVrM7f02Ne1lJwI%2B8mP3Dn8GzuM0WfK7xcdUvjT%2FKAjQ%3D%3D&numOfRows=1586&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId=14&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON';
// const serviceKey = '9X%2Fzf1vyCizkHr5LSjQlCtk4O4GKaIIKnB9yggi1pFdVrM7f02Ne1lJwI%2B8mP3Dn8GzuM0WfK7xcdUvjT%2FKAjQ%3D%3D'

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.13417, 129.11397), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
    };

// 지도 생성 
var map = new kakao.maps.Map(mapContainer, mapOption);

var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 5, // 클러스터 할 최소 지도 레벨
});

//지도타입 컨트롤
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//줌 컨트롤
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//이동, 확대, 축소로 인한 중심좌표가변경시 마지막 파라미터로 넘어온 함수를 호출하는 이벤트 등록
kakao.maps.event.addListener(map, 'center_changed', function() {
    var level = map.getLevel();
    var latlng = map.getCenter();
    var message = '<p>지도 레벨은 ' + level + ' 이고</p>';
    message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';
    // console.log(message);
});

//현재위치 버튼
function myPosition(){
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {

            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

            map.setCenter(locPosition);
            console.log("Success");
            // // 마커와 인포윈도우를 표시합니다
            // displayMarker(locPosition, message);
        });
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
            message = 'geolocation을 사용할수 없어요...'

            map.setCenter(locPosition);
        console.log(message);
    }
}

