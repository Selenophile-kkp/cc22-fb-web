import useUserStore from "@/stores/userStore";
import Avatar from "./Avatar";
import { PhotoIcon2 } from "@/icons";
import { useState } from "react";
import AddPicture from "./AddPicture";
import axios from "axios";

function PostForm() {
  const user = useUserStore((state) => state.user);
  const [addPic, setAddPic] = useState(false);
  const [file, setFile] = useState(null);

  const hdlCreatePost = async () => {
    let imageUrl = "";
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "cc22-fakebook");
        const resp = await axios.post(
          "https://api.cloudinary.com/v1_1/kanokwan/image/upload",
          formData
        );
        imageUrl = resp.data.secure_url;
        console.log(imageUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-center">Create post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-11 h-11 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm">
            {user.firstName} {user.lastName}
          </div>
          <select className="select bg-slate-200 select-xs w-full max-w-xs">
            <option disabled>who can see?</option>
            <option>public</option>
            <option>friends</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost w-full"
        placeholder={`what do you think? ${user.firstName}`}
      ></textarea>
      {addPic && <AddPicture file={file} setFile={setFile} />}
      <div className="flex border rounded-lg p-2 justify-between items-center">
        <p>add with your post</p>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100
         hover:bg-slate-200 active:scale-110"
          onClick={() => setAddPic((prv) => !prv)}
        >
          <PhotoIcon2 className="w-7" />
        </div>
      </div>
      <button className="btn btn-sm btn-primary" onClick={hdlCreatePost}>
        Create Post
      </button>
    </div>
  );
}

export default PostForm;
