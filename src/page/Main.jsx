import CardTask from "../components/CardTask"
import FormTask from "../components/FormTask"
import Timer from "../components/Timer"

function Main() {
    return (
        <main>
            <section>
                <h2>Timer Da Avvio App</h2>
                <div>
                    <Timer />
                </div>
            </section>
            <section>
                <h2>Aggiungi Una Nuova Task</h2>
                <FormTask/>
            </section>
        </main>
    )
}

export default Main