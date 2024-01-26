const https= require('http')

const port =process.env.POST||5000



const server=https.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end("<h1>helllo dheeraj</h1> <p>Dheraj</p>");
})


server.listen(port,()=>{

    console.log(`server ${port}`);
})