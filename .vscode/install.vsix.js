import { exec } from 'child_process';

const plugins = {
    'EditorConfig': 'EditorConfig.EditorConfig',
    'Emoji': 'Perkovec.emoji',
    'Markdown Preview Github Styling': 'bierner.markdown-preview-github-styles',
    'Project Manager': 'alefragnani.project-manager',
    'ESLint': 'dbaeumer.vscode-eslint',
    'Prettier - Code formatter': 'esbenp.prettier-vscode',
    'Auto Close Tag': 'formulahendry.auto-close-tag',
    'Auto Rename Tag': 'formulahendry.auto-rename-tag',
    'Todo Tree': 'Gruntfuggly.todo-tree',
    'Live Server': 'ritwickdey.LiveServer',
    'Auto Import': 'steoates.autoimport',
    'vscode-icons': 'vscode-icons-team.vscode-icons',
    'Volar': 'Vue.volar',
    'TypeScript Vue Plugin': 'Vue.vscode-typescript-vue-plugin',
    'GitLens': 'eamodio.gitlens',
    'Chinese (Simplified)': 'MS-CEINTL.vscode-language-pack-zh-hans',
    'Vue 3 Snippets': 'hollowtree.vue-snippets',
};

function installPlugins(installedPlugins) {
    for (const pluginName in plugins) {
        const plugin = plugins[pluginName];
        if (installedPlugins.indexOf(plugin) === -1) {
            const child = exec(`code --install-extension ${plugin}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(`vsix: ${pluginName} 安装失败, 请使用 npm i 重试!`);
                }
                console.log(`vsix: ${pluginName} 安装成功!`);
                // 结束子进程
                child.kill();
            });
        }
    }
}

exec('code --list-extensions', (err, stdout, stderr) => {
    if (err || stderr) {
        return console.log(err, stderr);
    }

    const installedPlugins = stdout.split('\n').filter(item => item);
    installPlugins(installedPlugins);
});
