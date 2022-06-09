#!/bin/bash
# to build the application,
# enter the user account dir
# install dependencies 
# exit when the dependencies are installed

#enter the user account directory
echo "preparing to deploy"
cd pwa
echo "in user progressive web app directory ..."
echo "installing devdepdencies fro progressive web app"

#update dev dependencies and dependencies
npm install
echo "dependenciessuccessfull installed"
echo "building static files"

#build static files
npm run build
echo "static files successfully built"

#create a folder @param {account} in the src/views/pages 
#the folder will contain to the built static files
# once the folder has been created, copy the files recursively [(-r) means recursive]
echo "copying PWA static files to app directory"
mkdir ./../src/views/pages/account
cp -r ./pwa/* ./../src/views/pages/account

echo "static files copied to app directory"
echo "in root directory ..."

#exit the pwa direcory
echo "adding changes to git commit"
git add .