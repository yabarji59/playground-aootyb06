// Configuration de Monaco Editor
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});

require(['vs/editor/editor.main'], function() {
    // Initialisation de l'éditeur
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: '// Écrivez votre code JavaScript ici\nconsole.log("Bonjour le monde !");',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
            enabled: false
        }
    });

    // Gestion de la console
    const consoleElement = document.getElementById('console');
    const runButton = document.getElementById('run-btn');
    const clearButton = document.getElementById('clear-btn');

    // Fonction pour ajouter un message à la console
    function appendToConsole(message, type = 'log') {
        const line = document.createElement('div');
        line.className = type;
        line.textContent = message;
        consoleElement.appendChild(line);
        consoleElement.scrollTop = consoleElement.scrollHeight;
    }

    // Surcharge des fonctions console
    const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info
    };

    // Redirection des logs vers notre console
    console.log = (...args) => {
        originalConsole.log(...args);
        appendToConsole(args.join(' '), 'log');
    };

    console.error = (...args) => {
        originalConsole.error(...args);
        appendToConsole(args.join(' '), 'error');
    };

    console.warn = (...args) => {
        originalConsole.warn(...args);
        appendToConsole(args.join(' '), 'warn');
    };

    console.info = (...args) => {
        originalConsole.info(...args);
        appendToConsole(args.join(' '), 'info');
    };

    // Exécution du code
    runButton.addEventListener('click', () => {
        try {
            // Effacer la console
            consoleElement.innerHTML = '';
            
            // Récupérer le code de l'éditeur
            const code = editor.getValue();
            
            // Exécuter le code
            eval(code);
        } catch (error) {
            console.error(error.message);
        }
    });

    // Effacer la console
    clearButton.addEventListener('click', () => {
        consoleElement.innerHTML = '';
    });
}); 