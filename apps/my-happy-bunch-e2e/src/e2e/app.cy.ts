import { getGreeting } from '../support/app.po';

describe('my-happy-bunch-e2e', () => {
  beforeEach(() =>
    cy.visit('/', {
      timeout: 120_000,
      retryOnStatusCodeFailure: true,
    })
  );

  it('should display page heading message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // https://learn.cypress.io/cypress-fundamentals/understanding-the-asynchronous-nature-of-cypress
    getGreeting().then(($heading) => {
      cy.wrap($heading).contains(/Welcome, please select from below/i);
    });
  });
});
