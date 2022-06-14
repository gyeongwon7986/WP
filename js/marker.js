const serviceKey = '9X%2Fzf1vyCizkHr5LSjQlCtk4O4GKaIIKnB9yggi1pFdVrM7f02Ne1lJwI%2B8mP3Dn8GzuM0WfK7xcdUvjT%2FKAjQ%3D%3D';
        
var contentTypeId_14_Positions = [],
    contentTypeId_32_Positions = [],
    contentTypeId_38_Positions = [],
    contentTypeId_39_Positions = []

var Markers_contentTypeId_14 = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
    Markers_contentTypeId_32 = [],
    Markers_contentTypeId_38 = [],
    Markers_contentTypeId_39 = []

data_contentTypeId(14);
data_contentTypeId(32);
data_contentTypeId(38);
data_contentTypeId(39);

function data_contentTypeId (num_Id) {
    url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey='+ serviceKey +'&numOfRows=2000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId='+ num_Id +'&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON';

    // 카테고리별 위치 좌표가 저장될 배열
    fetch(url + serviceKey + num_Id, {
        headers: {
            'Accept': 'application / json'
        }
    })
        .then((res) => res.json())
        .then((resJson) => {
            // var markers = [];
            console.log(resJson);
            console.log('contentTypeId'+num_Id+'success!!');
                
            var places = resJson.response.body.items.item;
    
            for (var i = 0; i < places.length; i++) {
                var mapx = places[i]["mapx"];
                var mapy = places[i]["mapy"];          
    
                new kakao.maps.LatLng(mapy, mapx);

                if(num_Id == 14) {
                    contentTypeId_14_Positions.push( new kakao.maps.LatLng(mapy, mapx));
                }
                else if(num_Id == 32){
                    contentTypeId_32_Positions.push( new kakao.maps.LatLng(mapy, mapx));
                }
                else if(num_Id == 38){
                    contentTypeId_38_Positions.push( new kakao.maps.LatLng(mapy, mapx));
                }
                else if(num_Id == 39){
                    contentTypeId_39_Positions.push( new kakao.maps.LatLng(mapy, mapx));
                }

                // var contentTypeId = places[i]["contentTypeId"];
                
                // var marker = new kakao.maps.Marker({
                //     position: new kakao.maps.LatLng(mapy, mapx),
                //     map: map,
                //     image : markerImage
                // });
                
                // clusterer.addMarkers(markers);
                
            }
        });
}

// console.log(contentTypeId_14_Positions);
// console.log(contentTypeId_32_Positions);
// console.log(contentTypeId_38_Positions);
// console.log(contentTypeId_39_Positions);

// 여기서부터
// var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
// 다른 이미지를 사용할 거라서 스프라이트 이미지를 자르는데 사용하는 것은 다 필요없다. createMarkerImage, createMarker 

// var markerImage_contentTypeId_14 = new kakao.maps.MarkerImage("imgs/museum.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69));
// var markerImage_contentTypeId_32 = new kakao.maps.MarkerImage("imgs/sleeping.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69));
// var markerImage_contentTypeId_38 = new kakao.maps.MarkerImage("imgs/shop.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69));
// var markerImage_contentTypeId_39 = new kakao.maps.MarkerImage("imgs/restaurant.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69));


createMarkers_contentTypeId_14(); // contentTypeId_14 마커를 생성하고 contentTypeId_14 마커 배열에 추가합니다
createMarkers_contentTypeId_32(); 
createMarkers_contentTypeId_38(); 
createMarkers_contentTypeId_39();

setMarkers_contentTypeId_14(map);
setMarkers_contentTypeId_32(map);
setMarkers_contentTypeId_38(map);
setMarkers_contentTypeId_39(map);

// changeMarker('coffee'); // 지도에 커피숍 마커가 보이도록 설정합니다    

