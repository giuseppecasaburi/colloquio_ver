import { useState } from "react";
import CardTask from "./CardTask";

function FormTask() {
    // Stato form
    const [formData, setFormData] = useState({
        nome: "",
        descrizione: ""
    });

    // Stato lista task
    const [tasks, setTasks] = useState([]);

    // Funzione che gestisce il cambiamento degli input
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Funzione invio Form
    const handleChangeForm = (e) => {
        e.preventDefault();
        setTasks(prev => [...prev, formData])
        setFormData({ nome: "", descrizione: "" })
    }

    return (
        <>
            <form onSubmit={handleChangeForm}>
                <label htmlFor="nome">Nome Task</label>
                <input type="text" name="nome" id="" value={formData.nome} onChange={handleChangeInput} />
                <label htmlFor="descrizione">Descrizione Task</label>
                <input type="text" name="descrizione" id="" value={formData.descrizione} onChange={handleChangeInput} />
                <button type="submit">Aggiungi Task</button>
            </form>
            <section>
                <h2>Task Da Svolgere</h2>
                <CardTask tasks={tasks} />
            </section>
        </>
    )
}

export default FormTask