//Question 3 - if...else 

function BolatitoGroup(classgroup) {

 if (classgroup == 'Science') {

    console.log('English, Mathematics,Physics, Chemistry, Biology, Technical Drawing');
 } else if(classgroup == 'SocialScience') {
    console.log('English, Mathematics, Government, Economics, Literature, History');
    
 } else if(classgroup == 'Arts'){
    console.log('English, Mathematics, Government, Economics, Literature, History');

 } else if(classgroup == 'GeneralSubjects') {
    console.log('English, Mathematics');

}else {
  console.log('English, Mathematics')
}

}
BolatitoGroup ('Arts');



//Question 5

function findNearestPowerOf2(num) {
    let pwr = Math.pow(2, Math.round(Math.log2(num)));
    if (Math.abs(num - pwr) > Math.abs(num - 2 * pwr)) {
      pwr *= 2;
    }
    return pwr;
  }
  
  let num = 40;
  let pwr = findNearestPowerOf2(num);
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  
  num = 50;
  pwr = findNearestPowerOf2(num);
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);