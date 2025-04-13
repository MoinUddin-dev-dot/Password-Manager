import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
  
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
      console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
    } else {
      toast("🦄 Please fill all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("🦄 Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const editPassword = (id) => {
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    toast("🦄 Please Edit", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this item ? ");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast("🦄 Deleted from clipboard", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="  py-20  mycontainer">
        <h1 className="text-4xl text-center font-bold">
          <span className="text-green-500"> &lt; &nbsp;</span>
          Pass
          <span className="text-green-500">OP&nbsp; / &gt;</span>
        </h1>
        <p className="text-lg text-green-900 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          magni.
        </p>

        <div className="text-black flex flex-col p-4 gap-5  items-center">
          <input
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website name"
            className="rounded-full border border-green-600 w-full p-4 py-1"
            type="text"
          />
          <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="rounded-full border border-green-600 w-full p-4 py-1"
              type="text"
            />

            <div className="relative">
              <input
                ref={passwordRef}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="rounded-full border border-green-600 w-full p-4 py-1"
                type="password"
              />
              <span
                onClick={showPassword}
                className=" cursor-pointer absolute top-[4px] right-[5px]"
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="/icons/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex gap-3 justify-center items-center bg-green-400 hover:bg-green-300 rounded-full w-fit px-8 py-2 border border-green-900"
          >
            <img src="/deal.gif" alt="" width="30px" className="rounded-full" />
            Add Password
          </button>
        </div>
        <div className="passwords p-4">
          <h2 className="font-bold text-xl py-2">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-lg overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border-2 border-white text-center">
                        <div className="copy flex justify-center items-center gap-2">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer pt-3"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <img className="w-5 " src="/copy.png" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border-2 border-white text-center ">
                        <div className="copy flex justify-center items-center gap-2">
                          {item.username}
                          <div
                            className="cursor-pointer pt-3"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <img className="w-5 " src="/copy.png" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border-2 border-white text-center ">
                        <div className="copy flex justify-center items-center gap-2">
                          {item.password}
                          <div
                            className="cursor-pointer pt-3"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <img className="w-5 " src="/copy.png" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border-2 border-white text-center ">
                        <div className="flex gap-3 justify-center">
                          <div
                            className="cursor-pointer "
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <img src="./edit.gif" alt="edit" width={25} />
                          </div>
                          <div
                            className="cursor-pointer "
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <img src="./delete.gif" alt="delete" width={25} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
