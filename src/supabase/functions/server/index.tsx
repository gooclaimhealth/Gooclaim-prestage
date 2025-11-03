import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'jsr:@supabase/supabase-js@2.49.8'
import * as kv from './kv_store.tsx'

const app = new Hono()

// Configure CORS for all routes
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

// Add logging
app.use('*', logger(console.log))

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Demo request submission route
app.post('/make-server-03540c48/demo-request', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email || !company) {
      return c.json({ error: 'Name, email, and company are required fields' }, 400)
    }

    // Create demo request object
    const demoRequest = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      phone: phone || '',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'pending'
    }

    // Store in key-value database
    const key = `demo_request:${demoRequest.id}`
    await kv.set(key, demoRequest)

    // Also store by email for easy lookup
    const emailKey = `demo_request_by_email:${email}`
    await kv.set(emailKey, demoRequest.id)

    console.log(`Demo request submitted successfully: ${demoRequest.id}`)

    return c.json({ 
      success: true, 
      message: 'Demo request submitted successfully',
      requestId: demoRequest.id
    })

  } catch (error) {
    console.log(`Error processing demo request: ${error}`)
    return c.json({ error: 'Failed to process demo request' }, 500)
  }
})

// Get all demo requests (admin route)
app.get('/make-server-03540c48/demo-requests', async (c) => {
  try {
    const demoRequests = await kv.getByPrefix('demo_request:')
    return c.json({ 
      success: true, 
      requests: demoRequests.map(item => item.value)
    })
  } catch (error) {
    console.log(`Error fetching demo requests: ${error}`)
    return c.json({ error: 'Failed to fetch demo requests' }, 500)
  }
})

// Health check route
app.get('/make-server-03540c48/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

Deno.serve(app.fetch)