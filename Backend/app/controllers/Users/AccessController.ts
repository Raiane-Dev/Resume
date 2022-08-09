import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import env from "../../config/env";
import buff from "../../utils/buffers";
import UserProperties from "../../types/UserProperties";
import UserModel from "../../models/users/UserModel";

class AccessController
{
    private model: any;

    constructor()
    {
        this.model = new UserModel();
    }

    public login( req: Request, res: Response )
    {
        const { email, password } = req.body;

        this.model.selectOne({
            email: email,
            password: password
        })
        .then( (user: any) => 
        {
            if(user)
            {
                const token = jwt.sign( {user: user.id}, env.SECRET);

                res
                .setHeader("x-access-token", token)
                .cookie("x-access-token", token)
                .json({ auth: true, token: token });
            }
            else res.json({ auth: false });
        })
        .catch( (err: any) => 
        {
            res.json({ auth: false });
        });

    }

    public async register( req: Request, res: Response )
    {
        const data: UserProperties = req.body;
        
        buff("user.proto", "userpackage.User", data)
        .then((data) => {
            this.model.insert( data.ret_buffer )
            .then( () => {
                res.json({ message: "Sucesso ao cadastrar!" }).status(200);
            })
            .catch( (err: any) => {
                res.json({ message: "Erro ao cadastrar!" }).status(422);
            })
        });
    }

    public logout( req: Request, res: Response )
    {
        res.json({ auth: false, token: null });
    }
}

export default AccessController;