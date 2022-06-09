#!/bin/bash
echo "preparing to deploy"
cd user-account
echo "building user-account"
npm run build
cd ..
echo "build user-account done"
echo "building sass"
npm run build-sass 
echo "building sass done"
echo "transpiling typescript"
npm run build-ts
echo "build typescript done"
npm run copy-static-assets
echo "build complete";
echo "deploying to server"