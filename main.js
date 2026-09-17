onload = () =>{
    document.body.classList.remove("container");
};

onload = () => {
  document.body.classList.remove("container");

  // Hacer aparecer el botón "Sorpresa" tras 15 segundos (15000 ms)
  setTimeout(() => {
    const contenedorSorpresa = document.getElementById("container-sorpresa");
    if (contenedorSorpresa) {
      contenedorSorpresa.style.display = "block";
    }
  }, 15000);
};