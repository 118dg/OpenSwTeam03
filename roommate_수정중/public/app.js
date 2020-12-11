const memoList = document.querySelector("#memo-list");
const form = document.querySelector("#add-memo-form");
function renderMemo(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let desc = document.createElement("span");
    let add1= document.createElement("span");
    let add2 = document.createElement("span");
    let add3= document.createElement("span");
    let add4 = document.createElement("span");
    let add5 = document.createElement("span");
  let cross = document.createElement("div");
  let edit = document.createElement("span");
    

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  desc.textContent = doc.data().desc;
    add1.textContent = doc.data().add1;
    add2.textContent = doc.data().add2;
    add3.textContent = doc.data().add3;
    add4.textContent = doc.data().add4;
    add5.textContent = doc.data().add5;

  cross.textContent = "X";

  li.appendChild(name);
  li.appendChild(desc);
    li.appendChild(add1);
    li.appendChild(add2);
    li.appendChild(add3);
    li.appendChild(add4);
    li.appendChild(add5);
  li.appendChild(cross);
  memoList.appendChild(li);

  // deleting data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    //find a doc on the dom
    db.collection("memo")
      .doc(id)
      .delete();
  });
}


// // getting data
// db.collection("memo")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       renderMemo(doc);
//     });
//   });

// // ordering data
// db.collection("memo")
// .where("desc", "<", "d")
//   .orderBy("desc")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       renderMemo(doc);
//     });
//   });

// // making queries
// db.collection("memo")
//   // .where("desc", "==", "Calabar")
//   .where("desc", "<", "d")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       renderMemo(doc);
//     });
//   });

// saving data
form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("memo").add({
    name: form.name.value,
    desc: form.desc.value,
    add1: form.add1.value,
    add2: form.add2.value,
  add3: form.add3.value,
  add4: form.add4.value,
  add5: form.add5.value
  });
  form.name.value = "";
  form.desc.value = "";
    form.add1.value = "";
    form.add2.value = "";
    form.add3.value = "";
    form.add4.value = "";
    form.add5.value = "";
});

// db.collection('memo').get().then((snapshot) => {

//   snapshot.docs.forEach(doc => {
//     console.log('a'+doc.data())
//   })
// });

//  real time listener
db.collection("memo")
  .orderBy("desc")
  .onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      // console.log(change.doc.data());
      if (change.type == "added") {
        renderMemo(change.doc);
      } else if (change.type == "removed") {
        let li = memoList.querySelector("[data-id=" + change.doc.id + "]");
        memoList.removeChild(li);
      }
    });
  });
