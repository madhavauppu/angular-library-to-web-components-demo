#!/usr/bin/env sh

echo "----- compress dist files ------"
# Compress them up for faster service !!!
for f in $(ls *.js); do gzip < $f > $f.gz; done;