import React from 'react';



class TagsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    // this.forceUpdate();
  }

  componentDidMount() {
    this.props.fetchTags();
  }


  render(){
    const { tags } = this.props;
    const { reveal } = this.props;
    const { revealModal } = this.props;
    const { updateTagFormModal } = this.props;
    const { updateTagSelected } = this.props;
    const { deleteWarning } = this.props;
    const { tagTab } = this.props;

    return (
      <div >
        <div className={`modalbg ${revealModal}`} id='tags'
          onClick={() => tagTab() }>
          <div className={`tags ${reveal}` }>

            <header>
              <h3>TAGS</h3>
              <button >
                <img src={window.staticImages.notebookPlus}/>
              </button>
            </header>

            <ul className= 'tags-ul'>

              </ul>
            </div>
          </div>
        </div>
    );
  }
}



export default TagsIndex;
