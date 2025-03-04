export function bodyValidatorMiddleware(schema) {

    return function (req, res, next) {
        //! Verification de la présence de donnée dans le "body"
        if(!req.body) {
            res.status(400).json({ error: 'No request body !'})
            return;
        }

        //! Validation des données via le schema Zod (recu en parametre)
        const { data, success, error } = schema.safeParse(req.body);

        //! Si la validation echoue, on envoi une erreur 422 (ou 400)
        if(!success) {
            res.status(422).json({ error: error.flatten().fieldErrors });
            return;
        }

        //! Injecter les données validées dans "req"
        req.data = data;

        //! On passe au middleware suivant
        next();
    }
}