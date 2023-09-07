import { useState } from "react";
import "./navbar.css";


export default function Navbar({ onSearch, mode, changeMode }) {

    const [loading, setLoading] = useState(false);

    function handleSearch(e) {
        setLoading(true)
        setTimeout(() => {
            onSearch(e.target.value);
            setLoading(false)
        }, 1000)
    }
    return (
        <div className='navbar'>
            <h2>Newsy</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {loading && (<img src="loader.svg" />)}
                <input className='search-bar' placeholder='search...' onChange={handleSearch} />
                <button onClick={changeMode}>
                    <span class="material-symbols-outlined">
                        {mode}
                    </span>
                </button>
            </div>
        </div>
    )
}