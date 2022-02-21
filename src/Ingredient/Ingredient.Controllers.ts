import { Request, Response } from 'express';

class IngredientController {
    public async findAll(req: Request, res: Response): Promise<Response>{
        let ingredients: any[] = ["Teste"]
        
        return res.json(ingredients)
    }
}

export default new IngredientController()