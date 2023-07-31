import ServerBootstrap from "./bootstrap/server.bootstrap"
import DatabaseBootstrap from './bootstrap/database.bootstrap'
import { Bootstrap } from "./bootstrap/base.bootstrap"
import Application from "./app"

const databaseBootstrap: Bootstrap = new DatabaseBootstrap()
const serverBootstrap: Bootstrap = new ServerBootstrap(Application)

;(async () => {
    try {
        await databaseBootstrap.initialize(),
        await serverBootstrap.initialize()
    } catch (error) {
        console.log(error)
    }
})()