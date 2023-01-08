import "../../tabs/tabs.css";

//Toggle tag for filters
export default function ToggleTag(props) {
    return (        
        <div className="toggleContents" key={props.id}>
            <label>
                <input type="checkbox"/><span className={props.classname}>{props.name}</span>
            </label>
            {/* The toggle tag is basically a checkbox, the idea behind is, not only the checkbox but also the label can also
            be checked and unchecked. */}
        </div>        
    );
}