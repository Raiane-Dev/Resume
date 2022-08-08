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
        let ret: any = {};
        
        buff("message.proto", "messagepackage.Message", data)
        .then((data) => {

            this.model.insert( data.ret_buffer )
            .then( (info: any) => {

                new UserController().hasOne({ id: info.authorId })
                .then( (user: any) => {
                    ret.message = { find_user: "Usuário encontrado." }
                    ret.status = 200;
                    sendmail(user.email, info.title, info.content);
                })
                .catch( (err: any) => {
                    console.log(err);
                    ret.message = { send_mail: "Erro ao enviar email!" };
                    ret.status = 422;
                });

                res.json({ message: "Sucesso ao enviar!" }).status(200);
            })
            .catch( (err: any) => {
                res.json({ message: "Erro ao enviar!" }).status(422);
            })
        });
    
        res
        .json({ message: ret.message })
        .status(ret.status_code);
    
    }
}

export default MailController;