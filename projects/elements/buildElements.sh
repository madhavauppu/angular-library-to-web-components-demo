#!/bin/sh

mkdir ../../library/
rm -r -f dist/ &&
mkdir -p dist/components &&
node compileElements.js &&
node compileHelpers.js && 
rm -r -f dist