import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

export const GET = async () => {
    const data = readFileSync(join("tmp", "join-code.txt"), "utf8")
    return Response.json({ joinCode: data })
}

interface JoinCode {
    joinCode: string
}

export const POST = async (request: Request) => {
    const { joinCode } = await request.json() as JoinCode
    writeFileSync(join("tmp", "join-code.txt"), joinCode, "utf8")
    return Response.json({ message: "ok" })
}