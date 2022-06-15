//serviceKey는 js 파일 중에 하나에서만 정의하면 되는 듯
// var serviceKey = "BQ5G8W9qbYbZZzOPbgb8fFOwAUFRg9UwbH7mwSeQiLfkUND4254Xq6HniXM900w%2FjTFfT89a4dT4J%2FqGU8hvbQ%3D%3D";
var keyword = "";

//사용자로부터 입력받은 키워드를 가져옴
function takeKeyword() {
    keyword = document.getElementById('keyword').value;
    inputKeyword(keyword);
}

function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
}

//입력 받은 키워드 데이터를 요청
function inputKeyword(keyword) {
    var listEl = document.getElementById('placeList'),
        menuEl = document.getElementById('menu_wrap');

    removeAllChildNods(listEl);
    const url_keyword = "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/searchKeyword?serviceKey="+serviceKey+"&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&keyword="+keyword+"&returnType=JSON";

    fetch(url_keyword, {
        headers : {
            'Accept' : 'application / json'
        }
    })
    .then((res) => res.json())
    .then((resJson) => {
        place = resJson.response.body.items.item;
        console.log(place);

        var fragment = document.createDocumentFragment(),
            i;

        for(var i = 0; i < place.length; i++) {
            if (place[i].contenttypeid == 14 || place[i].contenttypeid == 32 || place[i].contenttypeid == 38 || place[i].contenttypeid == 39) {
                var itemEl = getListItem(i,place[i]);
                fragment.appendChild(itemEl);
            }
        }
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;

        function getListItem(index, places) {
            var el = document.createElement('li');
                itemStr = '<div class="info">' +
                            '   <h4>' + places.title + '</h4>';
                itemStr += '    <span>' + places.addr1+ '</span>'; 

                if (places.addr2 != undefined) {
                    itemStr += '   <span class="gray">' +  places.addr2  + '</span>';
                }

                itemStr += '<br>' + '<button class="goto_btn_' + index + '" onclick = "move('+index+');" style="margin-top:5px; font-size:10px; background-color:rgb(195, 125, 246); color:whitesmoke; border:0; outline:0;"><i class="fa-solid fa-location-dot" style="margin-right:5px;"></i>이 위치로 이동하기</button>' +
                '</div>';

                el.innerHTML = itemStr;
                el.className = 'item';

                return el;
        }
    })
    return 0;
}

//검색 결과 데이터 위치로 이동
function move(index) {
    keyword = document.getElementById('keyword').value;
    const url_keyword = "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/searchKeyword?serviceKey="+serviceKey+"&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&keyword="+keyword+"&returnType=JSON";
    fetch(url_keyword, {
        headers : {
            'Accept' : 'application / json'
        }
    })
    .then((res) => res.json())
    .then((resJson) => {
        console.log(resJson);
        place = resJson.response.body.items.item;
        var mapx = place[index].mapx,
            mapy = place[index].mapy;
        var moveLatLon = new kakao.maps.LatLng(mapy, mapx);
        map.setCenter(moveLatLon);
        console.log("move");
        console.log(mapx);
        console.log(mapy);
    })
}
