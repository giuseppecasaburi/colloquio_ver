function CardTask({ tasks }) {
    return (
        <>
            {tasks.map((task, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h3>{task.nome}</h3>
                        <p>{task.descrizione}</p>
                    </div>
                    <div className="card-footer">
                        <button>Elimina task</button>
                        <button>Task Completato</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardTask