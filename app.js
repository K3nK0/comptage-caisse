const inputsQuantite = document.querySelectorAll('.quantity-cashregister');
const totalCashregister = Array.from(document.querySelectorAll('.total-cashregister'));
const totalSafe = Array.from(document.querySelectorAll('.total-safe'))


inputsQuantite.forEach(input => {
  input.addEventListener('input', (e) => {
    const quantite = parseFloat(e.target.value);
    if (isNaN(quantite)) {
        return;
      }
    const tr = e.target.parentNode.parentNode;
    const prixUnitaire = parseFloat(tr.querySelector('.value-cashregister').textContent);
    const total = (prixUnitaire * quantite).toFixed(2);
    tr.querySelector('.total-cashregister').textContent = `${total}€`;

    const totalGeneral = totalCashregister.reduce((acc, total) => {
      return acc + parseFloat(total.textContent.slice(0, -1));
    }, 0);
    document.querySelector('#cash-fund').textContent = `${totalGeneral.toFixed(2)}€`;
    })
})

const inputsQteSafe = document.querySelectorAll('.quantity-safe')

inputsQteSafe.forEach(input => {
    input.addEventListener('input', (e) => {
        const quantity = parseFloat(e.target.value);
        const tr = e.target.parentNode.parentNode;
        const value = parseFloat(tr.querySelector('.value-safe').textContent);
        const total = (value * quantity).toFixed(2);
        tr.querySelector('.total-safe').textContent = `${total}€`;

        const totalsSafe = totalSafe.reduce((acc, total) => {
            return acc + parseFloat(total.textContent.slice(0, -1));
        }, 0);
        document.getElementById('total-safe-bank').textContent = `${totalsSafe.toFixed(2)}€`;
    })
})


buttonPrint = document.getElementById('print-button')

buttonPrint.addEventListener('click', function() {
  window.print()
})