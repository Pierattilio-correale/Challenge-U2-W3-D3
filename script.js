const getBoocks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("yee", response);
        return response.json();
      } else {
        throw new Error("il server non ha risposto correttamente");
      }
    })
    .then((data) => {
      console.log("data", data);
      // riga
      const myRow = document.getElementById("mybigrow");
      myRow.innerHTML = "";
      data.forEach((book) => {
        myRow.innerHTML += `<div class="col  col-lg-3 text-center my-4 d-flex align-items-stretch">
            <div class="card w-100" >
              <img src="${book.img}" class="card-img-top " alt="Copertina di ${book.title}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title flex-grow-1 mt-4">${book.title}</h5>
                <p class="card-text">${book.price}€</p>
                <div class="d-flex  ">
                <a href="#" class="btn btn-danger mt-auto removecard mx-xxl-4  " >Remove</a>
                <a href="#" class="btn btn-primary mt-auto ms-1 ms-xl-2 mx-xxl-3 buycard " >Buy Now</a>
                  </div>
              </div>
            </div>
          </div> `;
        const myButtonA = document.querySelectorAll(".removecard");
        myButtonA.forEach((btn, i) => {
          btn.addEventListener("click", function () {
            const myCard = document.querySelectorAll(".card");
            myCard[i].classList.add("autodis");
          });
        });
      });
      //   costruzione carrello
      //   const myRow2 = document.getElementById("mybigrow2");

      //   myRow2.innerHTML = "";
      //   data.forEach((book) => {
      //     myRow2.innerHTML += `<div class="col  col-12 text-center my-4 d-flex align-items-stretch d-none coldelete" >
      //         <div class="card  w-100 " >
      //           <img src="${book.img}" class="card-img-top " alt="Copertina di ${book.title}">
      //           <div class="card-body d-flex flex-column">
      //             <h5 class="card-title flex-grow-1 mt-4">${book.title}</h5>
      //             <p class="card-text">${book.price}€</p>
      //             <div class="d-flex  ">

      //             <a href="#" class="btn btn-primary mt-auto ms-1 ms-xl-2 mx-xxl-3 buycard " >rip card</a>
      //               </div>
      //           </div>
      //         </div>
      //       </div> `;
      //     const myButtonB = document.querySelectorAll(".buycard");
      //     myButtonB.forEach((btn, i) => {
      //       btn.addEventListener("click", function () {
      //         const carrello = document.querySelectorAll(".coldelete");
      //         carrello[i].classList.remove("d-none");
      //       });
      //     });
      //   });
    })
    .catch((err) => {
      console.log("errore", err);
    });
};

getBoocks();
