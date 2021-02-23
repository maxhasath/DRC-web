const {
  I
} = inject();

module.exports = {



  loginNameLable: {
    xpath: '//*[@id="g-rer-mon-compte"]'
  },

  successMessage: {
    xpath: "//p[contains(text(),'Votre activation a reussi.')]"
  },



  buttons: {
    smsPlanBtn: {
      xpath: '//button[contains(text(),"Forfait Voix")]'
    },
    selectPlanBtn: {
      xpath: '//ngu-item[1]/div/div/span[3]'
    },
    confirmBtn: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/button[1]'
    }
  },

 /**
   * Click forfait forfait voix
   * note -:
   * this method handles the click event of the forfait voix
   * worklog : -
   * 17/01/2020
   * button xpath: xpath: '//button[contains(text(),"Forfait Voix")]'
   * 
   */

  async clickSmsPlanBtn() {
    await I.waitForElement(this.buttons.smsPlanBtn, 20);
    I.click(this.buttons.smsPlanBtn);
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
    //I.waitForText("Veuillez confirmer l'activation : Appels Vodacom - 2Min - $0.15 (24h)",100);
    await I.waitForVisible(this.buttons.confirmBtn, 20);
    await I.waitForElement(this.buttons.confirmBtn, 20);
    I.click("Confirmer");
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
    //I.waitForText("Appels Vodacom - 2Min - $0.15 (24h)",100);
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
    
  },
}