import mongoose, { Schema } from "mongoose";

// Favorite Movie Schema
const favoriteSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        username: {
            type: String,
            required: true,
            index: true
        },
        movieId: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        poster: {
            type: String
        },
        rating: {
            type: Number,
            default: 0
        },
        year: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

// Compound index to prevent duplicate favorites
favoriteSchema.index({ userId: 1, movieId: 1 }, { unique: true });
favoriteSchema.index({ username: 1, movieId: 1 });

export const Favorite = mongoose.model("Favorite", favoriteSchema);
