$(document).ready(function() {

	//RADIO BUTTON

	$.each($('.radio-container__item'), function(index, val) {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('radio-container__item-active');
		};
	});
	$(document).on('click', '.radio-container__item', function(event) {
		$(this).parents('.radio-container__list').find('.radio-container__item').removeClass('radio-container__item-active');
		$(this).parents('.radio-container__list').find('.radio-container__item input').prop('checked',false);
		$(this).toggleClass('radio-container__item-active');
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
