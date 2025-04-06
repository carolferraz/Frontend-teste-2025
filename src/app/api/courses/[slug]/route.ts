// Para App Router (Next.js 13+)
import { NextResponse } from 'next/server'
import { courseService } from '@/services/course-service'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const course = await courseService.getCourse(params.slug)
    return NextResponse.json(course)
  } catch (error) {
    console.error(`Error fetching course with slug ${params.slug}:`, error)
    return new NextResponse(JSON.stringify({ message: 'Curso não encontrado' }), {
      status: 404,
      headers: { 'content-type': 'application/json' },
    })
  }
}
