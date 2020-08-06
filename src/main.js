const wrapper = document.querySelector('.slider-wrapper');
let act = document.querySelector('.slider__dot_active');
const dots = document.querySelector('.slider__dots-wrap');

document.body.addEventListener('click', scrollItems);

function scrollItems(e) {
  const element = e.target;

  if (element.classList.contains('slider__dot')) {
    const dotsList = document.querySelectorAll('.slider__dot');
    const current = [...dotsList].indexOf(act);
    const next = [...dotsList].indexOf(element);

    act.classList.remove('slider__dot_active');
    act = element;
    act.classList.add('slider__dot_active');

    wrapper.scrollBy({
      top: 0,
      left: (next - current) * 445,
    });
  }

  if (element.classList.contains('slider__btn_next')) {
    setTimeout(wrapper.scrollBy({
      top: 0,
      left: 445,
      behavior: 'smooth',
    }), 5000);

    if (act !== dots.lastElementChild) {
      act.classList.remove('slider__dot_active');
      act.nextElementSibling.classList.add('slider__dot_active');

      act = act.nextElementSibling;
    }
  }

  if (element.classList.contains('slider__btn_prev')) {
    wrapper.scrollBy({
      top: 0,
      left: -445,
    });

    if (act !== dots.firstElementChild) {
      act.classList.remove('slider__dot_active');
      act.previousElementSibling.classList.add('slider__dot_active');
      act = act.previousElementSibling;
    }
  }
}

let activeLink = document.querySelector('.nav__item_active');

const setActive = (event) => {
  const element = event.target.parentElement;

  if (!element.classList.contains('nav__item_active')
    && element.classList.contains('nav__item')) {
    activeLink.classList.remove('nav__item_active');
    activeLink = element;
    element.classList.add('nav__item_active');
  }
};

document.body.addEventListener('click', setActive);
