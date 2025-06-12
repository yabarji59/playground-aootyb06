# Quiz : Les Boucles en JavaScript

## Question 1
Quelle est la syntaxe correcte pour une boucle for en JavaScript ?

- [ ] `for i = 0 to 10`
- [x] `for (let i = 0; i < 10; i++)`
- [ ] `for (i = 0; i < 10; i++)`
- [ ] `loop (i = 0; i < 10; i++)`

## Question 2
Quel est le résultat de ce code ?
```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
```

- [ ] `5`
- [x] `15`
- [ ] `10`
- [ ] `20`

## Question 3
Quelle boucle est la plus appropriée pour parcourir un tableau ?

- [ ] `while`
- [x] `for...of`
- [ ] `do...while`
- [ ] `for...in`

## Question 4
Quel est le résultat de ce code ?
```javascript
let arr = [1, 2, 3];
for (let num of arr) {
    console.log(num * 2);
}
```

- [ ] `[2, 4, 6]`
- [x] `2\n4\n6`
- [ ] `1\n2\n3`
- [ ] `error`

## Question 5
Quelle est la différence entre `break` et `continue` dans une boucle ?

- [x] `break` sort de la boucle, `continue` passe à l'itération suivante
- [ ] `break` passe à l'itération suivante, `continue` sort de la boucle
- [ ] Il n'y a pas de différence
- [ ] `break` est pour les boucles for, `continue` pour les boucles while

## Question 6
Quel est le résultat de ce code ?
```javascript
let i = 0;
while (i < 3) {
    if (i === 1) {
        continue;
    }
    console.log(i);
    i++;
}
```

- [x] `0\n2`
- [ ] `0\n1\n2`
- [ ] `1\n2`
- [ ] Boucle infinie

## Question 7
Quelle boucle est la plus appropriée quand on ne connaît pas le nombre d'itérations ?

- [ ] `for`
- [x] `while`
- [ ] `for...of`
- [ ] `for...in`

## Question 8
Quel est le résultat de ce code ?
```javascript
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key);
}
```

- [x] `a\nb\nc`
- [ ] `1\n2\n3`
- [ ] `{a: 1, b: 2, c: 3}`
- [ ] `error`

## Question 9
Quelle méthode de tableau permet d'itérer sur ses éléments ?

- [ ] `loop()`
- [x] `forEach()`
- [ ] `iterate()`
- [ ] `map()`

## Question 10
Quel est le résultat de ce code ?
```javascript
let arr = [1, 2, 3];
arr.forEach((num, index) => {
    console.log(index + ": " + num);
});
```

- [x] `0: 1\n1: 2\n2: 3`
- [ ] `1: 1\n2: 2\n3: 3`
- [ ] `[1, 2, 3]`
- [ ] `error` 