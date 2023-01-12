const fs = require('fs');
const {execSync} = require('child_process');

const projects = ['angular-components-library']; //'another-angular-components-library'

projects.forEach(project => {
    const components = fs.readdirSync(`src/${project}`);

    console.log(`\nCompiling "${project}":\n`);

    components.forEach(component => compileComponent(project, component));
});

function compileComponent(project, component) {
    console.log(`\t- ${component}`);

    const buildJsFiles = `ng run elements:build:production --aot --main=projects/elements/src/${project}/${component}/compile.ts`;
    const bundleIntoSingleFile = `cat dist/tmp/runtime.js dist/tmp/main.js > dist/tmp/ecam-${component}.js`;
    const copyBundledComponent = `cp dist/tmp/ecam-${component}.js ../../library/`;
    // const polyfillsEs5 = `cp dist/tmp/polyfills-es5.js dist/components/`;
    execSync(`${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}` );
}
                    