set -e
  echo -n "Checking if there are uncommited changes...\n "
  trap 'echo -e "\033[0;31mCHANGED\033[0m"' ERR
  git diff-index --quiet HEAD --
  trap - ERR
  echo -e "\033[0;32mUNCHANGED\033[0m"