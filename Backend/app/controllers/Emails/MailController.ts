import { Request, Response } from "express";
import buff from "../../utils/buffers";
import MailProperties from "../../types/MailProperties";
import MailModel from "../../models/emails/MailModel";
import UserController from "../Users/UserController";
import sendmail from "../../utils/sendmail";

class MailController
{

    private model: any;

    constructor()
    {
        this.model = new MailModel();
    }

    public async hasMany( req: Request, res: Response )
    {
        const allMails = await this.model.selectMany();

        return allMails;
    }


    public hasOne( condition: any )
    {
        const mail = this.model.selectOne( condition );

        return mail;
    }

    public async store( req: Request, res: Response )
    {
        const data: MailProperties = req.body;

        buff("message.proto", "messagepackage.Message", data)
        .then((data) => {

            this.model.insert( data.ret_buffer )
            .then( (info: any) => {

                new UserController().hasOne({ id: info.authorId })
                    .then( (user: any) => {
                        sendmail(user.email, info.title, info.content);
                    });

            })
            .catch( (err: any) => {
                console.log(err);
            });
        });
    
        res.json({ message: "Email enviado" });
    }
}

export default MailController;