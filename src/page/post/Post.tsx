import useUser from '@hook/useUser';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@component/layout/Header';
import { PageContent } from '@page/styles';

const Post = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  console.log('Post Page');

  return (
    <div>
      <Header></Header>
      <PageContent></PageContent>
    </div>
  );
};

export default Post;
