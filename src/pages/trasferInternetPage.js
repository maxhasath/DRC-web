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

  //fileds: {
    //pinFiled: {
      //xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/div/input'
    //}
 // },

 

fileds: {
    pinFiled: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/div/input'
    }
 },

  buttons: {
    smsForfaits: {

      xpath: '//button[contains(text(),"Transfert Internet")]'
    },
    selectPlanBtn: {
      xpath: '//ngu-item[1]/div/div/span[3]'
    },
    confirmBtn: {
      xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/button[1]'
    }
  },

/**
   * Click forfait Transfert Internet
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
 * note-:
 * this method handles the click event of the enter pin code
 * worklog : -
 * 17/01/2020
 * button xpath: '/html/body/app-root/div/app-account/div/div/app-transactions/div[2]/div/div/div[2]/div/input' 
 * @param {*} pin - --should be the pin code
 */


  async enterCode(pin) {
    console.log("Start of Enter Code...............................");
    console.log("=====================================================");
    await I.waitForText("Veuillez confirmer l'activation : Forfaits de nuit - 1GB 1.00$ (23h00 - 04h59)",20);
    console.log("Wait for text complete...............................");
    await I.waitForElement(this.fileds.pinFiled, 20);
    console.log("Wait for element complete...............................");

    I.click(this.fileds.pinFiled);

    console.log("Click complete...............................");
    I.clearField(this.fileds.pinFiled);
    console.log("Clear field complete...............................");
    I.fillField(this.fileds.pinFiled, pin);
    console.log("Fill field complete...............................");
    
    
  },


  async clickconfirmBtn() {
    I.waitForText("Veuillez confirmer l'activation : Forfaits de nuit - 1GB 1.00$ (23h00 - 04h59)",20);
    await I.waitForElement(this.buttons.confirmBtn, 20);
    I.click(this.buttons.confirmBtn);
  },


  async clickSelectPlanBtn() {
    I.waitForText("Forfaits de nuit - 1GB 1.00$ (23h00 - 04h59)",20);
    await I.waitForVisible(this.buttons.selectPlanBtn, 20);
    await I.waitForElement(this.buttons.selectPlanBtn, 20);
    I.click(this.buttons.selectPlanBtn);
  },

  async grabSuccessMessage() {
    await I.waitForElement(this.successMessage, 20);

  },
}