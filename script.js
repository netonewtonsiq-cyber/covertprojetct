const amount = document.getElementById("amount") //está pegando a tag input do html pelo ID dela que é amount

//Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
     
    //console.log(amount.value)
})