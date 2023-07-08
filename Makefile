install:
	npm ci

gendiff:
	node bin/gendiff.js

help:
	node bin/gendiff.js -h

compare:
	node bin/gendiff.js src/test-files/file1.json src/test-files/file2.json

publish:
	npm publish --dry-run

lint:
	npx eslint .
