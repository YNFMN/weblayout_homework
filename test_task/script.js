$(document).ready(function() {

	//RADIO BUTTON

	$.each($('.radio-fieldset__item'), function(index, val) {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('radio-fieldset__item-active');
		};
	});
	$(document).on('click', '.radio-fieldset__item', function(event) {
		$(this).parents('.radio-fieldset__list').find('.radio-fieldset__item').removeClass('radio-fieldset__item-active');
		$(this).parents('.radio-fieldset__list').find('.radio-fieldset__item input').prop('checked',false);
		$(this).toggleClass('radio-fieldset__item-active');
		$(this).find('input').prop('checked',true);
		return false;
	});

	//CHECKBOX

	$.each($('.registration__checkbox-custom'), function(index, val) {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('registration__checkbox-custom-active');
		};
	});
	$(document).on('click', '.registration__checkbox-custom', function(event) {
		if($(this).hasClass('registration__checkbox-custom-active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('registration__checkbox-custom-active');

		return false;
	});
});
