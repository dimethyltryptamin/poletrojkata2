getTriangleArea = (a,h) => {
 if (a <= 0 || h <= 0) {
    return 'nieprawidlowe dane';
  } else {
    return a*h/2;
  } 
}
console.log(getTriangleArea(10,6));

let triangle1Area = getTriangleArea(10,16);
let triangle1Area = getTriangleArea(4,8);
let triangle1Area = getTriangleArea(3,6);
