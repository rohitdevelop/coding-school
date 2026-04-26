export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const query = searchParams.toString();

    const response = await fetch(
      `https://staging-backend.thebobproject.co/api/public/v2/event/list?${query}`
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { message: "Error fetching events" },
      { status: 500 }
    );
  }
}