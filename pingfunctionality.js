const ping=require('ping');
const express=require('express');
const mongoose=require('mongoose');
const schema=require('./schema');
const app=express();

const cors=require('cors');
app.use(express.json());
app.use(cors());
app.post('/ping',async(req,res)=>{
    const {url}=req.body;
    const result = await ping.promise.probe(url);
    const msg = result.alive ? 'alive' : 'dead';
    res.json({ url, status: msg });
    const data= await schema.create(req.body);




})
app.get('/',async(req,res)=>{
    const data=await schema.find({});
    console.log(data);
    res.send(data);
})
/*app.post('/ping/interval',async(req,res)=>{
    const url=req.body.url;
    const interval=req.body.interval;

    const action=setInterval(async(url)=>{
        const result=await ping.promise.probe(url);
        const msg=result.alive?'alive':'dead';
        res.json({url,status:msg}

        )
        if (result.alive) {
            clearInterval(action);
            console.log(`Interval stopped because status is alive for ${url}`);
        }
        

    },parseInt(interval));
})*/
mongoose.connect('mongodb+srv://admin:root@cluster0.kwlzyeo.mongodb.net/URLS?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    app.listen(3003,()=>{
        console.log("Listening at 3003");
    });
});


/*function pingonce(){
    const url=document.getElementById("url");
    ping.sys.probe(url,(responding)=>{
    const msg=responding?`alive`:`dead`;
    console.log(msg);
});}*/
