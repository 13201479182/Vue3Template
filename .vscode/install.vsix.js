import { exec } from 'child_process';

const plugins = {
    'Live Server': 'ritwickdey.LiveServer',
    'Auto Close Tag': 'formulahendry.auto-close-tag',
    'Auto Rename Tag': 'formulahendry.auto-rename-tag',
    'Auto Import': 'steoates.autoimport',
    'ESLint': 'dbaeumer.vscode-eslint',
    'Prettier - Code formatter': 'esbenp.prettier-vscode',
    'Vue Language Features (Volar)': 'Vue.volar',
    'TypeScript Vue Plugin (Volar)': 'Vue.vscode-typescript-vue-plugin',
    'Vue 3 Snippets': 'hollowtree.vue-snippets',

    // prettier-ignore
    'Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code': 'MS-CEINTL.vscode-language-pack-zh-hans',
    'vscode-icons': 'vscode-icons-team.vscode-icons',
    'Project Manager': 'alefragnani.project-manager',
    'Todo Tree': 'Gruntfuggly.todo-tree',
    'GitLens — Git supercharged': 'eamodio.gitlens',

    'EditorConfig for VS Code': 'EditorConfig.EditorConfig',
    'Markdown Preview Github Styling': 'bierner.markdown-preview-github-styles',
    'Markdown Emoji': 'bierner.markdown-emoji',
    ':emojisense:': 'bierner.emojisense',
    'Markdown Checkboxes': 'bierner.markdown-checkbox',
    'Markdown Footnotes': 'bierner.markdown-footnotes',
    'Markdown Preview Mermaid Support': 'bierner.markdown-preview-github-styles',
};

function installPlugins(installedPlugins) {
    for (const pluginName in plugins) {
        const plugin = plugins[pluginName];
        if (installedPlugins.indexOf(plugin) === -1) {
            const child = exec(`code --install-extension ${plugin}`, (err, stdout, stderr) => {
                if (err || stderr) {
                    console.error(`vsix: ${pluginName} 安装失败 \n${err} ${stderr}`);
                    return;
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
