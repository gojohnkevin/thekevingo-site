$(function(){
    $('#LeftNav a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('Active').siblings('.Active').removeClass('Active');
    });

	$('#TopTab li a').click(function(e){
		e.preventDefault();
		$(this).parent().addClass('Active').siblings('.Active').removeClass('Active');
	});

	$('#FlightNav li a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('Active').siblings('.Active').removeClass('Active');
    });
});

$(document).ready(function(){
    $("#TopTab ul > li:last-child a").addClass("last");
    $("#BottomeListing ul > li:last-child a").addClass("last");
    if ($('#opt_out1').val()) {
        hideSubmits();
        $('#wirelessfirst_email_address').bind('input propertychange', function() {
            $('#output').html($(this).val());
            var show_buttons = false;
            if ($(this).val()) {
                if ($(this).val().length > 0 && valid_email($(this).val())) show_buttons = true;

            }

            if (show_buttons === true) showSubmits();
            else hideSubmits();
        });
    }

    $('#send_voucher_sms').click(function(){
        if ($('#voucher_info_country').val().length != 2){
            $('.error_number').hide();
            $('.error_country').show();
            return false;
        }
        else if (!(valid_number($('#voucher_phone_number').val()))){
            $('.error_country').hide();
            $('.error_number').show();
            return false;
        }
        else {
            $('.voucher_sms').hide();
            $('.voucher_sms_status').show();
            $('.error_number').hide();
            $('.error_country').hide();
            $.ajax({
                url: document.getElementById('voucher_form').action,
                type: "POST",
                data: { js : '1',
                        voucher_phone_number : $('#voucher_phone_number').val(),
                        voucher_info_country : $('#voucher_info_country').val(),
                        sms_voucher : '1' },
                dataType: "html"
            });
        }
    });
    $('.voucher_sms_status').hide();
    $('#resend_sms').click(function(){
                $('.voucher_sms').show();
                $('.voucher_sms_status').hide();
                $('.error_number').hide();
                $('.error_country').hide();
    });
});

function hideSubmits() {
    $('#billplan_btn').hide();
}

function valid_number(phone_number) {
   return phone_number.match(/^[0-9]+$/);
}

function valid_email(email) {
   return email.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);
}

function showSubmits() {
    $('#billplan_btn').show();
}
