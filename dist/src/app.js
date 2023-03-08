"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const development_1 = __importDefault(require("./config/environments/development"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS API Project',
            version: '1.0.0'
        },
        servers: [{ url: 'http://localhost:3005' }]
    },
    apis: ['./app.ts']
};
class App {
    constructor(port) {
        this.config = new development_1.default();
        this.appRoutes = new index_1.default();
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRouters(this.appRoutes.getRouters());
    }
    initializeMiddlewares() {
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
        this.app.use(body_parser_1.default.json());
    }
    // Initialize all the routes of the application
    initializeRouters(router) {
        router.forEach(routes => {
            this.app.use('/v1', routes);
        });
    }
    // Server will listen to this port
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
    // Connecting to mongo DB
    connectToTheDatabase() {
        console.log("Connecting to mongo DB", this.config.dbUrl);
        mongoose_1.default.connect(this.config.dbUrl).then((data) => console.log("connected Successfully")).catch((error) => console.log(error));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map