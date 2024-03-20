const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formdata = new FormData(form);
  const password1 = formdata.get("password");
  const password2 = formdata.get("password2");

  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const sha256Password = sha256(formdata.get("password"));
  formdata.set("password", formdata.get("password"));

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", { method: "post", body: formdata });
    const data = await res.json();

    if (data === "200") {
      div.innerText = "회원가입에 성공했습니다.";
      div.style.color = "blue";
      window.location.pathname = "/login.html";
    }
  } else {
    div.innerText = "비밀번호가 일치하지 않습니다.";
    div.style.color = "red";
  }
};

form.addEventListener("Submit", handleSubmit);
