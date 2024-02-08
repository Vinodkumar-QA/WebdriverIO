describe('Ecommerce Application',async()=>
{

    it('Login Page',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(3000)
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("input[name='username']").setValue("vinod")
        await browser.pause(3000)
        await $("//input[@name='username']").setValue("rahulshettyacademy.")
        await browser.pause(2000)
        await $("//input[@name='password']").setValue("learningg")
        await browser.pause(2000)
        await $("//input[@type='submit']").click()
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not displayed'
        })

        await console.log(await $(".alert-danger").getText())
        await expect($("//p[@class='text-center text-white']")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

    })

    it('Happy Login',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("//input[@name='username']").setValue("rahulshettyacademy")
        await browser.pause(2000)
        await $("//input[@name='password']").setValue("learning")
        await browser.pause(2000)
        await $("//input[@type='submit']").click()
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce")

    })

})