# Exercice : Création d'une Application Todo

## Objectifs
- Créer une application de gestion de tâches complète
- Utiliser les concepts JavaScript avancés
- Implémenter la persistance des données
- Gérer les interactions utilisateur

## Prérequis
- Connaissance des variables, tableaux et fonctions
- Compréhension des événements JavaScript
- Notions de base en HTML/CSS

## Instructions
Créez une application de gestion de tâches avec les fonctionnalités suivantes :

1. Ajouter une nouvelle tâche
2. Marquer une tâche comme terminée
3. Supprimer une tâche
4. Filtrer les tâches (toutes, actives, terminées)
5. Sauvegarder les tâches dans le localStorage
6. Afficher le nombre de tâches restantes

## Structure HTML
```html
<div class="todo-app">
    <h1>Todo List</h1>
    <div class="add-todo">
        <input type="text" id="new-todo" placeholder="Ajouter une tâche...">
        <button id="add-button">Ajouter</button>
    </div>
    <div class="filters">
        <button class="filter active" data-filter="all">Toutes</button>
        <button class="filter" data-filter="active">Actives</button>
        <button class="filter" data-filter="completed">Terminées</button>
    </div>
    <ul id="todo-list"></ul>
    <div class="todo-stats">
        <span id="remaining-count">0 tâches restantes</span>
    </div>
</div>
```

## Indices
1. Utilisez un tableau pour stocker les tâches
2. Chaque tâche peut être un objet avec les propriétés :
   - id (unique)
   - text (contenu de la tâche)
   - completed (état)
3. Utilisez `localStorage` pour la persistance
4. Implémentez les fonctions suivantes :
   - `addTodo(text)`
   - `toggleTodo(id)`
   - `deleteTodo(id)`
   - `filterTodos(filter)`
   - `updateRemainingCount()`

## Validation
Votre application doit :
- Permettre l'ajout de nouvelles tâches
- Permettre de marquer les tâches comme terminées
- Permettre la suppression des tâches
- Filtrer correctement les tâches
- Persister les données entre les rechargements
- Afficher le nombre correct de tâches restantes

## Ressources supplémentaires
- [Documentation MDN sur localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [Gestion des événements en JavaScript](https://developer.mozilla.org/fr/docs/Web/API/Event)
- [Manipulation du DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model) 