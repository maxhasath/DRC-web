module.exports = function () {
  // login page elements 
  const elements = {
    fields: {
      email: {
        xpath: '//*[@id="msisdn"]'
      },
      password: {
        xpath: '//*[@id="password"]'
      }
    },

    Buttons: {
      loginButton: {
        xpath: '//*[@id="validate"]'
      }
    },

    links: {
      loginLink: {
        xpath: '/html/body/app-root/app-header/header/div[3]/div/nav/div/div[2]/div/p/span[2]/a'
      }
    }
  };

  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login: async function (email, password) {
      //this.amOnPage('https://www.vodacom.cd/particulier/account/login');
      this.amOnPage('https://www.vodacom.cd/particulier/homepage');
      //https://www.vodacom.cd/particulier/homepage
      this.click(elements.links.loginLink);
      this.waitForElement(elements.fields.email, 20);
      this.fillField(elements.fields.email, email);
      this.waitForElement(elements.fields.password, 20);
      this.fillField(elements.fields.password, password);
      this.waitForElement(elements.Buttons.loginButton, 20);
      this.click(elements.Buttons.loginButton);
    }
  });
}