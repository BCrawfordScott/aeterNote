import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateSelectedTag,
  updateTagDeleteWarning
} from '../../actions/ui_actions';


class TagIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const tagId = this.props.id;
    const noteCount = this.props.noteIds.length;
    return(
      <div className= 'tag-item-container'>
        <li className='tag-item'
            onClick={() => {
              this.props.selectTag(tagId);
              this.props.history.push('/tag');
            } }>

          <h5>
            {this.props.title}
            <div className='tag-item-buttons'>
              <button className='button-tag'
                onClick={() => this.props.deleteWarning()}>
                <img src={window.staticImages.whiteTrashCan} />
              </button>
            </div>
          </h5>

          <p>{`${noteCount} notes`}</p>
        </li>
        <div className='bottom-border'></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedTag: tagId => dispatch(updateSelectedTag(tagId)),
    deleteWarning: () => dispatch(updateTagDeleteWarning())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(TagIndexItem));
