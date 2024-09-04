// main doc variables
let fullName = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let PostAdress = document.getElementById("PostAdress");
let personalAddress = document.getElementById("perAddress");
let genderMale = StudenRegistrationForm.Gender[0];
let genderFemale = StudenRegistrationForm.Gender[1];
let course = document.getElementById("Course");

let city = document.getElementById("City");

let province = document.getElementById("Province");

let pincode = document.getElementById("pincode");
let email = document.getElementById("emailId");
let phoneNumber = document.getElementById("phoneNumber");
let table = document.getElementById("tabel");
let validationMessage;

// second form variables

function validate() {
  {
    if (document.getElementById("name").value == "") {
      // alert("Name is required");
      document.getElementById("error1").innerHTML = "Full name is required ";
      document.getElementById("name").focus();
      return false;
    } else {
      document.getElementById("error1").innerHTML = "";
    }
    if (document.getElementById("fatherName").value == "") {
      // alert("Father's name is required");
      document.getElementById("error2").innerHTML =
        "Father's name is required ";
      document.getElementById("fatherName").focus();
      return false;
    } else {
      document.getElementById("error2").innerHTML = "";
    }
    if (document.getElementById("PostAdress").value == "") {
      // alert("Postal Address is required");
      document.getElementById("error3").innerHTML =
        "Postal Address is required ";

      document.getElementById("PostAdress").focus();
      return false;
    } else {
      document.getElementById("error3").innerHTML = "";
    }
    if (document.getElementById("perAddress").value == "") {
      // alert("Personsal Address is required");
      document.getElementById("error4").innerHTML =
        "Personsal Address is required ";
      document.getElementById("perAddress").focus();
      return false;
    } else {
      document.getElementById("error4").innerHTML = "";
    }
    if (
      StudenRegistrationForm.Gender[0].checked == false &&
      StudenRegistrationForm.Gender[1].checked == false
    ) {
      // alert("Gender is required");
      document.getElementById("error5").innerHTML = "Gender is required";
      document.getElementById("Gender").focus();
      return false;
    } else {
      document.getElementById("error5").innerHTML = "";
    }

    let e = document.getElementById("Course");
    let Course1 = e.options[e.selectedIndex].value;
    console.log(Course1);

    if (Course1 == -1) {
      // alert("Please select a Course ");
      document.getElementById("error6").innerHTML = "Please select a Course";
      document.getElementById("Course").focus();
      return false;
    } else {
      document.getElementById("error6").innerHTML = "";
    }
    let e1 = document.getElementById("City");
    let City1 = e1.options[e1.selectedIndex].value;
    console.log(City1);

    if (City1 == -1) {
      // alert("Please select a City ");
      document.getElementById("error7").innerHTML = "Please select a City ";
      document.getElementById("City").focus();
      return false;
    } else {
      document.getElementById("error7").innerHTML = "";
    }

    let e2 = document.getElementById("Province");
    let Province1 = e2.options[e2.selectedIndex].value;
    console.log(Province1);

    if (Province1 == -1) {
      // alert("Please select a Province ");
      document.getElementById("error8").innerHTML = "Please select a City ";
      document.getElementById("Province").focus();
      return false;
    } else {
      document.getElementById("error8").innerHTML = "";
    }

    if (
      document.getElementById("pincode").value == "" ||
      document.getElementById("pincode").value.length != 6
    ) {
      // alert("Please provide a pincode in the format ######.");
      document.getElementById("error9").innerHTML =
        "Please provide a pincode in the format ######. ";
      document.getElementById("pincode").focus();
      console.log(document.getElementById("pincode").value);
      return false;
    } else {
      document.getElementById("error9").innerHTML = "";
    }
    var email = document.StudenRegistrationForm.emailId.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || dotpos - atpos < 2) {
      // alert("Please enter correct email ID");
      document.getElementById("error10").innerHTML =
        "Please enter correct email ID ";
      document.StudenRegistrationForm.emailId.focus();
      return false;
    } else {
      document.getElementById("error10").innerHTML = "";
    }

    if (
      document.StudenRegistrationForm.phoneNumber.value == "" ||
      document.StudenRegistrationForm.phoneNumber.value.length != 11
    ) {
      // alert("Please provide a Mobile No in the format 123.");
      document.getElementById("error11").innerHTML =
        "Please provide a Mobile No in the format 123.";

      document.StudenRegistrationForm.phoneNumber.focus();
      return false;
    } else {
      document.getElementById("error11").innerHTML = "";
    }
  }

  let delbtn2 = document.getElementById("delbtn");
  delbtn2.style.display = "none";
  let updatebtn = document.getElementById("updatebtn");
  updatebtn.style.display = "none";
  document.getElementById("exampleModalLongTitle").innerHTML =
    "Form Submit Notification!";
  document.getElementById("modal-body").innerHTML = "This Form Has been Submit";
  document.getElementById("btnDelete").innerHTML = "Close";

  $("#exampleModalCenter").modal("show");

  acceptData();
  clearFormFields();
  return true;
}

