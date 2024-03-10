import express from 'express';
import path from 'path';
import colors from 'colors';
import { fileURLToPath } from 'url';
import homeRoutes from './routes/routes.js'; // Cambia la ruta de importación

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
// Configurar la carpeta 'public' como una carpeta estática
app.use(express.static(path.join(__dirname, 'public')));
// Configurar la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));
// Usar el módulo de rutas
app.use('/', homeRoutes); // Cambia el uso del módulo

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app lista en el puerto http://localhost:${PORT}/`.green);
});
