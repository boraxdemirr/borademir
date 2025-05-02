document.addEventListener("DOMContentLoaded",function () {
    const btn = document.querySelector(".btn");
    const singer = document.querySelector(".sng");
   
    btn.addEventListener("click", () => {
        const sngvalue = singer.value;
        alert(sngvalue)
    })
})