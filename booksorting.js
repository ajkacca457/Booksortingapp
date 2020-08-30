//book constructor for book object

function bookinfo (title,author,isbn) {

  this.title=title,
  this.author=author,
  this.isbn=isbn
}

//UI constructor
function UI() {}

UI.prototype.addnewbook= function(newbook) {
const tbody=document.querySelector("#booklist");
const row=document.createElement("tr");
row.innerHTML= `
  <td>${newbook.title}</td>
  <td>${newbook.author}</td>
  <td>${newbook.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
tbody.appendChild(row);
}

UI.prototype.clearfield=function() {
  document.querySelector("#bookname").value="",
    document.querySelector("#Author").value="",
      document.querySelector("#isbn").value=""
}

UI.prototype.showerror=function(message,classname) {

    const div= document.createElement("div");
    div.className=`alert ${classname}`;
    const container=document.querySelector(".container");
    const form=document.querySelector("#inform");
    div.appendChild(document.createTextNode(message));

    container.insertBefore(div,form);

    setTimeout(function(){
      document.querySelector(".alert").remove();
    }, 3000)

}

UI.prototype.deleteitem=function(target){
if (target.className==="delete") {
  target.parentElement.parentElement.remove();
}
}

//
const form =document.querySelector("#inform");

form.addEventListener("submit", bookvalue)

function bookvalue(e) {
const book=document.querySelector("#bookname").value,
      author=document.querySelector("#Author").value,
      isbn=document.querySelector("#isbn").value

const newbook= new bookinfo(book,author,isbn)
const ui = new UI();

if (book===""|| author==="" || book==="isbn")
{
ui.showerror("Please enter all the information", "error" )
}

else {
ui.addnewbook(newbook);
ui.clearfield();
ui.showerror("Your book has been added", "success");
}

e.preventDefault();
}

const tbody=document.querySelector("#booklist");

tbody.addEventListener("click",removeitem);

function removeitem(e) {
const ui=new UI();
ui.deleteitem(e.target);
ui.showerror("Your book has been deleted","success");
e.preventDefault();

}
