import { useRef } from "react";
import { createPortal } from "react-dom";
import ErrorModal from "./ErrorModal";

export default function SignUp({ onCreateUser }) {
  const malePic =
    "https://static.vecteezy.com/system/resources/thumbnails/024/183/525/small/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
  const femalePic =
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg";

  const dialogRef = useRef();

  const userName = useRef();
  const password = useRef();
  const rePassword = useRef();

  function handleSaveUser() {
    let name = userName.current.value;
    let pass = password.current.value;
    let rePass = rePassword.current.value;

    if (name.trim() === "" || pass.trim() === "" || rePass.trim() === "") {
      dialogRef.current.open();
      return;
    }

    if (pass !== rePass) {
      alert("Passwords must be same!");
      return;
    }

    let gender = name.slice(-1) === "a" ? "female" : "male";

    onCreateUser({
      name: name,
      password: pass,
      gender: gender,
      picture: gender === "male" ? malePic : femalePic,
    });

    userName.current.value = "";
    password.current.value = "";
    rePassword.current.value = "";
  }
  return (
    <>
      {createPortal(
        <ErrorModal ref={dialogRef}>
          <h2>Error</h2>
        </ErrorModal>,
        document.querySelector("#modal-root")
      )}
      <div className="signUp">
        <h1>Sign up</h1>
        <label htmlFor="">Enter User name:</label>
        <input ref={userName} type="text" />
        <label htmlFor="">Enter password:</label>
        <input ref={password} type="password" />
        <label htmlFor="">Renter password: </label>
        <input ref={rePassword} type="password" />
        <button onClick={handleSaveUser}>Create User</button>
      </div>
    </>
  );
}
