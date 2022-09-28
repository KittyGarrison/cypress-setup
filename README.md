
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## Cypress instructions
### Prerequisites:
 - signup for a free Percy account at https://percy.io/
- create a new project
- copy your token into a global variable called 'PERCY_TOKEN'
### Get the app running
- do your regular `$ npm install`
- start the server `$ npm start`
- run the cypress commands and create your first spec
	- `$ npm install cypress`
	- `$ npx cypress open`
    - select e2e
    - continue
    - create empty spec
    - name it `home_page.cy.js`

### fix the linting errors
- `$ npm install eslint-plugin-cypress --save-dev`
- `$ echo '{"extends": ["plugin:cypress/recommended"]}' >> cypress/.eslintrc.json`
### set the origin
- in cypress.config.js
 - in the defineConfig method, under the e2e object add `baseUrl: 'http://localhost:3000,'`
### Test Homepage Loads
 - open home_page.cy.js in your text editor and paste in our first test
 ```
 describe('The Home Page', () => {
    it('successfully loads', ()=> {
        cy.intercept('GET', '/').as('homePageCall')
        cy.visit('/')
        cy.wait('@homePageCall').then(({response}) => {
          expect(response.statusCode).to.eq(200)
        })
    })
})
```
- return to the Cypress app and click on your spec to run it
- it should pass
- close the runner

### Add screenshots/UI Regression tests with Percy
- run Percy commands
	- `$ npm install --save-dev @percy/cli @percy/cypress`
	- `$ echo -e "\nimport '@percy/cypress'" >> cypress/support/e2e.js`

- use percy to run cypress
    - `$ npx percy exec -- cypress run `
