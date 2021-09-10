var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)999-99-99", { showMaskOnHover: false });
im.mask(selector);

new JustValidate('.registration', {
  rules: {
    name: {
      required: true,
      minLength: 1,
      maxLength: 20,
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
  },
  messages: {
    name: 'Как вас зовут?',
    phone:'Укажите ваш телефон',
    email: 'Укажите ваш e-mail',
  },
  colorWrong: '#ff5c00',
});
