// Second form variables
let collegeName = document.getElementById("collegeName");
let inter = document.getElementById("inter");
let interMarks = document.getElementById("interMarks");
let passInter = document.getElementById("passInter");
let schoolName = document.getElementById("schoolName");
let matric = document.getElementById("matric");
let matricMarks = document.getElementById("matricMarks");
let passMatric = document.getElementById("passMatric");
let curricula = document.getElementById("Curricula");
let scholarshipYes = document.getElementById("Scholarship");
let scholarshipNo = document.getElementById("Scholarship");
let birth = document.getElementById("birth");
let income = document.getElementById("Income");
let interests = document.getElementById("interests");
let skillsProgramming = document.getElementById("skillsProgramming");
let skillsWriting = document.getElementById("skillsWriting");
let skillsDrawing = document.getElementById("skillsDrawing");
let skillsCrafts = document.getElementById("skillsCrafts");

let table2 = document.getElementById("table2");
let validationMessage2;


function validate1() {
  {
    if (document.getElementById("collegeName").value == "") {
      // alert("Father's name is required");
      document.getElementById("error20").innerHTML =
        "College name is required ";
      document.getElementById("collegeName").focus();
      return false;
    } else {
      document.getElementById("error20").innerHTML = "";
    }

    let e = document.getElementById("inter");
    let interSubject = e.options[e.selectedIndex].value;
    console.log(interSubject);

    if (interSubject == -1) {
      // alert("Please select a Course ");
      document.getElementById("error21").innerHTML = "Please select a Course";
      document.getElementById("inter").focus();
      return false;
    } else {
      document.getElementById("error21").innerHTML = "";
    }
    if (document.getElementById("interMarks").value == "") {
      // alert("Please provide a pincode in the format ######.");
      document.getElementById("error22").innerHTML =
        "Please provide your marks. ";
      document.getElementById("interMarks").focus();
      console.log(document.getElementById("interMarks").value);
      return false;
    } else {
      document.getElementById("error22").innerHTML = "";
    }
    if (document.getElementById("passInter").value == "") {
      // alert("Father's name is required");
      document.getElementById("error23").innerHTML = "passing year required";
      document.getElementById("passInter").focus();
      return false;
    } else {
      document.getElementById("error23").innerHTML = "";
    }

    if (document.getElementById("schoolName").value == "") {
      // alert("Father's name is required");
      document.getElementById("error24").innerHTML = "School name is required ";
      document.getElementById("schoolName").focus();
      return false;
    } else {
      document.getElementById("error24").innerHTML = "";
    }

    let e1 = document.getElementById("matric");
    let matricSubject = e1.options[e1.selectedIndex].value;
    console.log(matricSubject);

    if (matricSubject == -1) {
      // alert("Please select a Course ");
      document.getElementById("error25").innerHTML = "Please select a Course";
      document.getElementById("matric").focus();
      return false;
    } else {
      document.getElementById("error25").innerHTML = "";
    }
    if (document.getElementById("matricMarks").value == "") {
      // alert("Please provide a pincode in the format ######.");
      document.getElementById("error26").innerHTML =
        "Please provide your marks. ";
      document.getElementById("matricMarks").focus();
      console.log(document.getElementById("matricMarks").value);
      return false;
    } else {
      document.getElementById("error26").innerHTML = "";
    }
    if (document.getElementById("passMatric").value == "") {
      // alert("Father's name is required");
      document.getElementById("error27").innerHTML = "passing year required";
      document.getElementById("passMatric").focus();
      return false;
    } else {
      document.getElementById("error27").innerHTML = "";
    }

    acceptData2();
    // clearFormFields1();
  
    return true;
    
  }
}


// let data2 = [];
// // second form accept data
// let acceptData2 = () => {
//   data2.push({
//     collegeName: collegeName.value,
//     inter: inter.value,
//     interMarks: interMarks.value,
//     passInter: passInter.value,
//     schoolName: schoolName.value,
//     matric: matric.value,
//     matricMarks: matricMarks.value,
//     passMatric: passMatric.value,
//     curricula: curricula.value,
//     scholarship: scholarshipYes.checked ? "Yes" : "No",
//     // scholarshipYes: scholarshipYes.checked ? scholarshipYes.value : "",
//     // scholarshipNo: scholarshipNo.checked ? scholarshipNo.value : "",
//     birth: birth.value,
//     income: income.value,
//     interests: interests.value,
//     skills: [
//       skillsProgramming.checked ? "Programming" : "",
//       skillsWriting.checked ? "Writing" : "",
//       skillsDrawing.checked ? "Drawing" : "",
//       skillsCrafts.checked ? "Crafts" : "",
//     ],
//   });

