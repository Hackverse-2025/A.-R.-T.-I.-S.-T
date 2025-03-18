import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export async function GET(request: NextRequest, { params }: { params: { fileId: string } }) {
  try {
    const fileId = params.fileId

    // In a real app, you would validate the fileId and check permissions

    // Find the file in the uploads directory
    const uploadsDir = join(process.cwd(), "uploads")
    const filePath = join(uploadsDir, `${fileId}.pdf`)

    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 })
    }

    // Read the file
    const fileBuffer = await readFile(filePath)

    // Return the file
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${fileId}.pdf"`,
      },
    })
  } catch (error) {
    console.error("Error retrieving PDF:", error)
    return NextResponse.json({ error: "Error retrieving PDF" }, { status: 500 })
  }
}

