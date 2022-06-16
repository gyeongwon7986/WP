// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
var iwContent = '<div style="padding:5px;">Hello World!</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent
});

// 마커에 마우스오버 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'mouseover', function() {
  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);
});

// 마커에 마우스아웃 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'mouseout', function() {
    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
    infowindow.close();
});

fetch(url, {
    headers: {
        'Accept' : 'application / json'
    }
})
.then((res) => res.json())
.then((resJson) => {
    var markers = [];
    //console.log(resJson);
    // 접종 센터 좌표 리스트
    var centers = resJson.response.body.items.item;
    // console.log(centers.length);
    // console.log(centers[1]["mapx"]);
    for (var i = 0; i < centers.length; i++) {
        var mapx = centers[i]["mapx"];
        var mapy = centers[i]["mapy"];


        var infoWindow = new kakao.maps.InfoWindow({
            content: centers[i]["title"],
        });



        // 마커 추가
        markers.push(marker);
        // 마커 이벤트리스너 등록
        kakao.maps.event.addListener(marker, "mouseover", mouseOverListener(map, marker, infoWindow));
        kakao.maps.event.addListener(marker, "mouseout", mouseOutListener(infoWindow));
    }

});