/* global redux_change, wp */

jQuery(document).ready(function () {

    jQuery('.kad-redux-icons-remove').live('click', function () {
        redux_change(jQuery(this));
        jQuery(this).parent().siblings().find('input[type="text"]').val('');
        jQuery(this).parent().siblings().find('input[type="hidden"]').val('');
        jQuery(this).parent().siblings().find('textarea').val('');
        jQuery(this).parent().siblings().find('select').val('');

        var slideCount = jQuery(this).parents('.redux-container-kad_icons:first').find('.redux-slides-accordion-group').length;

        if (slideCount > 1) {
            jQuery(this).parents('.redux-slides-accordion-group:first').slideUp('medium', function () {
                jQuery(this).remove();
            });
        } else {
            jQuery(this).parents('.redux-slides-accordion-group:first').find('.remove-image').click();
            jQuery(this).parents('.redux-container-kad_icons:first').find('.redux-slides-accordion-group:last').find('.redux-slides-header').text("New Slide");
        }
    });

    jQuery('.kad-redux-icons-add').click(function () {

        var newSlide = jQuery(this).prev().find('.redux-slides-accordion-group:last').clone(true);
        var slideCount = jQuery(newSlide).find('.redux-multi-text input[type="text"]').attr("name").match(/\d+/);
        var slideCount1 = slideCount*1 + 1;

        jQuery(newSlide).find('.redux-multi-text input[type="text"], input[type="hidden"], select, textarea').each(function(){

            jQuery(this).attr("name", jQuery(this).attr("name").replace(/\d+/, slideCount1) ).attr("id", jQuery(this).attr("id").replace(/\d+/, slideCount1) );
            jQuery(this).val('');
            if (jQuery(this).hasClass('slide-sort')){
                jQuery(this).val(slideCount1);
            }
        });

        jQuery(newSlide).find('.screenshot').removeAttr('style');
        jQuery(newSlide).find('.screenshot').addClass('hide');
        jQuery(newSlide).find('.screenshot a').attr('href', '');
        jQuery(newSlide).find('.remove-image').addClass('hide');
        jQuery(newSlide).find('div.select2-container').remove();
         jQuery(newSlide).find('.font-icons option').removeAttr('selected');
        jQuery(newSlide).find('.redux-slides-image').attr('src', '').removeAttr('id');
        jQuery(newSlide).find('h3').text('').append('<span class="redux-slides-header">New Icon</span><span class="ui-accordion-header-icon ui-icon ui-icon-plus"></span>');
        
        
        jQuery(this).prev().append(newSlide);
        function addIconToSelect(icon) {
                if ( icon.hasOwnProperty( 'id' ) ) {
                    return "<span class='elusive'><i class='" + icon.id + "'></i>" + " " + icon.id + "</span>";
                }
            }
        jQuery('select.font-icons').select2({
                            formatResult: addIconToSelect,
                            formatSelection: addIconToSelect,
                            width: '340px',
                            triggerChange: true,
                            allowClear: true,
                        });
        jQuery('select.font-icons').attr('style', 'display:none');
       
    });

    jQuery('.slide-title').keyup(function(event) {
        var newTitle = event.target.value;
        jQuery(this).parents().eq(3).find('.redux-slides-header').text(newTitle);
    });

    jQuery(function () {
        jQuery(".redux-slides-accordion")
            .accordion({
                header: "> div > fieldset > h3",
                collapsible: true,
                active: false,
                heightStyle: "content",
                icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
            })
            .sortable({
                axis: "y",
                handle: "h3",
                connectWith: ".redux-slides-accordion",
                start: function(e, ui) {
                    ui.placeholder.height(ui.item.height());
                    ui.placeholder.width(ui.item.width());
                },
                placeholder: "ui-state-highlight",
                stop: function (event, ui) {
                    // IE doesn't register the blur when sorting
                    // so trigger focusout handlers to remove .ui-state-focus
                    ui.item.children("h3").triggerHandler("focusout");
                    var inputs = jQuery('input.slide-sort');
                    inputs.each(function(idx) {
                        jQuery(this).val(idx);
                    });
                }
            });
    });

});