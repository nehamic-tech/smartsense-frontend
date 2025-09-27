// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);

//   const runtime = useRuntimeConfig();

//   if (!runtime.apiUrl) {
//     return sendError(event, createError({ statusCode: 500, statusMessage: "Tenant API not configured on server" }));
//   }

//   try {
//     const payload = {
//       email: body.email,
//       password: body.password,
//       firstName: body.name,
//       lastName: body.last_name,
//       orgName: body.tenant,
//       orgSlug: body.slug,
//     };
//     const response = await $fetch.raw(`${runtime.apiUrl}/iam-api/tenants/`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });

//     // Handle success (201 Created with no body)
//     if (response.status === 201) {
//       return { success: true };
//     }

//     // Handle all other cases where external API returned a response
//     const errorData = await response._data as { title?: string; detail?: any };
//     throw createError({
//       statusCode: response.status,
//       statusMessage: errorData.title || "Registration failed",
//       data: errorData.detail || null,
//     });
//   }
//   catch (error: any) {
//     // If $fetch threw because of network or unhandled status
//     if (error?.response?._data) {
//       const err = error.response._data;
//       throw createError({
//         statusCode: error.response.status,
//         statusMessage: err.title || "Registration failed",
//         data: err.detail || null,
//       });
//     }

//     // Generic fallback
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Unexpected error while registering",
//     });
//   }
// });
