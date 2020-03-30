/* function addDndHandlers(){

    var coffeeimages = document.getElementsByClassName("productarticlewide");

    var shoppingCartDropzone = document.getElementById("shoppingcart");
    var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    } 

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.preventDataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        var html = id + " " + item.getAttribute("data-price");

        var liElement = document.createAttribute('li');
        liElement.innerHTML = html;
        shoppingcart.appendChild(liElement);
    }
} */

//  This is the corrected code //

let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  };
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  });
  
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }
  

dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files

  handleFiles(files)
}


// function uploadFile(file) {
//     let url = 'YOUR URL HERE'
//     let formData = new FormData()
  
//     formData.append('file', file)
  
//     fetch(url, {
//       method: 'POST',
//       body: formData
//     })
//     .then(() => { /* Done. Inform the user */ })
//     .catch(() => { /* Error. Inform the user */ })
//   }

  
//   function uploadFile(file) {
//     var url = 'YOUR URL HERE'
//     var xhr = new XMLHttpRequest()
//     var formData = new FormData()
//     xhr.open('POST', url, true)
  
//     xhr.addEventListener('readystatechange', function(e) {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         // Done. Inform the user
//       }
//       else if (xhr.readyState == 4 && xhr.status != 200) {
//         // Error. Inform the user
//       }
//     })
  
//     formData.append('file', file)
//     xhr.send(formData)
//   }
  

  function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.src = reader.result
      document.getElementById('gallery').appendChild(img)
    }
  }
  
//   function handleFiles(files) {
//     files = [...files]
//     files.forEach(uploadFile)
//     files.forEach(previewFile)
//   }

  
let filesDone = 0
let filesToDo = 0
let progressBar = document.getElementById('progress-bar')


function initializeProgress(numFiles) {
    progressBar.value = 0
    uploadProgress = []
  
    for(let i = numFiles; i > 0; i--) {
      uploadProgress.push(0)
    }
  }
  
  function updateProgress(fileNumber, percent) {
    uploadProgress[fileNumber] = percent
    let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
    progressBar.value = total
  }

  
  function handleFiles(files) {
    files = [...files]
    initializeProgress(files.length) // <- Add this line
    files.forEach(uploadFile)
    files.forEach(previewFile)
  }
  
  function uploadFile(file, i) { // <- Add `i` parameter
  var url = 'YOUR URL HERE'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)

  // Add following event listener
  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
  })

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Done. Inform the user
    }
    else if (xhr.readyState == 4 && xhr.status != 200) {
      // Error. Inform the user
    }
  })

  formData.append('file', file)
  xhr.send(formData)
}
  
  let uploadProgress = []


  




