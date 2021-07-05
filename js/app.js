var file_drop = document.getElementById('drop_zone');
  file_drop.addEventListener(
    'dragover',
    function handleDragOver(evt) {
      evt.stopPropagation()
      evt.preventDefault()
      evt.dataTransfer.dropEffect = 'copy'
    },
    false
  )
  file_drop.addEventListener(
    'drop',
    function(evt) {
      evt.stopPropagation()
      evt.preventDefault()
      var files = evt.dataTransfer.files  // FileList object.
      var file = files[0]                 // File     object.
      alert(file.name)
    },
    false
  )


  // need to use file API to do the upload