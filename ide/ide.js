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

// Initialisation de l'éditeur Ace
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setShowPrintMargin(false);
editor.setOptions({
    fontSize: "14px",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
});

// Éléments DOM
const runBtn = document.getElementById("run-btn");
const resetBtn = document.getElementById("reset-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("output");

// Code initial
const initialCode = `// Écrivez votre code JavaScript ici
console.log("Bonjour, JavaScript !");

// Exemple de fonction
function addition(a, b) {
    return a + b;
}

// Test de la fonction
console.log("2 + 3 =", addition(2, 3));`;

editor.setValue(initialCode);

// Fonction pour exécuter le code
function runCode() {
    const code = editor.getValue();
    output.innerHTML = "";
    
    // Redéfinir console.log pour afficher dans notre output
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    const originalConsoleInfo = console.info;

    console.log = function(...args) {
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        ).join(' ');
        appendToOutput(message, 'log');
        originalConsoleLog.apply(console, args);
    };

    console.error = function(...args) {
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        ).join(' ');
        appendToOutput(message, 'error');
        originalConsoleError.apply(console, args);
    };

    console.warn = function(...args) {
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        ).join(' ');
        appendToOutput(message, 'warn');
        originalConsoleWarn.apply(console, args);
    };

    console.info = function(...args) {
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        ).join(' ');
        appendToOutput(message, 'info');
        originalConsoleInfo.apply(console, args);
    };

    try {
        // Exécuter le code
        eval(code);
    } catch (error) {
        appendToOutput(error.toString(), 'error');
    }

    // Restaurer les fonctions console originales
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
    console.info = originalConsoleInfo;
}

// Fonction pour ajouter du texte à l'output
function appendToOutput(text, type = 'log') {
    const line = document.createElement('div');
    line.className = type;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Fonction pour réinitialiser l'éditeur
function resetEditor() {
    if (confirm("Voulez-vous vraiment réinitialiser l'éditeur ?")) {
        editor.setValue(initialCode);
        output.innerHTML = "";
    }
}

// Fonction pour effacer la console
function clearOutput() {
    output.innerHTML = "";
}

// Événements
runBtn.addEventListener('click', runCode);
resetBtn.addEventListener('click', resetEditor);
clearBtn.addEventListener('click', clearOutput);

// Raccourcis clavier
editor.commands.addCommand({
    name: 'runCode',
    bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
    exec: runCode
}); 