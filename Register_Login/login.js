const user = localStorage.getItem("user");
if (!!user) {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = form.get("email");
  const password = form.get("password");
  const users = localStorage.getItem("users");
  if (!!users) {
    const _users = JSON.parse(users);
    const me = _users.find(
      (u) =>
        u.password === password.trim() && u.email === email.trim().toLowerCase()
    );
    if (!!me) {
      localStorage.setItem("user", JSON.stringify(me));
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
      alert("Wrong credentials");
    }
  } else {
    localStorage.setItem("users", JSON.stringify([]));
  }
});
