import { initialItems } from "../lib/constants"

export default function ItemList() {
    return (
        <ul>
            {initialItems.map(item => <Item key={item.id} item={item} />)}
        </ul>
    )
}

function Item({ item }) {
    return (
        <li className="item">
            <label htmlFor="">
                <input type="checkbox" checked={item.packed} />
                {item.name}
            </label>

        </li>
    )
}