const modalClose = () => {
  $("#exampleModalCenter").modal("hide");
};

// form1 accept data
// let data = [];

// let acceptData = () => {
//   data.push({
//     fullName: fullName.value,
//     fatherName: fatherName.value,
//     postalAdress: postalAdress.value,
//     personalAddress: personalAddress.value,
//     genderMale: genderMale.checked ? genderMale.value : "",
//     genderFemale: genderFemale.checked ? genderFemale.value : "",
//     course: course.value,
//     city: city.value,
//     province: province.value,
//     pincode: pincode.value,
//     email: email.value,
//     phoneNumber: phoneNumber.value,
//   });

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
//   createTable();
// };

// let createTable = () => {
//   tabel.innerHTML= "";

//   let combinedData = [...data, ...data2];
//   combinedData.forEach((mergedObject, index) => {
//     // mergedObject = { ...mergedObject, ...object };

//     let rowId = `row_${index}`;
//     let collapseId = `collapse_${rowId}`;

//     tabel.innerHTML += `
//       <tr id=${rowId}>
//           <th scope="row">${index + 1}</th>
//           <td>${mergedObject.fullName}</td>
//           <td>${mergedObject.fatherName}</td>
//           <td>${mergedObject.postalAddress}</td>
//           <td>${mergedObject.personalAddress}</td>
//           <td>${mergedObject.genderMale ? "Male" : "Female"}</td>
//           <td>${mergedObject.course}</td>
//           <td>${mergedObject.city}</td>
//           <td>${mergedObject.province}</td>
//           <td>${mergedObject.pincode}</td>
//           <td>${mergedObject.email}</td>
//           <td>${mergedObject.phoneNumber}</td>
//           <td class="tb-butn">
//               <button type="button" class="btn btn-primary mb-2" onclick="editRow('${rowId}')">Update</button>
//               <button type="button" class="btn btn-danger" onclick="deleteRow('${rowId}')">Delete</button>
//               <a href="detailsForm.html" target="_blank"><button type="button" class="btn btn-danger">Add more</button></a>
//               <button type="button" class="btn btn-danger" data-bs-toggle="collapse" href="#${collapseId}" role="button" aria-expanded="false" aria-controls="${collapseId}">View more</button>
//           </td>
//       </tr>`;

//     // Add the collapse row for the second form data
//     tabel.innerHTML += `
//     <tr >
//             <td colspan="15" class="p-0">
//                 <div class="collapse" id="${collapseId}">
//                     <div class="card card-body">
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                    <th scope="col">#</th>
//                                         <th scope="col">College Name</th>
//                                         <th scope="col">Intermediate</th>
//                                         <th scope="col">Intermediate Marks</th>
//                                         <th scope="col">Passing Year (Intermediate)</th>
//                                         <th scope="col">School Name</th>
//                                         <th scope="col">Matric</th>
//                                         <th scope="col">Matric Marks</th>
//                                         <th scope="col">Passing Year (Matric)</th>
//                                         <th scope="col">Curricula</th>
//                                         <th scope="col">Scholarship</th>
//                                         <th scope="col">Date of Birth</th>
//                                         <th scope="col">Family Monthly Income</th>
//                                         <th scope="col">Interests</th>
//                                         <th scope="col">Skills/Talents</th>
//                                         <th scope="col">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr id="${rowId}_details">
//                                     <th scope="row">1</th>
//                                         <td>${mergedObject.collegeName}</td>
//                                         <td>${mergedObject.inter}</td>
//                                         <td>${mergedObject.interMarks}</td>
//                                         <td>${mergedObject.passInter}</td>
//                                         <td>${mergedObject.schoolName}</td>
//                                         <td>${mergedObject.matric}</td>
//                                         <td>${mergedObject.matricMarks}</td>
//                                         <td>${mergedObject.passMatric}</td>
//                                         <td>${mergedObject.curricula}</td>
//                                         <td>${mergedObject.scholarship}</td>
//                                         <td>${mergedObject.birth}</td>
//                                         <td>${mergedObject.income}</td>
//                                         <td>${mergedObject.interests}</td>
//                                         <td>${
//                                           mergedObject.skills
//                                             ? mergedObject.skills.join(", ")
//                                             : ""
//                                         }</td>
//                                     <td class="tb-butn">
//                                         <button type="button" class="btn btn-primary mb-2" onclick="editRow2('${rowId}')">Update</button>
//                                         <button type="button" class="btn btn-danger" onclick="deleteRow2('${rowId}')">Delete</button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </td>
//   `;
//   });

