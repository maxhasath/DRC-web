const assert = require("assert");

Feature('Buy bundle Data');

Scenario('Buy bundle Data', async (I, buyDataPage, mainPage) => {
  //const envVariables =  Boolean(process.env.deviceNo || process.env.action);
  //assert.equal(deviceNo,null,"No environment variables found");

  /**
   * Device no capture variable
   */
  const deviceNo = process.env.deviceNo.toString();
  /**
   * Action type capture variable
   */
  const action = process.env.action.toString();

  await I.login('0817458197', 'SLR@dynamics104');
  await mainPage.clickTransaction();
  await buyDataPage.clickSmsForfaits();
  await buyDataPage.clickSelectPlanBtn();
  //new test
  //await buyDataPage.clickconfirmBtn();
  // await buyDataPage.grabSuccessMessage();




  // var resBody;
  // var dd = new Date().toISOString();

  //var dd = '2020-03-20T05:50:58.136Z';
  // var result = false;
  // var time = 0;

  // var matchingStrings = [
  //   "You have received", 
  //   "Internet Bundle",
  //   "1GB"
  // ];

  // do {
  //   I.wait(5);
  //   time++;

  // resBody = await I.sendGetRequest('http://api-qa-cmct.itelasoft.com.au/api/Responses/Enviornment/' + deviceNo + '/Responses/' + action + '/?since=' + dd + '');
  // if (resBody.status == '200') {
  //   var filteredItems = resBody.data.filter(function (item) {
  //     return matchingStrings.filter(function (searchText) {
  //       return item.text.toLowerCase().includes(searchText.toLowerCase());
  //     }).length == matchingStrings.length;
  //   });

  //   console.log("filteredItems : "+ filteredItems.length);
  //   result = filteredItems.length > 0;

  // }
  //   if (time > 3) {
  //     break;
  //   }
  // }
  // while (result == false);
  // assert.equal(true, result);



});