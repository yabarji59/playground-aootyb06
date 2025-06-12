const assert = require('assert');

// Test pour vérifier que le code s'exécute sans erreur
try {
    require('./introduction.js');
    console.log('✅ Le code s\'exécute sans erreur');
} catch (error) {
    console.error('❌ Erreur lors de l\'exécution du code:', error);
    process.exit(1);
}

// Test pour vérifier que la console.log a été utilisée
const originalConsoleLog = console.log;
let logCalled = false;
console.log = function() {
    logCalled = true;
    originalConsoleLog.apply(console, arguments);
};

try {
    require('./introduction.js');
    assert(logCalled, 'La fonction console.log n\'a pas été utilisée');
    console.log('✅ La fonction console.log a été utilisée');
} catch (error) {
    console.error('❌ Erreur lors du test de console.log:', error);
    process.exit(1);
} finally {
    console.log = originalConsoleLog;
}

console.log('🎉 Tous les tests sont passés !'); 