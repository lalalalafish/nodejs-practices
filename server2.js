//Building a simple api
import {createServer} from 'http';
const PORT = process.env.PORT;

//模拟数据
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Alice'},
    {id: 4, name: 'Bob'},
]

//Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
//JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

//Route handler for GET /api/users
const getUsersHandler = (req, res) =>{
    res.write(JSON.stringify(users));
    res.end();
}

//Route handler for GET /api/users/:id
const getUserHandler = (req, res) =>{
    const id = req.url.split('/')[3];
    const user  = users.find((user)=> user.id === parseInt(id));
    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode=404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

//Not found handler
const notFoundHandler = (req, res) =>{
    res.statusCode=404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

//Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    //Listen for data
    req.on('data', (chunk)=>{//只记录data部分
        body += chunk.toString();
    });
    req.on('end', ()=>{//存入数据users
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

const server = createServer((req, res)=>{
    logger(req, res, ()=>{
        jsonMiddleware(req, res, ()=>{
            if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            }else if(req.url.match(/\/api\/users\/\d+/) && req.method === 'GET'){
                getUserHandler(req, res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }else{
                notFoundHandler(req, res);
            }
        });
    });
});
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});