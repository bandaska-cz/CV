function showBurger()
{
	$("body main header nav").fadeIn(300);
	$("body #burgerMenu").attr("onclick","hideBurger()");
}
function hideBurger()
{
	$("body main header nav").fadeOut(300);
	$("body #burgerMenu").attr("onclick","showBurger()");
}

$(function()
{

	setTimeout(function(){
		$("body #flashMsgWrap .flashMsg").fadeOut(1000);
	},3000);

	$("body main section div.boxes div.box p").mouseout(function()
	{
		element=$(this).parent();

		element.find('div').fadeIn(300);
		element.find('p').hide(0);
	});


	$("body main section div.boxes div.box").mouseenter(function()
	{
		element=$(this).find("div");

		element.hide(0);
		element.next('p').fadeIn(300);
	});

	$(window).resize(function(){
		var winWidth = $(window).width();

		$("#debug").text(winWidth);
	});
	new WOW().init();



});

var verifyCallback = function(response) {
        console.log("return:\n"+response);
      };

var recaptchaOk = function() {
	$("body main section.contact button").css("visibility","visible");
	$("body main section.contact button").removeAttr("disabled");

};
var recaptchaTime = function() {
	$("body main section.contact button").css("visibility","hidden");
	$("body main section.contact button").attr("disabled" , "disabled");
};
var recaptchaErr = function() {
	$("body main section.contact button").css("visibility","hidden");
	$("body main section.contact button").attr("disabled" , "disabled");
	alert("err");

};
var onloadCallback = function() {
        grecaptcha.render('recaptcha', {
          'sitekey' : '6Lfeod4UAAAAAOhlVRCvEvhUW14Adc0Uqbru5ZML',
          'callback' : recaptchaOk,
          'expired-callback' : recaptchaTime,
          'error-callback' : recaptchaErr
        });
      };
  
