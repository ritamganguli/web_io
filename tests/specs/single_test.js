var assert = require('assert');

describe('Lambdatest Demo Test', function() {
  it('Lambdatest Demo TestCase', async function () {

//    await browser.url('https://www.file.io/')
//    const firstElement = await browser.$("/html/body/div[1]/div/div/div[1]/div[3]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div/label")
//    await firstElement.click();

//    window.focus()
//    window.open('https://lambdatest.github.io/sample-todo-app/');


    await browser.url('https://lambdatest.github.io/sample-todo-app/')
    const firstElement = await browser.$('*[name="li1"]');
    await firstElement.click();
    const secondElement = await browser.$('*[name="li2"]');
    await secondElement.click();
    const input = await browser.$('*[id="sampletodotext"]');
    await input.setValue('Lambdatest\n');
    const title = await browser.getTitle();
    assert(title.match(/Sample page - lambdatest.com/i));

  });
});
