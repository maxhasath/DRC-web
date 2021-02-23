const {
  I
} = inject();

module.exports = {



  loginNameLable: {
    xpath: '//*[@id="g-rer-mon-compte"]'
  },

  successMessage: {
    xpath: "//p[contains(text(),'Le solde du compte est insuffisant')]"
  },



  buttons: {
    smsForfaits: {
      xpath: '//button[contains(text(),"Forfaits SMS")]'
    },
    selectPlanBtn: {
      xpath: '//ngu-item[1]/div/div/span[3]'
    },
    confirmBtn: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/button[1]'
    }
  },

/**
   * Click forfait Forfaits SMS
   * note -:
   * this method handles the click event of the Forfaits SMS
   * worklog : -
   * 17/01/2020
   * button xpath: xpath: '//button[contains(text(),"Forfaits SMS")]'
   * 
   */

  async clickSmsForfaits() {
    await I.waitForElement(this.buttons.smsForfaits, 20);
    I.click(this.buttons.smsForfaits);
  },

  /**
   * Click confirm button Handler
   * note :-
   * this method handles the Click event of the confirm button
   * worklog:-
   * 17/01/2020
   * button xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/button[1]'
   */

  async clickconfirmBtn() {
    await I.waitForElement(this.buttons.confirmBtn, 20);
    I.click(this.buttons.confirmBtn);
  },

    /**
   * Click select plan Handler
   * note :-
   * this method handles the Click event of the select plan button
   * worklog:-
   * 17/01/2020
   * button xpath: '//ngu-item[1]/div/div/span[3]'
   * 
   */

  async clickSelectPlanBtn() {
    await I.waitForElement(this.buttons.selectPlanBtn, 20);
    I.click(this.buttons.selectPlanBtn);
  },

  /**
   * Get the text inside the element Handler
   * note :-
   * this method handles the get text function of the success message
   * worklog:-
   * 17/01/2020
   * Element xpath: "//p[contains(text(),'Le solde du compte est insuffisant')]"
   * 
   */

  async grabSuccessMessage() {
    await I.waitForElement(this.successMessage, 20);
    const Message = await I.grabTextFrom(this.successMessage);
    return Message;
  },
}