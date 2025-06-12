const assert = require('assert');

// Vérifier que le code s'exécute sans erreur
try {
    require('./solution.js');
    console.log('✅ Le code s\'exécute sans erreur');
} catch (error) {
    console.error('❌ Erreur lors de l\'exécution du code:', error);
    process.exit(1);
}

// Vérifier que les variables sont déclarées
try {
    const solution = require('./solution.js');
    
    // Vérifier que nom est déclaré avec let
    assert(typeof solution.nom !== 'undefined', 'La variable nom n\'est pas déclarée');
    assert(typeof solution.nom === 'string', 'La variable nom doit être une chaîne de caractères');
    
    // Vérifier que age est déclaré avec let
    assert(typeof solution.age !== 'undefined', 'La variable age n\'est pas déclarée');
    assert(typeof solution.age === 'number', 'La variable age doit être un nombre');
    
    // Vérifier que TAILLE est déclaré avec const
    assert(typeof solution.TAILLE !== 'undefined', 'La constante TAILLE n\'est pas déclarée');
    assert(typeof solution.TAILLE === 'number', 'La constante TAILLE doit être un nombre');
    
    // Vérifier que l'objet personne est correctement créé
    assert(typeof solution.personne === 'object', 'L\'objet personne n\'est pas créé');
    assert(solution.personne.nom === solution.nom, 'La propriété nom de l\'objet personne est incorrecte');
    assert(solution.personne.age === solution.age, 'La propriété age de l\'objet personne est incorrecte');
    assert(solution.personne.taille === solution.TAILLE, 'La propriété taille de l\'objet personne est incorrecte');
    
    console.log('✅ Toutes les variables sont correctement déclarées et typées');
} catch (error) {
    console.error('❌ Erreur lors de la validation des variables:', error);
    process.exit(1);
}

console.log('🎉 Tous les tests sont passés !'); 