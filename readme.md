# Web API - Demo 02

## Cors (Cross-origin ressource sharing)
Mécanisme qui autorise ou bloque le partage de ressource entre deux domaine. \
*NB : domaine → adresse ip + port*
```
Exemple
 - App React : aws.com/tfe_react
 - Web API   : api.digitalcity.be  
```
Dans cette exemple, les deux serveur sont sur des domaines différents. \
Par default, le consomation de la WebAPI sera bloqué par le navigateur !


Il faut parametrer le serveur pour autorisé les requetes CORS. \
Pour cela, il est possible d'installer un middleware
```
npm i cors
```
Une fois installer, il est possible d'utiliser le middleware soit au niveau de l'application (*app.use(cors(...))*) ou pour une route spécifique.

Le middleware "cors" prend des options pour limité la requete sur : \
 • L'origin (le domaine des clients) \
 • Les valeurs custom dans le header \
 • Les méthodes \
 • ...