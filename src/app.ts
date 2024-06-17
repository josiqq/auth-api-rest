import express, { Application } from 'express'
import morgan from 'morgan';
import cors from 'cors';

// Routes
import TaskRoutes from './routes/task.route';
import UserRoutes from './routes/user.route';
import ProductoRoutes from './routes/producto.route';
import DefaultRoute from './routes/default.route';

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        // use cors
        this.app.use(cors({
            origin: 'http://localhost:3000'
        }));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/api/v1', DefaultRoute);
        this.app.use('/api/v1/tasks', TaskRoutes);
        this.app.use('/api/v1/users', UserRoutes);
        this.app.use('/api/v1/productos', ProductoRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server is running on port', this.app.get('port'));
    }

}