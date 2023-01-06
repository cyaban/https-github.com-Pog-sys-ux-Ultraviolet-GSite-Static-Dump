"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Click REGISTER TO PLAY SLAYERSARCADE.TK";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "CLICK TO REGISTER TO SLAYERSARCADE.TK.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});
