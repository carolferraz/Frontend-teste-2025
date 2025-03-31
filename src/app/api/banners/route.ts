import { API_CONFIG } from '@/utils/api-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(`${API_CONFIG.CONTENT_SERVICE}/banners`, {
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:3024',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Falha na requisição' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro na API route:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
