function BMI(height, weight){
    return weight / height ** 2;
}

const a = {
    'fullname' : 'person1',
    'height': 170,
    'weight': 65 
}

const b = {
    'fullname' : 'person2',
    'height': 180,
    'weight': 60
}

if(BMI(a.height, a.weight) > BMI(b.height, b.weight)){
    console.log("BMI of person1 > person2");
}
else if(BMI(a.height, a.weight) == BMI(b.height, b.weight)){
    console.log("BMI equal");
}
else{
    console.log("BMI of person2 > person1");
}

