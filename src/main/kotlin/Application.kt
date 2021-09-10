import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.response.*
import io.ktor.routing.*
import java.io.File

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.module() {
    routing {
        static ("/") {
            resources("dist")
        }
        static ("/static") {
            resources("files")
        }

        get ("/") {
            call.respondText(File("src/main/resources/dist/index.html").readText(), ContentType.Text.Html, HttpStatusCode.OK)
        }
    }
}