

(function(){
    var form = document.getElementById('si_calculator'),
    range_input = document.getElementById('rate');

    range_input.addEventListener('mouseup', function(e){
        this.nextElementSibling.innerHTML = this.value + '%';
    })
    range_input.addEventListener('change', function(e){
        this.nextElementSibling.innerHTML = this.value + '%';
    })
    range_input.nextElementSibling.innerHTML = range_input.value + '%';

    form.addEventListener('submit', function(e){
        e.preventDefault();
        compute();
    })
    function toFixed(num) {
        return num%1 === 0 ? num : Number(num).toFixed(2)
    }
    function compute()
    {
        var p = document.getElementById("principal").value,
        rate = document.getElementById("rate").value,
        years = document.getElementById("years").value;

        var current_year = (new Date()).getFullYear(); 

        var si = p*rate*Number(years)/100;
        var str = "If you deposit <span class='highlight'>" + p + '</span><br/>' + "at an interest rate of <span class='highlight'>" + rate + "%.</span>" + '<br/>' + "You will receive an amount of <span class='highlight'>" + toFixed(si) + "</span>," + '<br/>' + "in the year <span class='highlight'>" + (Number(current_year) + Number(years)) + "</span>";
        document.querySelector('.result > p').innerHTML = str;
        
    }
})()
        