#!/bin/bash

#check for un commited changes


if [ -n "$(git status --porcelain)" ]; then
    echo -e "\e[0;31m BUILD FAILED!\e[0m\n\nYou Have uncommited changes.\n Commit them to proceed\e[0m";
    exit 0;
else
  echo -e "\e[0;34mdeploy :: ----------------> No Changes found \e[0m";

#enter the user account directory
echo -e "\e[0;34mdeploy :: ----------------> Preparing To Deploy\e[0m"
cd pwa
echo -e "\e[0;34mdeploy :: ----------------> In User Progressive Web App Directory ...\n[0m"
echo -e "\e[0;34mdeploy :: ----------------> Installing Devdepdencies Fro Progressive Web App\n\e[0m"

#update dev dependencies and dependencies
#npm install
echo -e "\e[0;34mdeploy :: ----------------> Dependencies successfully Installed\n\e[0m"
echo -e "\e[0;34mdeploy :: ----------------> Building Static Files\n\e[0m"

#build static files
npm run build
echo -e "\e[0;34mdeploy :: ----------------> Static Files Successfully Built\e[0m"

#create a folder @param {account} in the src/views/pages 
#the folder will contain to the built static files
# once the folder has been created, copy the files recursively [(-r) means recursive]
echo -e "\e[0;34mdeploy :: ----------------> Copying Pwa Static Files to App Directory\e[0m"
mkdir ./../src/views/pages/account
cp -r ./pwa/* ./../src/views/pages/account

echo -e "\e[0;34mdeploy :: ----------------> Static Files Copied to App Directory\e[0m"

#exit the pwa direcory
cd ..
echo -e "\e[0;34mdeploy :: ----------------> In Root Directory ...\e[0m"

#add the changes to commit 
echo -e "\e[0;34mdeploy :: ----------------> Adding Changes to Git Commit\e[0m"
git add .
git commit -m "CHORE -> added pwa static files to the app directory"
git push 
echo -e "\e[0;34mdeploy :: ----------------> Changes successfully pushed to repository\nDeploying application\e[0m"
git checkout production
git pull origin master
git push
fi
