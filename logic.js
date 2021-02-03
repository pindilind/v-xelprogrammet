
function countBtn() {
    let price = document.getElementById("price").value
    let sum = document.getElementById("sum").value

    price = parseFloat(price)
    sum = parseFloat(sum)
    console.log(price, sum)

    let change = sum - price 
    let result = "du ska få tillbaka \n"
    
    
    if(change < 0) {
        result = "du får inte handla något"
    } else if(Number.isNaN(change)) {
        result = "både pris och summa måste anges"
    } else {
        let numberOf = change / 1000
        numberOf = Math.floor(numberOf)

        if(numberOf > 0) {
            result = result + numberOf + " tusenlappar \n"
            change = change - numberOf * 1000
        } 

        numberOf = change / 500
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " femhundralappar \n"
            change = change - numberOf * 500
        } 

        numberOf = change / 200
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " tvåhundralappar \n"
            change = change - numberOf * 200
        } 

        numberOf = change / 100
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " hundralappar \n"
            change = change - numberOf * 100
        } 

        numberOf = change / 50
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " femtiolappar \n"
            change = change - numberOf * 50
        } 
        

        numberOf = change / 20
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " tjugolappar \n"
            change = change - numberOf * 20
        } 

        numberOf = change / 10
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " tiokronor \n"
            change = change - numberOf * 10
        } 

        numberOf = change / 5
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " femkronor \n"
            change = change - numberOf * 5
        } 

        numberOf = change / 2
        numberOf = Math.floor(numberOf)
        
        if(numberOf > 0) {
            result = result + numberOf + " tvåkronor \n"
            change = change - numberOf * 2
        } 

    
        numberOf = Math.floor(change)
        
        if(numberOf > 0) {
            result = result + numberOf + " enkronor \n"
            change = change - numberOf * 1
        } 

        console.log(numberOf)
    }
    
    console.log(result)
    alert(result)
}