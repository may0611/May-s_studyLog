const express = require('express');
const app = express();

app.listen();
app.use(express.static(__dirname+'/public')) //public폴더에 들어있는 파일들을 사용하기 위해서 필요한 코드
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://maylee202237783:abcd@cluster0.eda2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(3001, function(){
    console.log('listening on 3001')
});
}).catch((err)=>{
  console.log(err)
})


app.get('/',function(요청, 응답){
    응답.send('환영합니다');
});
app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다. ');
});

//데이터 저장하는 코드
app.get('/news', (요청, 응답) => {
    db.collection('post').insertOne({title: '어쩌구'})//object 자료형
 });


app.get('/data', async(요청, 응답)=>{
    let result= await db.collection('post').find().toArray()
    console.log(result)
    응답.send('DB에 있던 게시물')
});

app.get('/list', async(요청, 응답)=>{
    let result= await db.collection('post').find().toArray()
    console.log(result[0].title)
    응답.render('list.ejs', {post: result}) 
});

app.get('/time', async(요청, 응답)=>{
    응답.render('time.ejs',{time: new Date()})
})

app.get('/write', async(요청, 응답)=>{
    
    응답.render('write.ejs') 
});

app.post('/add', async(요청, 응답)=>{
    console.log(요청.body);
   
    db.collection('post').insertOne({title:요청.body.title, content: 요청.body.content}, function(err, result){
        console.log('데이터 저장 완료')
    })
    응답.redirect('/list');
});