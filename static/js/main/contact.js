//Phone input
$("#contact-form-phone").mask("+7(999)999-9999");

//Request on form
let subject = $(".contact-form-option:first").val();

$(".contact-form-option").click(function() {
    subject = $(this).val();
    console.log("Done");
});

$("#contact-form-button").click(function() {
    const name = $("#contact-form-name").val();
    const phone = $("#contact-form-phone").val();
    const message = $("#contact-form-message").val();
    if (name !== '' && phone !== '' && subject !== '' && message !== '')
    $.ajax({
            type:'POST',
            url: window.location.href,
            data:
            {
                csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val() ,
                name: name,
                phone: phone,
                subject: subject,
                message: message,
            },
            success : function(res, status, xhr)
             {
                 $("#contact-form-button").val("Спасибо за обращение")
             },
             fail : function(res, status, xhr)
             {
                 $("#contact-form-button").val("Произошла ошибка")
             }
        });
});
