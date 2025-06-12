# Les Variables en JavaScript

Les variables sont des conteneurs qui permettent de stocker des données. En JavaScript, il existe trois façons de déclarer une variable : `var`, `let` et `const`.

## Objectifs
- Comprendre les différents types de variables
- Maîtriser la déclaration et l'initialisation des variables
- Connaître les bonnes pratiques de nommage

## Types de variables

### 1. var (ancienne syntaxe)
```javascript
var age = 25;
var nom = "John";
var estEtudiant = true;
```

### 2. let (recommandé)
```javascript
let age = 25;
let nom = "John";
let estEtudiant = true;
```

### 3. const (pour les valeurs constantes)
```javascript
const PI = 3.14159;
const NOM_APPLICATION = "MonApp";
```

## Types de données

JavaScript est un langage à typage dynamique. Les variables peuvent contenir différents types de données :

1. **String** (chaîne de caractères)
```javascript
let message = "Bonjour";
```

2. **Number** (nombre)
```javascript
let age = 25;
let prix = 19.99;
```

3. **Boolean** (booléen)
```javascript
let estActif = true;
let estTermine = false;
```

4. **Array** (tableau)
```javascript
let couleurs = ["rouge", "vert", "bleu"];
```

5. **Object** (objet)
```javascript
let personne = {
    nom: "John",
    age: 25,
    ville: "Paris"
};
```

## Exercice

Dans le fichier `solution.js`, vous devez :

1. Déclarer une variable `nom` avec votre prénom
2. Déclarer une variable `age` avec votre âge
3. Déclarer une constante `TAILLE` avec votre taille en mètres
4. Créer un objet `personne` contenant ces informations
5. Afficher l'objet dans la console

## Indices
- Utilisez `let` pour les variables qui peuvent changer
- Utilisez `const` pour les valeurs qui ne changeront pas
- Utilisez `console.log()` pour afficher les valeurs

## Validation
Votre code sera validé si :
- Les variables sont correctement déclarées
- Les types de données sont appropriés
- L'objet contient toutes les informations requises
- Le code s'exécute sans erreur

## Ressources supplémentaires
- [MDN - Variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#Variables)
- [JavaScript.info - Variables](https://javascript.info/variables)
