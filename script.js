//Cotação de moedas do dia
const USD = 5.40
const EUR = 6.02
const GBP = 6.75
const BTC = 580000

const form = document.querySelector("form")
const amount = document.getElementById("amount") //está pegando a tag input do html pelo ID dela que é amount
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
     
    //console.log(amount.value)
})

//Captando o evento de submit no formulario
form.onsubmit = (event) => {
    event.preventDefault()
    switch(currency.value){
        case "USD" :
            convertCurrency(amount.value, USD, "US$" )
            break
        case "EUR" :
            convertCurrency(amount.value, EUR, "€" )
            break        
        case "GBP" :
            convertCurrency(amount.value, GBP, "£" )
            break
        case "BTC" :
            convertCurrency(amount.value, BTC, "₿" )
            break
    }
    //console.log(currency.value)
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        //Aplica a classe que adiciona o footer
       
       description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` //Exibe a cotação da moeda selecionada
       let total = amount * price
       
       if (isNaN(total)) {
        return alert("Por favor, digite o valor corretamente para converter!")
       }
       
       total = formatCurrencyBRL(total).replace("R$", "")
       result.textContent = (`${total} Reais`)
       footer.classList.add("show-result")

    } catch (error) {
        //Remove a classe que adiciona o footer
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível mostrar o valor. Tente novamente")
    }
}

// Formata e insere real brasileiro na string
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}