//   localStorage.setItem("data2", JSON.stringify(data2));
//   createTable2();
// };
// let createTable2 = () => {
//   tabel2.innerHTML = "";
//   data2.forEach((x, y) => {
//     let rowId = `row2_${y}`;
//     tabel2.innerHTML += `
//             <tr id=${rowId}>
//                 <th scope="row">${y+1}</th>
//                 <td>${x.collegeName}</td>
//                 <td>${x.inter}</td>
//                 <td>${x.interMarks}</td>
//                 <td>${x.passInter}</td>
//                 <td>${x.schoolName}</td>
//                 <td>${x.matric}</td>
//                 <td>${x.matricMarks}</td>
//                 <td>${x.passMatric}</td>
//                 <td>${x.curricula}</td>
//                 <td>${x.scholarship}</td>
//                 <td>${x.birth}</td>
//                 <td>${x.income}</td>
//                 <td>${x.interests}</td>
//                 <td>${x.skills.join(", ")}</td>
//                 <td class="tb-butn">
//                     <button type="button" class="btn btn-primary mb-2" onclick="editRow2('${rowId}')">Update</button>
//                     <button type="button" class="btn btn-danger" onclick="deleteRow2('${rowId}')">Delete</button>
//                     <!-- Add more buttons or actions as needed -->
//                 </td>
//             </tr>
//         `;
//   });
// };





// const urlParams = new URLSearchParams(window.location.search);
// const parentId = urlParams.get("id");
// let data2 = [];
// second form accept data
// let acceptData2 = () => {
//   data2.push({
//     key: parentId,
//     collegeName: collegeName.value,
//     inter: inter.value,
//     interMarks: interMarks.value,
//     passInter: passInter.value,
//     schoolName: schoolName.value,
//     matric: matric.value,
//     matricMarks: matricMarks.value,
//     passMatric: passMatric.value,
//     curricula: curricula.value,
//     scholarship: scholarshipYes.checked ? "Yes" : "No",
//     // scholarshipYes: scholarshipYes.checked ? scholarshipYes.value : "",
//     // scholarshipNo: scholarshipNo.checked ? scholarshipNo.value : "",
//     birth: birth.value,
//     income: income.value,
//     interests: interests.value,
//     skills: [
//       skillsProgramming.checked ? "Programming" : "",
//       skillsWriting.checked ? "Writing" : "",
//       skillsDrawing.checked ? "Drawing" : "",
//       skillsCrafts.checked ? "Crafts" : "",
//     ],
//   });

//   localStorage.setItem("data2", JSON.stringify(data2));
//   createTable2();
// };
// let createTable2 = () => {
//   tabel2.innerHTML = "";

//   data2.forEach((x, y) => {
//     let childRowId = `${x.parentId}_details_${y}`;
//     let rowId = `row2_${y}`;
//     x.parentId = rowId;
//     tabel2.innerHTML += `
//             <tr id=${childRowId}>
//                 <th scope="row">${y + 1}</th>
//                 <td>${x.key}</td>
//                 <td>${x.collegeName}</td>
//                 <td>${x.inter}</td>
//                 <td>${x.interMarks}</td>
//                 <td>${x.passInter}</td>
//                 <td>${x.schoolName}</td>
//                 <td>${x.matric}</td>
//                 <td>${x.matricMarks}</td>
//                 <td>${x.passMatric}</td>
//                 <td>${x.curricula}</td>
//                 <td>${x.scholarship}</td>
//                 <td>${x.birth}</td>
//                 <td>${x.income}</td>
//                 <td>${x.interests}</td>
//                 <td>${x.skills.join(", ")}</td>
//                 <td class="tb-butn">
//                     <button type="button" class="btn btn-primary mb-2" onclick="editRow2('${rowId}')">Update</button>
//                     <button type="button" class="btn btn-danger" onclick="deleteRow2('${rowId}')">Delete</button>
                   
//                 </td>
//             </tr>
//         `;
//   });
// };




let data2 = [];

