import puppeteer from "puppeteer";
import sanitizeHtml from 'sanitize-html';


export async function POST(request: Request, responce: Response) {

    const htmlString: string = sanitizeHtml(await request.json())

    const imageBuffer: Buffer | undefined = await puppeteerFunction(htmlString)

    // Return the items as a JSON response with status 200
    return new Response(JSON.stringify(imageBuffer?.toString('base64')), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });


}

async function puppeteerFunction(html: string){
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    const content = await page.$("body");
    if(content){
        const imageBuffer = await content.screenshot({ omitBackground: true });

        await page.close();
        await browser.close();

        return imageBuffer;
    }

    return undefined
    
}