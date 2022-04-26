const form = document.querySelector('#formId');
const formSuccess = document.querySelector('p')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const profile = {};
  const children = event.target.children;
  for (let child of children) {
    if (child.localName === "input") {
      profile[child.name] = child.value
    }
  }
  if (confirm(`name: ${profile.username}
     age: ${profile.age}
     email: ${profile.email}`)) {
      formSuccess.innerText = 'congratulations you successfully sent this form'
      console.log(profile)
     }
});


