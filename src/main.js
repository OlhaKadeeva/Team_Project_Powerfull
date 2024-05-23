(() => {
  const refs = {
    // menu burger
    // Додати атрибут на кнопку відкриття
    openMenuBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут на кнопку закриття
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут на бекдроп
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
