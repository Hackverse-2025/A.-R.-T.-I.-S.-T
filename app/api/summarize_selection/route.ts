import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { selected_text } = await request.json()

    if (!selected_text) {
      return NextResponse.json({ error: "No text selected" }, { status: 400 })
    }

    // In a real app, you would call your Python backend here
    // For now, we'll simulate the response

    // Simulate generating a summary
    const summary = `This is a summary of the selected text. 

The text discusses key findings related to the research topic. It presents evidence supporting the main hypothesis and outlines methodological approaches used in the study.

Several important conclusions can be drawn from this section, including implications for future research and practical applications in the field.`

    return NextResponse.json({
      summary: summary,
    })
  } catch (error) {
    console.error("Error summarizing selection:", error)
    return NextResponse.json({ error: "Error summarizing selection" }, { status: 500 })
  }
}

