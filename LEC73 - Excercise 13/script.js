console.log("Script is running...");

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstR
    if(views < 1000){
        viewstR = views;
    }
    else if(views > 1000000){
        viewstR = views / 1000000 + "M";
    }
    else{
        viewstR = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img
        src="${thumbnail}" alt=""/>
        <div class="duration">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} | ${viewstR} views | ${monthsOld} months old</p>
    </div>
    </div>`
    document.querySelector(".container").innerHTML += html;
}

createCard("Kon jane kya hua bhai ham kho gaye", "Uthube", 2300000, 5, "67:09", "https://i.ytimg.com/an_webp/7tH_DvFj_Mk/mqdefault_6s.webp?du=3000&sqp=CKr37q0G&rs=AOn4CLCkAVVWE_I9T0Vb08RHq9Ln2gp7pg")