function tabuada() {
    let txtn = document.getElementById('txtnum')
    let res = document.getElementById('tabela')

    if (txtn.value.length == 0) {
        alert('[ERROUUU!!!] Por favor, preencha ao menos um número no campo abaixo.')
    } else {
        let num = Number(txtn.value)
        let tab = ''
        res.innerHTML = `A tabuada de <strong>${num}</strong> é:</br>`
        
        for (tab = 1; tab <= 10; tab++) {
            res.innerHTML += `<p>${num} x ${tab} = ${num * tab}</p>`
        }
    }
}