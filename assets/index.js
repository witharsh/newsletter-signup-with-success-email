var formBox= document.getElementById('formContainer');
var thanksBox= document.getElementById('thanksContainer');


function subscribe(){
    (function(){
        emailjs.init("UHgmnmTmrxWzZjWGk");
     })();

     var param={
        to: document.getElementById("mail").value,
        from: "Harsh Newsletter Project",
        replyto : "noreply@gmail.com",
        subject: "Newsletter Subscribed",
        message : "Congratulations!\n You're now successfully subscribed to our newsletter.\n \n Get ready to receive exclusive updates, offers, and valuable content straight to your inbox.\n \nThank you for joining us!",
     };

     var serviceID ="service_9zcpzye";
     var templateID="template_r8psrhr";

     emailjs.send(serviceID,templateID,param);

    var email=document.getElementById("mail").value;
     document.getElementById("result-email").innerHTML= email;
    formBox.style.opacity=0;
    formBox.style.visibility='hidden'
    thanksBox.style.opacity= 1;
    thanksBox.style.visibility='visible'
}

function dismiss(){
    thanksBox.style.visibility='hidden'
    formBox.style.visibility='visible'
    formBox.style.opacity=1;
    thanksBox.style.opacity= 0;
}
