// HOMEPAGE //

import express from 'express';
import mysql from 'mysql';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('reporte');
});

router.get('/bodega', (req, res) => {
    let consulta = "SELECT * FROM pedido";
    conexion.query(consulta, (error, resultados) => {
        if (error) {
            throw error;
        } else {
            res.render('bodega', { datos: resultados });
        }
    });
});



let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'prototype',
    user: 'root',
    password: ''
});

router.post('/validar', (req, res) => {
    const datos = req.body;

    let nombre = datos.nombre;
    let p_inicial = datos.p_inicial;
    let n_pedido = datos.n_pedido;
    let cantidad = datos.cantidad;
    let medida = datos.medida;
    let estado = datos.estado;
    let p_final = datos.p_final

    let reporte = "INSERT INTO pedido (nombre, producto_inicial, numero_pedido, cantidad, medida, estado, producto_final) VALUES ('"+ nombre +"', '"+ p_inicial +"','"+ n_pedido +"','"+ cantidad +"','"+ medida +"' , '"+ estado +"', '"+ p_final +"')"

    conexion.query(reporte, (error) =>{
        if(error){
            throw error;
        } else{
            console.log('Reporte generado correctamente');
        }
    })
});

export default router;
