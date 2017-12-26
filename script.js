getTriangleArea = (a,h) => {
 if (a <= 0 || h <= 0) {
    return 'nieprawidlowe dane';
  } else {
    return a*h/2;
  } 
}
console.log(getTriangleArea(3,11));
