import RegisterForm from "@/components/RegisterForm";
import useUserStore from "@/stores/userStore";
import { loginSchema } from "@/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Login() {
  // const user = useUserStore((state) => state.user);
  const login = useUserStore((state) => state.login);
  const { register, handleSubmit, formState, _reset } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const { errors, isSubmitting, isValid } = formState;

  const onSubmit = async (body) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = await login(body);
      // toast.success(resp.data.message);
    } catch (err) {
      console.dir(err);
      const errMsg = err.response?.data.message || err.message;
      toast.error(errMsg);
    }
  };

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
              {/* <p className="mx-2">Hello, {user?.firstName}</p> */}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={isSubmitting}>
                  <div className="card-body gap-3 p-4">
                    <div className="w-full">
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="E-mail or Phon number"
                        {...register("identity")}
                      />
                      <p className="text-sm text-error">
                        {errors.identity?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        {...register("password")}
                      />
                      <p className="text-sm text-error">
                        {errors.password?.message}
                      </p>
                    </div>
                    <button
                      className="btn btn-primary text-xl"
                      disabled={!isValid}
                    >
                      Login{" "}
                      {isSubmitting && (
                        <span className="loading loading-infinity loading-sm"></span>
                      )}
                    </button>
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
                </fieldset>
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
