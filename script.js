var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");
var bookContainer = [];

if (localStorage.getItem("books") != null) {
    bookContainer = JSON.parse(localStorage.getItem("books"));
    displayBook();

}

function addBook() {
    event.preventDefault();
    var book = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value
    }
    if (siteNameInput.value === "" || siteUrlInput.value === "") {
        alert("Please fill in the form");
    }
    else {
        bookContainer.push(book);
        localStorage.setItem("books", JSON.stringify(bookContainer));
        displayBook();
    }
    console.log(book);
}

function displayBook() {
    var cartona = "";
    for (var i = 0; i < bookContainer.length; i++) {
        cartona += `<tr>
        <td> ${i + 1}</td>
        <td>${bookContainer[i].siteName}</td>
        <td><a href="https://${bookContainer[i].siteUrl}" target="_blank" class="btn btn-primary"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartona;
}

function deleteProduct(index) {
    bookContainer.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookContainer));
    displayBook();
}