#!/bin/bash
#enter the user account
# install dependencies 
# exit when the dependencies are installed
echo "preparing to deploy"
cd user-account
echo "in user account ..."
echo "installing devdepdencies"
npm install
echo "building user-account"
npm run build
cd ..
echo "in root directory ..."

