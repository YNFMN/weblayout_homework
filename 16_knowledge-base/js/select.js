const customSelect = () => {
  const element = document.querySelector('.custom-select');
  const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
  });


  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
}

customSelect ();
