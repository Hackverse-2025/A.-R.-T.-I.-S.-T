import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paper_content, question, selected_text } = await request.json()

    if (!paper_content || !question) {
      return NextResponse.json({ error: "Missing paper content or question" }, { status: 400 })
    }

    // In a real app, you would call your Python backend here
    // For now, we'll simulate the response

    // Simulate generating a chat response
    const response = `Based on the paper content, I can provide the following answer to your question:

The research indicates that the methodology used was carefully designed to address potential biases. The authors implemented several controls to ensure the validity of their findings.

The results suggest a strong correlation between the variables studied, with statistical significance at p < 0.05.

I hope this answers your question. Feel free to ask for more specific details.`

    return NextResponse.json({
      response: response,
    })
  } catch (error) {
    console.error("Error in chat response:", error)
    return NextResponse.json({ error: "Error processing chat request" }, { status: 500 })
  }
}

