
import { apiSlice } from "../apiSlice";
import { BlogItem } from "@/app/api/blogs/route";


const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogApi: builder.query<BlogItem[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
      }),
    }),
  }),
});

export const { useGetBlogApiQuery } = blogApi;
