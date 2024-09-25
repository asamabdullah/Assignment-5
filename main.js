function handleDonation(buttonId, inputId, valueId, modalId, sectionId) {
    document.getElementById(buttonId).addEventListener('click', function(event) {
        event.preventDefault();

        const inputValue = document.getElementById(inputId).value;
        const inputNum = parseFloat(inputValue);
        
        const currentValue = document.getElementById(valueId).innerText;
        let currentValueNum = parseFloat(currentValue);
        
        const bal = document.getElementById('balance').innerText; 
        const balNum = parseFloat(bal);

      
        if (isNaN(inputNum) || inputNum <= 0 || balNum < inputNum) {
            alert('Invalid input');
            document.getElementById(valueId).innerText = 0; 
        } else {
 
            document.getElementById(valueId).innerText = currentValueNum + inputNum;
            document.getElementById('balance').innerText = balNum - inputNum;


            const sectionH1 = document.getElementById(sectionId).innerText;
            const now = new Date();
            const dateString = now.toString();

            const list = document.getElementById('cash-out-form'); 
            const li = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');

            h1.innerText = `${inputNum} Taka is donated for ${sectionH1}`;
            p.innerText = `Date: ${dateString}`;

            list.appendChild(li);
            li.appendChild(h1);
            li.appendChild(p);

 
            document.getElementById(inputId).value = '';

            document.getElementById(modalId).checked = true; 
        }
    });
}


handleDonation('btn1', 'inp', 'fv', 'my_modal_1', 'sec1-h1');
handleDonation('btn2', 'inp2', 'sv', 'my_modal_2', 'sec2-h1');
handleDonation('btn3', 'inp3', 'tv', 'my_modal_3', 'sec3-h1');








document.getElementById('blog')
.addEventListener('click' , function(event){
    event.preventDefault();


    window.location.href = './blog.html'

})