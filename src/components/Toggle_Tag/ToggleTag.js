import "../../tabs/tabs.css";

function ToggleTag(props) {
    return (        
        <div className="toggleContents" key={props.id}>
            <label>
                <input type="checkbox"/><span className={props.classname}>{props.name}</span>
            </label>
        </div>        
    );
}

export default ToggleTag;