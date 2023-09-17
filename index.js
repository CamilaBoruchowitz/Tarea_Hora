const express = require('express');

require ('dotenv').config()

const app = express();

PORT = process.env.PORT || 9500;


app.get('/', (req, res) =>{
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >=6 && hora <=12){
        return res.send('Buenos días!');
    }else if(hora >=13 && hora <= 19){
        return res.send('Buenas tardes!');
    }else {
        return res.send('Beunas noches!');
    }
})

app.listen(PORT, (err) =>{
    if (err){ throw err}

    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});