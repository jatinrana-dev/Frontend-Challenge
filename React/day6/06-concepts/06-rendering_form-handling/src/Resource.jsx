import React, { useState } from "react";

const Resource = () => {
  //BRUTEFORCE APPROACH
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [mail, setMail] = useState("");

  return (
    <div className="flex flex-col gap-6 w-60">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => {
          setMail(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="mail"
      />

      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="password"
      />

      <h1>The name is {name}</h1>

      <h1> The mail is {mail}</h1>
      <h1> The password is {pass}</h1>



      
    </div>
  );
};

export default Resource;
