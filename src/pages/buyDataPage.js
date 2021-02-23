const {
  I
} = inject();

module.exports = {



  loginNameLable: {
    xpath: '//*[@id="g-rer-mon-compte"]'
  },

  successMessage: {
    //xpath: "//p[contains(@class, 'succesMsg')]"
    xpath: "//p[contains(text(),'Votre activation a reussi.')]"
  },

  fileds: {
    pinFiled: {

      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/div/input'
    }
  },


  buttons: {
    smsForfaits: {
      xpath: '//button[contains(text(),"Forfait Internet")]'
    },
    selectPlanBtn: {
      xpath: '//ngu-item[1]/div/div/span[3]'
    },
    confirmBtn: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/button[1]'
    }
  },


  /**
   * Click forfait internet Handler
   * note-:
   * this method handles the click event of the forfait internet
   * worklog : -
   * 17/01/2020
   * button xpath: '//button[contains(text(),"Forfait Internet")]'
   * 
   */
  async clickSmsForfaits() {
    await I.waitForElement(this.buttons.smsForfaits, 20);
    I.click(this.buttons.smsForfaits);
  },

  /**
   * Enter pin code Handler
   * note :-
   * this method handles the pin code filed input typing
   * worklog :-
   * 17/01/2020
   * text filed : xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/div/input'
   * @param {*} pin -should be the pin code
   */

  async enterCode(pin) {
    await I.waitForElement(this.fileds.pinFiled, 20);

    I.click(this.fileds.pinFiled);
    I.fillField(this.fileds.pinFiled, pin);
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
    await I.waitForVisible(this.buttons.confirmBtn, 20);
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
   * Element xpath: xpath: "//p[contains(@class, 'succesMsg')]"
   * 
   */
   async grabSuccessMessage() {
   await I.waitForElement(this.successMessage, 20);
   
   
  },
}