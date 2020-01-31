// id focus
function id_active() {
  document.getElementsByClassName('joinId')[0].style.border = "solid 1px rgb(245,195,122)";
}

// pw focus
function pw_active() {
  document.getElementsByClassName('joinPw')[0].style.border = "solid 1px rgb(245,195,122)";
}

// repw focus
function repw_active() {
  document.getElementsByClassName('rejoinPw')[0].style.border = "solid 1px rgb(245,195,122)";
}

// name focus
function name_active() {
  document.getElementsByClassName('joinName')[0].style.border = "solid 1px rgb(245,195,122)";
}

// class focus
function class_active() {
  document.getElementsByClassName('joinClass')[0].style.border = "solid 1px rgb(245,195,122)";
}

// input 포커싱 해제
function input_noneactive() {
  document.getElementsByClassName('joinId')[0].style.border = "solid 1px #dadada";
  document.getElementsByClassName('joinPw')[0].style.border = "solid 1px #dadada";
  document.getElementsByClassName('rejoinPw')[0].style.border = "solid 1px #dadada";
  document.getElementsByClassName('joinName')[0].style.border = "solid 1px #dadada";
  document.getElementsByClassName('joinClass')[0].style.border = "solid 1px #dadada";
}

// sign up error T/F
function inputTF() {
  var id = document.getElementsByClassName('id')[0];
  var pw = document.getElementsByClassName('pw')[0];
  var repw = document.getElementsByClassName('repw')[0];
  var name = document.getElementsByClassName('name')[0];
  var _class = document.getElementsByClassName('_class')[0];

  // id error
  if (id.value == "") {
    document.getElementsByClassName('joinId')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorId')[0].style.display = "block";
    return;
  }
  else if (id.value.length <= 4) {
    document.getElementsByClassName('joinId')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorId')[0].style.display = "block";
    document.getElementsByClassName('errorId')[0].innerHTML = "5~20자 영문 소문자, 숫자를 사용하세요.";
    return;
  }
  else {
    document.getElementsByClassName('joinId')[0].style.marginBottom = "20px";
    document.getElementsByClassName('errorId')[0].style.display = "none";
  }

  // pw error
  if (pw.value == "") {
    document.getElementsByClassName('joinPw')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorPw')[0].style.display = "block";
    return;
  }
  else if (pw.value.length <= 3) {
    document.getElementsByClassName('joinPw')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorPw')[0].style.display = "block";
    document.getElementsByClassName('errorPw')[0].innerHTML = "4~10자 영문 대 소문자, 숫자를 사용하세요.";
    return;
  }
  else {
    document.getElementsByClassName('joinPw')[0].style.marginBottom = "20px";
    document.getElementsByClassName('errorPw')[0].style.display = "none";
  }

  // repw error
  if (repw.value == "") {
    document.getElementsByClassName('rejoinPw')[0].style.marginBottom = "10px";
    document.getElementsByClassName('reerrorPw')[0].style.display = "block";
    return;
  }
  else if (pw.value != repw.value) {
    document.getElementsByClassName('joinPw')[0].style.marginBottom = "10px";
    document.getElementsByClassName('reerrorPw')[0].style.display = "block";
    document.getElementsByClassName('reerrorPw')[0].innerHTML = "비밀번호가 일치하지 않습니다.";
    return;
  }
  else {
    document.getElementsByClassName('rejoinPw')[0].style.marginBottom = "20px";
    document.getElementsByClassName('reerrorPw')[0].style.display = "none";
  }

  // name error
  if (name.value == "") {
    document.getElementsByClassName('joinName')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorName')[0].style.display = "block";
    return;
  }
  else {
    document.getElementsByClassName('joinName')[0].style.marginBottom = "20px";
    document.getElementsByClassName('errorName')[0].style.display = "none";
  }

  // class error
  if (name.value == "") {
    document.getElementsByClassName('joinClass')[0].style.marginBottom = "10px";
    document.getElementsByClassName('errorClass')[0].style.display = "block";
    return;
  }
  else {
    document.getElementsByClassName('joinClass')[0].style.marginBottom = "20px";
    document.getElementsByClassName('errorClass')[0].style.display = "none";
  }
}
