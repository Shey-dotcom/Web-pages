const user = localStorage.getItem("user");

if (!!user) {
  const me = JSON.parse(user);
  document.getElementById("name").innerText = me.fullName;
  document.getElementById("bio").innerText = me.bio;
  document.getElementById("details").innerText = `${me.email} • ${me.gender}`;
} else {
  window.location.href = "http://127.0.0.1:5500/login.html";
}

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

document.getElementById("btn").addEventListener("click", logout);
