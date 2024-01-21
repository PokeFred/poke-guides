import Database from "better-sqlite3"
import { reCreateCacheFolder } from "./utils"
import { setupArticles } from "./articles"

reCreateCacheFolder()

const db: Database.Database = new Database(":memory:")
setupArticles(db)

export default db
