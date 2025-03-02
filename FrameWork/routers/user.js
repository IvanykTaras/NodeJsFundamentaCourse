const Router = require('../Router');


const router = new Router();

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Doe'}
];




router.get('/users', (req, res) => {
    res.send(users);
})

router.post('/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send(users);
})


router.get('/post', (req,res) => {
    res.end('you send to user request for post <b style="color:red;">red</b>');
});

router.get('/blog', (req,res) => {
    res.end('you send to user request for blog <b style="color:blue;">blue</b>');
});


// router.get('/users', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
// })

module.exports = router;