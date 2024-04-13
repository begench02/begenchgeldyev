import { api } from 'src/api';
import { blogsStore } from 'src/store/blogs.store';
import { observer } from 'mobx-react';
import { shortenWord } from 'src/utils/shortenWord.util';
import { useEffect } from 'react';
import styles from './blogs.module.sass';

export const Blogs = observer(() => {
  useEffect(() => {
    const blogs = api.get('blogs');
    blogs.then((res) => blogsStore.setBlogs(res.data));
  }, []);

  return (
    <div className={styles.main}>
      <h1>My reflections on life</h1>
      {blogsStore.blogs.map((blog) => (
        <div className={styles.blog} key={blog.id}>
          <h2 className={styles.blog_header}>{blog.header}</h2>
          <div>{shortenWord(blog.body)}</div>
        </div>
      ))}
    </div>
  );
});
