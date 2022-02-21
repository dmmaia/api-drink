import { Router } from 'express';
import IngredientController from '../Ingredient/Ingredient.Controllers'

const ingredientRoutes = Router()

ingredientRoutes.get('/', IngredientController.findAll)

export {ingredientRoutes}
