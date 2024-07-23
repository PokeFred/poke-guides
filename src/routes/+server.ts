import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async (): Promise<Response> => {
    const responseData: any = {
        success: true,
        message: "Hello World"
    }

    const responseConfig: ResponseInit = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }

    return new Response(JSON.stringify(responseData), responseConfig)
}
