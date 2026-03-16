import RegisterForm from "@/components/RegisterForm";
import React from "react";

function Login() {
  return (
    <>
      <div className="h-175 pt-20 pb-28 bg-base-200">
        <div className="p-5  max-w-5xl mx-auto min-h-135 flex justify-between max-md:flex-col">
          <div className=" flex flex-col gap-4 mt-20 basis-3/5 max-md:text-center">
            <div className="text-5xl text-primary font-bold">
              Fakebook
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
            </div>
            <h2 className="text-[30px] leading-8 mt-3 w-128.5 max-md:w-auto">
              Fakebook helps you connect and share with the people in your life.
            </h2>
            <div className="badge badge-dash badge-error max-md:mx-auto">
              This site is not real facebook
            </div>
          </div>
          <div className=" flex-1 flex ">
            <div className="card bg-base-100 w-full h-87.5 shadow-xl mt-8">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="card-body gap-3 p-4">
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="E-mail or Phon number"
                  />
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <button className="btn btn-primary text-xl">Login</button>
                  <p className="text-center cursor-pointer opacity-70">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      document.getElementById("register-form").showModal()
                    }
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <RegisterForm />
        </div>
      </dialog>
    </>
  );
}

export default Login;
