const {
  I
} = inject();

module.exports = {


  fields: {
    reg: {
      xpath: '/html/body/app-root/app-header/header/div[3]/div/nav/div/div[2]/div/p/span[3]/a'
    },
    otpfailedText: {
      xpath: '/html/body/app-root/div/app-register/div/div/div[2]/div/div[1]/p'
    }
  },


  buttons: {
    registerBtn: {
      xpath: '/html/body/app-root/app-header/header/div[3]/div/nav/div/div[2]/div/p/span[3]/a'
    },
    otpRegister: {
      xpath: '/html/body/app-root/div/app-register/div/div/div[2]/div/div[2]/form/div/div[2]/div/button'
    },

    registerWithoutOtp: {
      xpath: '//*[@id="validate"]'
    }
  },



  form: {
    fileds: {
      firstName: {
        xpath: '//*[@id="firstName"]'
      },
      lastName: {
        xpath: '//*[@id="lastName"]'
      },
      phoneNumber: {
        xpath: '//*[@id="msisdn"]'
      },
      password: {
        xpath: '//*[@id="password"]'
      },
      emailAddress: {
        xpath: '//*[@id="email"]'
      },
      dob: {
        xpath: '//*[@id="birthDate"]'
      },
      otp: {
        xpath: '//*[@id="otp"]'
      }

    }
  },

  /**
   * Click navigate to the registerPage Handler
   * note :-
   * this method handles the Click event of the navigate to the registerPage
   * worklog:-
   * 17/01/2020
   * button xpath: '/html/body/app-root/app-header/header/div[3]/div/nav/div/div[2]/div/p/span[3]/a'
   * 
   */


  async navigateToRegisterPage() {
    await I.amOnPage("https://www.vodacom.cd/particulier/homepage");
    I.waitForElement(this.fields.reg, 20);
    I.click(this.fields.reg);

  },

  /**
   * User registration form Handler
   * note :-
   * this method handles the registration form input typing 
   * worklog :-
   * 17/01/2020
   * 
   * @param {*} fname -should be the users first name
   * @param {*} lname -should be the users last name
   * @param {*} phone -should be the phone number
   * @param {*} password -should be the password
   * @param {*} email -should be the email
   * @param {*} dob -should be the date of birth
   * @param {*} otp -should be the otp code
   */


  async register(fname, lname, phone, password, email, dob, otp) {


    await I.waitForElement(this.form.fileds.firstName, 20);
    I.fillField(this.form.fileds.firstName, fname);
    await I.waitForElement(this.form.fileds.lastName, 20);
    I.fillField(this.form.fileds.lastName, lname);
    await I.waitForElement(this.form.fileds.phoneNumber, 20);
    I.fillField(this.form.fileds.phoneNumber, phone);
    await I.waitForElement(this.form.fileds.password, 20);
    I.fillField(this.form.fileds.password, password);
    await I.waitForElement(this.form.fileds.emailAddress, 20);
    I.fillField(this.form.fileds.emailAddress, email);
    await I.waitForElement(this.form.fileds.dob, 20);

    I.fillField(this.form.fileds.dob, dob);
    I.click(this.form.fileds.lastName);
    await I.waitForElement(this.buttons.registerWithoutOtp, 20);
    I.click(this.buttons.registerWithoutOtp);
    await I.waitForElement(this.form.fileds.otp, 20);
    I.fillField(this.form.fileds.otp, otp);
    await I.waitForElement(this.buttons.otpRegister, 20);
    I.click(this.buttons.otpRegister);


  },

   /**
   * Get the text inside the element Handler
   * note :-
   * this method handles the get text function of the success message
   * worklog:-
   * 17/01/2020
   * Element xpath: '/html/body/app-root/div/app-register/div/div/div[2]/div/div[1]/p'
   * 
   */

  async grabTitleLogin() {
    I.waitForElement(this.loginNameLable, 20);
    const loginName = await I.grabTextFrom(this.loginNameLable);
    return loginName;
  }
}