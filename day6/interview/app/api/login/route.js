export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://staging-backend.thebobproject.co/api/v2/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ message: "Login failed" }, { status: 500 });
  }
}