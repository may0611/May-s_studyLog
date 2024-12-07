const express= require('express');
const app = express();
//8080 포트로 서버 연결해주세요 원하는 번호로 할 수 있음
app.listen(3001, function(){

    console.log('listening on 3001')
});

//누군가가 /pet이라는 경로로 방문을 하면.. pet관련된 안내문을 띄워주자
app.get('/pet',function(요청, 응답){
응답.send('pet용품 쇼핑할 수 있는 페이지 입니다.');
});

// '/'하나만 있으면 (뒤에 뭐가 더 없으면) 홈이라는 뜻이다 처음에 딱 들어갔을 때의 화면
app.get('/',function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
    });
    
    app.get('/#',function(요청, 응답){
        응답.sendFile(__dirname + '/write.html');
        });

    