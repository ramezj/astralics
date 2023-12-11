
    const sortFeedback = async (feedbacks, upvotedPosts) => {
    const result = await feedbacks.map(post => ({
        ...post,
        isUpvoted: upvotedPosts.some(upvotedPost => upvotedPost.id === post.id),
      }));
     return result;
}

export default sortFeedback;
    