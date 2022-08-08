import death from "death";
import logger from "./logger";
import env from "./env";

class deathNote
{
    public server: any;
    private on: any;

    constructor( server: any )
    {
        this.on = death({
            uncaughtException: true,
            debug: env.NODE_ENV
        })
        this.server = server;
    }

    public deathEvents()
    {
        this.on( async (sig: any, err: any) => {
            if(sig as string === "uncaughtException")
            {
                await logger.error(`Stopping with signal [${sig}] ERROR`, err);
                await this.server.close();
                process.exit(1);
            }

            await logger.info(`Stopping with signal ${sig}`);
            await this.server.close();
            process.exit();
        });
    }
}
export default deathNote;