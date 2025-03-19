const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
});

const getRemoteLibraries = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("funziona", response);
        return response.json();
      } else {
        throw new Error("ci sta un errore");
      }
    })
    .then((books) => {
      console.log(books);

      const booksContainer = document.getElementById("books-container");

      books.forEach((books) => {
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `<div class="card h-100 ">
                        <img src="${books.img}" class="card-img-top  h-100" alt="${books.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${books.title}</h5>
                            <p class="card-text">Prezzo: €${books.price}</p>
                           <div class="mt-auto d-flex justify-content-evenly">
                            <button class="btn btn-danger mt-auto" id="scarta">Scarta</button>
                            <button class="btn btn-primary mt-auto" id="aggiungi">Aggiungi</button>
                            </div>
                        </div>
                    </div>
                `;
        booksContainer.appendChild(card);
      });
      const deleteThis = document.getElementById("scarta");
      deleteThis.addEventListener("click", () => {
        card.remove();
      });
    })
    .catch((err) => {
      console.log("abbiamo un errore", err);
    });
};
getRemoteLibraries();
