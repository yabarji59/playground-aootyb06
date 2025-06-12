# Quiz : Les Fonctions en JavaScript

## Question 1
Quelle est la syntaxe correcte pour une fonction fléchée ?

- [ ] `function(x) => x * 2`
- [x] `x => x * 2`
- [ ] `(x) => {x * 2}`
- [ ] `arrow(x) => x * 2`

## Question 2
Quel est le résultat de ce code ?
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
```

- [ ] `2 + 3`
- [x] `5`
- [ ] `undefined`
- [ ] `error`

## Question 3
Quelle est la différence entre une fonction déclarée et une fonction expression ?

- [x] La fonction déclarée est hoistée, la fonction expression non
- [ ] La fonction expression est hoistée, la fonction déclarée non
- [ ] Il n'y a pas de différence
- [ ] La fonction déclarée ne peut pas avoir de paramètres

## Question 4
Quel est le résultat de ce code ?
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));
```

- [ ] `4 * 2`
- [x] `8`
- [ ] `undefined`
- [ ] `error`

## Question 5
Qu'est-ce qu'une fonction de rappel (callback) ?

- [x] Une fonction passée en argument à une autre fonction
- [ ] Une fonction qui retourne une autre fonction
- [ ] Une fonction qui s'appelle elle-même
- [ ] Une fonction qui ne prend pas de paramètres

## Question 6
Quel est le résultat de ce code ?
```javascript
function greet(name = "World") {
    return `Hello, ${name}!`;
}
console.log(greet());
```

- [ ] `Hello, undefined!`
- [x] `Hello, World!`
- [ ] `Hello, !`
- [ ] `error`

## Question 7
Quelle est la syntaxe correcte pour une fonction avec des paramètres rest ?

- [ ] `function sum(...)`
- [x] `function sum(...numbers)`
- [ ] `function sum(*numbers)`
- [ ] `function sum(&numbers)`

## Question 8
Quel est le résultat de ce code ?
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```

- [ ] `[1, 2, 3]`
- [x] `[2, 4, 6]`
- [ ] `[1, 4, 9]`
- [ ] `error`

## Question 9
Qu'est-ce qu'une fonction pure ?

- [x] Une fonction qui retourne toujours le même résultat pour les mêmes arguments
- [ ] Une fonction qui ne prend pas de paramètres
- [ ] Une fonction qui ne retourne rien
- [ ] Une fonction qui modifie des variables globales

## Question 10
Quel est le résultat de ce code ?
```javascript
function* count() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = count();
console.log(generator.next().value);
```

- [ ] `[1, 2, 3]`
- [x] `1`
- [ ] `undefined`
- [ ] `error` 