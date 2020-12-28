const liao = document.querySelector('.liao');
liao.addEventListener('click', function (event) {
  const shouldChangePage = window.confirm(
    'This site may be malicious. Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
});

const signUpForm = document.querySelector('[name="signup"]');
signUpForm.addEventListener('submit', function (event) {
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('Chad')) {
    alert('sorry bro!');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}
signUpForm.name.addEventListener('keyup', logEvent);

const photo = document.querySelector('.photo');
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('Make the photo accessible!');
  }
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
