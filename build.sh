#!/bin/bash
echo "building user-account done"
echo "building sass"
npm run build-sass 
echo "building sass done"
echo "transpiling typescript"
npm run build-ts
echo "build typescript done"
