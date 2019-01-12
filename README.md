Repo that demonstrates the difference between resolving dependencies including TypeScript types, and without them.

It was build in a TDD style, keeping Dependency Inversion in mind, so we could advantage from the amazing Jest Watcher
 
For it to work for anyone else, https://github.com/testdouble/testdouble.js/pull/402 has to be merged first 

Then you should be able to just do:

npm install
npm test


This repo is also setup in a way that when you change some files and try to commit, jest will run tests related to the changes. With the tweak I propose to jest (link soon), it will result in a much snappier workflow. 
