const orderPage = require('../support/POM/CreateOrderPage');
const order = orderPage.get;

describe('Order Tests', () => {
  it('Create Order Page Fields Visible', () => {
    cy.visit('https://testers-test-fe.base-trading.etpa.nl/')
    
 
    order.participantIdInput().isVisible('Participant Id');
    order.individualIdInput().isVisible('Individual Id');
    order.StartDateInput().isVisible('Start Date');
    order.EndDateInput().isVisible('End Date');
    order.priceInput().isVisible('Price');
    order.OrderTypeSelectBox().isVisible('Order Type');
    order.capacityInput().isVisible('Capacity');
    order.TimeBlockSelectBox().isVisible('TimeBlock');
    order.SubmitButton().isVisible('Submit Button');
  })
})