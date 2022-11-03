

const GetTriangleSquare = (side1, side2, side3) =>{

const p = (side1+side2+side3)/2;
const S = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
return S;
}

result = GetTriangleSquare(13,14,15);
console.log(result);