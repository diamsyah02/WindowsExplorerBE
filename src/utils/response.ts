export const WebResponse = (statusCode: number, message: string, data: any) => {
    return {
        statusCode: statusCode,
        message: message,
        data: data
    }
}