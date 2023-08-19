async function insertData({data, space, element}){
    let studentNameSpaceLength = space.length;
    let middleStudentNameSpaceLength = parseInt(studentNameSpaceLength) / 2;

    let studentNameLength = data.length;
    let splitStudentNameLength = parseInt(studentNameLength) / 2;

    let dotSpaceLength = middleStudentNameSpaceLength - splitStudentNameLength;

    console.log(dotSpaceLength);
    let dotSpace = "";

    for(let i = 0; i < parseInt(dotSpaceLength / 2); i++){
        dotSpace += ".";
        console.log(dotSpace);
    }

    let total = dotSpace + data + dotSpace;

    element.innerHTML = total;
}  