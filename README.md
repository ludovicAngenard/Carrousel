# Carrousel

## Contexte
L'application est un Carrousel basique créé en node.js avec le framework Koa.js et la base de données MongoDB.
Nous sommes 3 à avoir créé cette application :
* Adrien Meunier
* Pierre Chauvin
* Ludovic Angenard
## Prérequis
Vous devez installer node.js et installer tous les nodes modules du back-end en éxécutant la commande *npm install* dans /back-end ET dans /front-end/carrousel
Vous devez avoir un server mongodb de lancer, voici la commande docker si vous l'avez installé .
``
docker run --publish 27017:27017 --name node-mongo --env --detach mongo:4
``
## Installation
* Pour lancer le serveur vous devez éxécuter la commande *node app.js* dans /back-end
* Pour accéder à l'application via votre navigateur, vous devez éxécuter la commande *npm run serve* dans /front-end/carrousel. Vous pouvez y accéder sur localhost:8081

## Utilisation
Pour ajouter des photos l'utilisateur doit avoir un compte.
Un utilisateur peut s'inscrire et se connecter. Une fois inscrit il est obligé de se connecter.
Chaque utilisateur connecté a un rôle basique qui lui permet dans la page carrousel d'ajouter une photo.
3 administrateurs sont déjà créés lors de l'initialisation. Ils peuvent en plus d'ajouter une photo, en supprimer une.
Voici les logs des administrateurs :
* username: Ludovic ; password: 123456
* username: Adrien ; password: 123456
* username: Pierre ; password: 123456