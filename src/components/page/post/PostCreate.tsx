import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../organism/layout/Header';
import { PageContent } from '../styles';
import { Button, TitleInput } from './styles';
import React, { useCallback, useEffect, useState } from 'react';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isError, setIsError] = useState(true);
  const module = {
    // toolbar: [
    //   [{ header: '1' }, { header: '2' }],
    //   ['bold', 'italic', 'underline', 'strike'],
    //   [{ list: 'ordered' }, { list: 'bullet' }],
    //   ['blockquote', 'code-block', 'link', 'image'],
    // ],
  };

  const _onChange = (content: any, delta: any, source: any, editor: any) => {
    setContent(content);
  };

  const _onClick = useCallback(() => {

  }, []);

  useEffect(() => {
    if (title && !['<p><br></p>', ''].includes(content)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [title, content]);

  return (
    <div>
      <Header></Header>
      <PageContent>
        <TitleInput
          placeholder={'제목을 입력하세요.'}
          onChange={(e) => setTitle(e.target.value)}
        ></TitleInput>
        <ReactQuill
          // 더 많은 옵션
          // https://quilljs.com/docs/modules/toolbar/ 참고
          style={{ height: '600px' }}
          theme={'snow'}
          placeholder={'내용을 입력해주세요'}
          modules={module}
          onChange={(content, delta, source, editor) =>
            _onChange(content, delta, source, editor)
          }
        ></ReactQuill>
        <Button type={'button'} disabled={isError} onClick={_onClick}>
          게시글 등록하기
        </Button>
      </PageContent>
    </div>
  );
};

export default PostCreate;
