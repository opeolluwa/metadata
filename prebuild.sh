#!/bin/bash

#check for un commited changes


if [ -n "$(git status --porcelain)" ]; then
    echo -e "\e[0;31m BUILD FAILED!\n\n\e[0;33m You Have uncommited changes, \n Commit them to proceed";
    exit 0;
else
  echo -e "\e[1;32m No Changes found ";

#enter the user account directory
echo -e "\e[0;33m Preparing To Deploy"
cd pwa
echo -e "\e[0;33m In User Progressive Web App Directory ..."
echo -e "\e[0;33m Installing Devdepdencies Fro Progressive Web App"

#update dev dependencies and dependencies
npm install
echo -e "\e[0;33m Dependencies successfully Installed"
echo "building static files"

#build static files
npm run build
echo -e "\e[0;33m Static Files Successfully Built"

#create a folder @param {account} in the src/views/pages 
#the folder will contain to the built static files
# once the folder has been created, copy the files recursively [(-r) means recursive]
echo -e "\e[0;33m Copying Pwa Static Files to App Directory"
mkdir ./../src/views/pages/account
cp -r ./pwa/* ./../src/views/pages/account

echo -e "\e[0;33m Static Files Copied to App Directory"
echo -e "\e[0;33m In Root Directory ..."

#exit the pwa direcory
echo -e "\e[0;33m Adding Changes to Git Commit"
git add .
fi
