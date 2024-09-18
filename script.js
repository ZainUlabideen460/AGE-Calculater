
function calculateAge(){
    const dobinput=document.getElementById('dob').value;
    const dob=new Date(dobinput);
    const today=new Date();
    if(isNaN(dob.getTime()))
    {
        document.getElementById('result').textContent='Please enter a valid date.';
        return;
    }
    let age=today.getFullYear()-dob.getFullYear();
    const monthdifference=today.getMonth()-dob.getMonth();

    if(monthdifference <0 || (monthdifference === 0 && today.getDate()<dob.getDate())){
        age--;}
        document.getElementById('result').textContent=`You are ${age} years old.`;

}