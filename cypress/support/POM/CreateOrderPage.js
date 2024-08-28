const get = {
    participantIdInput : () => cy.get('input[name^="Individual"]').eq(0),
    individualIdInput : () => cy.get('input[name^="Individual"]').eq(1),
    StartDateInput : () => cy.get('input[id*="r3"]'),
    EndDateInput: () => cy.get('input[id*="r5"]'),
    priceInput: () => cy.get('input[id*="r7"]'),
    OrderTypeSelectBox: () =>  cy.get('div[aria-controls*="r8"]'),
    capacityInput: () => cy.get('input[id*="r9"]'),
    TimeBlockSelectBox: () => cy.get('div[aria-controls*="ra"]'),
    SubmitButton: () => cy.contains('SUBMIT')
}

export{
    get
}