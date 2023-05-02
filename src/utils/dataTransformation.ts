import { Data, Post } from "@/redux/postSlice";
import { getTimeAgo } from "./time";

export const transformApiResponseToAppData = (data: Data) => ({
  ...data,
  results: mapPostsWithTimeAgo(data.results),
});

const mapPostsWithTimeAgo = (posts: Post[]) =>
  posts.map((post) => ({
    ...post,
    timeAgo: getTimeAgo(new Date(post.created_datetime)),
  }));
