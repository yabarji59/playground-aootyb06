# Mini-projet : Jeu de Memory

## Objectifs
- Créer un jeu de Memory interactif
- Gérer la logique du jeu
- Implémenter des animations
- Gérer le score et le temps

## Prérequis
- Connaissance des tableaux et objets
- Compréhension des événements JavaScript
- Notions de base en HTML/CSS
- Connaissance des animations CSS

## Instructions
Créez un jeu de Memory avec les fonctionnalités suivantes :

1. Grille de cartes à retourner
2. Système de score
3. Chronomètre
4. Niveaux de difficulté
5. Animations de retournement
6. Sauvegarde des meilleurs scores

## Structure HTML
```html
<div class="memory-game">
    <div class="game-header">
        <div class="score">Score: <span id="score">0</span></div>
        <div class="timer">Temps: <span id="timer">00:00</span></div>
        <div class="moves">Coups: <span id="moves">0</span></div>
    </div>
    <div class="difficulty">
        <button data-level="easy">Facile</button>
        <button data-level="medium">Moyen</button>
        <button data-level="hard">Difficile</button>
    </div>
    <div class="game-board"></div>
    <div class="game-controls">
        <button id="new-game">Nouvelle partie</button>
        <button id="show-scores">Meilleurs scores</button>
    </div>
</div>
```

## Indices
1. Structure des données :
   ```javascript
   const game = {
       cards: [],
       flippedCards: [],
       matchedPairs: 0,
       score: 0,
       moves: 0,
       timer: null,
       timeElapsed: 0,
       difficulty: 'easy'
   };
   ```

2. Fonctions principales :
   - `initializeGame()`
   - `createCards()`
   - `shuffleCards()`
   - `flipCard()`
   - `checkMatch()`
   - `updateScore()`
   - `startTimer()`
   - `saveScore()`

3. Animations CSS :
   ```css
   .card {
       transition: transform 0.6s;
       transform-style: preserve-3d;
   }
   
   .card.flipped {
       transform: rotateY(180deg);
   }
   ```

## Validation
Votre jeu doit :
- Afficher correctement les cartes
- Gérer les retournements
- Vérifier les paires
- Calculer le score
- Gérer le chronomètre
- Sauvegarder les scores

## Ressources supplémentaires
- [Animations CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations)
- [localStorage API](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [Manipulation du DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model) 