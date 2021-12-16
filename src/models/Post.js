import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    postId: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    likedBy: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
