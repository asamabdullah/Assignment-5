document.getElementById('history-btn')
.addEventListener('click' , function(event){
    event.preventDefault();



    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');


    document.getElementById('add-money-btn').classList.remove('bg-[#B4F461]');

    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
})




document.getElementById('add-money-btn')
.addEventListener('click' , function(event){
    event.preventDefault();



    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById('add-money-form').classList.remove('hidden');



    document.getElementById('add-money-btn').classList.add('bg-[#B4F461]');

    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
  
})








document.getElementById('history-btn')
.addEventListener('click' , function(event){
    event.preventDefault();



    document.getElementById('foot').classList.add('hidden');

})



document.getElementById('add-money-btn')
.addEventListener('click' , function(event){
    event.preventDefault();

    document.getElementById('foot').classList.remove('hidden');

})