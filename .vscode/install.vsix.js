import { exec } from 'child_process';

const extensions = {
    'Project Manager': 'alefragnani.project-manager',
    'ESLint': 'dbaeumer.vscode-eslint',
    'Prettier - Code formatter': 'esbenp.prettier-vscode',
    'Auto Close Tag': 'formulahendry.auto-close-tag',
    'Auto Rename Tag': 'formulahendry.auto-rename-tag',
    'Todo Tree': 'Gruntfuggly.todo-tree',
    'Vue 3 Snippets': 'hollowtree.vue-snippets',
    'Git Graph': 'mhutchie.git-graph',
    'Live Server': 'ritwickdey.LiveServer',
    'Auto Import': 'steoates.autoimport',
    'vscode-icons': 'vscode-icons-team.vscode-icons',
    'Volar': 'Vue.volar',
    'TypeScript Vue Plugin': 'Vue.vscode-typescript-vue-plugin',
    'JavaScript (ES6) code snippets': 'xabikos.JavaScriptSnippets',
};

// 'code --install-extension formulahendry.auto-close-tag',
exec('code --list-extensions', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`, extensions);
    console.log(`stderr: ${stderr}`);
});
