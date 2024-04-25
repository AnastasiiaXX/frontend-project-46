lint:
	  npx eslint .
lint-fix:
	  npx eslint fix .
install:
	  npm install
gendiff:
	  node bin/gendiff.js
test:
	  npm test
test-coverage:
		npm test -- --coverage --coverageProvider=v8