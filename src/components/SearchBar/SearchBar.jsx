export default function SearchBar(props) {
    return (
        <div>
            <input type='search'
                   placeholder="Enter character ID" 
                   name="characterName"
                   value={props.inputText} 
                   onChange={props.inputHandler}
            />
            <button onClick={() => props.onSearch(props.inputText)}>Agregar</button>
        </div>
    );
}
