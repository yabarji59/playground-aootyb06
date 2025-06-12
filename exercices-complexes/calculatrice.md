# Exercice : Création d'une Calculatrice JavaScript

## Objectifs
- Créer une calculatrice interactive
- Gérer les opérations mathématiques
- Implémenter une interface utilisateur réactive
- Gérer les erreurs et les cas limites

## Prérequis
- Connaissance des opérateurs mathématiques
- Compréhension des événements JavaScript
- Notions de base en HTML/CSS

## Instructions
Créez une calculatrice avec les fonctionnalités suivantes :

1. Opérations de base (addition, soustraction, multiplication, division)
2. Opérations avancées (racine carrée, pourcentage, puissance)
3. Gestion de la mémoire (M+, M-, MR, MC)
4. Historique des calculs
5. Gestion des erreurs (division par zéro, etc.)

## Structure HTML
```html
<div class="calculator">
    <div class="display">
        <div class="history"></div>
        <div class="current">0</div>
    </div>
    <div class="keypad">
        <div class="memory-keys">
            <button class="mem" data-action="mc">MC</button>
            <button class="mem" data-action="mr">MR</button>
            <button class="mem" data-action="m+">M+</button>
            <button class="mem" data-action="m-">M-</button>
        </div>
        <div class="operation-keys">
            <button class="op" data-action="sqrt">√</button>
            <button class="op" data-action="power">x²</button>
            <button class="op" data-action="percent">%</button>
            <button class="op" data-action="clear">C</button>
        </div>
        <div class="number-keys">
            <button class="num">7</button>
            <button class="num">8</button>
            <button class="num">9</button>
            <button class="op" data-action="divide">÷</button>
            <button class="num">4</button>
            <button class="num">5</button>
            <button class="num">6</button>
            <button class="op" data-action="multiply">×</button>
            <button class="num">1</button>
            <button class="num">2</button>
            <button class="num">3</button>
            <button class="op" data-action="subtract">-</button>
            <button class="num">0</button>
            <button class="num">.</button>
            <button class="op" data-action="equals">=</button>
            <button class="op" data-action="add">+</button>
        </div>
    </div>
</div>
```

## Indices
1. Utilisez un objet pour stocker l'état de la calculatrice :
   ```javascript
   const calculator = {
       currentValue: '0',
       previousValue: null,
       operation: null,
       memory: 0,
       history: []
   };
   ```

2. Implémentez les fonctions suivantes :
   - `updateDisplay()`
   - `handleNumber(number)`
   - `handleOperation(operation)`
   - `calculate()`
   - `handleMemory(action)`
   - `handleError(error)`

3. Gestion des erreurs :
   - Division par zéro
   - Nombres trop grands
   - Opérations invalides

## Validation
Votre calculatrice doit :
- Effectuer correctement les opérations de base
- Gérer les opérations avancées
- Afficher l'historique des calculs
- Gérer la mémoire
- Afficher des messages d'erreur appropriés

## Ressources supplémentaires
- [Opérateurs mathématiques en JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators)
- [Gestion des erreurs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Manipulation des nombres](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) 