import express from 'express';


export function paginationMiddleware({
    defaultLimit = 10,
    maxLimit = 50
} = {}) {

    /**
     * Middleware de pagination
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     */
    return function (req, res, next) {

        //! Traitement des infos
        const offset = parseInt(req.query.offset || 0);
        
        const requestLimit = parseInt(req.query.limit || defaultLimit);
        const limit = Math.min(requestLimit, maxLimit);

        //! Erreur si une des valeurs est négative
        if(offset < 0 || limit < 0) {
            res.status(400).json({ error : 'Value of "offset" or "limit" must be positive'})
            return;
        }

        //! Injection de données dans l'objet "req"
        //? On peut également utiliser l'objet "res", en fonction du cas de figure.
        req.pagination = {
            offset,
            limit
        };

        //! On passe au prochain middleware
        next();
    }
}

