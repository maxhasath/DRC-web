const {
  I
} = inject();

module.exports = {



  loginNameLable: {
    xpath: '//*[@id="g-rer-mon-compte"]'
  },

  buttons: {
    transactionBtn: {
      xpath: '/html/body/app-root/div/app-account/div/div/div/a[2]'
    }
  },

  /**
   * Get the text inside the element Handler
   * note :-
   * this method handles the gettext function of the lable
   * 17/01/2020
   * Element xpath: xpath: '//*[@id="g-rer-mon-compte"]'
   * 
   */
  async grabTitleLogin() {
    I.waitForElement(this.loginNameLable, 20);
    const loginName = await I.grabTextFrom(this.loginNameLable);
    return loginName;
  },

  
    /**
   * Click select plan Handler
   * note :-
   * this method handles the Click event of the select plan button
   * worklog:-
   * 17/01/2020
   * button xpath: '/html/body/app-root/div/app-account/div/div/div/a[2]'
   * 
   */
  

  async clickTransaction() {
    await I.waitForElement(this.buttons.transactionBtn, 20);
    I.click(this.buttons.transactionBtn);

  }
}