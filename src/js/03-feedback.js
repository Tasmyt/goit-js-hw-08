import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formData = {};
const form = document.querySelector('.feedback-form');

populateData();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('FEEDBACK_FORM_STATE', JSON.stringify(formData));
}

function populateData() {
  const savedMessage = JSON.parse(
    localStorage.getItem('FEEDBACK_FORM_STATE', formData)
  );

  if (savedMessage) {
    form.email.value = savedMessage.email;
    form.message.value = savedMessage.message;
  }
}

function onSubmit(evt) {
  console.log({ email: form.email.value, message: form.message.value });
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('FEEDBACK_FORM_STATE');
}
