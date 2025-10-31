import mongoose, { Schema } from "mongoose";

// User Schema for authentication
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 30,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        avatar: {
            type: String,
            default: function() {
                return `https://ui-avatars.com/api/?name=${encodeURIComponent(this.name)}&background=667eea&color=fff`;
            }
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

// Indexes
userSchema.index({ email: 1, username: 1 });

export const User = mongoose.model("User", userSchema);
