# Quiz : Les Conditions en JavaScript

## Question 1
Quel opérateur de comparaison vérifie l'égalité stricte (valeur et type) ?

- [ ] `==`
- [x] `===`
- [ ] `=`
- [ ] `=>`

## Question 2
Quel est le résultat de ce code ?
```javascript
let x = 5;
let y = "5";
console.log(x === y);
```

- [ ] `true`
- [x] `false`
- [ ] `undefined`
- [ ] `error`

## Question 3
Quelle est la syntaxe correcte pour une condition if en JavaScript ?

- [ ] `if x > 5 { }`
- [x] `if (x > 5) { }`
- [ ] `if x > 5 then { }`
- [ ] `if x > 5: { }`

## Question 4
Quel est le résultat de ce code ?
```javascript
let age = 18;
let message = age >= 18 ? "Majeur" : "Mineur";
console.log(message);
```

- [ ] `"Mineur"`
- [x] `"Majeur"`
- [ ] `undefined`
- [ ] `error`

## Question 5
Quelle est la syntaxe correcte pour un switch en JavaScript ?

- [x] ```javascript
      switch(variable) {
        case 1:
          // code
          break;
      }
      ```
- [ ] ```javascript
      switch variable {
        case 1:
          // code
          break;
      }
      ```
- [ ] ```javascript
      switch(variable) {
        when 1:
          // code
          break;
      }
      ```
- [ ] ```javascript
      switch variable {
        when 1:
          // code
          break;
      }
      ```

## Question 6
Quel est le résultat de ce code ?
```javascript
let x = 0;
if (x) {
  console.log("Vrai");
} else {
  console.log("Faux");
}
```

- [ ] `"Vrai"`
- [x] `"Faux"`
- [ ] `undefined`
- [ ] `error`

## Question 7
Quel opérateur logique représente "ET" en JavaScript ?

- [ ] `&&`
- [x] `&&`
- [ ] `||`
- [ ] `!`

## Question 8
Quel est le résultat de ce code ?
```javascript
let x = 5;
let y = 10;
console.log(x > 3 && y < 20);
```

- [ ] `false`
- [x] `true`
- [ ] `undefined`
- [ ] `error`

## Question 9
Quelle est la bonne façon de vérifier si une variable existe ?

- [ ] `if (variable)`
- [x] `if (typeof variable !== 'undefined')`
- [ ] `if (variable != null)`
- [ ] `if (variable exists)`

## Question 10
Quel est le résultat de ce code ?
```javascript
let x = null;
let y = x || "valeur par défaut";
console.log(y);
```

- [ ] `null`
- [x] `"valeur par défaut"`
- [ ] `undefined`
- [ ] `error` 