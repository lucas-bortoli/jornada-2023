import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatedPlan } from "./CreatedPlan";
import { User } from "./User";

export const baseUrl = location.origin;

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),
  tagTypes: ["currentUser"],
  endpoints: (builder) => ({
    passwordResetStart: builder.mutation<{}, { email: string }>({
      query: (requestBody) => ({ method: "POST", url: "/rescue/start", body: requestBody })
    }),
    passwordResetCheck: builder.mutation<{ validCode: boolean }, { code: string }>({
      query: (requestBody) => ({ method: "POST", url: "/rescue/test", body: requestBody })
    }),
    passwordResetConfirm: builder.mutation<
      { success: boolean },
      { code: string; newPassword: string }
    >({
      query: (requestBody) => ({ method: "POST", url: "/rescue/confirm", body: requestBody })
    }),
    createUser: builder.mutation<
      User,
      {
        name: string;
        email: string;
        cpf: string;
        phone: string;
        password: string;
      }
    >({
      query: (requestBody) => ({ method: "POST", url: "/users/register", body: requestBody })
    }),
    login: builder.mutation<
      { token: string; expires_at: string },
      { username: string; password: string }
    >({
      query: (requestBody) => ({ method: "POST", url: "/users/login", body: requestBody }),
      invalidatesTags: ["currentUser"]
    }),
    getCurrentUser: builder.query<User, { token: string }>({
      query: (parameters) => ({
        url: "/users/@me",
        headers: {
          Authorization: parameters.token
        }
      }),
      providesTags: ["currentUser"]
    }),
    createLessonPlan: builder.mutation<
      CreatedPlan,
      {
        token: string;
        syllabus: string;
        content: string;
        classesQuantity: number;
        detailAmount: number;
        creativityAmout: number;
        maxLenght: number;
      }
    >({
      query: (requestBody) => ({ method: "POST", url: "/plan/create", body: requestBody }),
      transformResponse: (response: string) => JSON.parse(response)
    })
  })
});

export const {
  useCreateLessonPlanMutation,
  useCreateUserMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  usePasswordResetCheckMutation,
  usePasswordResetConfirmMutation,
  usePasswordResetStartMutation
} = appApi;
