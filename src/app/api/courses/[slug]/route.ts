import { NextResponse } from 'next/server'
import { courseService } from '@/services/course-service'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await Promise.resolve(params)

    const course = await courseService.getCourse(slug)
    return NextResponse.json(course)
  } catch (error) {
    const { slug } = await Promise.resolve(params)

    console.error(`Error fetching course with slug ${slug}:`, error)
    return new NextResponse(JSON.stringify({ message: 'Curso não encontrado' }), {
      status: 404,
      headers: { 'content-type': 'application/json' },
    })
  }
}
