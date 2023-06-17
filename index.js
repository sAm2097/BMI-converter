const button=document.getElementById('btn')
const heightInput=document.getElementById('height')
const weightInput=document.getElementById('weight')
const result=document.getElementById('output')
button.addEventListener('click',()=>{
    const height=parseInt(heightInput.value)
    const weight=parseInt(weightInput.value)
    let height_status=false,weight_status=false
    if (height===''|| isNaN(height)||(height<=0)) {
        document.getElementById('height_error').innerHTML='Provide Height'
    }else{
        document.getElementById('height_error').innerHTML=''
        height_status=true
    }
    if (weight===''|| isNaN(weight)||(weight<=0)) {
        document.getElementById('weight_error').innerHTML='Provide Weight'
    }else{
        document.getElementById('weight_error').innerHTML=''
        weight_status=true
    }
    if (height_status&&weight_status) {
        const bmi=(weight/((height*height)/1000)).toFixed(2)
        if(bmi<14.6)
        {
            result.innerHTML='under weight'+' '+bmi
        }else if(bmi>14.6 && bmi<24.9)
        {
            result.innerHTML='normal weight'+' '+bmi
        }else{
            result.innerHTML='over weight'+' '+bmi

        }
    }
})