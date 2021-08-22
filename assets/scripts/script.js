function setModal(btnOpenModal){
    // get modal with attribute data-modal-id on button
    let modalId = btnOpenModal.dataset.modalId
    // get div of modal 
    let modalContainer = document.getElementById(modalId);
    // Get the <span> element that closes the modal
    // let btnCloseModal = modalContainer.getElementsByClassName("close")[0];
    let btnsCloseModal = modalContainer.querySelectorAll(".modal-close");
    // open modal
    btnOpenModal.onclick = function(){
    
        modalContainer.style.display = "flex";
    }
    btnsCloseModal.forEach(btnClose => {
        // When the user clicks on <span> (x), close the modal
        btnClose.onclick = function() {
            modalContainer.style.display = "none";
        }
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(e) {
        if (e.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
}

var btnsOpenModal = document.getElementsByClassName("modal-btn");
console.log("btnsOpenModal",btnsOpenModal)
for (let i = 0; i < btnsOpenModal.length; i++) {
    setModal(btnsOpenModal[i])
}
