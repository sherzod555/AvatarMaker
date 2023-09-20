//    "https://ui-avatars.com/api/?name=John+Doe"


const $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

const subBtn = $_(".sub_btn");
const avatarWrapper = $_(".avatar_wrapper");

subBtn.addEventListener("click", () => {
  const nameInput = $_(".name");
  const surnameInput = $_(".surname");
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();

  

  if (name && surname) {
    const initials = name[0].toUpperCase() + surname[0].toUpperCase();
    
    const avatar = document.createElement("img");
    avatar.src = `https://ui-avatars.com/api/?name=${initials}`;

    avatarWrapper.innerHTML = ''; 
    avatarWrapper.appendChild(avatar);    
  }

});
