export default async function turn(request, ctx) {
  const body = request && request.body ? request.body : {};
  if (body && body.method === "health") {
    return { ok: true, mode: "dzmm-serverless", streamingFunction: "turnStream" };
  }
  return {
    ok: false,
    code: "turn_stream_required",
    message: "Runtime turns must use turnStream via dzmm.fn.invokeStream().",
  };
}
