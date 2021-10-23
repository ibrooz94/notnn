function navToggle(){
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".menu-items");
    // const menuBtn = document.querySelector(".menu-icon");
    const form = document.querySelector(".form");

    menuBtn.onclick = ()=> {
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show"); 
    }
    cancelBtn.onclick = ()=> {
        cancelBtn.style.color = "red";
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show"); 
        form.classList.remove("active")
    }
    searchBtn.onclick = ()=> {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show"); 
    }
}