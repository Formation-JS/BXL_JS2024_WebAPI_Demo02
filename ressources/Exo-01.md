# Exercice WebAPI 01

Sur base de la démo WebAPI 02, implémenter les routes suivantes : 
```
- Endpoint : (GET) /api/player/{id}
  Permet d'obtenir les informations d'un joueur.
  Si aucun joueur n'est pas trouvé, envoyer un erreur « Not found ».

- Endpoint : (DELETE) /api/player/{id}
  Permet de supprimer un joueur.
  Si aucun joueur n'est pas trouvé, envoyer un erreur « Not found ».
```

## Bonus
 **• Modification du endpoint qui permet d'obtenir la liste des joueurs** \
Ajouter un parametre de type "Query" pour permettre à l'utilisateur d'obtenir la liste des joueurs avec un filtre sur le pseudo des joueurs.

Exemple :
```
/api/player/?pseudo=Shadow
 - ShadowHunter
 - xXx_DarkShadow42_xXx

/api/player/?pseudo=demon
 - Pas resultat

/api/player/?pseudo=dark&limit=3
 - xXx_DarkShadow42_xXx
 - DarkAnge_666
 - MystikDarkness

 /api/player/?pseudo=dark&limit=3&offset=3
 - xX_DarkLover_Xx
 - DaRkFaErIeQuEeN
```

 **• Utilisation du booléen "actif"** \
Modifier le code pour que celui-ci prendre en compte le booléen "Active". \
 \- Un joueur dont la valeur "actif" est à "false" ne doit jamais être envoyé ! \
 \- Quand on supprime un joueur, le booléen "actif" passe à false.
    Si le booléen l'est déjà, on supprime réellement l'utilisateur.
