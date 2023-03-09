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


























// import { Dropzone }                from 'dropzone'
// import { sendData, showInfoModal } from '../_functions'
//
// const resumeDropzone = document.querySelector('#job-request-resume')
//
// if (resumeDropzone) {
//
//     const dataObj = JSON.parse(resumeDropzone.dataset.info)
//     const {url, type, removeUrl, additional, acceptedFiles} = dataObj
//
//     const addResumeBtn = resumeDropzone.querySelector('#add-resume-doc-btn')
//
//     let docDropzone = new Dropzone(resumeDropzone, {
//       maxFilesize: 5,
//       url: url,
//       maxFiles: 1,
//       acceptedFiles: acceptedFiles,
//       clickable: addResumeBtn,
//       addRemoveLinks: true,
//       createImageThumbnails: false,
//       removedfile: async function (file) {
//         const data = {
//           filetype: type,
//           id_person_resume: file._removeLink.dataset.id,
//         }
//
//         const jsonData = JSON.stringify(data)
//         const response = await sendData(jsonData, removeUrl)
//         const finishedResponse = await response.json()
//
//         const {status, errortext} = finishedResponse
//
//         if (status === 'ok') {
//           if (file.previewElement != null && file.previewElement.parentNode != null) {
//             addResumeBtn.classList.remove('hidden')
//             file.previewElement.parentNode.removeChild(file.previewElement)
//           }
//         } else {
//           showInfoModal(errortext)
//         }
//       }
//     })
//
//     docDropzone.on("sending", function (file, xhr, formData) {
//       formData.append("filetype", type)
//       formData.append("id_item", addResumeBtn.dataset.id)
//       formData.append("additional", additional)
//     })
//
//     docDropzone.on("error", function (file) {
//       showInfoModal('Ошибка 404')
//       file.previewElement.parentNode.removeChild(file.previewElement)
//     })
//
//     docDropzone.on("success", function (file, response) {
//
//       const resObj = JSON.parse(response)
//       const {status, errortext, id_person_resume} = resObj
//
//       if (status !== 'ok') {
//         showInfoModal(errortext)
//         file.previewElement.parentNode.removeChild(file.previewElement)
//       } else {
//         addResumeBtn.classList.add('hidden')
//         file._removeLink.setAttribute('data-id', id_person_resume)
//       }
//     })
//
//
//     const existingResume = resumeDropzone.querySelectorAll('.dz-preview')
//     if (existingResume.length > 0) {
//       addResumeBtn.classList.add('btn_disabled')
//       existingResume.forEach(el => {
//         const deleteBtn = el.querySelector('.dz-remove')
//         deleteBtn.addEventListener('click', async (e) => {
//           const data = {
//             filetype: type,
//             id_person_resume: e.target.dataset.id
//           }
//
//           const jsonData = JSON.stringify(data)
//           const response = await sendData(jsonData, removeUrl)
//           const finishedResponse = await response.json()
//
//           const {status, errortext} = finishedResponse
//
//           if (status === 'ok') {
//             if (el.previewElement !== null) {
//               addResumeBtn.classList.remove('btn_disabled')
//               el.parentNode.removeChild(el)
//             }
//           } else {
//             showInfoModal(errortext)
//           }
//         })
//       })
//     }
// }
