const types = {
  mutation: {
    SET_IDEAS: 'setIdeas',
    SET_ERROR: 'setError',
    CLEAR_ERROR: 'clearError',
  },
  action: {
    FETCH_IDEAS: 'fetchIdeas',
    FETCH_IDEA_BY_ID: 'fetchIdeaById',
    POST_IDEA: 'postIdeas',
    POST_COMMENT: 'postComment',
    VOTE_IDEA_BY_ID: 'voteIdeaById',
    DELETE_IDEA_BY_ID: 'deleteIdeaById',
    EDIT_IDEA_BY_ID: 'editIdeaById',
  },
};

export default types;
