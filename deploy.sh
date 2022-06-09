#!/bin/bash

#check for un commited changes


if [ -n "$(git status --porcelain)" ]; then
    echo -e "\e[0;31m BUILD FAILED!\n\n\e[0;32m You Have uncommited changes, \n Commit them to proceed";
    exit 0;
else
  echo -e "\e[1;32m---------------->No Changes found ";

#enter the user account directory
echo -e "\e[0;32m---------------->Preparing To Deploy"
cd pwa
echo -e "\e[0;32m---------------->In User Progressive Web App Directory ...\n"
echo -e "\e[0;32m---------------->Installing Devdepdencies Fro Progressive Web App\n"

#update dev dependencies and dependencies
npm install
echo -e "\e[0;32m---------------->Dependencies successfully Installed\n"
echo "\e'0;34m---------------->Building Static Files\n"

#build static files
npm run build
echo -e "\e[0;32m---------------->Static Files Successfully Built"

#create a folder @param {account} in the src/views/pages 
#the folder will contain to the built static files
# once the folder has been created, copy the files recursively [(-r) means recursive]
echo -e "\e[0;32m---------------->Copying Pwa Static Files to App Directory"
mkdir ./../src/views/pages/account
cp -r ./pwa/* ./../src/views/pages/account

echo -e "\e[0;32m---------------->Static Files Copied to App Directory"

#exit the pwa direcory
cd ..
echo -e "\e[0;32m---------------->In Root Directory ..."

#add the changes to commit 
echo -e "\e[0;32m---------------->Adding Changes to Git Commit"
git add .
git commit -m "CHORE -> added pwa static files to the app directory"
git push 
echo -e "\e[0;32m---------------->Changes successfully pushed to repository\nDeploying application"
git push heroku master
fi
