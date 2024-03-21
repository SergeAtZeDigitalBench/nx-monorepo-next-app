import { getGreeting } from '../support/app.po';

describe('my-happy-bunch-e2e', () => {
  it('should display welcome message', () => {
    cy.visit('/').then(() => {
      // Custom command example, see `../support/commands.ts` file
      cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      getGreeting().contains(/Welcome, please select from below/i);
    });
  });
});
