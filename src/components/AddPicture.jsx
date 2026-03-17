import { PhotoIcon2 } from "@/icons";

function AddPicture(props) {
  const { file, setFile } = props;

  const hdlFileChang = (e) => {
    console.dir(e.target.files[0]);
    // let imgSrc = URL.createObjectURL(e.target.files[0]);
    // console.log(imgSrc);
    setFile(e.target.files[0]);
  };

  const removePic = (e) => {
    e.stopPropagation();
    document.getElementById("input-file").value = "";
    setFile(null);
  };

  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div
        className="bg-slate-100 min-h-40  relative cursor-pointer hover:bg-slate-200"
        onClick={() => document.getElementById("input-file").click()}
      >
        <input
          type="file"
          className="hidden"
          id="input-file"
          onChange={hdlFileChang}
        />
        {file && (
          <>
            <img
              src={URL.createObjectURL(file)}
              className="h-full block mx-auto max-h-75 object-contain"
            />
            <button
              className="btn btn-sm btn-circle btn-dash btn-error absolute top-1 right-1 opacity-60"
              onClick={removePic}
            >
              x
            </button>
          </>
        )}

        {!file && (
          <PhotoIcon2 className="w-10 absolute top-10 right-1/2 translate-1/2 opacity-40" />
        )}
      </div>
    </div>
  );
}

export default AddPicture;
