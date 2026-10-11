import { createFileRoute, redirect } from "@tanstack/react-router";

// Eski erasflans.com/tr/... adreslerini yeni sayfalara yönlendirir.
export const Route = createFileRoute("/tr/$")({
  beforeLoad: ({ params }) => {
    const rest = (params._splat ?? "").replace(/^\/+/, "");
    throw redirect({ href: "/" + rest, statusCode: 301 });
  },
});
