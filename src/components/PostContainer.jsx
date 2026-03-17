import CreatePost from "./CreatePost";

function PostContainer() {
  return (
    <div className="w-170 mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-info">
      <CreatePost />
    </div>
  );
}

export default PostContainer;
