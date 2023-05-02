import { AddPost, Data, EditPost } from "@/redux/postSlice";
import axios from "axios";

const SERVER_API_URL = process.env.API_URL || "";
const CLIENT_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const getInitialPosts = () => axios.get<Data>(SERVER_API_URL);

const addPost = (post: AddPost) => axios.post(CLIENT_API_URL, post);

const getPosts = ({ url = CLIENT_API_URL, parameters = "" } = {}) =>
  axios.get(`${url}${parameters}`);

const deletePost = (id: number) => axios.delete(`${CLIENT_API_URL}${id}/`);

const editPost = (post: EditPost) =>
  axios.patch(`${CLIENT_API_URL}${post.id}/`, post.post);

export const PostService = {
  addPost,
  deletePost,
  editPost,
  getPosts,
  getInitialPosts,
};
