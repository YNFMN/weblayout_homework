$( function() {
	$( "#accordion" ).accordion({
		collapsible: true,
    active: false,
    heightStyle: "content",
    classes: {
      "ui-accordion" : "faq__list",
      "ui-accordion-header" : "faq__subtitle",
      "ui-accordion-header-icon" : "faq__span",
      "ui-accordion-content" : "faq__container",
    }
	});
});
