(function() {
    var root;
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    jQuery(function() {
        $('body').on('click', '.plan-form [id^=bill_plan_]', function() {
            return $('#connect_block').show();
        });
        return $('body').on('click', 'input[name=marketing_subscription]', function(e) {
            var el;
            el = $(e.currentTarget);
            if (el.is(':checked')) {
                return $('.MarketingCollection').show();
            } else {
                return $('.MarketingCollection').hide();
            }
        });
    });
}).call(this);
