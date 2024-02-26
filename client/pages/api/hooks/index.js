// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    try {
        // Catch the event type
        const clonedReq = req.clone();
        const eventType = req.headers.get("X-Event-Name");
        const body = await req.json();
    
        // Check signature
        const secret = "Q2HDAQ89BHDA728BDAIUBDA8727DB";
        const hmac = crypto.createHmac("sha256", secret);
        const digest = Buffer.from(
          hmac.update(await clonedReq.text()).digest("hex"),
          "utf8"
        );
        const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");
    
        if (!crypto.timingSafeEqual(digest, signature)) {
          throw new Error("Invalid signature.");
        }
        console.log(body);
        return Response.json({ message: "Webhook received" });
      } catch (err) {
        console.error(err);
        console.error(err);
        return Response.json({ message: "Server error" }, { status: 500 });
      }
 }