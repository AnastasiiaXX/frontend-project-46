lint:
	  npx eslint .
lint-fix:
	  npx eslint fix .
install:
	  npm install
gendiff:
	  node bin/gendiff.js
test:
	  npx jest
test-coverage:
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage