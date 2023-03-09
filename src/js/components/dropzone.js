// Кастомный инпут файла

const inputFiles = document.querySelectorAll('.main-file-input input[type=file]')

if (inputFiles) {
  inputFiles.forEach(fileInput => {
    fileInput.addEventListener('change', (e) => {
      const fileName = e.target.files[0].name
      const fileTextWrapper = e.target.closest('.main-file-input').querySelector('.main-file-input__text-wrapper')
      const fileText = fileTextWrapper.querySelector('.main-file-input__text')
      const fileDeleteBtn = fileTextWrapper.querySelector('.main-file-input__delete-btn')

      fileText.textContent = fileName
      fileTextWrapper.classList.add('_file-active')

      if (fileDeleteBtn) {
        fileDeleteBtn.addEventListener('click', (e) => {
          fileTextWrapper.classList.remove('_file-active')
          fileText.textContent = 'Выбрать файл'
          e.currentTarget.value = ''
        })
      }
    })
  })
}

