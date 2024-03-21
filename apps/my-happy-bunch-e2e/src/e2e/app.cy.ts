import { getGreeting } from '../support/app.po';

describe('my-happy-bunch-e2e', () => {
  beforeEach(() =>
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000).then(() => {
      cy.visit('/');
    })
  );

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome, please select from below/i);
  });
});
