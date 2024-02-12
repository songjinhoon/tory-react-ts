import { useThemeState } from '@context/theme';
import { Container, Content, Header } from '@components/template/styles';
import CommonHeader from '@components/organism/common/commonHeader';

const BlogTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <CommonHeader></CommonHeader>
      </Header>
      <Content>
        <div>여기가 뭐가 들어오겠지?</div>
      </Content>
    </Container>
  );

  /*  return (
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
    );*/
};

export default BlogTemplate;
