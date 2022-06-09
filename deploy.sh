#!/bin/bash

#check for un commited changes


if [ -n "$(git status --porcelain)" ]; then
    echo -e "\e[0;31m BUILD FAILED!\e[0m\n\nYou Have uncommited changes.\n Commit them to proceed";
    exit 0;
else
  echo -e "No Changes found ";

#enter the user account directory
echo -e "Preparing To Deploy"
cd pwa
echo -e "In User Progressive Web App Directory ...\n"
echo -e "Installing Devdepdencies Fro Progressive Web App\n"

#update dev dependencies and dependencies
npm install
echo -e "Dependencies successfully Installed\n"
echo "deploy::\t\e[0;34m---------------->\e[0mBuilding Static Files\n"

#build static files
npm run build
echo -e "Static Files Successfully Built"

#create a folder @param {account} in the src/views/pages 
#the folder will contain to the built static files
# once the folder has been created, copy the files recursively [(-r) means recursive]
echo -e "Copying Pwa Static Files to App Directory"
mkdir ./../src/views/pages/account
cp -r ./pwa/* ./../src/views/pages/account

echo -e "Static Files Copied to App Directory"

#exit the pwa direcory
cd ..
echo -e "In Root Directory ..."

#add the changes to commit 
echo -e "Adding Changes to Git Commit"
git add .
git commit -m "CHORE -> added pwa static files to the app directory"
git push 
echo -e "Changes successfully pushed to repository\nDeploying application"
git push heroku master
fi
