const express= require('express');
const app = express();

app.use(express.static(__dirname+'/public'))

const{MongoClient}=require('mongodb');

let db;
const url ='mongodb+srv://maylee202237783:AFNELVBH1ixmmZyb@cluster0.eda2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db=client.db('forum');
//3001 포트로 서버 연결해주세요 원하는 번호로 할 수 있음
    app.listen(3001, function(){

     console.log('listening on 3001')
});
}).catch((err)=>{
    console.log(err)
})

app.listen();




app.get('/',function(요청, 응답){//function 안 쓰고 (요청, 응답)=>이런 식으로도 사용 가능
    응답.sendFile(__dirname+'/index.html')

    });

    //누군가가 /pet이라는 경로로 방문을 하면.. pet관련된 안내문을 띄워주자
app.get('/pet',function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지 입니다.');
    });