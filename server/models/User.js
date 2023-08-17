import mongoose from "mongoose";
import bcrypt  from 'bcryptjs'
import jwt  from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
},
isAdmin: {
    type: Boolean,
    default: false
},
}, {
    timestamps: true
});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    this.confirmPassword = undefined
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({id:this._id, isAdmin: this.isAdmin},process.env.JWT_SECRET,{expiresIn:'1d'})
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}


export default mongoose.model('Users', UserSchema);;
