import "../tabs/tabs.css";

function ToggleTag(props) {
    return (        
        <div className="toggleContents" key={props.id}>
            <label>
                <input type="checkbox" name="lang" value="Tamil"/><span id="language">{props.name}</span>
            </label>
        </div>        
    );
}

export default ToggleTag;