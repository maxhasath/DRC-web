const {
  I
} = inject();

module.exports = {



  loginNameLable: {
    xpath: "//div[contains(text(),'Transfert de crédit')]"
  },

  inputLabel: {
    xpath: "//*[@id='validate-form']/div[2]/label"
  },

  



  

  successMessage: {
    xpath: "//p[contains(text(),'Le solde du compte est insuffisant')]"
  },

  fileds: {
    rechargeCodeFiled: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div/div[3]/div/div/form/div[1]/input'
    },
    phoneNo: {
      xpath: "//*[@id='validate-form']/div[2]/label/following-sibling::input"

    },
    amount: {
      xpath: '//*[@id="validate-form"]/div[3]/label/following-sibling::input'

    },
    pin: {
      xpath: '//*[@id="validate-form"]/div[4]/label/following-sibling::input'

    }
  },



  buttons: {

    rechargeBtn: {
      xpath: '//*[@id="validate"]'
    },

    transferCredit: {
      xpath: '//*[@id="validate-form"]/div[5]/button'
    }
  },

/**
 * Enter recharge code Handler
 * note :-
 * this method handles the Enter recharge code filed input typing 
 * worklog :-
 * 17/01/2020
 * filed xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div/div[3]/div/div/form/div[1]/input'
 * @param {*} rechargeCode --should be the date of birth
 */

  async enterRechargeCode(rechargeCode) {
    await I.waitForElement(this.fileds.rechargeCodeFiled, 20);
    I.fillField(this.fileds.rechargeCodeFiled, rechargeCode);
  },

  /**
   * Enter transfer credit info Handler
   * note :-
   * this method handles the transfer credit info fileds input typing 
   * worklog :-
   * 17/01/2020
   * 
   * @param {*} phoneNo --should be the mobile number
   * @param {*} amount --should be the amount
   * @param {*} pin --should be the pincode
   */

  async enterTransferCreditInfo(phoneNo, amount, pin) {
    await I.waitForElement(this.loginNameLable, 20);
    await I.waitForElement(this.inputLabel, 20);
    await I.waitForElement(this.fileds.phoneNo, 20);
    I.fillField(this.fileds.phoneNo, phoneNo);
    await I.waitForElement(this.fileds.amount, 20);
    I.fillField(this.fileds.amount, amount);
    await I.waitForElement(this.fileds.pin, 20);
    I.fillField(this.fileds.pin, pin);
  },

  /**
   * Click recharge button Handler
   * note-:
   * this method handles the click event of the recharge button
   * worklog : -
   * 17/01/2020
   * button xpath: '//*[@id="validate"]'
   * 
   */

  async clickrechargeBtn() {
    await I.waitForElement(this.buttons.rechargeBtn, 20);
    I.click(this.buttons.rechargeBtn);
    I.waitForText("Votre compte a été rechargé avec succès",20);
  },

/**
   * Click transsfer credit button Handler
   * note-:
   * this method handles the click event of the recharge button
   * worklog : -
   * 17/01/2020
   * button xpath: '//*[@id="validate"]'
   * 
   */


  async clickTransferCreditBtn() {
    await I.waitForElement(this.buttons.transferCredit, 20);
    I.click(this.buttons.transferCredit);
    I.waitForText("crédit transféré avec succès",20);
  },

/**
   * Get the text inside the element Handler
   * note :-
   * this method handles the get text function of the success message
   * worklog:-
   * 17/01/2020
   * element xpath: "//p[contains(text(),'Le solde du compte est insuffisant')]"
   * 
   * 
   */

  async grabSuccessMessage() {
    await I.waitForElement(this.successMessage, 20);
    const Message = await I.grabTextFrom(this.successMessage);
    return Message;
  },
}