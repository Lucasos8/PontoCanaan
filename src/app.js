import express from 'express';
import routes from './routes.js';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const APP = express();

APP.use(session({ secret: 'asdasd3asDa2edasdasdas', resave: false, saveUninitialized: true }));

// Configura como o EJS vai ler a templete que é no caso HTML e 
APP.engine('html', ejs.renderFile);
APP.set('view engine', 'html');
// Configuração para ler arquivos JSON
APP.use(bodyParser.json());
//configuração para saber que usaremos cookies no nosso código (configuração de Login)
APP.use(cookieParser());
//configuração para saber que usaremos dados preenchidos nos formulários
APP.use(bodyParser.urlencoded({ extended: true }));
//graças a isso, eu enchergo as ediçoes CSS e imagens se usa no site
APP.use('/public', express.static(path.join(__dirname, '../public')));
// Aqui fica onde mostrando onde fica nossas views  
APP.set('views', path.join(__dirname, '../view'));

// Indicar para o express que deve ler arquivos JSON  
APP.use(express.json());

// Usar o router de routes  
APP.use(routes);

export default APP;  