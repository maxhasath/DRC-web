const assert = require("assert");

Feature('Recharge card Voucher');



Scenario('Recharge card Voucher', async (I,transactionPage,mainPage) => {

  const reChargeCardNumber = process.env.reChargeCardNumber.toString();
  const deviceNo = process.env.deviceNo.toString();
  const action = process.env.action.toString();

  await I.login('0817458197', 'SLR@dynamics104');
  await mainPage.clickTransaction();

  // await transactionPage.enterRechargeCode(reChargeCardNumber);
  // await transactionPage.clickrechargeBtn();


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