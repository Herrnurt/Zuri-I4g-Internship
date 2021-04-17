const fs = require('fs');
const fetch = require('node-fetch');


fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => {

    fs.writeFile("./result/post.json",JSON.stringify(json,null, 2),
                        function (err) {
                        console.log(err)
                        }
                    );
})

.catch((err) => {
console.log(err);
});