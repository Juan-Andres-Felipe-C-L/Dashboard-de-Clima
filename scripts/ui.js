export function searchElements(callback) {
    const buscarBtn = document. getElementById("buscar-btn");
    buscarBtn.addEventListener("click",  () => {
        const input = document.getElementById("ciudad-input");
        const ciudad = input.value;
        callback(ciudad);
    });
}