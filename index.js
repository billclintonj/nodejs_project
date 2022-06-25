const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("<File('index.html', {root:__dirname}>"));
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Hiya... Now the app is running`);
})