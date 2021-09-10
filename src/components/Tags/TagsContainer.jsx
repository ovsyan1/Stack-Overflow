import React from 'react';
import Tags from './Tags';
import {connect} from 'react-redux';
import {getAllTags, sortByActivity, sortByName} from '../../redux/tags_reducer';

class TagsContainer extends React.Component {
    componentDidMount() {
        this.props.getAllTags();
    }
    render() {
        return (
            <div>
                <Tags 
                    tags={this.props.tags}
                    sortByActivity={this.props.sortByActivity}
                    sortByName={this.props.sortByName}
                    getAllTags={this.props.getAllTags}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    tags: state.tagsPage.tags
})
export default connect(mapStateToProps, {getAllTags, sortByActivity, sortByName})(TagsContainer);