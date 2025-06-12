# Quiz : Les Variables en JavaScript

## Question 1
Quelle est la bonne façon de déclarer une variable en JavaScript moderne ?

- [ ] `var nom = "Jean";`
- [x] `let nom = "Jean";`
- [ ] `const nom = "Jean";`
- [ ] `variable nom = "Jean";`

## Question 2
Quelle est la différence entre `let` et `const` ?

- [x] `let` permet de réassigner une valeur, `const` non
- [ ] `let` est plus rapide que `const`
- [ ] `const` ne peut être utilisé que pour les nombres
- [ ] Il n'y a pas de différence

## Question 3
Quel est le résultat de ce code ?
```javascript
let x = 5;
x = "hello";
console.log(typeof x);
```

- [ ] `number`
- [x] `string`
- [ ] `undefined`
- [ ] `error`

## Question 4
Quelle est la valeur de `y` après l'exécution de ce code ?
```javascript
let x = 10;
let y = x;
x = 20;
```

- [x] `10`
- [ ] `20`
- [ ] `undefined`
- [ ] `error`

## Question 5
Quelle est la bonne pratique pour nommer une variable en JavaScript ?

- [x] Utiliser le camelCase
- [ ] Utiliser le PascalCase
- [ ] Utiliser le snake_case
- [ ] Utiliser des majuscules

## Question 6
Quel est le résultat de ce code ?
```javascript
const PI = 3.14;
PI = 3.15;
console.log(PI);
```

- [ ] `3.15`
- [x] `Error: Assignment to constant variable`
- [ ] `3.14`
- [ ] `undefined`

## Question 7
Quelle est la valeur de `z` après l'exécution de ce code ?
```javascript
let z;
console.log(z);
```

- [ ] `null`
- [ ] `0`
- [x] `undefined`
- [ ] `error`

## Question 8
Quelle est la bonne façon de déclarer plusieurs variables ?

- [x] ```javascript
      let a = 1, b = 2, c = 3;
      ```
- [ ] ```javascript
      let a = 1;
      let b = 2;
      let c = 3;
      ```
- [ ] ```javascript
      let a, b, c = 1, 2, 3;
      ```
- [ ] ```javascript
      let a = 1; b = 2; c = 3;
      ```

## Question 9
Quel est le résultat de ce code ?
```javascript
let x = "5";
let y = 2;
console.log(x + y);
```

- [x] `"52"`
- [ ] `7`
- [ ] `"7"`
- [ ] `error`

## Question 10
Quelle est la bonne pratique pour déclarer une variable qui ne changera jamais ?

- [ ] `let`
- [x] `const`
- [ ] `var`
- [ ] `static` 