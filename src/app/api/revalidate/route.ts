import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");
  return Response.json({ revalidated: true });
}
