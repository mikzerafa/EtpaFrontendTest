const { beforeEach } = require('mocha');
const orderPage = require('../support/POM/CreateOrderPage');
const order = orderPage.get;

describe('Order Tests', () => {
  beforeEach(() => {
    cy.visit('https://testers-test-fe.base-trading.etpa.nl/')
  })
  it('Create Order Page Fields Visible', () => {
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

  it('Create Order Happy Path throws no errors', () => {
    let alertTriggered = false;
    order.participantIdInput().type('1234');
    order.individualIdInput().type('1234');
    order.StartDateInput().type('20/03/2024 05:30 AM');
    order.EndDateInput().type('20/03/2024 05:30 PM');
    order.priceInput().type('12.03');
    order.OrderTypeSelectBox().click();
    cy.contains('Buy').click();
    order.capacityInput().type('12.03');
    order.TimeBlockSelectBox().click();
    cy.contains('INTRADAY').click();
    order.SubmitButton().click();

    cy.wait(1000)
    cy.on('window:alert', (alertText) => {
      alertTriggered = true;
    });

    cy.then(() => {
      expect(alertTriggered).to.be.false;
    })
  })

  describe('Validation Tests', () => {
    //ALL FIELDS REQUIRED TESTS

    it('Participation Id should be required', () => {
      let alertTriggered = false;
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();

      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Individual Id should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Start date should be required', () => {
      it('Individual Id should be required', () => {
        let alertTriggered = false;
        order.participantIdInput().type('1234');
        order.individualIdInput().type('1234');
        order.EndDateInput().type('20/03/2024 05:30 PM');
        order.priceInput().type('12.03');
        order.OrderTypeSelectBox().click();
        cy.contains('Buy').click();
        order.capacityInput().type('12.03');
        order.TimeBlockSelectBox().click();
        cy.contains('INTRADAY').click();
        order.SubmitButton().click();
    
        cy.wait(1000)
        cy.on('window:alert', (alertText) => {
          alertTriggered = true;
        });
    
        cy.then(() => {
          expect(alertTriggered).to.be.true;
        })
      })
    })

    it('End Date should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();

      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Price should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();

      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Order Type should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();

      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Capacity should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();

      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })
    it('TimeBlock should be required', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.SubmitButton().click();
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });

      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

      //AlphaNumeric and Numeric Fields Tests
      it('Participant id should accept AlphaNumeric - Letters', () => {
        let alertTriggered = false;
        order.participantIdInput().type('abcd');
        order.individualIdInput().type('1234');
        order.StartDateInput().type('20/03/2024 05:30 AM');
        order.EndDateInput().type('20/03/2024 05:30 PM');
        order.priceInput().type('12.03');
        order.OrderTypeSelectBox().click();
        cy.contains('Buy').click();
        order.capacityInput().type('12.03');
        order.TimeBlockSelectBox().click();
        cy.contains('INTRADAY').click();
        order.SubmitButton().click();
    
        cy.wait(1000)
        cy.on('window:alert', (alertText) => {
          alertTriggered = true;
        });
    
        cy.then(() => {
          expect(alertTriggered).to.be.false;
        })
      })

      it('Participant id should accept AlphaNumeric - numbers', () => {
        let alertTriggered = false;
        order.participantIdInput().type('123');
        order.individualIdInput().type('1234');
        order.StartDateInput().type('20/03/2024 05:30 AM');
        order.EndDateInput().type('20/03/2024 05:30 PM');
        order.priceInput().type('12.03');
        order.OrderTypeSelectBox().click();
        cy.contains('Buy').click();
        order.capacityInput().type('12.03');
        order.TimeBlockSelectBox().click();
        cy.contains('INTRADAY').click();
        order.SubmitButton().click();
    
        cy.wait(1000)
        cy.on('window:alert', (alertText) => {
          alertTriggered = true;
        });
    
        cy.then(() => {
          expect(alertTriggered).to.be.false;
        })
      })

      it('Participant id should accept ONLY AlphaNumeric - Signs ', () => {
        let alertTriggered = false;
        order.participantIdInput().type('&%£');
        order.individualIdInput().type('1234');
        order.StartDateInput().type('20/03/2024 05:30 AM');
        order.EndDateInput().type('20/03/2024 05:30 PM');
        order.priceInput().type('12.03');
        order.OrderTypeSelectBox().click();
        cy.contains('Buy').click();
        order.capacityInput().type('12.03');
        order.TimeBlockSelectBox().click();
        cy.contains('INTRADAY').click();
        order.SubmitButton().click();
    
        cy.wait(1000)
        cy.on('window:alert', (alertText) => {
          alertTriggered = true;
        });
    
        cy.then(() => {
          expect(alertTriggered).to.be.true;
        })
    })

    it('Individual id should accept AlphaNumeric - Letters', () => {
      let alertTriggered = false;
      order.participantIdInput().type('1234');
      order.individualIdInput().type('abcd');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('Individual id should accept AlphaNumeric - numbers', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('1234');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('Individual id should accept ONLY AlphaNumeric - Signs ', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('&%$£');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Price should accept Number - Number', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('Price should ONLY accept Number - Letter', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('abcd');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    
    it('Price should ONLY accept Number - Sign', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('$%*');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Price should ONLY accept Number - exponent', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12e3');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Price should ONLY accept Number - negative Number', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('-12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })


    it('Capacity should accept Number - Number', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('Capacity should ONLY accept Number - Letter', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('123');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('abcd');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    
    it('Capacity should ONLY accept Number - Sign', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('1234');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('&%*');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Capacity should ONLY accept Number - exponent', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12e3');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Capacity should ONLY accept Number - negative number', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('-12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })


    //Functionality Tests

    it('Start Date After End Date should throw Error', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 PM');
      order.EndDateInput().type('20/03/2024 05:30 AM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.true;
      })
    })

    it('Order Type Sell Works', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Sell').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('INTRADAY').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('TimeBlock Expost Works', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('EXPOST').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('TimeBlock Gopacs Works', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('GOPACS').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })

    it('TimeBlock Xbid Works', () => {
      let alertTriggered = false;
      order.participantIdInput().type('123');
      order.individualIdInput().type('123');
      order.StartDateInput().type('20/03/2024 05:30 AM');
      order.EndDateInput().type('20/03/2024 05:30 PM');
      order.priceInput().type('12.03');
      order.OrderTypeSelectBox().click();
      cy.contains('Buy').click();
      order.capacityInput().type('12.03');
      order.TimeBlockSelectBox().click();
      cy.contains('XBID').click();
      order.SubmitButton().click();
  
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        alertTriggered = true;
      });
  
      cy.then(() => {
        expect(alertTriggered).to.be.false;
      })
    })



  })
})
