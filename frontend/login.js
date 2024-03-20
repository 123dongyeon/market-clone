const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formdata = new FormData(form);
  const sha256Password = sha256(formdata.get("password"));
  formdata.set("password", formdata.get("password"));

  const res = await fetch("/login", { method: "post", body: formdata });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  // indow.sessionStorage.setItem("token", accessToken);
  alert("로그인이 되었습니다.");

  //   const infoDiv = document.querySelector("#info");
  //   infoDiv.innerText = "로그인이 되었습니다.";

  // window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerText = "상품 가져오기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //   });

  //   if (res.status === 200) {
  //     alert("로그인에 성공했습니다.");
  //     window.location.pathname = "/";
  //   } else if (res.status === 401) {
  //     alert("id 혹은 password가 틀렸습니다.");
  //   }
};
form.addEventListener("Submit", handleSubmit);