// second form accept data
let acceptData2 = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const parentId = urlParams.get("id");

  data2.push({
    key: parentId,
    collegeName: collegeName.value,
    inter: inter.value,
    interMarks: interMarks.value,
    passInter: passInter.value,
    schoolName: schoolName.value,
    matric: matric.value,
    matricMarks: matricMarks.value,
    passMatric: passMatric.value,
    curricula: curricula.value,
    scholarship: scholarshipYes.checked ? "Yes" : "No",
    // scholarshipYes: scholarshipYes.checked ? scholarshipYes.value : "",
    // scholarshipNo: scholarshipNo.checked ? scholarshipNo.value : "",
    birth: birth.value,
    income: income.value,
    interests: interests.value,
    skills: [
      skillsProgramming.checked ? "Programming" : "",
      skillsWriting.checked ? "Writing" : "",
      skillsDrawing.checked ? "Drawing" : "",
      skillsCrafts.checked ? "Crafts" : "",
    ],
  });

  localStorage.setItem("data2", JSON.stringify(data2));
  createTable2();
};

let createTable2 = () => {
  table2.innerHTML = "";

  data2.forEach((x, y) => {
    let childRowId = `row2_${y}`;
    table2.innerHTML += `
      <tr id=${childRowId}>
        <th scope="row">${y + 1}</th>
               
                <td>${x.collegeName || ""}</td>
                <td>${x.inter || ""}</td>
                <td>${x.interMarks || ""}</td>
                <td>${x.passInter || ""}</td>
                <td>${x.schoolName || ""}</td>
                <td>${x.matric || ""}</td>
                <td>${x.matricMarks || ""}</td>
                <td>${x.passMatric || ""}</td>
                <td>${x.curricula || ""}</td>
                <td>${x.scholarship || ""}</td>
                <td>${x.birth || ""}</td>
                <td>${x.income || ""}</td>
                <td>${x.interests || ""}</td>
                <td>${x.skills.join(", ") || ""}</td>
                <td class="tb-butn">
                    <button type="button" id="updatebtn2" class="btn3 bg-body-secondary" onclick="editRow2('${childRowId}')"><i class="bi bi-pencil-square" title="Click to Edit Row"></i></button>
                    <button type="button" class="btn4 " onclick="deleteRow2('${childRowId}')"><i class="bi bi-trash3-fill" title="Click to Delete Row"></i></button>
                   
                </td>
      </tr>`;
  });
  clearFormFields2();
};

let editRow2 = (childRowId) => {
  console.log("edit1");
  document
    .getElementById("submitBtn2")
    .setAttribute("data2-row-id", childRowId);
 console.log("edit2");
    document.getElementById("updatebtn2").addEventListener("click", function(){
      console.log("edit3");
      let row2Index = parseInt(childRowId.split("_")[1]);
      let rowData2=data2[row2Index]
      console.log("update1", rowData2);
      collegeName.value = rowData2.collegeName;
      inter.value = rowData2.inter;
      interMarks.value = rowData2.interMarks;
      passInter.value = rowData2.passInter;
      schoolName.value = rowData2.schoolName;
      matric.value = rowData2.matric;
      matricMarks.value = rowData2.matricMarks;
      passMatric.value = rowData2.passMatric;
      curricula.value = rowData2.curricula;
      scholarshipYes.checked = rowData2.scholarshipYes==="yes";
      scholarshipNo.checked = rowData2.scholarshipNo==='no';
      birth.value = rowData2.birth;
      income.value = rowData2.income;
      interests.value =  rowData2.interests;
      skillsProgramming.checked=rowData2.skillsProgramming==="Programming";
      skillsWriting.checked=rowData2.skillsWriting==="Writing";

      skillsDrawing.checked=rowData2.skills==="Drawing";

      skillsCrafts.checked=rowData2.skillsCrafts==="Crafts";

      document.getElementById("submitBtn2").innerText = "Save";
      document.getElementById("submitBtn2").setAttribute("onclick","saveChanges2()");
      console.log("update3");
    })
};

