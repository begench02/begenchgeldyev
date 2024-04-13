import { makeAutoObservable } from 'mobx';
import { Blog } from './blogs.type';

class Blogs {
  blogs: Blog[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBlogs(blogs: Blog[]) {
    this.blogs = blogs;
  }
}

export const blogsStore = new Blogs();
