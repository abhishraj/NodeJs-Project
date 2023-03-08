import express, { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import AppRoutes from './routes/index'; 
import DevConfig from './config/environments/development';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'

class App {
  public app: express.Application;
  public port: number;
  public config = new DevConfig();
  public appRoutes = new AppRoutes();
 
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRouters(this.appRoutes.getRouters());
  }
  private initializeMiddlewares() {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use(bodyParser.json());
  }
  // Initialize all the routes of the application
  private initializeRouters(router: Router[]) {
    router.forEach(routes => {
      this.app.use('/v1', routes);
    });
  }
 
  // Server will listen to this port
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
  // Connecting to mongo DB
  public connectToTheDatabase() {
   console.log("Connecting to mongo DB", this.config.dbUrl);	  
    mongoose.connect(this.config.dbUrl).then((data) => console.log("connected Successfully")).catch((error) => console.log(error));
  }
}
 
export default App;