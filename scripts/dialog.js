const saveDialog = document.querySelector('#save-dialog');
const saveButton = document.querySelector('.save-button');
const closeButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', () => saveDialog.showModal());
closeButton.addEventListener('click', () => saveDialog.close());
