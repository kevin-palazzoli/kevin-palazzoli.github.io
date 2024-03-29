// variables
const profile = document.querySelector('#profile');
const username = document.querySelector('#username');
const street = document.querySelector('#street');
const streetTwo = document.querySelector('#streetTwo');
const nationality = document.querySelector('#nationality');
const gmail = document.querySelector('#gmail');
const mobile = document.querySelector('#mobile');
//---------------------------- ----------------------------//
const hideSwitch = document.querySelector('#hide');
const hideTwoSwitch = document.querySelector('#hideTwo');
const showSwitch = document.querySelector('#show');
const btnSwitch = document.querySelector('#switch');

const users = async () => {
    const url = 'https://randomuser.me/api/?gender=female';
    const reply = await fetch(url);
    const { results } = await reply.json();
    const datos = results[0];

    profile.src = datos.picture.large;
    profile.alt = 'profile';
    username.textContent = datos.name.first;
    nationality.textContent = datos.nat;
    street.textContent = datos.location.street.name;
    streetTwo.textContent = datos.location.street.number;
    mobile.href = `tel:${datos.phone}`;
    gmail.href = `mailto:${datos.email}`;
}

// evento
document.addEventListener('DOMContentLoaded', users);

// modo blanco y negro
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('white');
  btnSwitch.classList.toggle('active');

  if(document.body.classList.contains('white')) {
    localStorage.setItem('white-md', 'true');
  } else {
    localStorage.setItem('white-md', 'false');
  }
});

if(localStorage.getItem('white-md') === 'true') {
  document.body.classList.add('white');
  btnSwitch.classList.add('active');
} else {
  document.body.classList.remove('white');
  btnSwitch.classList.remove('active');
}

//---------------------------- ----------------------------//

hideSwitch.addEventListener('click', () => {
  document.body.classList.add('hide');
  document.body.classList.add('hideTwo');
});

showSwitch.addEventListener('click', () => {
  document.body.classList.remove('hide')
  document.body.classList.remove('hideTwo');
});
