import React from 'react';

class ProfileStatus extends React.Component {


   state={
       editMode: false,
       status: this.props.status
   }
   activateEditMode = () => {
       this.setState({
           editMode: true
       })
   }
   deActivateEditMode = () => {
       this.setState({
           editMode: false
       })
       this.props.updateStatus(this.state.status)

   }
   textingStatus = (e) =>{
       this.setState({
           status: e.currentTarget.value
       })
   }
   componentDidUpdate(prevProps, prevState, snapshot) {

       if (prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })

       }
   }


    render() {
        return (
            <>
                <div>
                    {!this.state.editMode ?
                        <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || "------"}</span>
                    </div> :
                        <div>
                        <input onChange={this.textingStatus} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>}


                </div>
            </>
        );
    }
}

export default ProfileStatus;