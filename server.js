/* // Archivo: server.js

// Importar las librerías necesarias
const express = require('express');
const NTRIP = require('ntrip-client');

// Configuración del servidor principal
const app = express();
const port = 3000;

// Ruta de prueba para el servidor principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciar el servidor principal
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Configuración del servidor NTRIP Caster
const ntrip = new NTRIP({
  port: 2101,
  maxClients: 100,
  serverId: 'MyNTRIPServer',
  serverType: 'Caster',
  serverVersion: '1.0.0',
  serverDescription: 'My NTRIP Caster',
  serverUrl: 'http://localhost:3000',
  serverLogLevel: 'info',
  serverLogFile: 'ntrip.log',
  serverLogRotate: true,
  serverLogRotateMaxFiles: 10,
  serverLogRotateMaxFileSize: 1024 * 1024 * 10, // 10 MB
  serverLogRotateCompress: false,
  serverLogRotateCompressLevel: 9,
});

// Conexión y recepción de datos de las estaciones base
ntrip.addMountPoint('estacion1', {
  lat: 12.3456,
  lon: -78.9101,
  auth: {
    username: 'usuario1',
    password: 'contrasena1'
  }
});

ntrip.addMountPoint('estacion2', {
  lat: 23.4567,
  lon: -89.0102,
  auth: {
    username: 'usuario2',
    password: 'contrasena2'
  }
});

ntrip.addMountPoint('estacion3', {
  lat: 34.5678,
  lon: -91.0203,
  auth: {
    username: 'usuario3',
    password: 'contrasena3'
  }
});

// Conexión de los rovers a los puntos de montaje de las estaciones base
ntrip.on('mountPointConnected', (mountPoint, client) => {
  if (mountPoint === 'estacion1' || mountPoint === 'estacion2' || mountPoint === 'estacion3') {
    console.log(`Rover ${client.id} conectado al punto de montaje ${mountPoint}`);
  }
});

// Iniciar el servidor NTRIP Caster
ntrip.start(); */


//  ---------------------------------------------------------------------------------------------------


const { NtripClient } = require('ntrip-client');

const options = {
/*   host: 'rtk2go.com',
  port: 2101,
  mountpoint: '',
  username: 'test@test.com',
  password: 'test' */

  host: '193.144.251.13',
  port: 2101,
  mountpoint: 'TUD10',
  /* mountpoint: '', */
  username: 'anquiz',
  password: 'vaal3'
};

const client = new NtripClient(options);

client.on('data', (data) => {
  console.log(data);
});

client.on('close', () => {
  console.log('client close');
});

client.on('error', (err) => {
  console.log(err);
});

client.run();


//  -------------------------------------------------------------------------------------------------
