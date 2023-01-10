const {execSync} = require('child_process');

compileMainTheme();

function compileMainTheme() {
    const pathFrom = `../angular-components-library/src`;
    const pathTo = `../../dist/angular-library-to-web-components-demo`;
    const pathScss = `../../src`;

    execSync(`lessc ${pathFrom}/global-vars.scss ${pathTo}/main-theme.css`);
    execSync(`lessc ${pathScss}/styles.scss ${pathTo}/styles.css`);
}
