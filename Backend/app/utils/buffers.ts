import { resolve } from "path";
import { load } from "protobufjs";

async function buff ( file: string, package_from: string, data: any = {} ): Promise<any>
{
    const snuff: any = {};

    const root = await load( resolve("app/serialize", file));
    const summons = root.lookupType(package_from);

    const message = summons.create( data );

    snuff.res_buffer = summons.encode(message).finish();
    snuff.ret_buffer = summons.decode(snuff.res_buffer);

    return Promise.resolve(snuff);
}


export default buff;