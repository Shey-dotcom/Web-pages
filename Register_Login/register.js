const user = localStorage.getItem("user");

if (!!user) {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");
  const email = form.get("email").trim().toLowerCase();
  const password = form.get("password").trim();
  const bio = form.get("bio");
  const gender = form.get("gender");
  const data = {
    firstName,
    lastName,
    email,
    password,
    bio,
    gender,
    get fullName() {
      return this.firstName.concat(" ").concat(lastName);
    },
  };
  const user = JSON.stringify(data);
  const users = localStorage.getItem("users");
  if (!!users) {
    const _users = JSON.parse(users);
    const me = _users.find((u) => u.email === email.trim().toLowerCase());
    if (!!me) {
      alert("Email address already taken.");
    } else {
      localStorage.setItem("users", JSON.stringify([..._users, data]));
      localStorage.setItem("user", user);
      window.location.href = "http://127.0.0.1:5500/index.html";
    }
  } else {
    localStorage.setItem("user", user);
    localStorage.setItem("users", JSON.stringify([data]));
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
});
