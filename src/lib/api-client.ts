const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3024'

export async function fetchApi<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = {
    Origin: ORIGIN,
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`API error: ${response.status} - ${error.message || 'Unknown error'}`)
  }

  return response.json()
}

export const apiClient = {
  get: <T>(url: string, options: RequestInit = {}): Promise<T> =>
    fetchApi<T>(url, { method: 'GET', ...options }),
}
