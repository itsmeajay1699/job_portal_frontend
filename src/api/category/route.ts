export async function GET() {
    const res = await fetch('http://localhost:4000/api/v1/category', {
    })
    const data = await res.json()
   
    return Response.json({ data })
  }