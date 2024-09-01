const express=require('express')
const app=express()
const shortid=require('shortid')
const cors=require('cors')
const bodyParser=require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const urls={};

app.post('/api/shorten',(req,res) =>{
    const {originalUrl}=req.body;
    const id=shortid.generate();
    const shortenedUrl=`http://localhost:5000/${id}`;
    urls[id] =originalUrl;
    res.json({shortenedUrl});
})

app.get('/:id',(req,res) =>{
    const originalUrl=urls[req.params.id]
    if(originalUrl){
        res.redirect(originalUrl)
    }else{
        res.status(404).send('URL not found')
    }
})

app.listen(5000,() =>{
    console.log('Server is running on port 5000')
})