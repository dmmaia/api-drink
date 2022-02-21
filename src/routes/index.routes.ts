import { Router } from 'express';
import { ingredientRoutes } from './ingredient.routes';

const routes = Router()

routes.use('/ingredients',ingredientRoutes)

export {routes}
