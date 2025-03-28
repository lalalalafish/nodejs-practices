import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';


const PORT = process.env.PORT; 

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname)



const server = http.createServer(async (req, res)=>{
    // res.setHeader('Content-Type', 'application/json');
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);

    try{
        if(req.method === 'GET'){
            let filePath;
            //Simple router
            if(req.url === '/'){
                filePath=path.join(__dirname, 'public', 'index.html');
            }else if(req.url === '/about'){
                filePath=path.join(__dirname, 'public', 'about.html');
                
            }else{
                throw new Error('Page not found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error('Method Not Allowed');
        }
    }catch(err){
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        });
        res.end(`Server Error`);
    }
});


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});