// };

let generateid = () => {
  // Generate a unique key using a combination of timestamp and random number
  return `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

// form1 accept data
let data = [];
// Generate a unique key for the parent row
let parentid = generateid();

let acceptData = () => {
  data.push({
    id: parentid,
    fullName: fullName.value,
    fatherName: fatherName.value,
    PostAdress: PostAdress.value,
    personalAddress: personalAddress.value,
    genderMale: genderMale.checked ? genderMale.value : "",
    genderFemale: genderFemale.checked ? genderFemale.value : "",
    course: course.value,
    city: city.value,
    province: province.value,
    pincode: pincode.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  // console.log(data);
  createTable();
};

let openForm2 = (parentid) => {
  // Pass the parent ID to the form 2 HTML file
  window.open(`detailsForm.html?id=${parentid}`, "_blank");
};
let updatRow2 = (colapsRowId) => {
  const newTab = window.open("detailsForm.html", "_blank");

  newTab.onload = () => {
    newTab.editRow2(colapsRowId);
  };

  console.log("edit");
};

// let createTable = () => {
//   // debugger
//   table.innerHTML = "";
//   let collapseId;
//   let combinedData = [...data, ...data2];
//   // debugger
//   combinedData.forEach((mergedObject, index) => {
//     console.log("merge", mergedObject);

//     console.log("combinedData", combinedData);
//     let rowId = `row_${index}`;
//     collapseId = `collapse_${rowId}`;
//     let parentid = mergedObject.id;
//     // const filteredData2 = data2.filter((x) => x.parentId === rowId);

//     if (mergedObject.fullName !== undefined) {
//       console.log("mergedObject.fullName", mergedObject.fullName);
//       table.innerHTML += `
//       <tr id=${rowId}>
//           <th scope="row">${index + 1}</th>

//           <td>${mergedObject.fullName || ""}</td>
//           <td>${mergedObject.fatherName || ""}</td>
//           <td>${mergedObject.PostAdress || ""}</td>
//           <td>${mergedObject.personalAddress || ""}</td>
//           <td>${mergedObject.genderMale ? "Male" : "Female" || ""}</td>
//           <td>${mergedObject.course || ""}</td>
//           <td>${mergedObject.city || ""}</td>
//           <td>${mergedObject.province || ""}</td>
//           <td>${mergedObject.pincode || ""}</td>
//           <td>${mergedObject.email || ""}</td>
//           <td>${mergedObject.phoneNumber || ""}</td>
//           <td class="tb-butn">
//               <button type="button" class="btn btn-primary mb-2" onclick="editRow('${rowId}')">Update</button>
//               <button type="button" class="btn btn-danger" onclick="deleteRow('${rowId}')">Delete</button>
//               <button type="button" class="btn btn-danger" onclick="  openForm2(parentid); ">Add more</button>

//           </td>
//       </tr>`;
//     }

//     console.log("data2", data2);
//     // <button
//     //   type="button"
//     //   class="btn btn-danger"
//     //   data-bs-toggle="collapse"
//     //   href="#${collapseId}"
//     //   role="button"
//     //   aria-expanded="false"
//     //   aria-controls="${collapseId}"
//     // >
//     //   View more
//     // </button>;
//     // Add the collapse row for the second form data
//     // Filter data2 based on the current parent ID

//     // filteredData2.forEach((childData, childIndex) => {
//     //   let childRowId = `${rowId}_details_${childIndex}`;
//     // Add the collapse row for the second form data

//     // <div class="collapse" id="${collapseId}">

//     if (mergedObject.collegeName !== undefined) {
//       console.log("mergedObject.collegeName:", mergedObject.collegeName);

//       table.innerHTML += `
//     <tr >
//             <td colspan="15" class="p-0">

//                 <div  >
//                     <div class="card card-body">
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                    <th scope="col">#</th>
//                                         <th scope="col">College Name</th>
//                                         <th scope="col">Intermediate</th>
//                                         <th scope="col">Intermediate Marks</th>
//                                         <th scope="col">Passing Year (Intermediate)</th>
//                                         <th scope="col">School Name</th>
//                                         <th scope="col">Matric</th>
//                                         <th scope="col">Matric Marks</th>
//                                         <th scope="col">Passing Year (Matric)</th>
//                                         <th scope="col">Curricula</th>
//                                         <th scope="col">Scholarship</th>
//                                         <th scope="col">Date of Birth</th>
//                                         <th scope="col">Family Monthly Income</th>
//                                         <th scope="col">Interests</th>
//                                         <th scope="col">Skills/Talents</th>
//                                         <th scope="col">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr >
//                                     <th scope="row">${index + 1}</th>

//                                         <td>${
//                                           mergedObject.collegeName || ""
//                                         }</td>
//                                         <td>${mergedObject.inter || ""}</td>
//                                         <td>${
//                                           mergedObject.interMarks || ""
//                                         }</td>
//                                         <td>${mergedObject.passInter || ""}</td>
//                                         <td>${
//                                           mergedObject.schoolName || ""
//                                         }</td>
//                                         <td>${mergedObject.matric || ""}</td>
//                                         <td>${
//                                           mergedObject.matricMarks || ""
//                                         }</td>
//                                         <td>${
//                                           mergedObject.passMatric || ""
//                                         }</td>
//                                         <td>${mergedObject.curricula || ""}</td>
//                                         <td>${
//                                           mergedObject.scholarship || ""
//                                         }</td>
//                                         <td>${mergedObject.birth || ""}</td>
//                                         <td>${mergedObject.income || ""}</td>
//                                         <td>${mergedObject.interests || ""}</td>
//                                         <td>${
//                                           mergedObject.skills
//                                             ? mergedObject.skills.join(", ")
//                                             : ""
//                                         }</td>
//                                     <td class="tb-butn">
//                                         <button type="button" class="btn btn-primary mb-2" onclick="editRow2('')">Update</button>
//                                         <button type="button" class="btn btn-danger" onclick="deleteRow2('')">Delete</button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </td>
//   `;
//     }

//     // });
//   });
// };

let toggleIcon = (button) => {
  let icon = button.querySelector("i");

  icon.classList.toggle("bi-plus-lg");
  icon.classList.toggle("bi-dash");
};
let createTable = () => {
  table.innerHTML = "";
  // collapseTables.innerHTML = "";

  // Loop through data and data2 simultaneously
  for (let i = 0; i < Math.max(data.length, data2.length); i++) {
    let mergedObject1 = data[i] || {};
    let mergedObject2 = data2[i] || {};

    let rowId = `row_${i}`;
    let collapseId = `collapse_${rowId}`;
    let parentid = mergedObject1.id || mergedObject2.key;

    // Main row
    if (Object.keys(mergedObject1).length > 0) {
      table.innerHTML += `
        <tr id=${rowId}>
          <th scope="row">${
            i + 1
          } <button type="button" class="btn22 " id="btn22" data-bs-toggle="collapse" href="#${collapseId}" role="button" aria-expanded="false" aria-controls="${collapseId}" onclick="toggleIcon(this)" title="Click to Expand/Collapse"><i class="bi bi-plus-lg"></i></button></th>
          
         
          
          <td>${mergedObject1.fullName || ""}</td>
          <td>${mergedObject1.fatherName || ""}</td>
          <td>${mergedObject1.PostAdress || ""}</td>
          <td>${mergedObject1.personalAddress || ""}</td>
          <td>${mergedObject1.genderMale ? "Male" : "Female" || ""}</td>
          <td>${mergedObject1.course || ""}</td>
          <td>${mergedObject1.city || ""}</td>
          <td>${mergedObject1.province || ""}</td>
          <td>${mergedObject1.pincode || ""}</td>
          <td>${mergedObject1.email || ""}</td>
          <td>${mergedObject1.phoneNumber || ""}</td>

          <td class="tb-butn">
            <button type="button" class="btn1 " onclick="editRow('${rowId}')"><i class="bi bi-pencil-square" title="Click to Edit Row"></i></button>
            <button type="button" class="btn2 " onclick="deleteRow('${rowId}')"><i class="bi bi-trash3-fill" title="Click to Delete Row"></i></button>
            <button type="button" class="btn btn-info my-1" onclick="openForm2('${parentid}')">Add more</button>
           
          </td>
        </tr>`;
    }
    let colapsRowId;
    // Collapse row
    if (Object.keys(mergedObject2).length > 0) {
      colapsRowId = `row_${i}_details`;
      table.innerHTML += `
        <tr id="colapsRowId">
          <td colspan="15" class="p-0">
            <div class="collapse" id="${collapseId}">
              <div class="card card-body">
                <table class="table">
                 <tr>
                                   <th scope="col">#</th>
                                        <th scope="col">College Name</th>
                                        <th scope="col">Intermediate</th>
                                        <th scope="col">Intermediate Marks</th>
                                        <th scope="col">Passing Year (Intermediate)</th>
                                        <th scope="col">School Name</th>
                                        <th scope="col">Matric</th>
                                        <th scope="col">Matric Marks</th>
                                        <th scope="col">Passing Year (Matric)</th>
                                        <th scope="col">Curricula</th>
                                        <th scope="col">Scholarship</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Family Monthly Income</th>
                                        <th scope="col">Interests</th>
                                        <th scope="col">Skills/Talents</th>
                                        <th scope="col">Actions</th>
                                </tr>
                  <tbody>
                 
                      <td scope="row"><b>${i + 1}</b></td>
                     
                    <td>${mergedObject2.collegeName || ""}</td>
                                        <td>${mergedObject2.inter || ""}</td>
                                        <td>${
                                          mergedObject2.interMarks || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.passInter || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.schoolName || ""
                                        }</td>
                                        <td>${mergedObject2.matric || ""}</td>
                                        <td>${
                                          mergedObject2.matricMarks || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.passMatric || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.curricula || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.scholarship || ""
                                        }</td>
                                        <td>${mergedObject2.birth || ""}</td>
                                        <td>${mergedObject2.income || ""}</td>
                                        <td>${
                                          mergedObject2.interests || ""
                                        }</td>
                                        <td>${
                                          mergedObject2.skills
                                            ? mergedObject2.skills.join(", ")
                                            : ""
                                        }</td>
                      <td class="tb-butn">
                      <button type="button" id="updatebtn2" class="btn3 " onclick="updatRow2('colapsRowId')"><i class="bi bi-pencil-square" title="Click to Edit Row"></i></button>
                        <button type="button" class="btn4" onclick="deleteRow2('colapsRowId')"><i class="bi bi-trash3-fill" title="Click to Delete Row"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>`;
    }
  }
};

let editRow = (rowId) => {
  document.getElementById("submitBtn").setAttribute("data-row-id", rowId);

  $("#exampleModalCenter").modal("show");
  let updatebtn = document.getElementById("updatebtn");
  updatebtn.style.display = "block";
  let delbtn = document.getElementById("delbtn");
  delbtn.style.display = "none";
  document.getElementById("exampleModalLongTitle").innerHTML =
    "Row Data Update  Notification!";
  document.getElementById("modal-body").innerHTML =
    "Are you want to update  data";
  document.getElementById("btnDelete").innerHTML = "No";

  console.log("update1");

  document.getElementById("updatebtn").addEventListener("click", function () {
    let rowIndex = parseInt(rowId.split("_")[1]);
    let rowData = data[rowIndex];
    console.log("update2");
    fullName.value = rowData.fullName;
    fatherName.value = rowData.fatherName;
    PostAdress.value = rowData.postalAdress;
    personalAddress.value = rowData.personalAddress;

    genderMale.checked = rowData.genderMale === "male";
    genderFemale.checked = rowData.genderFemale === "female";

    course.value = rowData.course;
    city.value = rowData.city;
    province.value = rowData.province;
    pincode.value = rowData.pincode;
    email.value = rowData.email;
    phoneNumber.value = rowData.phoneNumber;
    console.log("update3");
    document.getElementById("submitBtn").innerText = "Save";
    document
      .getElementById("submitBtn")
      .setAttribute("onclick", "saveChanges()");
    $("#exampleModalCenter").modal("hide");
    document.getElementById("updatebtn");
    updatebtn.style.display = "none";
    console.log("update4");
  });
};

let saveChanges = () => {
  let rowId = document.getElementById("submitBtn").getAttribute("data-row-id");

  $("#exampleModalCenter").modal("show");
  let delbtn2 = document.getElementById("delbtn");
  delbtn2.style.display = "none";
  document.getElementById("exampleModalLongTitle").innerHTML =
    "  Update Save  Notification!";
  document.getElementById("modal-body").innerHTML =
    "Form Data Has Been Updated";
  document.getElementById("btnDelete").innerHTML = "Close";

  if (rowId) {
    let rowIndex = parseInt(rowId.split("_")[1]);
    data[rowIndex] = {
      fullName: fullName.value,
      fatherName: fatherName.value,
      postalAdress: PostAdress.value,
      personalAddress: personalAddress.value,
      genderMale: genderMale.checked ? genderMale.value : "",
      genderFemale: genderFemale.checked ? genderFemale.value : "",
      course: course.value,
      city: city.value,
      province: province.value,
      pincode: pincode.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    };
  } else {
    data.push({
      fullName: fullName.value,
      fatherName: fatherName.value,
      postalAdress: PostAdress.value,
      personalAddress: personalAddress.value,
      genderMale: genderMale.checked ? genderMale.value : "",
      genderFemale: genderFemale.checked ? genderFemale.value : "",
      course: course.value,
      city: city.value,
      province: province.value,
      pincode: pincode.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    });
  }

  clearFormFields();

  document.getElementById("submitBtn").innerText = "Submit";

  document.getElementById("submitBtn").removeAttribute("data-row-id");

  localStorage.setItem("data", JSON.stringify(data));
  createTable();

  $("#exampleModalCenter").modal("hide");
};

let clearFormFields = () => {
  fullName.value = "";
  fatherName.value = "";
  PostAdress.value = "";
  personalAddress.value = "";
  genderMale.checked = false;
  genderFemale.checked = false;
  course.value = "-1";
  city.value = "-1";
  province.value = "-1";
  pincode.value = "";
  email.value = "";
  phoneNumber.value = "";
};

// let deleteRow = (rowId) => {
//   let rowIndex = parseInt(rowId.split("_")[1]);
//   $("#exampleModalCenter").modal("show");
//   document.getElementById("updatebtn");
//   updatebtn.style.display = "none";
//   let delbtn2 = document.getElementById("delbtn");
//   delbtn2.style.display = "block";
//   document.getElementById("exampleModalLongTitle").innerHTML =
//     "Row Delete Notification!";
//   document.getElementById("modal-body").innerHTML =
//     "Are You Sure to Delete This Row";
//   document.getElementById("btnDelete").innerHTML = "No";
//   document.getElementById("delbtn").addEventListener("click", function () {

//     data.splice(rowIndex, 1);
//     localStorage.setItem("data", JSON.stringify(data));
//     createTable();
//     $("#exampleModalCenter").modal("hide");
//   });
// };
// let deleteRow = (rowId) => {
//   let rowIndex = parseInt(rowId.split("_")[1]);

//   // Check if there is a corresponding collapse row
//   let collapseRowId = `row_${rowIndex}_details`;
//   let collapseRow = document.getElementById(collapseRowId);

//   if (collapseRow) {
//     // If the collapse row exists, remove it
//     // collapseRow.parentNode.removeChild(collapseRow);
//   document.getElementById("modal-body").innerHTML =
//     "there is a colapse row exist";
//     console.log("collapseRow", collapseRow);
//   }

//   // Show the confirmation modal
//   $("#exampleModalCenter").modal("show");

//   // Hide the update button
//   document.getElementById("updatebtn").style.display = "none";

//   // Show the delete button
//   let delbtn2 = document.getElementById("delbtn");
//   delbtn2.style.display = "block";

//   // Set modal title and body
//   document.getElementById("exampleModalLongTitle").innerHTML =
//     "Row Delete Notification!";
//   document.getElementById("modal-body").innerHTML =
//     "Are You Sure to Delete This Row";

//   // Set the modal button text
//   document.getElementById("btnDelete").innerHTML = "No";

//   // Add click event listener to delete button
//   document.getElementById("delbtn").addEventListener("click", function () {
//   data.splice(rowIndex, 1);

//   // Remove the associated collapse row from the data2 array
//   data2.splice(rowIndex, 1);

//   // Update local storage
//   localStorage.setItem("data", JSON.stringify(data));
//   localStorage.setItem("data2", JSON.stringify(data2));

//   // Update the tables
//   createTable();
//   createTable2();

//     // Hide the confirmation modal
//     $("#exampleModalCenter").modal("hide");
//   });
// };

let deleteRow = (rowId) => {
  let rowIndex = parseInt(rowId.split("_")[1]);

  $("#exampleModalCenter").modal("show");
  document.getElementById("updatebtn").style.display = "none";
  let delbtn2 = document.getElementById("delbtn");
  delbtn2.style.display = "block";
  document.getElementById("exampleModalLongTitle").innerHTML =
    "Row Delete Notification!";
  document.getElementById("modal-body").innerHTML =
    "Are You Sure to Delete This Row";

  // Check if there is a corresponding collapse row
  let collapseRow = document.getElementById(`collapse_${rowId}`);
  if (collapseRow) {
    document.getElementById("modal-body").innerHTML +=
      "<br/><strong>Warning:</strong> A collapse row exists. Deleting this row will also delete the collapse row.";
  }

  document.getElementById("btnDelete").innerHTML = "No";
  document.getElementById("delbtn").addEventListener("click", function () {
    // Delete the parent row
    data.splice(rowIndex, 1);
    data2.splice(rowIndex, 1);
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("data2", JSON.stringify(data2));
    createTable();
    createTable2();

     $("#exampleModalCenter").modal("hide");
  });
 
};

function printTable() {
  var tableClone = document.getElementById("tabel1").cloneNode(true);

  console.log(tableClone);

  var rows = tableClone.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var lastCell = rows[i].cells[rows[i].cells.length - 1];
    lastCell.parentNode.removeChild(lastCell);
  }

  var printWindow = window.open("", "_blank");
  printWindow.document.write(
    "<html><head><title>Student Registration Record</title></head><body>"
  );
  printWindow.document.write("<h1>Student Registration Record</h1>");

  printWindow.document.body.appendChild(tableClone);

  printWindow.document.write("<style>");
  printWindow.document.write("h1 { text-align: center; color: blueviolet; }");
  printWindow.document.write("p { position: fixed; bottom: 0px; }");
  printWindow.document.write(
    "span { position: fixed; bottom: 100px; right: 80px; }"
  );
  printWindow.document.write(
    "table { border-collapse: collapse; width: 100%; }"
  );
  printWindow.document.write(
    "th, td { border: 1px solid #dddddd; text-align: left; padding: 4px;width:60px }"
  );
  printWindow.document.write("th { background-color: #f2f2f2; }");
  printWindow.document.write("tr td { width: 80vw; padding:4px width:60px ;}");
  printWindow.document.write("</style>");

  // printWindow.document.write('<span>Signature:_________________</span>');
  printWindow.document.write(
    "<p>Date: " +
      new Date().toLocaleTimeString("en-US") +
      new Date().toLocaleDateString() +
      "</p>"
  );

  printWindow.document.write("</body></html>");
  printWindow.document.close();

  printWindow.focus();

  printWindow.print();
}
// function reset(){

//    console.log("ghghg");
// }
function resetForm() {
  document.getElementById("submitBtn").innerText = "Submit";
  document
    .getElementById("submitBtn")
    .setAttribute("onclick", " return validate()");

  console.log("reset");
}

// function deleteData(index) {
//    let del=confirm("Are you sure to delete this data");
//    if (del== true) {
//       console.log(del);
//       data.splice(index, 1);

//       createTable();
//    }

// }

// function editData(index) {
//   const updatedText = prompt("Edit text:", data[index].fullName);
//   if (updatedText !== null) {
//     data[index].fullName = updatedText;
//     createTable();
//   }
// }

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTable();
})();
