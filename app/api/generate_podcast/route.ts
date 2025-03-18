import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paper_content } = await request.json()

    if (!paper_content) {
      return NextResponse.json({ error: "Missing paper content" }, { status: 400 })
    }

    // In a real app, you would call your Python backend here
    // For now, we'll simulate the response

    // Simulate generating a podcast script
    const podcastScript = `Welcome to our academic podcast! Today we're discussing a fascinating research paper.

The paper explores several key findings:

First, the researchers discovered a significant correlation between the variables they studied. This has important implications for the field.

Second, the methodology used in this study represents an innovative approach that could be applied to other research questions.

Finally, the conclusions drawn by the authors suggest several directions for future research that could expand our understanding of this topic.

Thank you for listening to this brief overview. For more in-depth analysis, please refer to the full paper.`

    return NextResponse.json({
      podcast_script: podcastScript,
    })
  } catch (error) {
    console.error("Error generating podcast:", error)
    return NextResponse.json({ error: "Error generating podcast" }, { status: 500 })
  }
}

