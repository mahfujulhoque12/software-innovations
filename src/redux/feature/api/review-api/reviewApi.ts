
import { ReviewType } from "@/app/api/review/route";
import { apiSlice } from "../apiSlice";



const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviewApi: builder.query<ReviewType[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/review`,
      }),
    }),
  }),
});

export const { useGetReviewApiQuery } = reviewApi;
