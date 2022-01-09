import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res)=>{
    res.send(users)
});

router.post('/', (req, res)=>{
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id:userId};
    users.push(userWithId);

    res.send(`user ${user.name} added to database!`)
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id === id);

    res.send(foundUser)
});

router.delete('/', (req, res)=>{
    const {id} = req.params;
    const newUser = users.filter((user)=> user.id !== id);

    res.send(`user with id${id} deleted from database!`)
});

router.patch('/:id',(req, res)=>{
    const {id} = req.params;
    const { name, age } = req.body;

    const user = users.find((user) => user.id === id);
    
    if(name){user.name = name};
    if(age){user.age = age};

    res.send(`user with id${id} updated!`)
})

export default router;