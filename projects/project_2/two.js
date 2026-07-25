const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const Height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const ans_box = document.querySelector('#ans_box');
    if (isNaN(Height) || Height <= 0) {
        ans_box.innerHTML = `Please give a valid height and width. ${Height} is invalid.`;
    } 
    else if (isNaN(weight) || weight <= 0) {
        ans_box.innerHTML = `Please give a valid height and weight. ${weight} is invalid.`;
    } 
    else{
        const bmi = (weight / ((Height * Height) / 10000)).toFixed(2);
        if(bmi < 18.6){
            ans_box.innerHTML = `<span> Your BMI is: ${bmi} you are Under weight eat some food </span> `;
        }
        else if(bmi>18.6 & bmi<24.9){
             ans_box.innerHTML = `<span> Your BMI is: ${bmi} Congrats  you are healthy </span> `;
        }
        else if(bmi>24.9){
            ans_box.innerHTML = `<span> Your BMI is: ${bmi} you are over weight bro do somethings </span> `;
        }
    }
});