//여기부터 
function createMarkers_contentTypeId_14 () {
    for (var i = 0; i < contentTypeId_14_Positions.length; i++) {  
        // 마커이미지와 마커를 생성
        var markerImage_contentTypeId_14 = new kakao.maps.MarkerImage("imgs/museum.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69)),    
            marker = createMarker(contentTypeId_14_Positions[i], markerImage_contentTypeId_14);  //수정!
        
        // 생성된 마커를 마커 배열에 추가
        Markers_contentTypeId_14.push(marker);
    }     
}
function setMarkers_contentTypeId_14(map) {        
    for (var i = 0; i < Markers_contentTypeId_14.length; i++) {  
        Markers_contentTypeId_14[i].setMap(map);
    }        
}

function createMarkers_contentTypeId_32 () {
    for (var i = 0; i < contentTypeId_32_Positions.length; i++) {  
        var markerImage_contentTypeId_32 = new kakao.maps.MarkerImage("imgs/sleeping.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69)),    
            marker = createMarker(contentTypeId_32_Positions[i], markerImage_contentTypeId_32);  //수정!
        Markers_contentTypeId_32.push(marker);
    }     
}
function setMarkers_contentTypeId_32(map) {        
    for (var i = 0; i < Markers_contentTypeId_32.length; i++) {  
        Markers_contentTypeId_32[i].setMap(map);
    }        
}

function createMarkers_contentTypeId_38 () {
    for (var i = 0; i < contentTypeId_38_Positions.length; i++) {  
        var markerImage_contentTypeId_38 = new kakao.maps.MarkerImage("imgs/museum.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69)),    
            marker = createMarker(contentTypeId_38_Positions[i], markerImage_contentTypeId_38);  //수정!
        Markers_contentTypeId_38.push(marker);
    }     
}
function setMarkers_contentTypeId_38(map) {        
    for (var i = 0; i < Markers_contentTypeId_38.length; i++) {  
        Markers_contentTypeId_38[i].setMap(map);
    }        
}

function createMarkers_contentTypeId_39 () {
    for (var i = 0; i < contentTypeId_39_Positions.length; i++) {  
        // 마커이미지와 마커를 생성합니다
        var markerImage_contentTypeId_39 = new kakao.maps.MarkerImage("imgs/restaurant.png", new kakao.maps.Size(64, 69), new kakao.maps.Point(27, 69)),    
            marker = createMarker(contentTypeId_39_Positions[i], markerImage_contentTypeId_39);  //수정!
        
        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        Markers_contentTypeId_39.push(marker);
    }     
}
function setMarkers_contentTypeId_39(map) {        
    for (var i = 0; i < Markers_contentTypeId_39.length; i++) {  
        Markers_contentTypeId_39[i].setMap(map);
    }        
}

// // 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
// function changeMarker(type){

// var coffeeMenu = document.getElementById('coffeeMenu');
// var storeMenu = document.getElementById('storeMenu');
// var carparkMenu = document.getElementById('carparkMenu');

// var contentTypeId_14 = document.getElementById('contentTypeId_14');

// // 커피숍 카테고리가 클릭됐을 때
// if (type === 'coffee') {

//     // 커피숍 카테고리를 선택된 스타일로 변경하고
//     coffeeMenu.className = 'menu_selected';
    
//     // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
//     storeMenu.className = '';
//     carparkMenu.className = '';
    
//     // 커피숍 마커들만 지도에 표시하도록 설정합니다
//     setCoffeeMarkers(map);
//     setStoreMarkers(null);
//     setCarparkMarkers(null);
    
// } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때

//     // 편의점 카테고리를 선택된 스타일로 변경하고
//     coffeeMenu.className = '';
//     storeMenu.className = 'menu_selected';
//     carparkMenu.className = '';
    
//     // 편의점 마커들만 지도에 표시하도록 설정합니다
//     setCoffeeMarkers(null);
//     setStoreMarkers(map);
//     setCarparkMarkers(null);
    
// } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때

//     // 주차장 카테고리를 선택된 스타일로 변경하고
//     coffeeMenu.className = '';
//     storeMenu.className = '';
//     carparkMenu.className = 'menu_selected';
    
//     // 주차장 마커들만 지도에 표시하도록 설정합니다
//     setCoffeeMarkers(null);
//     setStoreMarkers(null);
//     setCarparkMarkers(map);  
// }    
// } 