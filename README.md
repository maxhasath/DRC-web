# Web Service Monitoring


CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.
CodeceptJS with Puppeteer library used to automate the web application, it operates over Google Chrome directly without requiring additional tools like ChromeDriver.
Uses Google Chrome's Puppeteer library to run tests inside headless Chrome.

## Installation

1. First, install CodeceptJS with puppeteer
```bash
npm install codeceptjs puppeteer --save-dev
```

2. Then, install mocha for mocha reports
```bash
npm i mocha -D
npm i mocha-multi
```
## Run Tests


1. run the commands
```bash
Test suit
npx codeceptjs run --steps 

Single test
npx codeceptjs run .\src\tests\<testfileName>_test --steps
```