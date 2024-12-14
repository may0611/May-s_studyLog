const express= require('express');
const app = express();

app.listen();

//3001 포트로 서버 연결해주세요 원하는 번호로 할 수 있음
app.listen(3001, function(){

    console.log('listening on 3000')
});


//누군가가 /pet이라는 경로로 방문을 하면.. pet관련된 안내문을 띄워주자
app.get('/',function(요청, 응답){
    응답.send('안녕하세요');
    });

    //누군가가 /pet이라는 경로로 방문을 하면.. pet관련된 안내문을 띄워주자
app.get('/pet',function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지 입니다.');
    });