import "../tabs/tabs.css";

function ToggleTag(props) {
    return (        
        <div className="toggleContents" key={props.id}>
            <label>
                <input type="checkbox" name="lang" value="Tamil"/><span id="language">{props.lang}</span>
            </label>
        </div>        
    );
}

export default ToggleTag;