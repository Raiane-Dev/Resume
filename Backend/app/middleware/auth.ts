import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

import env from "../config/env";

async function seeToken( req: any, res: Response, next: NextFunction )
{
    const token: any = req.headers["x-access-token"];

    if(token)
    {
        jwt.verify(token, env.SECRET, (err: any, decoded: any) => {
            if(err)
                res.status(500).json({ auth: false, message: "Failed to authenticate token"});
        
            req.userId = decoded.id;
            next();
        });    
    }
    else {
        res.status(401).json({ auth: false, message: "No token provided." });
    }

    res.end();
}

export default seeToken;