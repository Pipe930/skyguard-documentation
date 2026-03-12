import "../../styles/card.css"
import type { CardProps } from "../../interfaces/card.interface";

function Card ({ title, description, icon }: CardProps) {
    return (
        <article className="card">
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default Card;