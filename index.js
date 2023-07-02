const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const cors=require("cors")

const middleWare=jsonServer.defaults();

const port=process.env.PORT || 8080;

server.use(cors())
server.use(router);
server.use(middleWare)

server.listen(port,()=>{
    console.log(`server is running at ${port}`)
});
