install:
	npm ci

gendiff:
	node bin/gendiff.js

help:
	node bin/gendiff.js -h

compare:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest
