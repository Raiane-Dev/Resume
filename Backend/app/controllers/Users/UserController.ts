import { Request, Response } from "express";
import buff from "../../utils/buffers";
import UserProperties from "../../types/UserProperties";
import UserModel from "../../models/users/UserModel";

class UserController
{

    private model: any;

    constructor()
    {
        this.model = new UserModel();
    }

    public async hasMany( req: Request, res: Response )
    {
        const allUsers = await this.model.selectMany();

        return allUsers;
    }


    public hasOne( condition: any )
    {
        const user = this.model.selectOne( condition );

        return user;
    }

    public async store( req: Request, res: Response )
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
}

export default UserController;