import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validations/schema";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Zoom, Flip, toast, ToastContainer } from "react-toastify";

function RegisterForm() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post(
        "http://localhost:8066/api/auth/register",
        data
      );
      toast.success(resp.data.message, {
        transition: Zoom,
        autoClose: 4000,
      });

      document.getElementById("register-form").close();
      reset();
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data.message || err.message;
      // alert(JSON.stringify(err, null, 2));
      toast.error(errMsg, {
        transition: Flip,
        autoClose: 2000,
        containerId: "register-modal",
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer containerId="register-modal" />
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-4 pt-3"
      >
        <div className="flex gap-2">
          <div className="w-full">
            <input
              type="text"
              className="input w-full"
              placeholder="First name"
              {...register("firstName")}
            />
            <p className="text-sm text-error">{errors.firstName?.message}</p>
          </div>

          <div className="w-full">
            <input
              type="text"
              className="input w-full"
              placeholder="Last name"
              {...register("lastName")}
            />
            <p className="text-sm text-error">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="input w-full"
            placeholder="Email or Phone number"
            {...register("identity")}
          />
          <p className="text-sm text-error">{errors.identity?.message}</p>
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input w-full"
            placeholder="New password"
            {...register("password")}
          />
          <p className="text-sm text-error">{errors.password?.message}</p>
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input w-full"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <p className="text-sm text-error">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <button className="btn btn-secondary text-xl">Sign up</button>
        <button
          type="button"
          className="btn btn-base-200 text-xl"
          onClick={() => reset()}
        >
          Clear
        </button>
      </form>
      {/* <div className="border">
        <pre className="text-error text-xs">
          {JSON.stringify(errors, (k, v) => (k === "ref" ? undefined : v), 2)}
        </pre>
      </div> */}
    </>
  );
}

export default RegisterForm;
