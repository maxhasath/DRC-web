const assert = require("assert");

Feature('Transfer Airtime');


Scenario('Transfer Airtime', async (I,transactionPage,mainPage) => {

  const mobileNumber = (process.env.mobileNumber).toString();
  const deviceNo = process.env.deviceNo.toString();
  const action = process.env.action.toString();

  await I.login('0817458197', 'SLR@dynamics104');
  await mainPage.clickTransaction();

  await transactionPage.enterTransferCreditInfo(mobileNumber, '100', '0000');
  //await transactionPage.clickTransferCreditBtn();

  var resBody;
  var dd = new Date().toISOString();
  
  
  var result=false;
  var time = 0;

  do {
    I.wait(5);
    time++;
    
    resBody = await I.sendGetRequest('Responses/Enviornment/' + deviceNo + '/LatestAction/' + action + '/?since=' + dd + '');
    
    result = Boolean((resBody.status == '201') && typeof resBody.data.text !== 'undefined' && resBody.data.text !== null);
    
    if (time > 3) {
      break;
    }
  }
  while (result == false);
  assert.equal("true", result.toString());


});