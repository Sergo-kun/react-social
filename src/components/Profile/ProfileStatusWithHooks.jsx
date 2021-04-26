import React, {useState, useEffect, memo} from 'react';

const ProfileStatusWithHooks = memo((props) => {

let [editMode,editModeChange] = useState(false);
let [status,setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status)
    }, [props.status] );


const deActivateEditMode = () => {
    editModeChange(false)
    props.updateStatus(status);
}
const textingStatus = (e) => {
    setStatus(e.target.value)

}


    return (
            <>
                <div>
                    {!editMode &&
                    <div>
                        <span onDoubleClick={() => editModeChange(true)}>{status || "------"}</span>
                    </div>
                    }
                    {editMode &&
                       <div>
                            <input value={status} autoFocus={true} onChange={textingStatus} onBlur={deActivateEditMode}/>
                        </div>
                    }

                </div>
            </>
        );

})

export default ProfileStatusWithHooks;