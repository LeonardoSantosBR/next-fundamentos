import { NextResponse } from "next/server";

export async function NextApiTeste() {
  const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
  ];

  return new NextResponse(JSON.stringify(users), {
    status: 200,
    statusText: "OK",
  });
}
