import UploadFactory, { FileUploadType } from "@components/atom/UploadFactory";

const BlogPage = () => {
  const createFile = () => {};

  return (
    <>
      <div>
        <p>Blog Page</p>
      </div>
      <div>
        <p>파일 업로드 예제</p>
        <UploadFactory type={FileUploadType.single}></UploadFactory>
        <UploadFactory type={FileUploadType.multi}></UploadFactory>
      </div>
    </>
  );
};

export default BlogPage;
