import QuestionnaireForm from './questionnaire-form';
import  { connect } from 'react-redux';
function mapStateToProps(state) {
    return { state:state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireForm)