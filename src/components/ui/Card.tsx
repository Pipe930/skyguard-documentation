import type { ReactNode } from "react";
import "../../styles/card.css"

interface CardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

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