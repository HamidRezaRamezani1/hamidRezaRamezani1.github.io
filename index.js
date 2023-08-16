let calc = document.querySelector('.btn-calc');

calc.addEventListener('click',function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('.height').value);
    let weight = parseInt(document.querySelector('.weight').value);
    let results = document.querySelector('.results');
    let massage = document.querySelector('.massage');
    

    if ((height === '') || (height < 0) || (isNaN(height))) {
        results.innerHTML = "لطفا قد خود را وارد نمایید";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "لطفا وزن خود را وارد نمایید";
    } else {
        let bmi = (weight / ((height * height)/10000 )).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.5) {
            massage.textContent = "  کمبود وزن دارید";
            massage.classList.remove('text-success')
            massage.classList.remove('text-warning')
            massage.classList.remove('text-danger')
            massage.classList.add('text-info')
            

            
        } else if (bmi > 18.5 && bmi < 24.9) {
            massage.textContent = "وزن شما نرمال است";
            massage.classList.remove('text-info')
            massage.classList.remove('text-warning')
            massage.classList.remove('text-danger')
            massage.classList.add('text-success')

        } else if (bmi >= 24.9 && bmi < 29.9) {
            massage.textContent =" شما در مرز اضافه وزن هستید";
            massage.classList.remove('text-info')
            massage.classList.remove('text-success')
            massage.classList.remove('text-danger')
            massage.classList.add('text-warning')

        } else if(bmi >= 30) {
            massage.textContent =" شما چاق هستید";
            massage.classList.remove('text-info')
            massage.classList.remove('text-success')
            massage.classList.remove('text-warning')
            massage.classList.add('text-danger')
            
        }
    }

});