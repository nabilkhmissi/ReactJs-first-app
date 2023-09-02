import { people } from "../data";
import "./scientists.css";

export default function Scientists() {

    function getImageUrl(person) {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            's.jpg'
        );
    }
    const people_list = people.map(p => {
        return (
            <li key={p.id} className=" p-item ">
                <img src={getImageUrl(p)} style={{ width: "60px", height: "60px", borderRadius: "50px" }} />
                <div className="p-details">
                    <h3>{p.name}</h3>
                    <p> {p.profession}  </p>
                </div>
            </li>
        )
    })

    return (
        <ul className="p-list">
            {people_list}
        </ul>
    )
}