import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const showMessage = (status, message) => {
  iziToast.show({
    title: status,
    timeout: 5000,
    position: 'center',
    message: message,
    color: status == 'Fulfilled' ? 'green' : 'red',
  });
};

const promiseForm = document.querySelector('.form');

const handleSubmit = event => {
  event.preventDefault();
};

const handleClick = event => {
  // event.preventDefault();
  const radioButtons = event.target
    .closest('form')
    .querySelectorAll('input[name="state"]');
  let state;
  radioButtons.forEach(radio => {
    if (radio.checked) {
      state = radio.value;
    }
  });
  const delay = event.target.closest('form').elements.delay.value;
  const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (state === 'fulfilled') {
      resolve(delay);
    } else {
      reject(delay);
    }
    // }, delay);
  });

  promise
    .then(delay => {
      console.log('Fulfilled', `✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      console.log('Rejected', `❌ Rejected promise in ${delay}ms`);
    });
};

promiseForm.elements.button.addEventListener('submit', handleSubmit);
promiseForm.elements.button.addEventListener('click', handleClick);
