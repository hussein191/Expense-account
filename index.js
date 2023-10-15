let budget = document.querySelector('.budget');
let number_Budget = document.querySelector('.number_Budget')
let budgetUser = document.querySelector('.budgetUser')
let daysUser = document.querySelector('.daysUser')
let number_days = document.querySelector('.number_days')



let Amount = document.querySelector('.Amount')
let textProduct = document.querySelector('.textProduct')
let PriceProduct = document.querySelector('.PriceProduct')
let number_Expenses = document.querySelector('.number_Expenses')
let number_balance = document.querySelector('.number_balance')
let counterPrice = 0;
let counterPland = 0;

let titel_list = document.querySelector('.listUser')
let DeletAll = document.querySelector('.DeletAll')

let counter = 0;
let elemntt = 0

budget.addEventListener('click',function(){
    if(!daysUser.value || !budgetUser.value){
        confirm('Plaes enter the value of Budget and Days...')
    }else{
        number_Budget.textContent = `${budgetUser.value}$`
        counterPland = Number(budgetUser.value) - counterPrice;
        number_balance.textContent = `${counterPland}$`;
        number_days.textContent = daysUser.value;
    }
})
    Amount.addEventListener('click',function(){
        if(!PriceProduct.value || !textProduct.value ){
            confirm('Plese enter the value of Product and price..')
        }
        else if( daysUser.value === '0'){
            confirm('Plese enter the dayes...')
        }
        else if(counter === Number(daysUser.value) && elemntt === 0  ){
            confirm('The Days ordy will');
        }
        else if ( elemntt>0){
            let gettextProdd = document.querySelectorAll('.textProd')
            let getPriceProdd = document.querySelectorAll('.PriceProd')
            for(let i =0; i<gettextProdd.length;i++){
                if(gettextProdd[i].id === elemntt ){
                    gettextProdd[i].textContent = textProduct.value
                    getPriceProdd[i].textContent = PriceProduct.value
                    counterPrice +=Number(getPriceProdd[i].textContent)
                    number_Expenses.textContent = `${counterPrice}$`
                    counterPland = Number(budgetUser.value) - counterPrice;
                    number_balance.textContent = `${counterPland}$`;
                }
            }
        }
        else if(PriceProduct.value && textProduct.value ){
            counter++;;
            counterPrice +=Number(PriceProduct.value)
            number_Expenses.textContent = `${counterPrice}$`
            counterPland = Number(budgetUser.value) - counterPrice;
            number_balance.textContent = `${counterPland}$`;
            let elment = `
            <div id=${counter}  class="min">
            <div class="min_1">
                <h2>اليوم ${counter}:</h2>
                <h2 class="textProd" id=${counter}>${textProduct.value}</h2>
            </div>
            <div class="min_2">
                <p class="PriceProd">${PriceProduct.value}</p>
                <span>$</span>
            </div>
            <div class="min_3">
            <i onclick="EditProduct(this)" id=${counter} class="uil uil-pen"></i>
            <i onclick ="deletProduct(this)" id=${counter} class="uil uil-trash"></i>
            </div>
        </div>
            `
            let creatediv = document.createElement("div");
            creatediv.innerHTML = elment
            titel_list.appendChild(creatediv)
        }
        PriceProduct.value = "";
        textProduct.value = "";
        elemntt=0;
    })
    function EditProduct(editelem){
        let getmin = document.querySelectorAll('.min')
        let gettextProd = document.querySelectorAll('.textProd')
        let getPriceProd = document.querySelectorAll('.PriceProd')
        for(let i =0; i<getmin.length;i++){
            if(editelem.id === getmin[i].id){
                    PriceProduct.value = getPriceProd[i].textContent
                    textProduct.value = gettextProd[i].textContent
                    
                    counterPrice -=Number(getPriceProd[i].textContent)
                    number_Expenses.textContent = `${counterPrice}$`
                    counterPland = Number(budgetUser.value) - counterPrice;
                    number_balance.textContent = `${counterPland}$`;
            }
        }
        elemntt = editelem.id
    }

    function deletProduct(emn){
        let getmin = document.querySelectorAll('.min')
        let getPriceProd = document.querySelectorAll('.PriceProd')
        for(let i=0; i<getmin.length;i++){
            if(emn.id === getmin[i].id){
                getmin[i].remove()
                
                counterPrice -=Number(getPriceProd[i].textContent)
                number_Expenses.textContent = `${counterPrice}$`
                counterPland = Number(budgetUser.value) - counterPrice;
                number_balance.textContent = `${counterPland}$`;
            }
        }
        counter--;
    }
    

DeletAll.addEventListener('click',function(){
    let getmin = document.querySelectorAll('.min');
    for(let i=0; i<getmin.length;i++){
        getmin[i].remove()
    }
    counter = 0;
    daysUser.value = "";
    budgetUser.value = "";
    number_Budget.textContent = 0;
    number_Expenses.textContent = 0;
    number_balance.textContent = 0;
    number_days.textContent = 0;
    counterPrice = 0;
    counterPland = 0;
})


