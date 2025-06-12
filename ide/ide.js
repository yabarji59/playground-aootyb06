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

// Configuration des snippets
const snippets = [
    {
        name: "variable",
        content: "let ${1:nom} = ${2:valeur};",
        caption: "Déclarer une variable",
        meta: "Snippet"
    },
    {
        name: "constante",
        content: "const ${1:NOM} = ${2:valeur};",
        caption: "Déclarer une constante",
        meta: "Snippet"
    },
    {
        name: "fonction",
        content: "function ${1:nomFonction}(${2:parametres}) {\n\t${3:// code}\n}",
        caption: "Déclarer une fonction",
        meta: "Snippet"
    },
    {
        name: "fonction-fléchée",
        content: "const ${1:nomFonction} = (${2:parametres}) => {\n\t${3:// code}\n};",
        caption: "Déclarer une fonction fléchée",
        meta: "Snippet"
    },
    {
        name: "if",
        content: "if (${1:condition}) {\n\t${2:// code}\n}",
        caption: "Structure conditionnelle if",
        meta: "Snippet"
    },
    {
        name: "if-else",
        content: "if (${1:condition}) {\n\t${2:// code}\n} else {\n\t${3:// code}\n}",
        caption: "Structure conditionnelle if-else",
        meta: "Snippet"
    },
    {
        name: "for",
        content: "for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3:// code}\n}",
        caption: "Boucle for classique",
        meta: "Snippet"
    },
    {
        name: "for-of",
        content: "for (const ${1:element} of ${2:array}) {\n\t${3:// code}\n}",
        caption: "Boucle for...of",
        meta: "Snippet"
    },
    {
        name: "while",
        content: "while (${1:condition}) {\n\t${2:// code}\n}",
        caption: "Boucle while",
        meta: "Snippet"
    },
    {
        name: "console",
        content: "console.log(${1:message});",
        caption: "Afficher dans la console",
        meta: "Snippet"
    },
    {
        name: "tableau",
        content: "const ${1:nom} = [${2:element1}, ${3:element2}];",
        caption: "Créer un tableau",
        meta: "Snippet"
    },
    {
        name: "objet",
        content: "const ${1:nom} = {\n\t${2:propriete}: ${3:valeur}\n};",
        caption: "Créer un objet",
        meta: "Snippet"
    },
    {
        name: "try-catch",
        content: "try {\n\t${1:// code}\n} catch (error) {\n\tconsole.error(error);\n}",
        caption: "Bloc try-catch",
        meta: "Snippet"
    },
    {
        name: "async",
        content: "async function ${1:nomFonction}() {\n\ttry {\n\t\t${2:// code}\n\t} catch (error) {\n\t\tconsole.error(error);\n\t}\n}",
        caption: "Fonction asynchrone",
        meta: "Snippet"
    },
    {
        name: "promise",
        content: "new Promise((resolve, reject) => {\n\t${1:// code}\n});",
        caption: "Créer une Promise",
        meta: "Snippet"
    }
];

// Ajouter les snippets à l'éditeur
const langTools = ace.require("ace/ext/language_tools");
const snippetManager = ace.require("ace/snippets").snippetManager;

snippets.forEach(snippet => {
    snippetManager.register(snippet, "javascript");
});

// Éléments DOM
const runBtn = document.getElementById("run-btn");
const resetBtn = document.getElementById("reset-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("output");

// Code initial
const initialCode = `// Écrivez votre code JavaScript ici
// Utilisez les snippets pour vous aider :
// Tapez "fonction" ou "if" et appuyez sur Tab

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