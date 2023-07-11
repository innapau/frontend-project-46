install:
	npm ci

gendiff:
	node bin/gendiff.js

help:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8
