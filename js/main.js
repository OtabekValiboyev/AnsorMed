const elSitenavButton = document.querySelector('.js-sitenav-menu');
const elSitenavOpen = document.querySelector('.sitenav');

if (elSitenavButton) {
  elSitenavButton.addEventListener('click', function () {
    elSitenavOpen.classList.toggle('sitenav--open');
  });
};