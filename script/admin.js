document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("popup-add");
  const authPopup = document.getElementById("popup-form-add");
  const closePopup = document.getElementById("close-popup-add");

  // Open popup
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    authPopup.classList.remove("d-none");
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    authPopup.classList.add("d-none");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("popup-edit");
  const authPopup = document.getElementById("popup-form-edit");
  const closePopup = document.getElementById("close-popup-edit");

  // Open popup
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    authPopup.classList.remove("d-none");
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    authPopup.classList.add("d-none");
  });
});

const deleteProduct = document.getElementById("delete_product");
deleteProduct.addEventListener("click", function (event) {
  confirm("Bạn có muốn xoá");
});
