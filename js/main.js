
// close side navbar
function closeNav(){
    let slider= $(".sideNav nav ul").outerWidth()
    $(".sideNav").animate({left:-slider},500)


        // switch icons
        $("#close").removeClass("fa-solid fa-xmark")
        $("#close").addClass("fa-solid fa-bars")


        // links down
        $("a.link").animate({right:"500px"}, 500)
}

// event click to close and open nav
$("#close").on("click" , function(){
   
    // close slider
    if($(".sideNav").css("left")=="0px"){
        closeNav()
    }else{
        // open slider
        $(".sideNav").animate({left:"0px"},500)


        // switch icons
        $("#close").removeClass("fa-solid fa-bars")
        $("#close").addClass("fa-solid fa-xmark")


        // links up
        $("a.link").eq(0).animate({right:"0px"}, 500)
        $("a.link").eq(1).animate({right:"0px"}, 600)
        $("a.link").eq(2).animate({right:"0px"}, 700)
        $("a.link").eq(3).animate({right:"0px"}, 800)
        $("a.link").eq(4).animate({right:"0px"}, 900)
        $("a.link").eq(5).animate({right:"0px"}, 1000)
    }
    
})

closeNav()
// end side nvbar

// go to up page
const scrollUp= document.querySelector(".to-top")

    const scrollFunction = () => {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        if (scrolled > 20) {
            scrollUp.classList.remove("d-none");
        } else {
            scrollUp.classList.add("d-none");
        }

        if (windowHeight + scrolled >= bodyHeight - 20) {
            scrollUp.classList.add("d-block");
        }
    };

    window.addEventListener('scroll', scrollFunction);

    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        scrollUp.classList.add("d-none");
    });

    scrollFunction();


   
    // using api
    allResults=[];
async function getData(){

    const loading= document.querySelector(".loading")
        loading.classList.remove("d-none")
        const response =await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`, {method: "GET"});
        // console.log(response);
        const data= await response.json()
        // console.log(data);
        allResults= data.results
        console.log(allResults);
        displayData()
        loading.classList.add("d-none")
}
getData()


// display data
 

function displayData(){
    const baseUrl= `https://image.tmdb.org/t/p/w500`
    
    
    
    
    let content = "";
    for(let i=0 ; i<allResults.length; i++){
        
        content+=`
        <div class="col-md-4 position-relative">
                    <div class="card border-0 bg-transparent ">
                        <div class="img ">
                            <img src="${baseUrl+allResults[i].backdrop_path}" class="w-100 rounded-2" alt="">
                        </div>

                        <div class="layer text-white  position-absolute top-0 left-0 right-0 bottom-0 p-4">
                            <h3 class="text-center">${allResults[i].title}</h3>
                            <p >
                                ${allResults[i].overview}
                            </p>
                            <div class="bottom pt-3">
                                <p class="my-2 fw-bold">${allResults[i].release_date}</p>
                                <i class="${allResults[i].vote_average} text-warning"></i>
                                <div class="circle d-flex justify-content-center align-items-center my-2">${allResults[i].vote_count}</div>
                            </div>
                           
                        </div>
                    </div>

                    
                </div>
        `
    }
    document.getElementById("rowData").innerHTML=content;
}

// const navLinks= document.querySelectorAll(".link");
//         navLinks.forEach(theLink => {
//             theLink.addEventListener("click", () => {
//                 // document.querySelector(".active")?.classList.remove("active")
//                 // link.classList.add("active")
                
//                 this.getData(theLink.innerHTML)
                
//             });
//             // this.display= new Display()
//             this.getData("trending")
//         })

async function getAll(){
    const response= await fetch(`https://api.themoviedb.org/3/movie/{movie_id}api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    const data= await response.json()
    console.log(data);
}
getAll()









const nameInput= document.getElementById("nameInput")
const emailInput= document.getElementById("emailInput")
const phoneInput= document.getElementById("phoneInput")
const ageInput= document.getElementById("ageInput")
const passInput= document.getElementById("passInput")
const repassInput= document.getElementById("repassInput")
const submitBtn=document.querySelector(".submit")





function validName(){
    return (/^[A-Za-z][A-Za-z ]*$/).test(nameInput.value)
}

function validEmail(){
    return(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailInput.value)
}

function validPhone(){
    return(/^\+?[1-9]\d{1,14}$/).test(phoneInput.value)
}

function validAge(){
    return(/^(1[6-9]|[2-9][0-9]|100)$/).test(ageInput.value)
}

function validPass(){
    return(/^(?=.[a-zA-Z])(?=.\d)[a-zA-Z\d]{8,}$/).test(passInput.value)
}

function validRepass(){
    return(repassInput.value=passInput.value)
}

function validInputs(){
    if(
        validName() &&
        validEmail() &&
        validPhone() &&
        validAge() &&
        validPass() &&
        validRepass()
    ){
        submitBtn.style.transform= 'translateX(0)';
    }else{
        submitBtn.addEventListener('mousemove', (event) => {
    
            const mouseX = event.clientX;
        
            
            if (mouseX < window.innerWidth / 2) {
                
                submitBtn.style.transform = 'translateX(200px)';
            } else {
                
                submitBtn.style.transform = 'translateX(-200px)';
            }
        });
        
        submitBtn.addEventListener('mouseout', () => {
            
            submitBtn.style.transform = 'translateX(0)';
        });
    }

}