let saveChanges2=()=>{
let rowid2 = document.getElementById("submitBtn2").getAttribute("data2-row-id");
if (rowid2) {
  let row2Index=parseInt(rowid2.split("_")[1])
  data2[row2Index] = {

    collegeName: collegeName.value,
    inter: inter.value,
    interMarks: interMarks.value,
    passInter: passInter.value,
    schoolName: schoolName.value,
    matric: matric.value,
    matricMarks: matricMarks.value,
    passMatric: passMatric.value,
    curricula: curricula.value,
    scholarship: scholarshipYes.checked ? "Yes" : "No",
  
    birth: birth.value,
    income: income.value,
    interests: interests.value,
    skills: [
      skillsProgramming.checked ? "Programming" : "",
      skillsWriting.checked ? "Writing" : "",
      skillsDrawing.checked ? "Drawing" : "",
      skillsCrafts.checked ? "Crafts" : "",
    ],
  };

}else{
  data2.push({
    key: parentId,
    collegeName: collegeName.value,
    inter: inter.value,
    interMarks: interMarks.value,
    passInter: passInter.value,
    schoolName: schoolName.value,
    matric: matric.value,
    matricMarks: matricMarks.value,
    passMatric: passMatric.value,
    curricula: curricula.value,
    scholarship: scholarshipYes.checked ? "Yes" : "No",
   
    birth: birth.value,
    income: income.value,
    interests: interests.value,
    skills: [
      skillsProgramming.checked ? "Programming" : "",
      skillsWriting.checked ? "Writing" : "",
      skillsDrawing.checked ? "Drawing" : "",
      skillsCrafts.checked ? "Crafts" : "",
    ],
  });
        

       
}
clearFormFields2();
   console.log("clearform1");
  document.getElementById("submitBtn2").innerText = "Submit";
document.getElementById("submitBtn2").removeAttribute("data2-row-id");
  localStorage.setItem("data2", JSON.stringify(data2));
  createTable2();
}
let clearFormFields2=()=>{
  console.log("clearform2");
  collegeName.value="";
  inter.value="";
 interMarks.value="";
     passInter.value="";
schoolName.value="";
matric.value="";
    matricMarks.value="";
passMatric.value="";
 curricula.value="";
     scholarshipYes.checked =false;
 
   birth.value="";
 income.value="";
   interests.value="";
    skills: [
      skillsProgramming.checked =false,
      skillsWriting.checked =false ,
           skillsDrawing.checked =false,
      skillsCrafts.checked =false
    ]
     
};
const modalClose1 = () => {
  $("#exampleModalCenter").modal("hide");
};
 
let deleteRow2 = (childRowId) => {
  let rowIndex = parseInt(childRowId.split("_")[1]);
  let modal = document.getElementById("exampleModalCenter");
  console.log(modal);
   modal.innerHTML = ` <div class="modal-dialog modal-dialog-centered"   role="document">
    <div class="modal-content" style="background-color: #192a56">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle" style="color: #ffff; font-weight: bold;"></h5>
        
        <button type="button" onclick="modalClose1()"class="btn-close" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body" style="color: #ffff ;">
        
      </div>
      <div class="modal-footer ">
        
        <button  id="delbtn2" type="button"  style="display: none;" class="btn btn-primary">Yes</button>  <button  id="updatebtn2" type="button"  style="display: none;" class="btn btn-primary">Yes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnDelete2" onclick="modalClose1()"></button>
      
      </div>
    </div>
  </div>`;
$("#exampleModalCenter").modal("show");
// document.getElementById("updatebtn").style.display = "none";
let delbtn3 = document.getElementById("delbtn2");
delbtn3.style.display = "block";
document.getElementById("exampleModalLongTitle").innerHTML =
  "Row Delete Notification!";
document.getElementById("modal-body").innerHTML =
  "Are You Sure to Delete This Row";

 document.getElementById("btnDelete2").innerHTML = "No";
 document.getElementById("delbtn2").addEventListener("click", function () {


 
   data2.splice(rowIndex, 1);
  
   localStorage.setItem("data2", JSON.stringify(data2));
  
   createTable2();

   
 });
modalClose1();
  // // alert("delete");
  // let confir = confirm("ARe you sure to delete this row")
  // console.log(confir);
  // if (confir) {data2.splice(rowIndex, 1);
  // localStorage.setItem("data2", JSON.stringify(data2));
  // createTable2();}
};
function resetForm1() {
  document.getElementById("submitBtn2").innerText = "Submit";
  document
    .getElementById("submitBtn2")
    .setAttribute("onclick", " return validate1()");

  console.log("reset");
}





(() => {
  data2 = JSON.parse(localStorage.getItem("data2")) || [];
  console.log(data2);
  createTable2();
})();
